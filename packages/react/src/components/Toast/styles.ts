import * as Toast from '@radix-ui/react-toast'
import { styled, keyframes } from '../../styles'

export const ToastViewport = styled(Toast.Viewport, {
  maxWidth: '100vw',
  display: 'flex',
  flexDirection: 'column',
  gap: '$2',
  position: 'fixed',
  margin: 0,
  padding: '$8',
  listStyle: 'none',
  zIndex: 2147483647, // este é o maior valor seguro para a propriedade z-index do CSS
  outline: 'none',

  // O componente pode receber qualquer uma das propriedades de variants (isto nos permite criar variações para o componente)
  variants: {
    position: {
      topLeft: { top: 0, left: 0 },
      topCenter: { top: 0, left: '50%', transform: 'translateX(-50%)' },
      topRight: { top: 0, right: 0 },
      bottomLeft: { bottom: 0, left: 0 },
      bottomCenter: {
        bottom: 0,
        left: '50%',
        transform: 'translateX(-50%)',
      },
      bottomRight: { bottom: 0, right: 0 },
    },
  },

  // Valor padrão das propriedades de variants (se usar o componente sem passar o valor das propriedades que não têm valor padrão, nenhum estilo associado a variante será aplicado)
  defaultVariants: {
    position: 'bottomRight',
  },
})

const hide = keyframes({
  '0%': { opacity: 1 },
  '100%': { opacity: 0 },
})

const slideIn = {
  left: keyframes({
    from: {
      opacity: 0,
      transform: 'translateX(-100%)',
    },
    to: {
      opacity: 1,
      transform: 'translateX(0%)',
    },
  }),
  right: keyframes({
    from: {
      opacity: 0,
      transform: 'translateX(100%)',
    },
    to: {
      opacity: 1,
      transform: 'translateX(0%)',
    },
  }),
  up: keyframes({
    from: {
      opacity: 0,
      transform: 'translateY(0%)',
    },
    to: {
      opacity: 1,
      transform: 'translateY(100%)',
    },
  }),
  down: keyframes({
    from: {
      opacity: 0,
      transform: 'translateY(100%)',
    },
    to: {
      opacity: 1,
      transform: 'translateY(0%)',
    },
  }),
} as const

const swipeOut = {
  left: keyframes({
    from: {
      opacity: 1,
      transform: 'translateX(var(--radix-toast-swipe-end-x))',
    },
    to: {
      opacity: 0,
      transform: 'translateX(-100%)',
    },
  }),
  right: keyframes({
    from: {
      opacity: 1,
      transform: 'translateX(var(--radix-toast-swipe-end-x))',
    },
    to: {
      opacity: 0,
      transform: 'translateX(100%)',
    },
  }),
  up: keyframes({
    from: {
      opacity: 1,
      transform: 'translateY(var(--radix-toast-swipe-end-y))',
    },
    to: {
      opacity: 0,
      transform: 'translateY(0%)',
    },
  }),
  down: keyframes({
    from: {
      opacity: 1,
      transform: 'translateY(var(--radix-toast-swipe-end-y))',
    },
    to: {
      opacity: 0,
      transform: 'translateY(100%)',
    },
  }),
} as const

export const ToastRoot = styled(Toast.Root, {
  width: '$80',
  display: 'grid',
  gridTemplateColumns: 'auto max-content',
  gridTemplateAreas: "'title action' 'description action'",
  gap: '$1 $4',
  alignItems: 'center',
  position: 'relative',
  padding: '$3 $5',
  backgroundColor: '$gray800',
  border: '1px solid $gray600',
  borderRadius: '$sm',
  boxShadow:
    'hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px',

  // '&[data-state="open"]': {
  //   animation: `${slideIn} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
  // },

  '&[data-state="open"][data-swipe-direction="left"]': {
    animation: `${slideIn.left} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
  },

  '&[data-state="open"][data-swipe-direction="right"]': {
    animation: `${slideIn.right} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
  },

  '&[data-state="open"][data-swipe-direction="up"]': {
    animation: `${slideIn.up} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
  },

  '&[data-state="open"][data-swipe-direction="down"]': {
    animation: `${slideIn.down} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
  },

  '&[data-state="closed"]': {
    animation: `${hide} 100ms ease-in`,
  },

  '&[data-swipe="move"][data-swipe-direction="left"], &[data-swipe="move"][data-swipe-direction="right"]':
    {
      transform: 'translateX(var(--radix-toast-swipe-move-x))',
    },

  '&[data-swipe="move"][data-swipe-direction="up"], &[data-swipe="move"][data-swipe-direction="down"]':
    {
      transform: 'translateY(var(--radix-toast-swipe-move-y))',
    },

  '&[data-swipe="cancel"]': {
    transform: 'translateX(0)',
    transition: 'transform 200ms ease-out',
  },

  // '&[data-swipe="end"]': {
  //   animation: `${swipeOut} 100ms ease-out`,
  // },

  '&[data-swipe="end"][data-swipe-direction="left"]': {
    animation: `${swipeOut.left} 100ms ease-out`,
  },

  '&[data-swipe="end"][data-swipe-direction="right"]': {
    animation: `${swipeOut.right} 100ms ease-out`,
  },

  '&[data-swipe="end"][data-swipe-direction="up"]': {
    animation: `${swipeOut.up} 100ms ease-out`,
  },

  '&[data-swipe="end"][data-swipe-direction="down"]': {
    animation: `${swipeOut.down} 100ms ease-out`,
  },
})

