"use strict";(self.webpackChunkkodsh_wiki_new=self.webpackChunkkodsh_wiki_new||[]).push([[6966],{201:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>o,contentTitle:()=>c,default:()=>l,frontMatter:()=>s,metadata:()=>a,toc:()=>d});var i=r(5893),t=r(1151);const s={},c='CPOS ("SOPC") - (Character Position?)',a={id:"universal/resources/nitro/graphics_2d/section_cpos",title:'CPOS ("SOPC") - (Character Position?)',description:"Author(s): Gonhex",source:"@site/docs/universal/resources/nitro/graphics_2d/section_cpos.md",sourceDirName:"universal/resources/nitro/graphics_2d",slug:"/universal/resources/nitro/graphics_2d/section_cpos",permalink:"/docs/universal/resources/nitro/graphics_2d/section_cpos",draft:!1,unlisted:!1,editUrl:"https://github.com/kingdom-of-ds-hacking/kingdom-of-ds-hacking.github.io/docs/universal/resources/nitro/graphics_2d/section_cpos.md",tags:[],version:"current",frontMatter:{},sidebar:"universal_sidebar",previous:{title:'CHAR ("RHAC") - Character',permalink:"/docs/universal/resources/nitro/graphics_2d/section_char"},next:{title:'LABL ("LBAL") - Label',permalink:"/docs/universal/resources/nitro/graphics_2d/section_labl"}},o={},d=[{value:"Table of Contents",id:"table-of-contents",level:2},{value:"Data Structure",id:"data-structure",level:2},{value:"Section Container",id:"section-container",level:3},{value:"CPOS Container",id:"cpos-container",level:3},{value:"Specification",id:"specification",level:2},{value:"Files",id:"files",level:3}];function h(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",mermaid:"mermaid",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"cpos-sopc---character-position",children:'CPOS ("SOPC") - (Character Position?)'}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["Author(s): ",(0,i.jsx)(n.a,{href:"https://github.com/Gonhex",children:"Gonhex"})," ",(0,i.jsx)("br",{}),"\r\nResearch: ",(0,i.jsx)(n.a,{href:"https://problemkaputt.de",children:"NOCASH"})]}),"\n"]}),"\n",(0,i.jsx)(n.mermaid,{value:"flowchart BT;\r\n    NCGR(N. Character Graphic R.)--\x3eG2D(Graphics 2D);\r\n    CPOS(Character Position?)-.->NCGR;"}),"\n",(0,i.jsx)(n.p,{children:"This section does only exist, if the character image has a specified size. The purpose is not clear."}),"\n",(0,i.jsx)(n.h2,{id:"table-of-contents",children:"Table of Contents"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"#data-structure",children:"Data Structure"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#section-container",children:"Section Container"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#cpos-container",children:"CPOS Container"})}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"#specification",children:"Specification"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#files",children:"Files"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"data-structure",children:"Data Structure"}),"\n",(0,i.jsx)(n.h3,{id:"section-container",children:"Section Container"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-c",children:"struct ContainerSectionCPOS\r\n{\r\n    /* 0x0 */ struct NitroSectionHeader sectionHeader;\r\n    /* 0x8 */ struct ContainerCPOS sectionData;\r\n}; // entry size = sectionHeader.lengthSection\n"})}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Field Name"}),(0,i.jsx)(n.th,{children:"Description"}),(0,i.jsx)(n.th,{children:"Data Type"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"sectionHeader"}),(0,i.jsxs)(n.td,{children:["Header of this section. ",(0,i.jsx)(n.code,{children:'sectionHeader.signature = "SOPC"'}),"."]}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.a,{href:"../nitro_overview.md#nitro-section-header",children:"NitroSectionHeader"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"sectionData"}),(0,i.jsx)(n.td,{children:"Content of this section."}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.a,{href:"#cpos-container",children:"ContainerCPOS"})})]})]})]}),"\n",(0,i.jsx)(n.h3,{id:"cpos-container",children:"CPOS Container"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-c",children:"struct ContainerCPOS\r\n{\r\n    // header\r\n    /* 0x0 */ uint32_t padding0;\r\n    /* 0x4 */ uint16_t widthInTiles;\r\n    /* 0x6 */ uint16_t heightInTiles;\r\n    \r\n    // data\r\n    // ...empty\r\n}; // entry size = 0x8\n"})}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Field Name"}),(0,i.jsx)(n.th,{children:"Description"}),(0,i.jsx)(n.th,{children:"Data Type"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"padding0"}),(0,i.jsxs)(n.td,{children:["Always ",(0,i.jsx)(n.code,{children:"0"}),"."]}),(0,i.jsx)(n.td,{children:"uint32_t"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"widthInTiles"}),(0,i.jsxs)(n.td,{children:["Same as ",(0,i.jsx)(n.a,{href:"/docs/universal/resources/nitro/graphics_2d/section_char#char-container",children:"ContainerCHAR::widthInTiles"})," or next higher base-2 value. Size boundaries?"]}),(0,i.jsx)(n.td,{children:"uint16_t"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"heightInTiles"}),(0,i.jsxs)(n.td,{children:["Same as ",(0,i.jsx)(n.a,{href:"/docs/universal/resources/nitro/graphics_2d/section_char#char-container",children:"ContainerCHAR::heightInTiles"})," or next higher base-2 value. Size boundaries?"]}),(0,i.jsx)(n.td,{children:"uint16_t"})]})]})]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"specification",children:"Specification"}),"\n",(0,i.jsx)(n.h3,{id:"files",children:"Files"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/docs/universal/resources/nitro/graphics_2d/file_ncgr",children:"Nitro Character Graphic Runtime"})}),"\n"]})]})}function l(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},1151:(e,n,r)=>{r.d(n,{Z:()=>a,a:()=>c});var i=r(7294);const t={},s=i.createContext(t);function c(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:c(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);