import type { Meta, StoryObj } from '@storybook/react'
import { Box, Button, Tooltip, TooltipProps } from '@gears-ui/react'

// type Story = StoryObj<typeof Tooltip>
type Story = StoryObj<TooltipProps>

/* Para contar ao Storybook sobre o componente que estamos documentando e testando, criamos um export default que contém:
 * component - informamos qual é o componente
 * title - especificamos como agrupar ou categorizar o componente na barra lateral do Storybook
 * tags - são usadas para filtrar histórias em diferentes contextos (autodocs ativa a documentação gerada automaticamente para as histórias do componente)
 * args - contém as propriedades envidas para o componente (todas as histórias herdam essas propriedades)
 * argTypes - especificamos o tipo do argumento, assim podemos restringer os valores que ele pode aceitar. Um argumento pode ser uma ação, por exemplo, onClick.
 * Além disso, podemos especificar o tipo de controle do argumento
 * decorators - um decorador é uma maneira de envolver uma história com funcionalidade extra de "renderização"
 */

// Como usar?

// function App() {
//   return (
//     <Box
//       css={{
//         height: '$40',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         gap: '$4',
//         backgroundColor: '$gray300',
//       }}
//     >
//       <Tooltip
//         side="left"
//         align="center"
//         label="Tooltip à esquerda do botão"
//         variant="dark"
//       >
//         <Button>Passe o mouse</Button>
//       </Tooltip>
//       <Tooltip
//         side="top"
//         align="start"
//         label="Tooltip acima do botão"
//         variant="darkTransparent"
//       >
//         <Button>Passe o mouse</Button>
//       </Tooltip>
//       <Tooltip
//         side="bottom"
//         align="end"
//         label="Tooltip abaixo do botão"
//         variant="light"
//       >
//         <Button>Passe o mouse</Button>
//       </Tooltip>
//       <Tooltip
//         side="right"
//         align="center"
//         label="Tooltip à direita do botão"
//         variant="lightTransparent"
//       >
//         <Button>Passe o mouse</Button>
//       </Tooltip>
//     </Box>
//   )
// }

// Função que recebe um componente (ou uma história) e retorna um novo componente (ou história) envolto em alguma lógica adicional
function decorator(Story: React.ComponentType) {
  return (
    // Todas as histórias serão renderizadas dentro do componente Box
    <Box
      css={{
        height: '$40',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '$4',
        backgroundColor: '$gray300',
      }}
    >
      <Story />
    </Box>
  )
}

export default {
  component: Tooltip,
  title: 'Overlay/Tooltip',
  // tags: ['autodocs'], // descomente isto se em .storybook/main.ts estiver docs: { autodocs: 'tag'}
  args: {
    label: 'Tooltip acima do botão',
    hasArrow: true,
    variant: 'dark',
    side: 'top',
    align: 'center',
    children: <Button>Passe o mouse</Button>,
  },
  argTypes: {
    // label: {
    //   control: {
    //     type: 'text',
    //   },
    // },
    // hasArrow: {
    //   control: {
    //     type: 'boolean',
    //   },
    // },
    variant: {
      options: ['dark', 'light', 'darkTransparent', 'lightTransparent'],
      control: {
        type: 'inline-radio',
      },
    },
    side: {
      options: ['left', 'right', 'top', 'bottom'],
      control: {
        type: 'inline-radio',
      },
    },
    align: {
      options: ['start', 'center', 'end'],
      control: {
        type: 'inline-radio',
      },
    },
    children: {
      control: {
        type: null,
      },
    },
  },
  decorators: [(Story) => decorator(Story)],
} as Meta<TooltipProps>

// Uma história captura o estado renderizado de um componente de UI
// Veja como renderizar Tooltip nos estados "default" e "customColorAndPosition", e exportar as histórias Default e CustomColorAndPosition

export const Default: Story = {
  render: (args) => <Tooltip {...args} />,
}

export const CustomColorAndPosition: Story = {
  parameters: {
    controls: { disable: true },
  },
  render: (args) => (
    <>
      <Tooltip
        {...args}
        side="left"
        align="center"
        label="Tooltip à esquerda do botão"
        variant="dark"
      >
        <Button>Passe o mouse</Button>
      </Tooltip>
      <Tooltip
        {...args}
        side="top"
        align="start"
        label="Tooltip acima do botão"
        variant="darkTransparent"
      >
        <Button>Passe o mouse</Button>
      </Tooltip>
      <Tooltip
        {...args}
        side="bottom"
        align="end"
        label="Tooltip abaixo do botão"
        variant="light"
      >
        <Button>Passe o mouse</Button>
      </Tooltip>
      <Tooltip
        {...args}
        side="right"
        align="center"
        label="Tooltip à direita do botão"
        variant="lightTransparent"
      >
        <Button>Passe o mouse</Button>
      </Tooltip>
    </>
  ),
}

/*
Observações:
- import type informa explicitamente ao TypeScript que você está interessado apenas em importar as informações do tipo. Isto garante que o módulo importado não 
será incluído na saída.
- Meta e StoryObj são tipos do TypeScript, por isso o import type. 
*/
