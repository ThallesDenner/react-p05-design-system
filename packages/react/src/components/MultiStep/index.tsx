import { Label, MultiStepContainer, Step, Steps } from './styles'

export interface MultiStepProps {
  size: number
  currentStep?: number
}

export function MultiStep({ size, currentStep = 1 }: MultiStepProps) {
  return (
    <MultiStepContainer>
      <Label>
        Passo {currentStep} de {size}
      </Label>

      {/* Todos os componentes criados com o Stitches recebe a propriedade css, daí podemos realizar uma estilização inline. Além disso, no Stitches podemos usar 
      uma variável CSS para receber o valor de uma variável JavaScript */}
      <Steps css={{ '--steps-size': size }}>
        {Array.from(Array(size), (_, index) => index + 1).map((step) => {
          return <Step key={step} active={currentStep >= step} />
        })}
      </Steps>
    </MultiStepContainer>
  )
}

MultiStep.displayName = 'MultiStep'
