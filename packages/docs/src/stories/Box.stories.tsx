import type { Meta, StoryObj } from '@storybook/react'
import { Box, BoxProps, Text } from '@gears-ui/react'

// type Story = StoryObj<typeof Box>
type Story = StoryObj<BoxProps>

/* Para contar ao Storybook sobre o componente que estamos documentando e testando, criamos um export default que contém:
 * component - informamos qual é o componente
 * title - especificamos como agrupar ou categorizar o componente na barra lateral do Storybook
 * tags - são usadas para filtrar histórias em diferentes contextos (autodocs ativa a documentação gerada automaticamente para as histórias do componente)
 * args - contém as propriedades envidas para o componente (todas as histórias herdam essas propriedades)
 * argTypes - especificamos o tipo do argumento, assim podemos restringer os valores que ele pode aceitar. Um argumento pode ser uma ação, por exemplo, onClick.
 * Além disso, podemos especificar o tipo de controle do argumento
 */

export default {
  component: Box,
  title: 'Surfaces/Box',
  // tags: ['autodocs'], // descomente isto se em .storybook/main.ts estiver docs: { autodocs: 'tag'}
  args: {
    children: <Text>Testando o elemento Box</Text>,
  },
  argTypes: {
    children: {
      control: {
        type: null,
      },
    },
  },
} as Meta<BoxProps>

// Uma história captura o estado renderizado de um componente de UI
// Veja como renderizar Box no estado "primary" e exportar a história Primary

export const Primary: Story = {}

/*
Observações:
- import type informa explicitamente ao TypeScript que você está interessado apenas em importar as informações do tipo. Isto garante que o módulo importado não 
será incluído na saída.
- Meta e StoryObj são tipos do TypeScript, por isso o import type. 
*/
