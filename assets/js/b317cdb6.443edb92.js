"use strict";(self.webpackChunkkodsh_wiki_new=self.webpackChunkkodsh_wiki_new||[]).push([[579],{2611:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>h,frontMatter:()=>s,metadata:()=>o,toc:()=>a});var i=r(74848),t=r(28453);const s={},c='NSCR ("RCSN") - Nitro Screen Runtime',o={id:"universal/resources/nitro/graphics_2d/file_nscr",title:'NSCR ("RCSN") - Nitro Screen Runtime',description:"Author(s): Gonhex",source:"@site/docs/universal/resources/nitro/graphics_2d/file_nscr.md",sourceDirName:"universal/resources/nitro/graphics_2d",slug:"/universal/resources/nitro/graphics_2d/file_nscr",permalink:"/docs/universal/resources/nitro/graphics_2d/file_nscr",draft:!1,unlisted:!1,editUrl:"https://github.com/kingdom-of-ds-hacking/kingdom-of-ds-hacking.github.io/docs/universal/resources/nitro/graphics_2d/file_nscr.md",tags:[],version:"current",frontMatter:{},sidebar:"universal_sidebar",previous:{title:'NMCR ("RCMN") - Nitro Multi Cell Runtime',permalink:"/docs/universal/resources/nitro/graphics_2d/file_nmcr"},next:{title:'ABNK ("KNBA") - Animation Bank',permalink:"/docs/universal/resources/nitro/graphics_2d/section_abnk"}},l={},a=[{value:"Table of Contents",id:"table-of-contents",level:2},{value:"Data Structure",id:"data-structure",level:2},{value:"File Container",id:"file-container",level:3},{value:"Specification",id:"specification",level:2},{value:"Sections",id:"sections",level:3}];function d(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",mermaid:"mermaid",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"nscr-rcsn---nitro-screen-runtime",children:'NSCR ("RCSN") - Nitro Screen Runtime'}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["Author(s): ",(0,i.jsx)(n.a,{href:"https://github.com/Gonhex",children:"Gonhex"})," ",(0,i.jsx)("br",{}),"\r\nResearch: (see sections)"]}),"\n"]}),"\n",(0,i.jsx)(n.mermaid,{value:"flowchart BT;\r\n    NSCR(N. Screen R.)--\x3eG2D(Graphics 2D);\r\n    SCRN(Screen)--\x3eNSCR;"}),"\n",(0,i.jsx)(n.p,{children:"The screen runtime is used to rearrange the tiles of the character graphic on the screen. It also has the ability to flip tiles and change their palette index."}),"\n",(0,i.jsx)(n.h2,{id:"table-of-contents",children:"Table of Contents"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"#data-structure",children:"Data Structure"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#file-container",children:"File Container"})}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"#specification",children:"Specification"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#sections",children:"Sections"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"data-structure",children:"Data Structure"}),"\n",(0,i.jsx)(n.h3,{id:"file-container",children:"File Container"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-c",children:"struct ContainerFileNSCR\r\n{\r\n    /* 0x00 */ struct NitroFileHeader fileHeader;\r\n    /* 0x10 */ struct ContainerSectionCHAR sectionDataSCRN;\r\n}; // entry size = fileHeader.lengthFile\n"})}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Field Name"}),(0,i.jsx)(n.th,{children:"Description"}),(0,i.jsx)(n.th,{children:"Data Type"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"fileHeader"}),(0,i.jsxs)(n.td,{children:["Header of this file. ",(0,i.jsx)(n.code,{children:'fileHeader.signature = "RCSN"'}),"."]}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.a,{href:"../nitro_overview.md#nitro-file-header",children:"NitroFileHeader"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"sectionDataSCRN"}),(0,i.jsx)(n.td,{children:"Image data."}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.a,{href:"/docs/universal/resources/nitro/graphics_2d/section_scrn#section-container",children:"ContainerSectionSCRN"})})]})]})]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"specification",children:"Specification"}),"\n",(0,i.jsx)(n.h3,{id:"sections",children:"Sections"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/docs/universal/resources/nitro/graphics_2d/section_scrn",children:"Screen"})}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},28453:(e,n,r)=>{r.d(n,{R:()=>c,x:()=>o});var i=r(96540);const t={},s=i.createContext(t);function c(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:c(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);