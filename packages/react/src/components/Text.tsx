import { ComponentProps, ElementType } from 'react'
import { styled } from '../styles'

export const Text = styled('p', {
  fontFamily: '$default',
  lineHeight: '$base',
  margin: 0,
  color: '$gray100',

  // O componente pode receber qualquer uma das propriedades dentro de variants (isto nos permite criar variações para o componente)
  variants: {
    size: {
      xxs: { fontSize: '$xxs' },
      xs: { fontSize: '$xs' },
      sm: { fontSize: '$sm' },
      md: { fontSize: '$md' },
      lg: { fontSize: '$lg' },
      xl: { fontSize: '$xl' },
      '2xl': { fontSize: '$2xl' },
      '4xl': { fontSize: '$4xl' },
      '5xl': { fontSize: '$5xl' },
      '6xl': { fontSize: '$6xl' },
      '7xl': { fontSize: '$7xl' },
      '8xl': { fontSize: '$8xl' },
      '9xl': { fontSize: '$9xl' },
    },
  },

  // Valor padrão das propriedades em variants (ao utilizar o componente, temos que passar o valor das propriedades que não tem valor padrão)
  defaultVariants: {
    size: 'md',
  },
})

// ComponentProps extrai o tipo dos adereços de qualquer componente (assim, não precisamos criar a tipagem das props manualmente)
export interface TextProps extends ComponentProps<typeof Text> {
  as?: ElementType
}

/* Observação:
 * Os componentes do Stitches podem receber uma propriedade chamada as, que permite trocar o elemento. Assim, podemos fazer algo como:
 * <Text as="strong" /> // troca a tag <p> pela tag <strong>
 */

Text.displayName = 'Text'
