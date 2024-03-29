import {
  colors,
  fonts,
  fontSizes,
  fontWeights,
  lineHeights,
  radii,
  space,
} from '@gears-ui/tokens'
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

A função createStitches pode receber um objeto de configuração. No caso, temos:
- themeMap: onde podemos especificar um mapeamento de propriedades do CSS para algum tipo de token - no caso, especificamos que as propriedades height e width 
podem receber qualquer valor definido no token space. Sem ...defaultThemeMap, o mapeamento da biblioteca stitches será substituido pelo nosso.
- theme: onde podemos especificar as variáveis de tema (tokens) - estas variáveis estão disponíveis de forma global neste pacote
*/
