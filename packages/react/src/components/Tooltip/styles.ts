import { Content, Arrow } from '@radix-ui/react-tooltip'
import { styled, keyframes } from '../../styles'

const slideUpAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateY(2px)' },
  '100%': { opacity: 1, transform: 'translateY(0)' },
})

const slideRightAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateX(-2px)' },
  '100%': { opacity: 1, transform: 'translateX(0)' },
})

const slideDownAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateY(-2px)' },
  '100%': { opacity: 1, transform: 'translateY(0)' },
})

const slideLeftAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateX(2px)' },
  '100%': { opacity: 1, transform: 'translateX(0)' },
})

export const TooltipContent = styled(Content, {
  padding: '$3 $4',
  borderRadius: '$xs',
  fontFamily: '$secondary',
  fontSize: '$sm',
  fontWeight: '$medium',
  lineHeight: '$short',
  boxShadow: '4px 16px 24px 0px rgba(0, 0, 0, 0.25)',
  userSelect: 'none',
  animationDuration: '400ms',
  animationTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
  willChange: 'transform, opacity',
  '&[data-state="delayed-open"]': {
    '&[data-side="top"]': { animationName: slideDownAndFade },
    '&[data-side="right"]': { animationName: slideLeftAndFade },
    '&[data-side="bottom"]': { animationName: slideUpAndFade },
    '&[data-side="left"]': { animationName: slideRightAndFade },
  },

  // O componente pode receber qualquer uma das propriedades de variants (isto nos permite criar variações para o componente)
  variants: {
    variant: {
      dark: { backgroundColor: '$gray900', color: '$gray100' },
      light: { backgroundColor: '$gray100', color: '$gray900' },
      darkTransparent: {
        backgroundColor: 'rgba(18, 18, 20, 0.6)',
        color: '$gray100',
      },
      lightTransparent: {
        backgroundColor: 'rgba(225, 225, 230, 0.6)',
        color: '$gray900',
      },
    },
  },

  // Valor padrão das propriedades de variants (se usar o componente sem passar o valor das propriedades que não têm valor padrão, nenhum estilo associado a variante será aplicado)
  defaultVariants: {
    variant: 'dark',
  },
})

export const TooltipArrow = styled(Arrow, {
  // O componente pode receber qualquer uma das propriedades de variants (isto nos permite criar variações para o componente)
  variants: {
    variant: {
      dark: { fill: '$gray900' },
      light: { fill: '$gray100' },
      darkTransparent: { fill: 'rgba(18, 18, 20, 0.6)' },
      lightTransparent: { fill: 'rgba(225, 225, 230, 0.6)' },
    },
  },

  // Valor padrão das propriedades de variants (se usar o componente sem passar o valor das propriedades que não têm valor padrão, nenhum estilo associado a variante será aplicado)
  defaultVariants: {
    variant: 'dark',
  },
})
