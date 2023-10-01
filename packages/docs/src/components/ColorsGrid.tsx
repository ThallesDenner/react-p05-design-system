// import { colors } from '@ignite-ui/tokens'
// import { getContrast } from 'polished'

// export function ColorsGrid() {
//   return Object.entries(colors).map(([key, color]) => {
//     return (
//       <div key={key} style={{ backgroundColor: color, padding: '2rem' }}>
//         <div
//           style={{
//             display: 'flex',
//             justifyContent: 'space-between',
//             fontFamily: 'monospace',
//             color: getContrast(color, '#FFF') < 3.5 ? '#000' : '#FFF',
//           }}
//         >
//           <strong>${key}</strong>
//           <span>{color}</span>
//         </div>
//       </div>
//     )
//   })
// }

// /*
//   Observação:
//   const colors = {
//     key1: value1,
//     key2: value2,
//     ...
//     keyN: valueN,
//   }

//   const colorArray = Object.entries(colors) // retorna [[key1, value1], [key2, value2], ..., [keyN, valueN]]

//   Então, no parâmetro do método map, estamos desestruturando cada subarray de colorArray
//   Object.entries(colors).map(([key, color]) => {})

//   Essa desestruturação funciona assim:
//   const arrayOfNumbers = [1, 2, 3, 4, 5]
//   const [x1, x2] = arrayOfNumbers
//   console.log(x1)  // 1
//   console.log(x2)  // 2
// */

import { ColorPalette, ColorItem } from '@storybook/blocks'
import { colors } from '@ignite-ui/tokens'

export function ColorsGrid() {
  return (
    <ColorPalette>
      {Object.entries(colors).map(([key, color]) => (
        <ColorItem
          key={key}
          title={`$${key}`}
          subtitle=""
          colors={{ [key]: color }}
        />
      ))}
    </ColorPalette>
  )
}
