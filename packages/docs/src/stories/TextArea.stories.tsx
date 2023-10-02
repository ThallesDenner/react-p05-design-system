import type { Meta, StoryObj } from '@storybook/react'
import { Box, Text, TextArea, TextAreaProps } from '@gears-ui/react'

// type Story = StoryObj<typeof TextArea>
type Story = StoryObj<TextAreaProps>

/* Para contar ao Storybook sobre o componente que estamos documentando e testando, criamos um export default que contém:
 * component - informamos qual é o componente
 * title - especificamos como agrupar ou categorizar o componente na barra lateral do Storybook
 * tags - são usadas para filtrar histórias em diferentes contextos (autodocs ativa a documentação gerada automaticamente para as histórias do componente)
 * args - contém as propriedades envidas para o componente (todas as histórias herdam essas propriedades)
 * decorators - um decorador é uma maneira de envolver uma história com funcionalidade extra de "renderização"
 */

export default {
  component: TextArea,
  title: 'Form/Text Area',
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
          css={{ display: 'flex', flexDirection: 'column', gap: '$2' }}
        >
          <Text size="sm">Observações</Text>
          {/* Podemos substituir Story() por <Story/> - um componente é uma função que retorna JSX */}
          {Story()}
        </Box>
      )
    },
  ],
} as Meta<TextAreaProps>

// Uma história captura o estado renderizado de um componente de UI
// Veja como renderizar TextArea nos estados "primary" e "disabled" e exportar as histórias Primary e Disabled

export const Primary: Story = {
  args: {
    placeholder: 'Adicione alguma observação...',
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
  },
}

/*
Observações:
- import type informa explicitamente ao TypeScript que você está interessado apenas em importar as informações do tipo. Isto garante que o módulo importado não 
será incluído na saída.
- Meta e StoryObj são tipos do TypeScript, por isso o import type. 
*/
