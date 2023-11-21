import{j as r}from"./jsx-runtime-c3de6e4e.js";import{b as q,u as C,B as R}from"./index-ae6e4719.js";import"./index-65d0a824.js";import"./_commonjsHelpers-725317a4.js";import"./extends-98964cd2.js";import"./v4-4a60fe23.js";function I(o,i="bottomRight"){return r.jsx(q,{position:i,children:r.jsx(o,{})})}const w={title:"Notifications/Toast",args:{id:"9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d",title:"Título da Notificação",message:"Você pode abrir mais notificações clicando no botão e fechá-las no X ou arrastando para o lado.",messageType:"info",duration:5e3,isClosable:!0,hasIcon:!1,hasProgressBar:!1,onAction:void 0},argTypes:{messageType:{options:["error","info","success","warning"],control:{type:"select"}},onAction:{control:{type:"function"}}},decorators:[o=>I(o)]};function s(o){const{createToast:i}=C();return r.jsx(R,{onClick:()=>i(o),children:"Abrir notificação"})}const e={parameters:{docs:{description:{story:"Os toasts são criados através do hook `useToast`, o qual deve ser usado dentro do componente `ToastProvider`."}}},render:o=>r.jsx(s,{...o})},a={args:{hasIcon:!0},render:o=>r.jsx(s,{...o})},t={args:{hasProgressBar:!0},render:o=>r.jsx(s,{...o})},n={args:{onAction:()=>alert("Ação executada com sucesso!")},render:o=>r.jsx(s,{...o})},c={args:{hasIcon:!0,hasProgressBar:!0,onAction:()=>alert("Ação executada com sucesso!")},render:o=>r.jsx(s,{...o})},d={parameters:{docs:{description:{story:"Por padrão os toasts são posicionados na parte inferior esquerda da tela, mas podemos alterar isso com a propriedade `position`, a qual deve ser passada para o componente `ToastProvider`."}}},decorators:[o=>I(o,"topRight")],render:o=>r.jsx(s,{...o})};var p,u,m;e.parameters={...e.parameters,docs:{...(p=e.parameters)==null?void 0:p.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Os toasts são criados através do hook \`useToast\`, o qual deve ser usado dentro do componente \`ToastProvider\`.'
      }
    }
  },
  render: args => <Toast {...args} />
}`,...(m=(u=e.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};var g,l,h;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    hasIcon: true
  },
  render: args => <Toast {...args} />
}`,...(h=(l=a.parameters)==null?void 0:l.docs)==null?void 0:h.source}}};var T,f,x;t.parameters={...t.parameters,docs:{...(T=t.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    hasProgressBar: true
  },
  render: args => <Toast {...args} />
}`,...(x=(f=t.parameters)==null?void 0:f.docs)==null?void 0:x.source}}};var P,A,b;n.parameters={...n.parameters,docs:{...(P=n.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    onAction: () => alert('Ação executada com sucesso!')
  },
  render: args => <Toast {...args} />
}`,...(b=(A=n.parameters)==null?void 0:A.docs)==null?void 0:b.source}}};var v,j,y;c.parameters={...c.parameters,docs:{...(v=c.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    hasIcon: true,
    hasProgressBar: true,
    onAction: () => alert('Ação executada com sucesso!')
  },
  render: args => <Toast {...args} />
}`,...(y=(j=c.parameters)==null?void 0:j.docs)==null?void 0:y.source}}};var B,S,W;d.parameters={...d.parameters,docs:{...(B=d.parameters)==null?void 0:B.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Por padrão os toasts são posicionados na parte inferior esquerda da tela, mas podemos alterar isso com a propriedade \`position\`, a qual deve ser passada para o componente \`ToastProvider\`.'
      }
    }
  },
  decorators: [Story => decorator(Story, 'topRight')],
  render: args => <Toast {...args} />
}`,...(W=(S=d.parameters)==null?void 0:S.docs)==null?void 0:W.source}}};const V=["Default","WithIcon","WithProgressBar","WithAction","WithAll","CustomPosition"];export{d as CustomPosition,e as Default,n as WithAction,c as WithAll,a as WithIcon,t as WithProgressBar,V as __namedExportsOrder,w as default};
//# sourceMappingURL=Toast.stories-c373b9d5.js.map
