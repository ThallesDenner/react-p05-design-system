import { ComponentProps, ReactNode } from 'react'

import { Portal, Provider, Root, Trigger } from '@radix-ui/react-tooltip'

import { TooltipArrow, TooltipContent } from './styles'

// ComponentProps extrai o tipo dos adereços de qualquer componente (assim, não precisamos criar a tipagem das props manualmente)
export interface TooltipProps extends ComponentProps<typeof TooltipContent> {
  children: ReactNode // ReactNode é um tipo que representa um elemento React, uma matriz de elementos React ou uma string, número ou boolean
  label: string
  hasArrow?: boolean
  variant?: 'dark' | 'light' | 'darkTransparent' | 'lightTransparent'
}

export function Tooltip({
  children,
  label,
  hasArrow = true,
  variant,
  ...props
}: TooltipProps) {
  return (
    <Provider>
      <Root>
        <Trigger asChild>{children}</Trigger>
        <Portal>
          <TooltipContent {...props} sideOffset={5} variant={variant}>
            {label}
            {hasArrow && <TooltipArrow variant={variant} />}
          </TooltipContent>
        </Portal>
      </Root>
    </Provider>
  )
}

Tooltip.displayName = 'Tooltip'
