import { ComponentProps, ElementType } from 'react'
import { styled } from '../styles'

export const Button = styled('button', {
  all: 'unset', // retira o estilo padrão do elemento button
  borderRadius: '$sm',
  fontSize: '$sm',
  fontWeight: '$medium',
  fontFamily: '$default',
  textAlign: 'center',
  minWidth: 120,
  boxSizing: 'border-box',
  padding: '0 $4',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '$2',

  cursor: 'pointer',

  svg: {
    width: '$4',
    height: '$4',
  },

  '&:disabled': {
    cursor: 'not-allowed',
  },

  // O componente pode receber qualquer uma das propriedades dentro de variants (isto nos permite criar variações para o componente)
  variants: {
    variant: {
      primary: {
        color: '$white',
        background: '$ignite500',

        '&:not(:disabled):hover': {
          background: '$ignite300',
        },

        '&:disabled': {
          backgroundColor: '$gray200',
        },
      },

      secondary: {
        color: '$ignite300',
        border: '2px solid $ignite500',

        '&:not(:disabled):hover': {
          background: '$ignite500',
          color: '$white',
        },

        '&:disabled': {
          color: '$gray200',
          borderColor: '$gray200',
        },
      },

      tertiary: {
        color: '$gray100',

        '&:not(:disabled):hover': {
          color: '$white',
        },

        '&:disabled': {
          color: '$gray600',
        },
      },
    },

    size: {
      sm: {
        height: 38,
      },

      md: {
        height: 46,
      },
    },
  },

  // Valor padrão das propriedades em variants (ao utilizar o componente, temos que passar o valor das propriedades que não tem valor padrão)
  defaultVariants: {
    variant: 'primary',
    size: 'md',
  },
})

// ComponentProps extrai o tipo dos adereços de qualquer componente (assim, não precisamos criar a tipagem das props manualmente)
export interface ButtonProps extends ComponentProps<typeof Button> {
  as?: ElementType
}

/* Observação:
 * Os componentes do Stitches podem receber uma propriedade chamada as, que permite trocar o elemento. Assim, podemos fazer algo como:
 * <Button as="a" /> // troca a tag <button> pela tag <a>
 */

Button.displayName = 'Button'
