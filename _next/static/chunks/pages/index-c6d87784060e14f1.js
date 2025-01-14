(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5405],{9536:function(e,n,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return s(3087)}])},3087:function(e,n,s){"use strict";s.r(n),s.d(n,{default:function(){return nl}});var i=s(4246),t=s(7378),r=s(7098),a=s(6677),o=s(2238),l=s(4366),c=s(149),d=s(624),h=s(1251),u=s.n(h);function m(e){let{className:n,...s}=e;return(0,i.jsx)(c.x,{component:"span",className:(0,d.Z)(u().code,n),...s})}var p=s(1996);function x(e){let{errorOf:n}=e;return(0,i.jsxs)(c.x,{children:[(0,i.jsxs)(c.x,{span:!0,c:"red",children:["Error loading component ",n," data."," "]}),"If you see this message please let us know by"," ",(0,i.jsx)(p.e,{href:"https://github.com/mantinedev/mantine/issues/new?assignees=&labels=&template=docs_report.yml",target:"_blank",children:"opening an issue on GitHub"}),"."]})}function g(e){let{component:n,query:s,data:t}=e;if(!t[n])return(0,i.jsx)(x,{errorOf:"props"});let r=Object.keys(t[n].props).filter(e=>t[n].props[e].name.toLowerCase().includes(s.toLowerCase().trim())).map(e=>{let r=t[n].props[e];return(0,i.jsxs)(o.i.Tr,{children:[(0,i.jsxs)(o.i.Td,{style:{whiteSpace:"nowrap"},children:[(0,i.jsx)(l.y,{highlight:s,component:"span",fz:"sm",children:r.name}),r.required&&(0,i.jsxs)(c.x,{component:"sup",c:"red",fz:"xs",children:[" ","*"]})]}),(0,i.jsx)(o.i.Td,{children:(0,i.jsx)(m,{children:r.type.name})}),(0,i.jsx)(o.i.Td,{children:(0,i.jsx)(c.x,{fz:"sm",dangerouslySetInnerHTML:{__html:r.description}})})]},e)});return 0===r.length?(0,i.jsx)(c.x,{c:"dimmed",mb:"xl",fz:"sm",children:"Nothing found"}):(0,i.jsx)(o.i.ScrollContainer,{minWidth:800,children:(0,i.jsxs)(o.i,{layout:"fixed",children:[(0,i.jsx)(o.i.Thead,{children:(0,i.jsxs)(o.i.Tr,{children:[(0,i.jsx)(o.i.Th,{w:210,children:"Name"}),(0,i.jsx)(o.i.Th,{w:310,children:"Type"}),(0,i.jsx)(o.i.Th,{children:"Description"})]})}),(0,i.jsx)(o.i.Tbody,{children:r})]})})}var j=s(4046),b=s(2033),f=s(7993);function _(e){let{component:n,componentPrefix:s}=e;return s?s===n?n:"".concat(s,".").concat(n.replace(s,"")):n}var v=s(5628),y=s.n(v);function T(e){let{components:n,componentPrefix:s,data:r}=e,[a,o]=(0,t.useState)(""),l=n.map(e=>(0,i.jsxs)("div",{className:y().section,children:[(0,i.jsxs)(j.D,{order:2,className:y().title,children:[_({component:e,componentPrefix:s})," component props"]}),(0,i.jsx)(g,{component:e,query:a,data:r})]},e));return(0,i.jsxs)("div",{className:y().root,children:[(0,i.jsx)(b.o,{className:y().search,value:a,onChange:e=>o(e.currentTarget.value),leftSection:(0,i.jsx)(f.Z,{className:y().searchIcon}),placeholder:"Search props",radius:"md",size:"lg",autoFocus:!0}),l]})}var k=s(3788),N=s(4485),w=s(9610),z=s(2424),C=s(1598),S=s.n(C);function P(e){if(0===e.length)return -1;let n=e.reduce((e,n,s)=>Math.abs(e.position)<Math.abs(n.y)?e:{index:s,position:n.y},{index:0,position:e[0].y});return n.index}function A(e){let{withTabs:n}=e,[s,r]=(0,t.useState)(0),[o,l]=(0,t.useState)([]),d=(0,t.useRef)([]),h=(0,a.useRouter)(),u=o.filter(e=>e.depth>1),m=()=>{r(P(d.current.map(e=>e.getNode().getBoundingClientRect())))};if((0,t.useEffect)(()=>{let e=function(){let e=document.getElementById("mdx");return e?function(e){let n=[];for(let s=0;s<e.length;s+=1){let i=e[s];i.id&&n.push({depth:parseInt(i.getAttribute("data-order"),10),content:i.getAttribute("data-heading")||"",id:i.id,getNode:()=>document.getElementById(i.id)})}return n}(Array.from(e.querySelectorAll("[data-heading]"))):[]}();return d.current=e,l(e),r(P(e.map(e=>e.getNode().getBoundingClientRect()))),window.addEventListener("scroll",m),()=>window.removeEventListener("scroll",m)},[]),0===u.length)return null;let p=u.map((e,n)=>(0,i.jsx)(c.x,{component:"a",fz:"sm",className:S().link,mod:{active:s===n},href:"#".concat(e.id),__vars:{"--toc-link-offset":"".concat(e.depth-1)},onClick:n=>{n.preventDefault(),h.replace("".concat(h.pathname,"#").concat(e.id))},children:e.content},e.id));return(0,i.jsx)(k.x,{component:"nav",mod:{"with-tabs":n},className:S().wrapper,children:(0,i.jsx)("div",{className:S().inner,children:(0,i.jsxs)("div",{children:[(0,i.jsxs)("div",{className:S().header,children:[(0,i.jsx)(z.Z,{style:{width:(0,N.h)(20),height:(0,N.h)(20)},stroke:1.5}),(0,i.jsx)(c.x,{className:S().title,children:"Table of contents"})]}),(0,i.jsx)(w.x.Autosize,{mah:"calc(100vh - ".concat((0,N.h)(140),")"),type:"never",offsetScrollbars:!0,children:(0,i.jsx)("div",{className:S().items,children:p})})]})})})}var E=s(2752),D=s.n(E);function I(e){let{children:n,...s}=e;return(0,i.jsx)(c.x,{component:"span","data-docs-inline-code":!0,dangerouslySetInnerHTML:{__html:n.replace(/`([^`]+)`/g,"<code>$1</code>").replace(/!important!/g,"<b>Important</b>")},fz:"sm",...s})}function R(e){let{data:n,component:s,fixedLayout:t=!0,...r}=e,a=Object.keys(n.selectors).map(e=>(0,i.jsxs)(o.i.Tr,{children:[(0,i.jsx)(o.i.Td,{children:e}),(0,i.jsx)(o.i.Td,{children:(0,i.jsxs)(m,{children:[".mantine-",s,"-",e]})}),(0,i.jsx)(o.i.Td,{children:(0,i.jsx)(I,{fz:"sm",children:n.selectors[e]})})]},e));return(0,i.jsx)(o.i.ScrollContainer,{minWidth:600,children:(0,i.jsxs)(o.i,{layout:t?"fixed":void 0,...r,children:[(0,i.jsx)(o.i.Thead,{children:(0,i.jsxs)(o.i.Tr,{children:[(0,i.jsx)(o.i.Th,{w:t?210:void 0,children:"Selector"}),(0,i.jsx)(o.i.Th,{w:t?310:void 0,children:"Static selector"}),(0,i.jsx)(o.i.Th,{children:"Description"})]})}),(0,i.jsx)(o.i.Tbody,{children:a})]})})}function L(e){let{data:n,fixedLayout:s=!0,...t}=e,r=Object.keys(n.vars).reduce((e,s)=>(Object.keys(n.vars[s]).forEach((t,r)=>{e.push((0,i.jsxs)(o.i.Tr,{children:[0===r&&(0,i.jsx)(o.i.Td,{rowSpan:Object.keys(n.vars[s]).length,children:s}),(0,i.jsx)(o.i.Td,{children:(0,i.jsx)(m,{children:t})}),(0,i.jsx)(o.i.Td,{children:(0,i.jsx)(I,{fz:"sm",children:n.vars[s][t]})})]},"".concat(s,"-").concat(t)))}),e),[]);return(0,i.jsx)(o.i.ScrollContainer,{minWidth:600,children:(0,i.jsxs)(o.i,{layout:s?"fixed":void 0,...t,children:[(0,i.jsx)(o.i.Thead,{children:(0,i.jsxs)(o.i.Tr,{children:[(0,i.jsx)(o.i.Th,{w:s?210:void 0,children:"Selector"}),(0,i.jsx)(o.i.Th,{w:s?310:void 0,children:"Variable"}),(0,i.jsx)(o.i.Th,{children:"Description"})]})}),(0,i.jsx)(o.i.Tbody,{children:r})]})})}function V(e){var n,s,t;let{data:r,fixedLayout:a=!0,...l}=e,c=null===(n=r.modifiers)||void 0===n?void 0:n.some(e=>!!e.condition),d=null===(s=r.modifiers)||void 0===s?void 0:s.some(e=>!!e.value),h=(null===(t=r.modifiers)||void 0===t?void 0:t.map((e,n)=>(0,i.jsxs)(o.i.Tr,{children:[(0,i.jsx)(o.i.Td,{children:Array.isArray(e.selector)?e.selector.join(", "):e.selector}),(0,i.jsx)(o.i.Td,{children:(0,i.jsx)(m,{children:e.modifier})}),c&&(0,i.jsx)(o.i.Td,{children:(0,i.jsx)(I,{fz:"sm",children:e.condition||"–"})}),d&&(0,i.jsx)(o.i.Td,{children:(0,i.jsx)(I,{fz:"sm",children:e.value||"–"})})]},n)))||[];return(0,i.jsx)(o.i.ScrollContainer,{minWidth:600,children:(0,i.jsxs)(o.i,{layout:a?"fixed":void 0,...l,children:[(0,i.jsx)(o.i.Thead,{children:(0,i.jsxs)(o.i.Tr,{children:[(0,i.jsx)(o.i.Th,{w:a?210:void 0,children:"Selector"}),(0,i.jsx)(o.i.Th,{w:a?310:void 0,children:"Attribute"}),c&&(0,i.jsx)(o.i.Th,{children:"Condition"}),d&&(0,i.jsx)(o.i.Th,{children:"Value"})]})}),(0,i.jsx)(o.i.Tbody,{children:h})]})})}var M=s(2118),q=s.n(M);function F(e){let{component:n,componentPrefix:s,data:t}=e;if(!t)return(0,i.jsx)(x,{errorOf:"Styles API"});let r=_({component:n,componentPrefix:s});return(0,i.jsxs)("div",{className:q().root,children:[(0,i.jsxs)("div",{className:q().section,children:[(0,i.jsxs)(j.D,{order:2,className:q().title,children:[r," selectors"]}),(0,i.jsx)(R,{component:n,data:t})]}),Object.keys(t.vars).length>0&&(0,i.jsxs)("div",{className:q().section,children:[(0,i.jsxs)(j.D,{order:2,className:q().title,children:[r," CSS variables"]}),(0,i.jsx)(L,{data:t})]}),Array.isArray(t.modifiers)&&t.modifiers.length>0&&(0,i.jsxs)("div",{className:q().section,children:[(0,i.jsxs)(j.D,{order:2,className:q().title,children:[r," data attributes"]}),(0,i.jsx)(V,{data:t})]})]})}var O=s(8970),Z=s(531),H=s(8972),U=s(1363),W=s(3988),B=s(7040),G=s(103),X=s(7923),$=s(6239),J=s.n($);function Y(e){let{className:n,...s}=e,t=(0,B.rZ)();return(0,i.jsx)(G.V,{className:(0,d.Z)(J().root,n),icon:(0,i.jsx)(W.Z,{className:J().icon}),radius:"md",__vars:{"--docs-bq-code-bg-light":(0,X.m)(t.colors.blue[6],.2),"--docs-bq-code-bg-dark":(0,X.m)(t.colors.blue[4],.2)},...s})}var K=s(6938),Q=s.n(K);function ee(e){let{id:n,children:s,order:t=2,...r}=e;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("div",{id:n,"data-heading":s,"data-order":t,className:Q().titleOffset}),(0,i.jsx)(j.D,{order:t,className:Q().title,...r,children:(0,i.jsx)("a",{className:(0,d.Z)(Q().titleLink,"mantine-focus-auto"),href:"#".concat(n),children:s})})]})}let en=e=>n=>(0,i.jsx)(ee,{order:e,...n});function es(e){let{children:n}=e;return(0,i.jsx)(U.P,{className:Q().code,code:n.props.children,language:function(e){let n=(e.props.className||"").match(RegExp("language-(?<lang>.*)"));return n&&n.groups&&n.groups.lang?n.groups.lang:"tsx"}(n)})}function ei(e){return(0,i.jsx)("p",{className:Q().paragraph,...e})}function et(e){return(0,i.jsx)("ul",{className:Q().ul,...e})}function er(e){return(0,i.jsx)("li",{className:Q().li,...e})}function ea(e){let{href:n,...s}=e;return(0,i.jsx)(p.e,{className:Q().link,href:n,...s})}function eo(e){return{img:Z.E,ul:et,li:er,p:ei,a:ea,blockquote:Y,code:O.E,h1:en(1),h2:en(2),h3:en(3),h4:en(4),h5:en(5),h6:en(6),pre:es,Demo:H.B,...e}}function el(e){let{components:n,data:s,componentPrefix:t}=e,r=n.map(e=>(0,i.jsx)("div",{className:q().group,children:(0,i.jsx)(F,{component:e,componentPrefix:t,data:s[e]})},e));return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)("div",{className:q().groupsHeader,children:[(0,i.jsx)(ee,{style:{marginTop:0},children:"Styles API"}),(0,i.jsxs)(ei,{style:{marginTop:0},children:[(0,i.jsx)(O.E,{children:n[0]})," component supports"," ",(0,i.jsx)(ea,{href:"https://mantine.dev/styles/styles-api",target:"_blank",children:"Styles API"}),". With Styles API, you can customize styles of any inner element. Follow"," ",(0,i.jsx)(ea,{href:"https://mantine.dev/styles/styles-api",target:"_blank",children:"the documentation"})," ","to learn how to use CSS modules, CSS variables and inline styles to get full control over component styles."]})]}),r]})}function ec(e){let{children:n,docgen:s,componentsProps:o,componentsStyles:l,stylesApiData:c,componentPrefix:d}=e,h=(0,a.useRouter)(),[u,m]=(0,t.useState)("docs"),p=Array.isArray(o),x=Array.isArray(l);return((0,t.useEffect)(()=>{m(window.location.search.replace("?t=","")||"docs")},[]),p||x)?(0,i.jsxs)(r.m,{variant:"outline",value:u,classNames:{root:D().root,list:D().tabsList,tab:D().tab},keepMounted:!1,radius:"md",onChange:e=>{h.replace("docs"===e?h.pathname:"".concat(h.pathname,"?t=").concat(e)),m(e)},children:[(0,i.jsx)("div",{className:D().tabsWrapper,children:(0,i.jsxs)(r.m.List,{children:[(0,i.jsx)(r.m.Tab,{value:"docs",children:"Documentation"}),p&&(0,i.jsx)(r.m.Tab,{value:"props",children:"Props"}),x&&(0,i.jsx)(r.m.Tab,{value:"styles-api",children:"Styles API"})]})}),(0,i.jsx)(r.m.Panel,{value:"docs",children:(0,i.jsxs)("div",{className:D().tabContent,"data-main":!0,children:[(0,i.jsx)("div",{className:D().main,id:"mdx",children:n}),(0,i.jsx)("div",{className:D().tableOfContents,children:(0,i.jsx)(A,{withTabs:!0})})]})}),(0,i.jsx)(r.m.Panel,{value:"props",children:(0,i.jsx)("div",{className:D().tabContent,"data-secondary":!0,children:(0,i.jsx)(T,{components:o,data:s})})}),(0,i.jsx)(r.m.Panel,{value:"styles-api",children:(0,i.jsx)("div",{className:D().tabContent,"data-secondary":!0,children:c&&(0,i.jsx)(el,{data:c,components:l,componentPrefix:d})})})]}):null}var ed=s(7653),eh=s(5083),eu=s(1864),em=s(2972),ep=s(4010),ex=s(3738),eg=s(5608),ej=s(4987),eb=s(2657),ef=s(2923),e_={i8:"1.0.1"},ev=s(4128),ey=s.n(ev),eT=s(3266),ek=s.n(eT);function eN(e){let{label:n,icon:s,children:t,link:r}=e,a=r?(0,i.jsxs)("a",{href:r,target:"_blank",className:ek().body,rel:"noreferrer",children:[(0,i.jsx)("div",{className:ek().icon,children:s}),(0,i.jsx)("div",{className:ek().content,children:t})]}):(0,i.jsxs)("div",{className:ek().body,children:[(0,i.jsx)("div",{className:ek().icon,children:s}),(0,i.jsx)("div",{className:ek().content,children:t})]});return(0,i.jsxs)("div",{className:ek().root,children:[(0,i.jsx)("div",{className:ek().label,children:n}),a]})}function ew(e){let{data:n}=e;return(0,i.jsx)("header",{className:ey().root,children:(0,i.jsxs)(ed.W,{size:"lg",children:[(0,i.jsx)(j.D,{className:ey().title,children:n.packageName}),(0,i.jsx)(c.x,{className:ey().description,children:n.packageDescription}),(0,i.jsxs)("div",{className:ey().links,children:[(0,i.jsx)(eN,{label:"Version",icon:(0,i.jsx)(ep.Z,{size:18,stroke:1.5}),children:(0,i.jsxs)(eh.C,{children:["v",e_.i8]})}),(0,i.jsx)(eN,{label:"Changelog",icon:(0,i.jsx)(eu.E,{size:16}),link:n.repositoryUrl+"/releases/tag/"+e_.i8,children:"View the Changelog"}),(0,i.jsx)(eN,{label:"Source",icon:(0,i.jsx)(eu.E,{size:16}),link:n.repositoryUrl,children:"View source code"}),(0,i.jsx)(eN,{label:"Package",icon:(0,i.jsx)(em._,{size:16}),link:"https://npmjs.com/package/".concat(n.packageName),children:n.packageName}),(0,i.jsx)(eN,{label:"See More",icon:(0,i.jsx)(ex.Z,{size:16}),link:"https://mantine-extensions.vercel.app/",children:"Mantine Extensions"}),(0,i.jsx)(eN,{label:"Docs",icon:(0,i.jsx)(eg.Z,{size:18,stroke:1.5}),link:n.mdxFileUrl,children:"Edit this page"}),(0,i.jsxs)(eN,{label:"Built by",icon:(0,i.jsx)(ej.Z,{size:18,stroke:1.5}),link:"https://github.com/".concat(n.author.githubUsername),children:[n.author.name," ",(0,i.jsxs)(c.x,{span:!0,c:"dimmed",inherit:!0,children:["(@",n.author.githubUsername,")"]})]}),(0,i.jsx)(eN,{label:"License",icon:(0,i.jsx)(eb.Z,{size:18,stroke:1.5}),link:n.licenseUrl,children:"MIT"}),(0,i.jsx)(eN,{label:"Support",icon:(0,i.jsx)(ef.Z,{color:"red",size:18,stroke:1.5}),link:"https://github.com/sponsors/gfazioli?o=esb",children:"Become a sponsor"})]})]})})}var ez=s(805),eC=s(2153),eS=s(3994),eP=s(1487),eA=s(4971),eE=s(633),eD=s(9189),eI=s(2206),eR=s(2905),eL=s(5966);let eV={packageName:"@gfazioli/mantine-rings-progress",packageDescription:"A Mantine component that replicates the progress rings of Apple Watch.",mdxFileUrl:"https://github.com/gfazioli/mantine-rings-progress/blob/master/docs/pages/index.mdx",repositoryUrl:"https://github.com/gfazioli/mantine-rings-progress",licenseUrl:"https://github.com/gfazioli/mantine-rings-progress/blob/master/LICENSE",author:{name:"Giovambattista Fazioli",githubUsername:"gfazioli"}};var eM=s(186),eq=s.n(eM);function eF(e){let{children:n}=e,{toggleColorScheme:s}=(0,ez.X)();(0,eE.A)([["mod + J",s]]);let t=eV.packageName.replace("@gfazioli/","").replaceAll("-"," ").split(" ").map(e=>e.charAt(0).toUpperCase()+e.slice(1)).join(" ");return(0,i.jsxs)(eC.V,{header:{height:60},children:[(0,i.jsx)(eC.V.Header,{className:eS.Z.classNames.zeroRight,children:(0,i.jsxs)(ed.W,{size:"lg",px:"md",className:eq().inner,children:[(0,i.jsxs)(eP.Z,{children:[(0,i.jsx)("a",{href:"https://mantine.dev/",target:"_blank",className:(0,d.Z)("mantine-focus-auto",eq().logo),rel:"noreferrer",children:(0,i.jsx)(eR.D,{size:30,type:"mark"})}),(0,i.jsx)(j.D,{order:2,children:t})]}),(0,i.jsxs)(eP.Z,{gap:10,children:[(0,i.jsx)("iframe",{src:"https://github.com/sponsors/gfazioli/button",title:"Sponsor gfazioli",height:"34",width:"114",className:eq().sponsor}),(0,i.jsx)(eA.A,{visibleFrom:"sm",size:36,radius:8,component:"a",href:"https://undolog.com/",target:"_blank",rel:"noreferrer","aria-label":"Undolog",title:"Undolog",variant:"subtle",children:(0,i.jsx)("img",{width:36,src:"https://substackcdn.com/image/fetch/f_webp,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F5d483192-7bf9-4d61-aaf7-ced1a3f4adf8_1024x1024.png",alt:"Undolog"})}),(0,i.jsx)(eD.q,{visibleFrom:"sm",githubLink:eV.repositoryUrl,withDirectionToggle:!1,withSearch:!1,withSupport:!1,discordLink:eL.$.discordLink})]}),(0,i.jsx)(eP.Z,{hiddenFrom:"sm",children:(0,i.jsx)(eI.M,{})})]})}),(0,i.jsx)(eC.V.Main,{children:(0,i.jsx)("div",{className:eq().main,children:n})})]})}var eO=JSON.parse('{"RingsProgress":{"props":{"animate":{"description":"Animate","name":"animate","required":false,"type":{"name":"boolean"}},"animationDuration":{"description":"Animation duration in ms","name":"animationDuration","required":false,"type":{"name":"number"}},"animationSteps":{"description":"Animation steps","name":"animationSteps","required":false,"type":{"name":"number"}},"animationTimingFunction":{"description":"Animation timing function to define the speed curve of the animation","name":"animationTimingFunction","required":false,"type":{"name":"\\"linear\\" | \\"ease\\" | \\"ease-in\\" | \\"ease-out\\" | \\"ease-in-out\\" | \\"ease-in-cubic\\" | \\"ease-out-cubic\\" | \\"ease-in-out-cubic\\"","raw":"\\"linear\\" | \\"ease\\" | \\"ease-in\\" | \\"ease-out\\" | \\"ease-in-out\\" | \\"ease-in-cubic\\" | \\"ease-out-cubic\\" | \\"ease-in-out-cubic\\"","value":[{"value":"\\"linear\\""},{"value":"\\"ease\\""},{"value":"\\"ease-in\\""},{"value":"\\"ease-out\\""},{"value":"\\"ease-in-out\\""},{"value":"\\"ease-in-cubic\\""},{"value":"\\"ease-out-cubic\\""},{"value":"\\"ease-in-out-cubic\\""}]}},"gap":{"description":"Gap between rings","name":"gap","required":false,"type":{"name":"number"}},"label":{"description":"Label displayed in the center of the ring","name":"label","required":false,"type":{"name":"React.ReactNode"}},"rings":{"description":"List of the rings","name":"rings","required":true,"type":{"name":"RingProgressSection[]"}},"rootColorAlpha":{"description":"Root color alpha","name":"rootColorAlpha","required":false,"type":{"name":"number"}},"roundCaps":{"description":"Sets whether the edges of the progress circle are rounded","name":"roundCaps","required":false,"type":{"name":"boolean"}},"size":{"description":"Width and height of the progress ring","name":"size","required":false,"type":{"name":"number"}},"thickness":{"description":"Ring thickness","name":"thickness","required":false,"type":{"name":"number"}}}}}'),eZ=s(8395),eH=s(3276),eU=s(8646),eW=s(1555),eB=s.n(eW);function eG(e){let{packages:n,dev:s}=e,[t,r]=(0,eZ.I)({key:"script-tab",defaultValue:0});return(0,i.jsx)(eH.Q,{classNames:{root:eB().root},activeTab:t,onTabChange:r,code:[{fileName:"yarn",code:"yarn add ".concat(s?"--dev ":"").concat(n),language:"bash",icon:(0,i.jsx)(eU.z,{className:eB().icon,size:16})},{fileName:"npm",code:"npm install ".concat(s?"--save-dev ":"").concat(n),language:"bash",icon:(0,i.jsx)(em._,{className:eB().icon,size:16})}]})}var eX=s(9662),e$=s(7226),eJ=s(9357),eY=s(4710),eK=s(6415),eQ=s(401),e0=s(9104);function e1({size:e,thickness:n,sum:s,value:i,root:t,offset:r}){let a=(.9*e-2*n)/2,o=Math.PI*a*2/100,l=t||void 0===i?`${(100-s)*o}, ${s*o}`:`${i*o}, ${(100-i)*o}`;return{strokeWidth:Number.isNaN(n)?12:n,cx:e/2||0,cy:e/2||0,r:a||0,transform:t?`scale(1, -1) translate(0, -${e})`:void 0,strokeDasharray:l,strokeDashoffset:t?0:r||0}}function e2({size:e,value:n,offset:s,sum:i,thickness:r,root:a,color:o,lineRoundCaps:l,tooltip:c,getStyles:d,display:h,...u}){let m=(0,B.rZ)();return a?t.createElement(k.x,{component:"circle",...u,...d("curve"),__vars:{"--curve-color":o?(0,e0.p)(o,m):void 0},fill:"none",strokeLinecap:l?"round":"butt",...e1({sum:i,size:e,thickness:r,value:n,offset:s,root:a})}):t.createElement(eQ.u.Floating,{disabled:!c,label:c},t.createElement(k.x,{component:"circle",...u,...d("curve"),__vars:{"--curve-color":o?(0,e0.p)(o,m):void 0},fill:"none",strokeLinecap:l?"round":"butt",...e1({sum:i,size:e,thickness:r,value:n,offset:s,root:a})}))}e2.displayName="Curve";var e3={root:"me-b32e4812",svg:"me-d43b5134",curve:"me-b1ca1fbf",label:"me-b23f9dc4"};let e5={size:120,thickness:12,animate:!1,animationDuration:1e3,animationTimingFunction:"ease",animationSteps:60},e6=(0,eK.Z)((e,{size:n,thickness:s})=>({root:{"--rp-size":(0,N.h)(n),"--rp-label-offset":(0,N.h)(2*s)}})),e8=(0,eX.d5)((e,n)=>{let s=(0,e$.w)("RingProgress",e5,e),{classNames:i,className:r,style:a,styles:o,unstyled:l,vars:c,label:d,sections:h,size:u,thickness:m,roundCaps:p,rootColor:x,animate:g,animationSteps:j,animationDuration:b,animationTimingFunction:f,..._}=s,v={linear:e=>e,ease:e=>e<.5?.5*(2*e)*(2*e):-.5*((2*e-1)*(2*e-3)-1),"ease-in":e=>e*e,"ease-out":e=>e*(2-e),"ease-in-out":e=>e<.5?.5*e*e:-.5*((2*e-1)*(2*e-3)-1),"ease-in-cubic":e=>e*e*e,"ease-out-cubic":e=>--e*e*e+1,"ease-in-out-cubic":e=>e<.5?4*e*e*e:(e-1)*(2*e-2)*(2*e-2)+1},[y,T]=t.useState(h.map(e=>({...e,...g&&{value:0}})));t.useEffect(()=>{g&&function(){let e=h[0],n=e.value/j,s=0,i=v[f],t=setInterval(()=>{s++;let e=s/j,r=i(e),a=n*r*j;T(e=>[{...e[0],value:a}]),s===j&&clearInterval(t)},b/j)}()},[g,b,j,f,h]);let N=(0,eJ.y)({name:"RingProgress",classes:e3,props:s,className:r,style:a,classNames:i,styles:o,unstyled:l,vars:c,varsResolver:e6}),w=Math.min(m||12,(u||120)/4),z=(function({size:e,thickness:n,sections:s,renderRoundedLineCaps:i,rootColor:t}){let r=s.reduce((e,n)=>e+n.value,0),a=Math.PI*((.9*e-2*n)/2)*2,o=a,l=[],c=[];for(let e=0;e<s.length;e+=1)l.push({sum:r,offset:o,data:s[e],root:!1}),o-=s[e].value/100*a;if(l.push({sum:r,offset:o,data:{color:t},root:!0}),c.push({...l[l.length-1],lineRoundCaps:!1}),l.length>2){c.push({...l[0],lineRoundCaps:i}),c.push({...l[l.length-2],lineRoundCaps:i});for(let e=1;e<=l.length-3;e+=1)c.push({...l[e],lineRoundCaps:!1})}else c.push({...l[0],lineRoundCaps:i});return c})({size:u,thickness:w,sections:y,renderRoundedLineCaps:p,rootColor:x}).map(({data:e,sum:n,root:s,lineRoundCaps:i,offset:r},a)=>t.createElement(e2,{...e,key:a,size:u,thickness:w,sum:n,offset:r,color:e?.color,root:s,lineRoundCaps:i,getStyles:N}));return t.createElement(k.x,{...N("root"),size:u,ref:n,..._},t.createElement("svg",{...N("svg")},z),d&&t.createElement("div",{...N("label")},d))});e8.classes=e3,e8.displayName="RingProgress";var e4={root:"me-726a891f",ring:"me-726a726d"};let e9={size:120,thickness:12,gap:8,animate:!1,roundCaps:!0,animationDuration:1e3,animationSteps:60,animationTimingFunction:"ease",rootColorAlpha:.15},e7=(0,eX.d5)((e,n)=>{let s=(0,B.rZ)(),i=(0,e$.w)("Rings",e9,e),{rings:r,size:a,thickness:o,gap:l,rootColorAlpha:c,label:d,animate:h,animationSteps:u,animationDuration:m,animationTimingFunction:p,roundCaps:x,...g}=i,j=(0,eJ.y)({name:"RingsProgress",props:i,classes:e4});return t.createElement(k.x,{ref:n,...j("root"),...g},r.map((e,n)=>{let i=(0,eY.E)({color:e.color,theme:s});return t.createElement(e8,{label:n===r.length-1?d:null,key:e.value+e.color+n,rootColor:(0,X.F)(i.value,c),size:a-n*((o+l)*2),thickness:o,roundCaps:x,animate:h,animationDuration:m,animationSteps:u,animationTimingFunction:p,left:n*(o+l),top:n*(o+l),...j("ring"),styles:{label:{position:"absolute",top:"50%",left:"50% ",transform:"translate(-50%,-50%)",right:"auto",color:"red"}},sections:[e]})}))});e7.classes=e4,e7.displayName="RingsProgress";var ne=s(4022);let nn={type:"configurator",component:function(e){return(0,i.jsx)(ne.M,{children:(0,i.jsx)(k.x,{h:e.size,w:e.size,children:(0,i.jsx)(e7,{rings:[{value:20,color:"cyan"},{value:50,color:"red"},{value:80,color:"#f90"}],...e})})})},minHeight:300,code:"\nimport { RingsProgress } from '@gfazioli/mantine-rings-progress';\n\nfunction Demo() {\n  const rings = [\n    { value: 20, color: 'cyan' },\n    { value: 50, color: 'red' },\n    { value: 80, color: '#f90' },\n  ];\n\n  return (\n    <RingsProgress rings={rings}{{props}} />\n  );\n}\n",controls:[{prop:"animate",type:"boolean",initialValue:!1,libraryValue:!1},{prop:"roundCaps",type:"boolean",initialValue:!0,libraryValue:!0},{prop:"size",type:"number",min:100,max:640,initialValue:180,libraryValue:120},{prop:"gap",type:"number",min:1,max:32,initialValue:4,libraryValue:4},{prop:"thickness",type:"number",initialValue:12,libraryValue:12},{prop:"rootColorAlpha",type:"number",min:0,max:1,step:.1,initialValue:.15,libraryValue:.15},{prop:"animationDuration",type:"number",min:100,max:5e3,step:1,initialValue:1e3,libraryValue:1e3},{prop:"animationSteps",type:"number",min:10,max:120,step:1,initialValue:60,libraryValue:60},{prop:"animationTimingFunction",type:"select",data:["linear","ease","ease-in","ease-out","ease-in-out","ease-in-cubic","ease-out-cubic","ease-in-out-cubic"],initialValue:"ease",libraryValue:"ease"},{prop:"label",type:"string",initialValue:"",libraryValue:void 0}]};var ns=s(9681);let ni={type:"code",component:function(e){return(0,i.jsx)(ne.M,{children:(0,i.jsx)(k.x,{h:100,w:100,children:(0,i.jsx)(e7,{size:100,rings:[{value:20,color:"green"}],label:(0,i.jsx)(eA.A,{color:"teal",variant:"light",radius:"xl",size:"xl",children:(0,i.jsx)(ns.Z,{style:{width:(0,N.h)(22),height:(0,N.h)(22)}})})})})})},minHeight:100,code:'\nimport { RingsProgress } from \'@gfazioli/mantine-rings-progress\';\n\nfunction Demo() {\n  const rings = [{ value: 20, color: \'green\' }];\n\n  return (\n    <RingsProgress\n      size={100}\n      rings={rings}\n      label={\n        <ActionIcon color="teal" variant="light" radius="xl" size="xl">\n          <IconCheck style={{ width: rem(22), height: rem(22) }} />\n        </ActionIcon>\n      }\n    />\n  );\n}\n'},nt={type:"code",component:function(e){return(0,i.jsx)(ne.M,{children:(0,i.jsx)(k.x,{h:140,w:140,children:(0,i.jsx)(e7,{size:140,rings:[{value:20,color:"green"},{value:80,color:"blue"}],label:(0,i.jsx)(eA.A,{color:"yellow",variant:"filled",radius:"xl",size:"xl",children:(0,i.jsx)(ns.Z,{style:{width:(0,N.h)(22),height:(0,N.h)(22)}})})})})})},minHeight:100,code:'\nimport { RingsProgress } from \'@gfazioli/mantine-rings-progress\';\n\nfunction Demo() {\n  const rings = [\n    { value: 20, color: \'green\' },\n    { value: 80, color: \'blue\' },\n  ];\n\n  return (\n    <RingsProgress\n      size={140}\n      rings={rings}\n      label={\n        <ActionIcon color="yellow" variant="filled" radius="xl" size="xl">\n          <IconCheck style={{ width: rem(22), height: rem(22) }} />\n        </ActionIcon>\n      }\n    />\n  );\n}\n'},nr={type:"code",component:function(e){return(0,i.jsx)(ne.M,{children:(0,i.jsx)(k.x,{h:140,w:140,children:(0,i.jsx)(e7,{size:140,rings:[{value:20,color:"green",tooltip:"Fitness – 40 Gb"},{value:80,color:"blue",tooltip:"Running – 50 minutes"}],label:(0,i.jsx)(eA.A,{color:"yellow",variant:"filled",radius:"xl",size:"xl",children:(0,i.jsx)(ns.Z,{style:{width:(0,N.h)(22),height:(0,N.h)(22)}})})})})})},minHeight:100,code:"\nimport { RingsProgress } from '@gfazioli/mantine-rings-progress';\n\nfunction Demo() {\n  const rings = [\n    { value: 20, color: 'green', tooltip: 'Fitness – 40 Gb' },\n    { value: 80, color: 'blue', tooltip: 'Running – 50 minutes' },\n  ];\n\n  return (\n    <RingsProgress\n      size={140}\n      rings={rings}\n      label={\n        <ActionIcon color=\"yellow\" variant=\"filled\" radius=\"xl\" size=\"xl\">\n          <IconCheck style={{ width: rem(22), height: rem(22) }} />\n        </ActionIcon>\n      }\n    />\n  );\n}\n"};function na(e){let n={blockquote:"blockquote",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...eo(),...e.components},{Demo:s}=n;return s||function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n",(0,i.jsx)(eG,{packages:"@gfazioli/mantine-rings-progress"}),"\n",(0,i.jsx)(n.p,{children:"After installation import package styles at the root of your application:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-tsx",children:"import '@gfazioli/mantine-rings-progress/styles.css';\n"})}),"\n",(0,i.jsxs)(n.p,{children:["You can import styles within a layer ",(0,i.jsx)(n.code,{children:"@layer mantine-rings-progress"})," by importing ",(0,i.jsx)(n.code,{children:"@gfazioli/mantine-rings-progress/styles.layer.css"})," file."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-tsx",children:"import '@gfazioli/mantine-rings-progress/styles.layer.css';\n"})}),"\n",(0,i.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,i.jsx)(s,{data:nn}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Mantine RingProgress"})}),"\n",(0,i.jsxs)(n.p,{children:["We're usign a custom version of the ",(0,i.jsx)(n.code,{children:"RingProgress"})," component from the ",(0,i.jsx)(n.code,{children:"mantine"})," library to render the rings."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"label"})," prop can be a string or a component. Try to change the label on the above configurator. You may use also an emoji \uD83D\uDE0A or a custom component."]}),"\n",(0,i.jsx)(n.h2,{id:"label",children:"Label"}),"\n",(0,i.jsx)(s,{data:ni}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"label"})," prop can be a string or a component."]}),"\n",(0,i.jsx)(s,{data:nt}),"\n",(0,i.jsx)(n.h2,{id:"tooltips",children:"Tooltips"}),"\n",(0,i.jsxs)(n.p,{children:["Despite the ",(0,i.jsx)(n.code,{children:"RingProgress"})," component from the ",(0,i.jsx)(n.code,{children:"mantine"})," library has a ",(0,i.jsx)(n.code,{children:"tooltip"})," prop, we discourage its use. The tooltip will be rendered on the top of the rings and it will be hard to read the label."]}),"\n",(0,i.jsx)(s,{data:nr})]})}function no(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}={...eo(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(na,{...e})}):na(e)}function nl(){return(0,i.jsxs)(eF,{children:[(0,i.jsx)(ew,{data:eV}),(0,i.jsx)(ec,{docgen:eO,componentsProps:["RingsProgress"],children:(0,i.jsx)(no,{})})]})}},2752:function(e){e.exports={root:"DocsTabs_root__3_liq",tabsWrapper:"DocsTabs_tabsWrapper__IRW55",tabsList:"DocsTabs_tabsList__WAMMe",tab:"DocsTabs_tab__mfbTe",tabContent:"DocsTabs_tabContent__xZoIg",main:"DocsTabs_main__bXjjr",tableOfContents:"DocsTabs_tableOfContents__m_mWC"}},1555:function(e){e.exports={root:"InstallScript_root__C12dR",icon:"InstallScript_icon__2DGM0"}},6938:function(e){e.exports={paragraph:"MdxElements_paragraph__Y192O",link:"MdxElements_link__Lt3iC",ul:"MdxElements_ul__hdTt4",li:"MdxElements_li__KI_j2",title:"MdxElements_title__YHwzc",titleLink:"MdxElements_titleLink__MBV9J",titleOffset:"MdxElements_titleOffset__Vn_Uo",code:"MdxElements_code__C3Y34"}},6239:function(e){e.exports={root:"MdxInfo_root__m_cCs",icon:"MdxInfo_icon__hDmDv"}},4128:function(e){e.exports={root:"PageHeader_root__u_xWw",title:"PageHeader_title__gP726",description:"PageHeader_description__gCV5r",links:"PageHeader_links__3ws49"}},3266:function(e){e.exports={root:"PageHeaderLink_root__xmmCT",label:"PageHeaderLink_label__7Fad9",body:"PageHeaderLink_body__qvtDJ",icon:"PageHeaderLink_icon__d9jEr"}},5628:function(e){e.exports={root:"PropsTablesList_root__c_Say",searchIcon:"PropsTablesList_searchIcon__9N6KL",title:"PropsTablesList_title__RXbmG",section:"PropsTablesList_section__nwP7g",search:"PropsTablesList_search__uiqGP"}},186:function(e){e.exports={inner:"Shell_inner__vEmfO",main:"Shell_main__lcVaI",logo:"Shell_logo__4Ivhz",sponsor:"Shell_sponsor__SjV_x"}},2118:function(e){e.exports={root:"StylesApiTable_root__obqpY",groupsHeader:"StylesApiTable_groupsHeader__GDU_x",group:"StylesApiTable_group__X_sw5",title:"StylesApiTable_title__inUP0",section:"StylesApiTable_section__nAJMp"}},1251:function(e){e.exports={code:"TableInlineCode_code__TNUKa"}},1598:function(e){e.exports={wrapper:"TableOfContents_wrapper__BAgli",inner:"TableOfContents_inner__au2gv",link:"TableOfContents_link__X__0J",header:"TableOfContents_header__5Tlsz",title:"TableOfContents_title__FWq20",items:"TableOfContents_items__s8ECn"}}},function(e){e.O(0,[9488,8871,9774,2888,179],function(){return e(e.s=9536)}),_N_E=e.O()}]);