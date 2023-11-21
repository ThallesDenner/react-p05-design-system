import { useRef, useState } from 'react'

import { CheckCircle, Info, WarningCircle, X, XCircle } from 'phosphor-react'

import type { ToastType, ToastPositionType } from './ToastContext'
import { useToast } from './useToast'
import {
  ToastAction,
  ToastClose,
  ToastDescription,
  ToastIcon,
  ToastProgress,
  ToastProgressBar,
  ToastRoot,
  ToastTitle,
  ToastViewport,
  progressBar,
} from './styles'
import { Button } from '../Button'

// ComponentProps extrai o tipo dos adereços de qualquer componente (assim, não precisamos criar a tipagem das props manualmente)
// export interface ToastProps extends ComponentProps<typeof ?????> {}
// export type ToastProps = ComponentProps<typeof ?????>

interface ToastAreaProps {
  toasts: ToastType[]
  position?: ToastPositionType
}

export interface ToastProps {
  toast: ToastType
}

const icons = {
  error: <XCircle size={20} />,
  info: <Info size={20} />,
  success: <CheckCircle size={20} />,
  warning: <WarningCircle size={20} />,
} as const

export function ToastArea({ toasts, position }: ToastAreaProps) {
  return (
    <ToastViewport position={position}>
      {toasts.map((toast) => (
        <Toast key={toast.id} toast={toast} />
      ))}
    </ToastViewport>
  )
}

function Toast({ toast }: ToastProps) {
  const {
    id,
    title,
    message,
    messageType = 'info',
    duration = 5000,
    isClosable = true,
    // isActive: boolean
    hasIcon = false,
    hasProgressBar = false,
    onAction,
  } = toast
  const hasAction = typeof onAction === 'function'
  const icon = icons[messageType]

  // Variáveis de referência (useRef retorna um objeto no qual o valor da propriedade current é uma referência)
  // progressRef.current = <div></div> (ToastProgressBar)
  const progressRef = useRef<HTMLDivElement | null>(null) // isto é para rastrear se a animação da barra de progresso está pausada ou não

  const [isActive, setIsActive] = useState(true)
  const { removeToast } = useToast()

  function handleRemoveToast() {
    setIsActive((previousState) => !previousState)
    // removeToast será executada 0.1s após clicar no botão de fechar o toast (isto é para dar tempo de aplicar a animação de fechamento do toast)
    setTimeout(() => {
      removeToast(id)
    }, 100)
  }

  function handlePause() {
    const progress = progressRef.current

    if (progress) {
      progress.style.animationPlayState = 'paused' // pausa a animação da barra de progresso
    }
  }

  function handleResume() {
    const progress = progressRef.current

    if (progress) {
      progress.style.animationPlayState = 'running' // retorna a animação da barra de progresso
    }
  }

  return (
    <ToastRoot
      open={isActive}
      onOpenChange={handleRemoveToast}
      duration={duration}
      onPause={handlePause}
      onResume={handleResume}
    >
      <ToastTitle>
        {hasIcon && <ToastIcon variant={messageType}>{icon}</ToastIcon>}
        {title}
      </ToastTitle>
      <ToastDescription>{message}</ToastDescription>
      {hasAction && (
        <ToastAction
          asChild
          altText="Você pode realizar esta ação nas configurações"
        >
          <Button size="sm" variant="primary" onClick={onAction}>
            Avançar
          </Button>
        </ToastAction>
      )}
      {isClosable && (
        <ToastClose aria-label="Close">
          <X size={20} aria-hidden />
        </ToastClose>
      )}
      {hasProgressBar && (
        <ToastProgress>
          {/* A ligação entre um elemento HTML e a variável que contém a referência desse elemento é realizada através da propriedade ref */}
          <ToastProgressBar
            ref={progressRef}
            variant={messageType}
            css={{
              animation: `${progressBar} ${duration}ms ease-in-out forwards`,
            }}
          />
        </ToastProgress>
      )}
    </ToastRoot>
  )
}

