// O código comentado não funciona com react-hook-form, pois para que ele consiga recuperar o valor do Input, ele utiliza as refs do React.
// import { ComponentProps } from 'react'
// import { Input, Prefix, TextInputContainer } from './styles'

// // ComponentProps extrai o tipo dos adereços de qualquer componente (assim, não precisamos criar a tipagem das props manualmente)
// export interface TextInputProps extends ComponentProps<typeof Input> {
//   prefix?: string
// }

// export function TextInput({ prefix, ...props }: TextInputProps) {
//   return (
//     <TextInputContainer>
//       {/* !! converte prefix em um valor booleano */}
//       {!!prefix && <Prefix>{prefix}</Prefix>}
//       <Input {...props} />
//     </TextInputContainer>
//   )
// }

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