export const ToastTitle = styled(Toast.Title, {
  gridArea: 'title',
  display: 'flex',
  alignItems: 'center',
  columnGap: '$2',
  lineHeight: '$base',
  fontFamily: '$primary',
  fontSize: '$xl',
  fontWeight: '$bold',
  color: '$white',
})

export const ToastDescription = styled(Toast.Description, {
  gridArea: 'description',
  lineHeight: '$base',
  fontFamily: '$primary',
  fontSize: '$sm',
  fontWeight: '$regular',
  color: '$gray200',
})

export const ToastAction = styled(Toast.Action, {
  gridArea: 'action',
})

export const ToastClose = styled(Toast.Close, {
  all: 'unset',
  gridArea: 'action',
  position: 'absolute',
  right: '-$1',
  top: '$1',
  lineHeight: 0,
  color: '$gray200',
  cursor: 'pointer',
  transition: 'transform 0.3s ease-in-out',

  '&:hover': {
    color: '$gray500',
    transform: 'rotate(90deg)',
  },
})

export const ToastIcon = styled('span', {
  lineHeight: 0,

  // O componente pode receber qualquer uma das propriedades de variants (isto nos permite criar variações para o componente)
  variants: {
    variant: {
      error: { color: '$error' },
      info: { color: '$info' },
      success: { color: '$success' },
      warning: { color: '$warning' },
    },
  },

  // Valor padrão das propriedades de variants (se usar o componente sem passar o valor das propriedades que não têm valor padrão, nenhum estilo associado a variante será aplicado)
  defaultVariants: {
    variant: 'info',
  },
})

export const ToastProgress = styled('div', {
  position: 'absolute',
  bottom: 0,
  left: 0,
  width: '100%',
  height: '$1',
  backgroundColor: 'rgba(0, 0, 0, 0.1)',
})

export const progressBar = keyframes({
  '0%': { width: '100%' },
  '100%': { width: '0%' },
})

export const ToastProgressBar = styled('div', {
  height: '100%',

  // O componente pode receber qualquer uma das propriedades de variants (isto nos permite criar variações para o componente)
  variants: {
    variant: {
      error: { backgroundColor: '$error' },
      info: { backgroundColor: '$info' },
      success: { backgroundColor: '$success' },
      warning: { backgroundColor: '$warning' },
    },
  },

  // Valor padrão das propriedades de variants (se usar o componente sem passar o valor das propriedades que não têm valor padrão, nenhum estilo associado a variante será aplicado)
  defaultVariants: {
    variant: 'info',
  },
})

/*
Sobre a biblioteca @radix-ui/react-toast:

Variáveis CSS
- As variáveis CSS --radix-toast-swipe-move-x, --radix-toast-swipe-move-y, --radix-toast-swipe-end-x, e --radix-toast-swipe-end-y são geralmente utilizadas para 
controlar a animação de movimento (swipe) de toasts em uma interface usando a biblioteca @radix-ui/react-toast. Essas variáveis são parte da personalização dos 
estilos e animações que podem ser aplicados aos toasts durante interações de deslizamento (swipe). Aqui está uma explicação geral para cada uma delas:

--radix-toast-swipe-move-x e --radix-toast-swipe-move-y:
Essas variáveis controlam o movimento do toast ao longo dos eixos X e Y durante a interação de deslizamento (swipe). Elas podem ser usadas para especificar a 
transição ou animação do movimento enquanto o usuário está deslizando o toast na tela.

--radix-toast-swipe-end-x e --radix-toast-swipe-end-y:
Essas variáveis controlam o posicionamento final do toast ao longo dos eixos X e Y quando a interação de deslizamento (swipe) é concluída. Elas podem ser usadas 
para especificar a posição final do toast após o deslizamento e podem influenciar a animação final.

O atributo data-swipe
- O atributo data-swipe em Toast.Root é utilizado para indicar o estado da interação de deslizamento (swipe) do toast. Os valores possíveis para esse atributo 
são "start", "move", "cancel", e "end". Cada valor representa um estado específico da interação de deslizamento. Aqui está o significado de cada valor:

"start": 
Indica o início da interação de deslizamento (swipe) no toast. Este estado geralmente ocorre quando o usuário toca e começa a deslizar o toast.
"move": 
Indica que o toast está atualmente sendo movido durante a interação de deslizamento. Este estado é acionado enquanto o usuário continua a mover o toast durante 
a interação de deslizamento.

"cancel":
Indica que a interação de deslizamento foi cancelada antes de ser concluída. Isso pode acontecer se o usuário interromper o deslizamento ou se ocorrer uma 
condição que resulte no cancelamento da interação.

"end":
Indica que a interação de deslizamento foi concluída. Este estado é acionado quando o usuário solta o toast após a interação de deslizamento.

Esses valores são úteis para personalizar o comportamento visual do toast com base no estado da interação de deslizamento.
*/
