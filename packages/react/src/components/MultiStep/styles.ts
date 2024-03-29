import { styled } from '../../styles'
import { Text } from '../Text'

export const MultiStepContainer = styled('div', {})

// O Stitches permite reestilizar componentes que criamos previamente
export const Label = styled(Text, {
  color: '$gray200',

  // Valor padrão das propriedades de variants (se usar o componente sem passar o valor das propriedades que não têm valor padrão, nenhum estilo associado a variante será aplicado)
  defaultVariants: {
    size: 'xs',
  },
})

export const Steps = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'repeat(var(--steps-size), 1fr)',
  gap: '$2',
  marginTop: '$1',
})

export const Step = styled('div', {
  height: '$1',
  borderRadius: '$px',
  backgroundColor: '$gray600',

  // O componente pode receber qualquer uma das propriedades de variants (isto nos permite criar variações para o componente)
  variants: {
    active: {
      true: {
        backgroundColor: '$gray100',
      },
    },
  },
})
