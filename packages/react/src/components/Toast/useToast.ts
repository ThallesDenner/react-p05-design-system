import { useContext } from 'react'

import { ToastContext } from './ToastContext'

// Hook personalizado
export const useToast = () => {
  // useContext() retorna o que foi passado para a propriedade value em ToastContext.Provider
  const context = useContext(ToastContext)

  // Um erro será lançado se o hook useToast for usado fora do componente <ToastProvider>
  if (typeof context === 'undefined' || Object.keys(context).length === 0) {
    throw new Error('You have to use useToast inside <ToastProvider>')
  }

  return { ...context }
}
