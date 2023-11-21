import { ReactNode, createContext, useCallback, useState } from 'react'

import { Provider as RadixToastProvider } from '@radix-ui/react-toast'
import { v4 as uuidv4 } from 'uuid'

import { ToastArea } from '.'

export type ToastPositionType =
  | 'topLeft'
  | 'topCenter'
  | 'topRight'
  | 'bottomLeft'
  | 'bottomCenter'
  | 'bottomRight'

export type MessageType = 'error' | 'info' | 'success' | 'warning'

export interface ToastType {
  id: string
  title: string
  message: string
  messageType?: MessageType
  duration?: number
  isClosable?: boolean
  // isActive: boolean
  hasIcon?: boolean
  hasProgressBar?: boolean
  onAction?: () => void | undefined
}

interface ToastContextType {
  toasts: ToastType[]
  createToast: (toast: Omit<ToastType, 'id'>) => void
  removeToast: (id: string) => void
  removeAllToasts: () => void
  updateToast: (id: string, toast: ToastType) => void
  isToastActive: (id: string) => boolean
}

interface ToastProviderProps {
  children: ReactNode // ReactNode é um tipo que representa um elemento React, uma matriz de elementos React ou uma string, número ou boolean
  position?: ToastPositionType
}

// Criação de um objeto de contexto (o valor passado, {}, é o valor que o contexto terá quando não houver nenhum provedor de contexto correspondente na árvore
// acima do componente que lê o contexto - quando não existir um valor padrão significativo, especifique null)
export const ToastContext = createContext<ToastContextType>(
  {} as ToastContextType,
)

// function setSlidingDirection(position: ToastPositionType) {
//   if (position === 'topRight' || position === 'bottomRight') {
//     return 'right'
//   } else if (position === 'topLeft' || position === 'bottomLeft') {
//     return 'left'
//   } else if (position === 'topCenter') {
//     return 'up'
//   } else {
//     return 'down'
//   }
// }

const closingDirection = {
  topLeft: 'left',
  bottomLeft: 'left',
  topRight: 'right',
  bottomRight: 'right',
  topCenter: 'up',
  bottomCenter: 'down',
} as const

// Provedor de contexto (esse componente fornece o contexto ToastContext para os componentes que ele envolve)
export function ToastProvider({
  children,
  position = 'bottomRight',
}: ToastProviderProps) {
  // useState retorna o estado (toasts) e uma função que modifica o estado (setToasts)
  const [toasts, setToasts] = useState<ToastType[]>([])

  // console.log('toasts: ', toasts)

  // As funções abaixo alteram o estado (toasts) de uma maneira particular
  // useCallback irá memorizar a função passada no primeiro parâmetro e não irá recriá-la entre as renderizações, pois o array de dependências está vazio.

  const createToast = useCallback((toast: Omit<ToastType, 'id'>) => {
    const newToast = {
      ...toast,
      id: uuidv4(),
    }
    setToasts((previousToasts) => [...previousToasts, newToast])
  }, [])

  const removeToast = useCallback((id: string) => {
    setToasts((previousToasts) =>
      previousToasts.filter((toast) => toast.id !== id),
    )
  }, [])

  const removeAllToasts = useCallback(() => setToasts([]), [])

  const updateToast = useCallback(
    (id: string, updatedToast: Omit<ToastType, 'id'>) => {
      setToasts((previousToasts) =>
        previousToasts.map((toast) =>
          toast.id === id ? { ...updatedToast, id } : toast,
        ),
      )
    },
    [],
  )

  // const isToastActive = useCallback(
  //   (id: string) => {
  //     const toastIndex = toasts.findIndex((toast) => toast.id === id)

  //     if (toastIndex < 0) {
  //       return false
  //     } else {
  //       return toasts[toastIndex].isActive
  //     }
  //   },
  //   [toasts],
  // )

  const isToastActive = useCallback(
    (id: string) => {
      const toastIndex = toasts.findIndex((toast) => toast.id === id)
      return toastIndex >= 0
    },
    [toasts],
  )

  return (
    // A propriedade value contém o que os componentes envolvidos por ToastProvider podem acessar de ToastContext
    <ToastContext.Provider
      value={{
        toasts,
        createToast,
        removeToast,
        removeAllToasts,
        updateToast,
        isToastActive,
      }}
    >
      <RadixToastProvider swipeDirection={closingDirection[position]}>
        {children}
        <ToastArea toasts={toasts} position={position} />
      </RadixToastProvider>
    </ToastContext.Provider>
  )
}
