import type { Meta, StoryObj } from '@storybook/react'
import { Button, ButtonProps } from '@gears-ui/react'
import { ArrowRight } from 'phosphor-react'

// type Story = StoryObj<typeof Button>
type Story = StoryObj<ButtonProps>

/* Para contar ao Storybook sobre o componente que estamos documentando e testando, criamos um export default que contém:
 * component - informamos qual é o componente
 * title - especificamos como agrupar ou categorizar o componente na barra lateral do Storybook
 * tags - são usadas para filtrar histórias em diferentes contextos (autodocs ativa a documentação gerada automaticamente para as histórias do componente)
 * args - contém as propriedades envidas para o componente (todas as histórias herdam essas propriedades)
 * argTypes - especificamos o tipo do argumento, assim podemos restringer os valores que ele pode aceitar. Um argumento pode ser uma ação, por exemplo, onClick.
 * Além disso, podemos especificar o tipo de controle do argumento
 */

// const meta: Meta<typeof Button> = {
//   component: Button,
//   title: 'Button',
//   // tags: ['autodocs'], // descomente isto se em .storybook/main.ts estiver docs: { autodocs: 'tag'}
//   args: {
//     children: 'Enviar',
//   },
// }

// export default meta

// Ou

export default {
  component: Button,
  title: 'Form/Button',
  // tags: ['autodocs'], // descomente isto se em .storybook/main.ts estiver docs: { autodocs: 'tag'}
  args: {
    children: 'Enviar',
    variant: 'primary',
    size: 'md',
    disabled: false,
  },
  argTypes: {
    variant: {
      options: ['primary', 'secondary', 'tertiary'],
      control: {
        type: 'inline-radio',
      },
    },
    size: {
      options: ['sm', 'md'],
      control: {
        type: 'inline-radio',
      },
    },
    disabled: {
      control: {
        type: 'boolean',
      },
    },
    onClick: { action: 'clicked' },
  },
} as Meta<ButtonProps>

// Uma história captura o estado renderizado de um componente de UI
// Veja como renderizar Button nos estados "primary", "secondary", "tertiary", "small", "withIcon" e "disabled" e exportar as histórias "Primary", "Secondary", "Tertiary", "Small", "WithIcon" e "Disabled"

export const Primary: Story = {}

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Criar novo',
  },
}

export const Tertiary: Story = {
  args: {
    variant: 'tertiary',
    children: 'Cancelar',
  },
}

export const Small: Story = {
  args: {
    size: 'sm',
  },
}

export const WithIcon: Story = {
  args: {
    children: (
      <>
        Próximo passo
        <ArrowRight weight="bold" />
      </>
    ),
  },
  argTypes: {
    children: {
      control: {
        type: null,
      },
    },
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
