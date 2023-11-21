import { ComponentProps, ElementType } from 'react'
import { styled } from '../styles'

// Escolhemos Heading para ser uma tag <h2> por padrão, porque geralmente tempos apenas uma tag <h1> por página
export const Heading = styled('h2', {
  fontFamily: '$primary',
  lineHeight: '$shorter',
  margin: 0,
  color: '$gray100',

  // O componente pode receber qualquer uma das propriedades de variants (isto nos permite criar variações para o componente)
  variants: {
    size: {
      sm: { fontSize: '$xl' },
      md: { fontSize: '$2xl' },
      lg: { fontSize: '$4xl' },
      '2xl': { fontSize: '$5xl' },
      '3xl': { fontSize: '$6xl' },
      '4xl': { fontSize: '$7xl' },
      '5xl': { fontSize: '$8xl' },
      '6xl': { fontSize: '$9xl' },
    },
  },

  // Valor padrão das propriedades de variants (se usar o componente sem passar o valor das propriedades que não têm valor padrão, nenhum estilo associado a variante será aplicado)
  defaultVariants: {
    size: 'md',
  },
})

// ComponentProps extrai o tipo dos adereços de qualquer componente (assim, não precisamos criar a tipagem das props manualmente)
export interface HeadingProps extends ComponentProps<typeof Heading> {
  as?: ElementType
}

/* Observação:
 * Os componentes do Stitches podem receber uma propriedade chamada as, que permite trocar o elemento. Assim, podemos fazer algo como:
 * <Heading as="h1" /> // troca a tag <h2> pela tag <h1>
 */

Heading.displayName = 'Heading'
