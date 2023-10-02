// Essa implementação possui conflito de tipagem entre o size do TextInputContainer e o size do Input
// import { ComponentProps, ElementRef, forwardRef } from 'react'
// import { Input, Prefix, TextInputContainer } from './styles'

// // ComponentProps extrai o tipo dos adereços de qualquer componente (assim, não precisamos criar a tipagem das props manualmente)
// export interface TextInputProps extends ComponentProps<typeof Input> {
//   prefix?: string
//   containerProps?: ComponentProps<typeof TextInputContainer>
// }

// export const TextInput = forwardRef<ElementRef<typeof Input>, TextInputProps>(
//   ({ prefix, containerProps, ...props }, ref) => {
//     return (
//       <TextInputContainer {...containerProps}>
//         {!!prefix && <Prefix>{prefix}</Prefix>}
//         <Input ref={ref} {...props} />
//       </TextInputContainer>
//     )
//   },
// )

// TextInput.displayName = 'TextInput'

/**
 * Observações:
 * ref - é uma propriedade especial do React que nos permite obter uma referência a um nó DOM. Através dela, podemos, por exemplo, executar métodos diretamente
 * no input, adicionar um evento, etc. Contudo, se tentarmos passar a propriedade ref para componentes funcionais, não conseguiremos acessá-la via props.
 *
 * forwardRef - permite que um componente receba uma referência e encaminha a mesma para um componente filho. Essa função retorna um componente React que pode
 * ser renderizado em JSX. Ao contrário dos componentes React definidos como funções simples, o componente retornado por forwardRef é capaz de receber ref. No
 * caso, usamos para que o componente TextInput possa reber ref e repassá-la para o componente Input.
 *
 * ElementRef - extrai a tipagem de outro componente. No caso, usamos para extrair a tipagem do componente Input. A intenção é aproveitar a tipagem da
 * propriedade ref, que já é aceita por padrão pelo componente Input. Daí, usamos isso para tipar o parâmetro ref de TextInput adequadamente.
 */

import { ComponentProps, ElementRef, forwardRef } from 'react'
import { Input, Prefix, TextInputContainer } from './styles'

// ComponentProps extrai o tipo dos adereços de qualquer componente (assim, não precisamos criar a tipagem das props manualmente)
export interface TextInputProps
  extends Omit<ComponentProps<typeof Input>, 'size'> {
  prefix?: string
  size?: ComponentProps<typeof TextInputContainer>['size']
}

export const TextInput = forwardRef<ElementRef<typeof Input>, TextInputProps>(
  ({ prefix, size, ...props }, ref) => {
    return (
      <TextInputContainer size={size}>
        {!!prefix && <Prefix>{prefix}</Prefix>}
        <Input ref={ref} {...props} />
      </TextInputContainer>
    )
  },
)

TextInput.displayName = 'TextInput'

/**
 * Observações:
 * Omit - permite construir um tipo com as propriedades de T, exceto aquelas do tipo K.
 *
 * O elemento HTML <input/> tem um atributo size por padrão que recebe number | undefined e o componente TextInputContainer tem uma propriedade chamada size,
 * portanto, existe um conflito de tipagem em TextInputProps. Para resolver isso usamos a função Omit.
 *
 * ref - é uma propriedade especial do React que nos permite obter uma referência a um nó DOM. Através dela, podemos, por exemplo, executar métodos diretamente
 * no input, adicionar um evento, etc. Contudo, se tentarmos passar a propriedade ref para componentes funcionais, não conseguiremos acessá-la via props.
 *
 * forwardRef - permite que um componente receba uma referência e encaminha a mesma para um componente filho. Essa função retorna um componente React que pode
 * ser renderizado em JSX. Ao contrário dos componentes React definidos como funções simples, o componente retornado por forwardRef é capaz de receber ref. No
 * caso, usamos para que o componente TextInput possa reber ref e repassá-la para o componente Input.
 *
 * ElementRef - extrai a tipagem de outro componente. No caso, usamos para extrair a tipagem do componente Input. A intenção é aproveitar a tipagem da
 * propriedade ref, que já é aceita por padrão pelo componente Input. Daí, usamos isso para tipar o parâmetro ref de TextInput adequadamente.
 */
