import { ReactNode } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import {
  At,
  CheckCircle,
  Info,
  LockSimple,
  LockSimpleOpen,
  MagnifyingGlass,
  PaperPlaneRight,
  UserCircle,
  WarningCircle,
  XCircle,
} from 'phosphor-react'
import { Box, Text, TextInput, TextInputProps } from '@gears-ui/react'

// type Story = StoryObj<typeof TextInput>
type Story = StoryObj<TextInputProps>

/* Para contar ao Storybook sobre o componente que estamos documentando e testando, criamos um export default que contém:
 * component - informamos qual é o componente
 * title - especificamos como agrupar ou categorizar o componente na barra lateral do Storybook
 * tags - são usadas para filtrar histórias em diferentes contextos (autodocs ativa a documentação gerada automaticamente para as histórias do componente)
 * args - contém as propriedades envidas para o componente (todas as histórias herdam essas propriedades)
 * decorators - um decorador é uma maneira de envolver uma história com funcionalidade extra de "renderização"
 */

export default {
  component: TextInput,
  title: 'Form/Text Input',
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
          <Text size="sm">Email</Text>
          {/* Podemos substituir Story() por <Story/> - um componente é uma função que retorna JSX */}
          {Story()}
        </Box>
      )
    },
  ],
} as Meta<TextInputProps>

const icons: Record<string, ReactNode> = {
  user: <UserCircle size={16} weight="fill" />,
  email: <At size={16} />,
  search: <MagnifyingGlass size={16} />,
  send: <PaperPlaneRight size={16} weight="fill" />,
  locked: <LockSimple size={16} weight="fill" />,
  unlocked: <LockSimpleOpen size={16} weight="fill" />,
  error: <XCircle size={16} weight="fill" />,
  info: <Info size={16} weight="fill" />,
  success: <CheckCircle size={16} weight="fill" />,
  warning: <WarningCircle size={16} weight="fill" />,
}

// Uma história captura o estado renderizado de um componente de UI
// Veja como renderizar TextInput nos estados "primary", "disabled", "withPrefix" e "withSufix" e exportar as histórias Primary, Disabled, WithPrefix e WithSufix

export const Primary: Story = {
  args: {
    placeholder: 'Digite seu nome',
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
  },
}

export const WithPrefix: Story = {
  args: {
    leftContent: 'cal.com/',
    placeholder: 'username',
  },
  parameters: {
    docs: {
      description: {
        story: 'A propriedade `leftContent` pode receber um ícone ou um texto.',
      },
    },
  },
}

export const WithSufix: Story = {
  args: {
    leftContent: 'cal.com/',
    rightContent: 'locked',
    placeholder: 'username',
  },
  argTypes: {
    rightContent: {
      options: Object.keys(icons),
      control: {
        type: 'select',
      },
      defaultValue: 'locked',
    },
  },
  parameters: {
    docs: {
      description: {
        story:
          'A propriedade `rightContent` pode receber um ícone ou um texto.',
      },
    },
  },
  render: (args) => (
    <TextInput {...args} rightContent={icons[args.rightContent as string]} />
  ),
}

/*
Observações:
- import type informa explicitamente ao TypeScript que você está interessado apenas em importar as informações do tipo. Isto garante que o módulo importado não 
será incluído na saída.
- Meta e StoryObj são tipos do TypeScript, por isso o import type. 
*/
