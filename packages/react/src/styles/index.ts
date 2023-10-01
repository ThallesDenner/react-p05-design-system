import {
  colors,
  fonts,
  fontSizes,
  fontWeights,
  lineHeights,
  radii,
  space,
} from '@ignite-ui/tokens'
import { createStitches, defaultThemeMap } from '@stitches/react'

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  createTheme,
  theme,
  config,
} = createStitches({
  themeMap: {
    ...defaultThemeMap,
    height: 'space',
    width: 'space',
  },

  theme: {
    colors,
    fontSizes,
    fontWeights,
    fonts,
    lineHeights,
    radii,
    space,
  },
})

/* Observações:
A função createStitches retorna o seguinte:
styled: uma função para criar componentes React com estilos. 
css: uma função para criar regras CSS.
globalCss: uma função para criar estilos globais.
keyframes: uma função para criar quadros-chave.
getCssText: uma função para obter estilos como uma string, útil para SSR.
createTheme: uma função para criar temas adicionais.
theme: uma função para acessar dados de tema padrão.
config: um objeto contendo a configuração hidratada.

Em themeMap podemos especificar um mapeamento de propriedades do CSS para algum tipo de token. Sem ...defaultThemeMap, o mapeamento da biblioteca stitches será 
substituido pelo nosso.
*/
