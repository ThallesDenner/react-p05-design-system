import { styled } from '../../styles'

export const TextInputContainer = styled('div', {
  backgroundColor: '$gray900',
  borderRadius: '$sm',
  boxSizing: 'border-box',
  border: '2px solid $gray900',
  display: 'flex',
  alignItems: 'center',

  // O componente pode receber qualquer uma das propriedades de variants (isto nos permite criar variações para o componente)
  variants: {
    size: {
      sm: {
        padding: '$2 $3',
      },
      md: {
        padding: '$3 $4',
      },
    },
  },

  '&:has(input:focus)': {
    borderColor: '$ignite300',

    svg: {
      color: '$ignite300',
    },
  },

  '&:has(input:disabled)': {
    opacity: 0.5,
    cursor: 'not-allowed',
  },

  // Valor padrão das propriedades de variants (se usar o componente sem passar o valor das propriedades que não têm valor padrão, nenhum estilo associado a variante será aplicado)
  defaultVariants: {
    size: 'md',
  },
})

export const Prefix = styled('span', {
  fontFamily: '$primary',
  fontSize: '$sm',
  fontWeight: '$regular',
  color: '$gray400',
  whiteSpace: 'nowrap',
  lineHeight: 0,
})

export const Sufix = styled('span', {
  fontFamily: '$primary',
  fontSize: '$sm',
  fontWeight: '$regular',
  color: '$gray400',
  marginLeft: 'auto',
  whiteSpace: 'nowrap',
  lineHeight: 0,
})

export const Input = styled('input', {
  fontFamily: '$primary',
  fontSize: '$sm',
  color: '$white',
  fontWeight: '$regular',
  background: 'transparent',
  border: 0,
  width: '100%',

  '&:focus': {
    outline: 0,
  },

  '&:disabled': {
    cursor: 'not-allowed',
  },

  '&::placeholder': {
    color: '$gray500',
  },
})
