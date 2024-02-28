"use strict";(self.webpackChunkkodsh_wiki_new=self.webpackChunkkodsh_wiki_new||[]).push([[7822],{55598:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>o,frontMatter:()=>s,metadata:()=>d,toc:()=>h});var r=i(74848),t=i(28453);const s={},c='SCRN ("NRCS") - Screen',d={id:"universal/resources/nitro/graphics_2d/section_scrn",title:'SCRN ("NRCS") - Screen',description:"Author(s): Gonhex",source:"@site/docs/universal/resources/nitro/graphics_2d/section_scrn.md",sourceDirName:"universal/resources/nitro/graphics_2d",slug:"/universal/resources/nitro/graphics_2d/section_scrn",permalink:"/docs/universal/resources/nitro/graphics_2d/section_scrn",draft:!1,unlisted:!1,editUrl:"https://github.com/kingdom-of-ds-hacking/kingdom-of-ds-hacking.github.io/docs/universal/resources/nitro/graphics_2d/section_scrn.md",tags:[],version:"current",frontMatter:{},sidebar:"universal_sidebar",previous:{title:'PLTT ("TTLP") - Palette',permalink:"/docs/universal/resources/nitro/graphics_2d/section_pltt"},next:{title:'UEXT ("TXEU") - (Use Extension?)',permalink:"/docs/universal/resources/nitro/graphics_2d/section_uext"}},l={},h=[{value:"Table of Contents",id:"table-of-contents",level:2},{value:"Data Structure",id:"data-structure",level:2},{value:"Section Container",id:"section-container",level:3},{value:"SCRN Container",id:"scrn-container",level:3},{value:"Tile Properties",id:"tile-properties",level:3},{value:"Specification",id:"specification",level:2},{value:"Files",id:"files",level:3}];function a(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",mermaid:"mermaid",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"scrn-nrcs---screen",children:'SCRN ("NRCS") - Screen'}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["Author(s): ",(0,r.jsx)(n.a,{href:"https://github.com/Gonhex",children:"Gonhex"})," ",(0,r.jsx)("br",{}),"\r\nResearch: ",(0,r.jsx)(n.a,{href:"https://problemkaputt.de",children:"NOCASH"})]}),"\n"]}),"\n",(0,r.jsx)(n.mermaid,{value:"flowchart BT;\r\n    NSCR(N. Screen R.)--\x3eG2D(Graphics 2D);\r\n    SCRN(Screen)--\x3eNSCR;"}),"\n",(0,r.jsx)(n.p,{children:"The screen section, also known as tile map, is used to create an image by rearranging and flipping tiles. Each position on the raster gets one. This can save a lot of memory since duplicated tiles can be avoided."}),"\n",(0,r.jsx)(n.h2,{id:"table-of-contents",children:"Table of Contents"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"#data-structure",children:"Data Structure"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#section-container",children:"Section Container"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#scrn-container",children:"SCRN Container"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#tile-properties",children:"Tile Properties"})}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"#specification",children:"Specification"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#files",children:"Files"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"data-structure",children:"Data Structure"}),"\n",(0,r.jsx)(n.h3,{id:"section-container",children:"Section Container"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-c",children:"struct ContainerSectionSCRN\r\n{\r\n    /* 0x0 */ struct NitroSectionHeader sectionHeader;\r\n    /* 0x8 */ struct ContainerSCRN sectionData;\r\n}; // entry size = sectionHeader.lengthSection\n"})}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Field Name"}),(0,r.jsx)(n.th,{children:"Description"}),(0,r.jsx)(n.th,{children:"Data Type"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"sectionHeader"}),(0,r.jsxs)(n.td,{children:["Header of this section. ",(0,r.jsx)(n.code,{children:'sectionHeader.signature = "NRCS"'}),"."]}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"../nitro_overview.md#nitro-section-header",children:"NitroSectionHeader"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"sectionData"}),(0,r.jsx)(n.td,{children:"Content of this section."}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"#scrn-container",children:"ContainerSCRN"})})]})]})]}),"\n",(0,r.jsx)(n.h3,{id:"scrn-container",children:"SCRN Container"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-c",children:"struct ContainerSCRN\r\n{\r\n    // header\r\n    /* 0x0 */ uint16_t widthInPixel;\r\n    /* 0x2 */ uint16_t heightInPixel;\r\n    /* 0x4 */ uint16_t unknown0;\r\n    /* 0x6 */ uint16_t unknown1;\r\n    /* 0x8 */ uint32_t lengthDataScreen;\r\n    \r\n    // data\r\n    /* 0xC */ struct TileProperties dataScreen[widthInPixel >> 3][heightInPixel >> 3];\r\n}; // entry size = 0xC + lengthDataScreen\n"})}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Field Name"}),(0,r.jsx)(n.th,{children:"Description"}),(0,r.jsx)(n.th,{children:"Data Type"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"widthInPixel"}),(0,r.jsx)(n.td,{children:"Width of the image in pixel."}),(0,r.jsx)(n.td,{children:"uint16_t"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"heightInPixel"}),(0,r.jsx)(n.td,{children:"Height of the image in pixel."}),(0,r.jsx)(n.td,{children:"uint16_t"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"unknown0"}),(0,r.jsx)(n.td,{children:"Unused mode?"}),(0,r.jsx)(n.td,{children:"uint16_t"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"unknown1"}),(0,r.jsx)(n.td,{children:"Unused mode?"}),(0,r.jsx)(n.td,{children:"uint16_t"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"lengthDataScreen"}),(0,r.jsx)(n.td,{children:"Length of the screen data section in bytes."}),(0,r.jsx)(n.td,{children:"uint32_t"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"dataScreen"}),(0,r.jsx)(n.td,{children:"Two-dimensional tile map to create an image by indexing and flipping tiles."}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"#tile-properties",children:"TileProperties[][]"})})]})]})]}),"\n",(0,r.jsx)(n.h3,{id:"tile-properties",children:"Tile Properties"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-c",children:"struct TileProperties\r\n{\r\n    /* 0x0 */ uint16_t tileIndex : 10;     // 0b00000011'11111111\r\n              uint16_t horizontalFlip : 1; // 0b00000100'00000000\r\n              uint16_t verticalFlip : 1;   // 0b00001000'00000000\r\n              uint16_t paletteIndex : 4;   // 0b11110000'00000000\r\n}; // entry size = 0x2\n"})}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Field Name"}),(0,r.jsx)(n.th,{children:"Description"}),(0,r.jsx)(n.th,{children:"Data Type"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"tileIndex"}),(0,r.jsxs)(n.td,{children:["Index of the tile (8x8 pixel image) within the ",(0,r.jsx)(n.a,{href:"/docs/universal/resources/nitro/graphics_2d/file_ncgr",children:"character graphic"}),"."]}),(0,r.jsx)(n.td,{children:"uint16_t"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"horizontalFlip"}),(0,r.jsx)(n.td,{children:"Flip/mirror tile horizontally."}),(0,r.jsx)(n.td,{children:"uint16_t"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"verticalFlip"}),(0,r.jsx)(n.td,{children:"Flip/mirror tile vertically."}),(0,r.jsx)(n.td,{children:"uint16_t"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"paletteIndex"}),(0,r.jsx)(n.td,{children:"Index of the palette used for this tile."}),(0,r.jsx)(n.td,{children:"uint16_t"})]})]})]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"specification",children:"Specification"}),"\n",(0,r.jsx)(n.h3,{id:"files",children:"Files"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"/docs/universal/resources/nitro/graphics_2d/file_nscr",children:"Nitro Screen Runtime"})}),"\n"]})]})}function o(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>c,x:()=>d});var r=i(96540);const t={},s=r.createContext(t);function c(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:c(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);