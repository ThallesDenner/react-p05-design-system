import{j as o}from"./jsx-runtime-c3de6e4e.js";import{T as e,B as r,a as m}from"./index-ae6e4719.js";import"./index-65d0a824.js";import"./_commonjsHelpers-725317a4.js";import"./extends-98964cd2.js";import"./v4-4a60fe23.js";function u(t){return o.jsx(m,{css:{height:"$40",display:"flex",justifyContent:"center",alignItems:"center",gap:"$4",backgroundColor:"$gray300"},children:o.jsx(t,{})})}const f={component:e,title:"Overlay/Tooltip",args:{label:"Tooltip acima do botão",hasArrow:!0,variant:"dark",side:"top",align:"center",children:o.jsx(r,{children:"Passe o mouse"})},argTypes:{variant:{options:["dark","light","darkTransparent","lightTransparent"],control:{type:"inline-radio"}},side:{options:["left","right","top","bottom"],control:{type:"inline-radio"}},align:{options:["start","center","end"],control:{type:"inline-radio"}},children:{control:{type:null}}},decorators:[t=>u(t)]},a={render:t=>o.jsx(e,{...t})},n={parameters:{controls:{disable:!0}},render:t=>o.jsxs(o.Fragment,{children:[o.jsx(e,{...t,side:"left",align:"center",label:"Tooltip à esquerda do botão",variant:"dark",children:o.jsx(r,{children:"Passe o mouse"})}),o.jsx(e,{...t,side:"top",align:"start",label:"Tooltip acima do botão",variant:"darkTransparent",children:o.jsx(r,{children:"Passe o mouse"})}),o.jsx(e,{...t,side:"bottom",align:"end",label:"Tooltip abaixo do botão",variant:"light",children:o.jsx(r,{children:"Passe o mouse"})}),o.jsx(e,{...t,side:"right",align:"center",label:"Tooltip à direita do botão",variant:"lightTransparent",children:o.jsx(r,{children:"Passe o mouse"})})]})};var s,i,l;a.parameters={...a.parameters,docs:{...(s=a.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: args => <Tooltip {...args} />
}`,...(l=(i=a.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};var d,p,c;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: args => <>
      <Tooltip {...args} side="left" align="center" label="Tooltip à esquerda do botão" variant="dark">
        <Button>Passe o mouse</Button>
      </Tooltip>
      <Tooltip {...args} side="top" align="start" label="Tooltip acima do botão" variant="darkTransparent">
        <Button>Passe o mouse</Button>
      </Tooltip>
      <Tooltip {...args} side="bottom" align="end" label="Tooltip abaixo do botão" variant="light">
        <Button>Passe o mouse</Button>
      </Tooltip>
      <Tooltip {...args} side="right" align="center" label="Tooltip à direita do botão" variant="lightTransparent">
        <Button>Passe o mouse</Button>
      </Tooltip>
    </>
}`,...(c=(p=n.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};const v=["Default","CustomColorAndPosition"];export{n as CustomColorAndPosition,a as Default,v as __namedExportsOrder,f as default};
//# sourceMappingURL=Tooltip.stories-5c806ee7.js.map
