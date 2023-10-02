import { ComponentProps, ElementType } from 'react'
import { styled } from '../styles'

export const Box = styled('div', {
  padding: '$6',
  borderRadius: '$md',
  backgroundColor: '$gray800',
  border: '1px solid $gray600',
})

// ComponentProps extrai o tipo dos adereços de qualquer componente (assim, não precisamos criar a tipagem das props manualmente)
export interface BoxProps extends ComponentProps<typeof Box> {
  as?: ElementType
}

/* Observação:
 * Os componentes do Stitches podem receber uma propriedade chamada as, que permite trocar o elemento. Assim, podemos fazer algo como:
 * <Box as="span" /> // troca a tag <div> pela tag <span>
 */

Box.displayName = 'Box'
