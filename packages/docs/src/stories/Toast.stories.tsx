import type { Meta, StoryObj } from '@storybook/react'
import type { ToastType, ToastPositionType, ToastProps } from '@gears-ui/react'
import { Button, ToastProvider, useToast } from '@gears-ui/react'

// type Story = StoryObj<typeof Toast>
type Story = StoryObj<ToastType>

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
//     <ToastProvider position="topRight">
//       <Toast />
//     </ToastProvider>
//   )
// }

// function Toast() {
//   const { createToast } = useToast()

//   function handleAction() {
//     alert('Ação executada com sucesso!')
//   }

//   return (
//     <>
//       <Button
//         onClick={() =>
//           createToast({
//             title: 'Título da Notificação',
//             message:
//               'Você pode abrir mais notificações clicando no botão e fechá-las no X ou arrastando para o lado.',
//             messageType: 'info',
//             duration: 3000,
//             isClosable: true,
//             // isActive: boolean
//             hasIcon: true,
//             hasProgressBar: true,
//             onAction: handleAction,
//           })
//         }
//       >
//         Abrir notificação
//       </Button>
//     </>
//   )
// }

// Documentação (Abordagem 1)

// export default {
//   title: 'Notifications/Toast',
//   // tags: ['autodocs'], // descomente isto se em .storybook/main.ts estiver docs: { autodocs: 'tag'}
//   args: {
//     toast: {
//       id: '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d',
//       title: 'Título da Notificação',
//       message:
//         'Você pode abrir mais notificações clicando no botão e fechá-las no X ou arrastando para o lado.',
//       messageType: 'info',
//       duration: 5000,
//       isClosable: true,
//       hasIcon: false,
//       hasProgressBar: false,
//       onAction: undefined,
//     },
//   },
//   // argTypes: {},
// } as Meta<ToastProps>

// function Toast({ toast }: ToastProps) {
//   const { createToast } = useToast()

//   return <Button onClick={() => createToast(toast)}>Abrir notificação</Button>
// }

// export function Default(args: ToastProps) {
//   return (
//     <ToastProvider>
//       <Toast toast={args.toast} />
//     </ToastProvider>
//   )
// }

// Documentação (Abordagem 2)

// export default {
//   title: 'Notifications/Toast',
//   // tags: ['autodocs'], // descomente isto se em .storybook/main.ts estiver docs: { autodocs: 'tag'}
//   args: {
//     id: '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d',
//     title: 'Título da Notificação',
//     message:
//       'Você pode abrir mais notificações clicando no botão e fechá-las no X ou arrastando para o lado.',
//     messageType: 'info',
//     duration: 5000,
//     isClosable: true,
//     hasIcon: false,
//     hasProgressBar: false,
//     onAction: undefined,
//   },
//   argTypes: {
//     //   id: {
//     //     control: {
//     //       type: 'text',
//     //     },
//     //   },
//     //   title: {
//     //     control: {
//     //       type: 'text',
//     //     },
//     //   },
//     //   message: {
//     //     control: {
//     //       type: 'text',
//     //     },
//     //   },
//     messageType: {
//       options: ['error', 'info', 'success', 'warning'],
//       control: {
//         type: 'select',
//       },
//     },
//     //   duration: {
//     //     control: {
//     //       type: 'number',
//     //     },
//     //   },
//     //   isClosable: {
//     //     control: {
//     //       type: 'boolean',
//     //     },
//     //   },
//     //   hasIcon: {
//     //     control: {
//     //       type: 'boolean',
//     //     },
//     //   },
//     //   hasProgressBar: {
//     //     control: {
//     //       type: 'boolean',
//     //     },
//     //   },
//     onAction: {
//       control: {
//         type: 'function',
//       },
//     },
//   },
// } as Meta<ToastProps>

// function Toast({ toast }: ToastProps) {
//   const { createToast } = useToast()

//   return <Button onClick={() => createToast(toast)}>Abrir notificação</Button>
// }

// // Uma história captura o estado renderizado de um componente de UI
// // Veja como renderizar Toast nos estados "default", "withIcon", "withProgressBar", "withAction", "withAll" e "customPosition" e exportar as histórias Default,
// // WithIcon, WithProgressBar, WithAction, WithAll e CustomPosition.

// export function Default(args: ToastType) {
//   return (
//     <ToastProvider>
//       <Toast toast={args} />
//     </ToastProvider>
//   )
// }

// Documentação (Abordagem 3)

// Função que recebe um componente (ou uma história) e retorna um novo componente (ou história) envolto em alguma lógica adicional
function decorator(
  Story: React.ComponentType,
  position: ToastPositionType = 'bottomRight',
) {
  return (
    // Todas as histórias serão renderizadas dentro do componente ToastProvider
    <ToastProvider position={position}>
      <Story />
    </ToastProvider>
  )
}

