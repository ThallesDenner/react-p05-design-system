import type { Meta, StoryObj } from '@storybook/react'
import { Box, Text, Checkbox, CheckboxProps } from '@gears-ui/react'

// type Story = StoryObj<typeof Checkbox>
type Story = StoryObj<CheckboxProps>

/* Para contar ao Storybook sobre o componente que estamos documentando e testando, criamos um export default que contém:
 * component - informamos qual é o componente
 * title - especificamos como agrupar ou categorizar o componente na barra lateral do Storybook
 * tags - são usadas para filtrar histórias em diferentes contextos (autodocs ativa a documentação gerada automaticamente para as histórias do componente)
 * args - contém as propriedades envidas para o componente (todas as histórias herdam essas propriedades)
 * decorators - um decorador é uma maneira de envolver uma história com funcionalidade extra de "renderização"
 */

export default {
  component: Checkbox,
  title: 'Form/Checkbox',
  // tags: ['autodocs'], // descomente isto se em .storybook/main.ts estiver docs: { autodocs: 'tag'}
  args: {},
  decorators: [
    // Story é uma função que renderiza a história
    (Story) => {
      return (
        // Todas as histórias serão renderizadas dentro do componente Box
        <Box
          as="label"
          // Todos os componentes criados com o Stitches recebe a propriedade css, daí podemos realizar uma estilização inline
          css={{ display: 'flex', flexDirection: 'row', gap: '$2' }}
        >
          {/* Podemos substituir Story() por <Story/> - um componente é uma função que retorna JSX */}
          {Story()}
          <Text size="sm">Aceitar os termos de uso</Text>
        </Box>
      )
    },
  ],
} as Meta<CheckboxProps>

// Uma história captura o estado renderizado de um componente de UI
// Veja como renderizar Checkbox no estado "primary" e exportar a história Primary

export const Primary: Story = {}

/*
Observações:
- import type informa explicitamente ao TypeScript que você está interessado apenas em importar as informações do tipo. Isto garante que o módulo importado não 
será incluído na saída.
- Meta e StoryObj são tipos do TypeScript, por isso o import type. 
*/