Toast.displayName = 'Toast'

/*
Sobre a biblioteca @radix-ui/react-toast:

Considere o seguinte código:

import * as Toast from '@radix-ui/react-toast';

export default () => (
  <Toast.Provider>
    <Toast.Root>
      <Toast.Title />
      <Toast.Description />
      <Toast.Action />
      <Toast.Close />
    </Toast.Root>

    <Toast.Viewport />
  </Toast.Provider>
);

- Toast.Provider: Este componente é um contêiner que fornece o contexto necessário para que os toasts funcionem. Ele envolve toda a árvore de componentes que 
precisa acessar ou disparar toasts. 
- Toast.Root: É onde você renderiza os toasts individuais. Este é o componente principal para exibição de toasts e normalmente contém outros componentes 
relacionados aos toasts, como Toast.Title, Toast.Description, Toast.Action, e Toast.Close. 
- Toast.Title: Este componente é usado para exibir o título do toast. Pode conter texto ou outros elementos que representem o título do seu toast.
- Toast.Description: É usado para exibir uma descrição ou conteúdo adicional associado ao toast. É a área onde você coloca informações detalhadas sobre a 
notificação.
- Toast.Action: É um componente usado para incluir ações interativas dentro do toast. Por exemplo, você pode adicionar botões ou links dentro de Toast.Action 
para permitir que os usuários realizem ações específicas ao interagir com o toast.
- Toast.Close: É um componente que adiciona um botão de fechar padrão ao toast. Esse botão fornece aos usuários uma maneira rápida e fácil de fechar o toast.
- Toast.Viewport: Este componente define a área onde os toasts serão exibidos. Normalmente, é um contêiner fixado em um canto da tela. Você pode personalizar a 
aparência e a posição do viewport para atender às suas necessidades de layout.

Em resumo, Toast.Provider é o contêiner principal, Toast.Root é onde os toasts são renderizados, Toast.Viewport define a área de exibição, e Toast.Title, 
Toast.Description, Toast.Action, e Toast.Close são componentes específicos do toast que compõem o conteúdo do toast individual.

As propriedades open e onOpenChange
- A propriedade open determina se o toast está aberto ou fechado. Quando um usuário interage com o toast, como clicar no botão de fechar (<Toast.Close />), a 
biblioteca pode automaticamente alterar o valor de open para false, indicando que o toast deve ser fechado. Essa mudança na propriedade open desencadeia a 
chamada da função onOpenChange, se fornecida.
- A propriedade onOpenChange do componente <Toast.Root> é chamada quando há uma mudança no estado de abertura (open) do toast. O onOpenChange é um callback que 
é acionado sempre que o estado de abertura do toast muda. A mudança em open geralmente é controlada pela biblioteca ou por ações do usuário. 

Em resumo, a biblioteca pode mudar automaticamente o valor de open em resposta a ações específicas, como cliques no botão de fechar ou a expiração do tempo 
configurado para o toast. Se a biblioteca ou o usuário modificar manualmente o estado de open, a função onOpenChange será acionada com o novo valor de open. 
Por exemplo, quando o usuário clica em <Toast.Close />, a biblioteca automaticamente altera o estado interno do toast, acionando o onOpenChange fornecido. Nesse 
caso, a função handleRemoveToast é chamada, que por sua vez chama a função removeToast com o id do toast, removendo-o do array toasts no estado do componente 
ToastProvider.

As propriedades onPause e onResume
- onPause: Manipulador de eventos chamado quando o temporizador de dispensa é pausado. Isso ocorre quando o ponteiro é movido sobre a viewport, a viewport está 
focada ou quando a janela está desfocada.
- onResume: Manipulador de eventos chamado quando o temporizador de dispensa é retomado. Isso ocorre quando o ponteiro é afastado da janela de visualização, a 
janela de visualização fica desfocada ou quando a janela está focada.
*/