export default {
  title: 'Notifications/Toast',
  // tags: ['autodocs'], // descomente isto se em .storybook/main.ts estiver docs: { autodocs: 'tag'}
  args: {
    id: '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d',
    title: 'Título da Notificação',
    message:
      'Você pode abrir mais notificações clicando no botão e fechá-las no X ou arrastando para o lado.',
    messageType: 'info',
    duration: 5000,
    isClosable: true,
    hasIcon: false,
    hasProgressBar: false,
    onAction: undefined,
  },
  argTypes: {
    //   id: {
    //     control: {
    //       type: 'text',
    //     },
    //   },
    //   title: {
    //     control: {
    //       type: 'text',
    //     },
    //   },
    //   message: {
    //     control: {
    //       type: 'text',
    //     },
    //   },
    messageType: {
      options: ['error', 'info', 'success', 'warning'],
      control: {
        type: 'select',
      },
    },
    //   duration: {
    //     control: {
    //       type: 'number',
    //     },
    //   },
    //   isClosable: {
    //     control: {
    //       type: 'boolean',
    //     },
    //   },
    // hasIcon: {
    //   control: {
    //     type: 'boolean',
    //   },
    // },
    //   hasProgressBar: {
    //     control: {
    //       type: 'boolean',
    //     },
    //   },
    onAction: {
      control: {
        type: 'function',
      },
    },
  },
  decorators: [(Story) => decorator(Story)],
} as Meta<ToastProps>

function Toast(toast: ToastType) {
  const { createToast } = useToast()

  return <Button onClick={() => createToast(toast)}>Abrir notificação</Button>
}

// Uma história captura o estado renderizado de um componente de UI
// Veja como renderizar Toast nos estados "default", "withIcon", "withProgressBar", "withAction", "withAll" e "customPosition" e exportar as histórias Default,
// WithIcon, WithProgressBar, WithAction, WithAll e CustomPosition.

// export function Default(args: ToastType) {
//   return <Toast {...args} />
// }

// Default.parameters = {
//   docs: {
//     description: {
//       story:
//         'Os toasts são criados através do hook `useToast`, o qual deve ser usado dentro do componente `ToastProvider`.',
//     },
//   },
// } as Meta

// export function WithIcon(args: ToastType) {
//   // args.hasIcon = true // isto não atualiza o valor da propriedade hasIcon na interface de controle do Storybook
//   return <Toast {...args} />
// }

// // Isto é necessário para que o valor correto de hasIcon seja mostrado na interface de controle do Storybook
// WithIcon.args = {
//   hasIcon: true,
// } as ToastType

// export function WithProgressBar(args: ToastType) {
//   // args.hasProgressBar = true // isto não atualiza o valor da propriedade hasProgressBar na interface de controle do Storybook
//   return <Toast {...args} />
// }

// // Isto é necessário para que o valor correto de hasProgressBar seja mostrado na interface de controle do Storybook
// WithProgressBar.args = {
//   hasProgressBar: true,
// } as ToastType

// export function WithAction(args: ToastType) {
//   // args.onAction = () => alert('Ação executada com sucesso!') // isto não atualiza o valor da propriedade onAction na interface de controle do Storybook
//   return <Toast {...args} />
// }

// // Isto é necessário para que o valor correto de onAction seja mostrado na interface de controle do Storybook
// WithAction.args = {
//   onAction: () => alert('Ação executada com sucesso!'),
// } as ToastType

// export function WithAll(args: ToastType) {
//   // Isto não atualiza o valor das propriedades abaixo na interface de controle do Storybook
//   // args.hasIcon = true
//   // args.hasProgressBar = true
//   // args.onAction = () => alert('Ação executada com sucesso!')
//   return <Toast {...args} />
// }

// // Isto é necessário para que o valor correto das propriedades hasIcon, hasProgressBar e onAction seja mostrado na interface de controle do Storybook
// WithAll.args = {
//   hasIcon: true,
//   hasProgressBar: true,
//   onAction: () => alert('Ação executada com sucesso!'),
// } as ToastType

// export function CustomPosition(args: ToastType) {
//   return decorator(() => <Default {...args} />, 'topRight')
// }

// CustomPosition.parameters = {
//   docs: {
//     description: {
//       story:
//         'Por padrão os toasts são posicionados na parte inferior esquerda da tela, mas podemos alterar isso com a propriedade `position`, a qual deve ser passada para o componente `ToastProvider`.',
//     },
//   },
// } as Meta

// O Storybook 7 introduziu uma nova API chamada "Component Story Format" (CSF), e esta abordagem é uma maneira de definir histórias nesse formato.

export const Default: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'Os toasts são criados através do hook `useToast`, o qual deve ser usado dentro do componente `ToastProvider`.',
      },
    },
  },
  render: (args) => <Toast {...args} />,
}

export const WithIcon: Story = {
  args: {
    hasIcon: true,
  },
  render: (args) => <Toast {...args} />,
}

export const WithProgressBar: Story = {
  args: {
    hasProgressBar: true,
  },
  render: (args) => <Toast {...args} />,
}

export const WithAction: Story = {
  args: {
    onAction: () => alert('Ação executada com sucesso!'),
  },
  render: (args) => <Toast {...args} />,
}

export const WithAll: Story = {
  args: {
    hasIcon: true,
    hasProgressBar: true,
    onAction: () => alert('Ação executada com sucesso!'),
  },
  render: (args) => <Toast {...args} />,
}

export const CustomPosition: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'Por padrão os toasts são posicionados na parte inferior esquerda da tela, mas podemos alterar isso com a propriedade `position`, a qual deve ser passada para o componente `ToastProvider`.',
      },
    },
  },
  decorators: [(Story) => decorator(Story, 'topRight')],
  render: (args) => <Toast {...args} />,
}

/*
Observações:
- import type informa explicitamente ao TypeScript que você está interessado apenas em importar as informações do tipo. Isto garante que o módulo importado não 
será incluído na saída.
- Meta e StoryObj são tipos do TypeScript, por isso o import type. 
*/
