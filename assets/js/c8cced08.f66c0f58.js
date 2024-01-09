"use strict";(self.webpackChunkkodsh_wiki_new=self.webpackChunkkodsh_wiki_new||[]).push([[3242],{3282:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>a,toc:()=>d});var t=i(5893),o=i(1151);const s={title:"Code Injection (General)",tags:["Guide (Diamond)","Guide (Pearl)","Guide (Platinum)","Guide (HeartGold)","Guide (SoulSilver)","Guide (Black)","Guide (White)","Guide (Black 2)","Guide (White 2)"]},r="General Code Injection Guide",a={id:"universal/guides/code_injection/code_injection",title:"Code Injection (General)",description:"Author(s): PlatinumMaster, Hello007",source:"@site/docs/universal/guides/code_injection/code_injection.md",sourceDirName:"universal/guides/code_injection",slug:"/universal/guides/code_injection/",permalink:"/docs/universal/guides/code_injection/",draft:!1,unlisted:!1,editUrl:"https://github.com/kingdom-of-ds-hacking/kingdom-of-ds-hacking.github.io/docs/universal/guides/code_injection/code_injection.md",tags:[{label:"Guide (Diamond)",permalink:"/docs/tags/guide-diamond"},{label:"Guide (Pearl)",permalink:"/docs/tags/guide-pearl"},{label:"Guide (Platinum)",permalink:"/docs/tags/guide-platinum"},{label:"Guide (HeartGold)",permalink:"/docs/tags/guide-heart-gold"},{label:"Guide (SoulSilver)",permalink:"/docs/tags/guide-soul-silver"},{label:"Guide (Black)",permalink:"/docs/tags/guide-black"},{label:"Guide (White)",permalink:"/docs/tags/guide-white"},{label:"Guide (Black 2)",permalink:"/docs/tags/guide-black-2"},{label:"Guide (White 2)",permalink:"/docs/tags/guide-white-2"}],version:"current",frontMatter:{title:"Code Injection (General)",tags:["Guide (Diamond)","Guide (Pearl)","Guide (Platinum)","Guide (HeartGold)","Guide (SoulSilver)","Guide (Black)","Guide (White)","Guide (Black 2)","Guide (White 2)"]},sidebar:"universal_sidebar",previous:{title:"Guides",permalink:"/docs/category/guides-2"},next:{title:"Hex Editing",permalink:"/docs/universal/guides/hex_editing/"}},l={},d=[{value:"Assembly Injection",id:"assembly-injection",level:2},{value:"C/C++ Injection",id:"cc-injection",level:2},{value:"How does C Injection work?",id:"how-does-c-injection-work",level:3},{value:"Insertion Process",id:"insertion-process",level:2},{value:"Fixing our Assembly",id:"fixing-our-assembly",level:3},{value:"Assembly to Executable and Linkable Format (ELF), and Linking",id:"assembly-to-executable-and-linkable-format-elf-and-linking",level:4}];function c(e){const n={a:"a",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:["Author(s): ",(0,t.jsx)(n.a,{href:"https://github.com/PlatinumMaster",children:"PlatinumMaster"}),", ",(0,t.jsx)(n.a,{href:"https://github.com/HelloOO7",children:"Hello007"})]}),"\n"]}),"\n",(0,t.jsx)(n.h1,{id:"general-code-injection-guide",children:"General Code Injection Guide"}),"\n",(0,t.jsx)(n.p,{children:"This guide aims to serve as a technical introduction to code injection in the DS Pokemon games, as well as common processes for it. It is strongly recommended that you read this page before continuing onto generation-specific code injection, as it will attempt to familiarize you with how it generally works."}),"\n",(0,t.jsx)(n.h2,{id:"assembly-injection",children:"Assembly Injection"}),"\n",(0,t.jsx)(n.p,{children:"Assembly injection is the process of compiling an assembly routine, and hooking it into the executable part of a ROM."}),"\n",(0,t.jsx)(n.h2,{id:"cc-injection",children:"C/C++ Injection"}),"\n",(0,t.jsx)(n.p,{children:"C/C++ injection is almost the exact same idea, except you use a high-level language (mostly C or C++, though you can go wild with Rust if that's what your heart desires) to create the code which emits assembly. That's because compilers/translators of these languages use Assembly as an intermediate between the source code stage and the binary stage. In other words, C/C++ code creates assembly code, which is then assembled. Assembly knowledge is, for the most part, not necessary."}),"\n",(0,t.jsx)(n.h3,{id:"how-does-c-injection-work",children:"How does C Injection work?"}),"\n",(0,t.jsx)(n.p,{children:"It's easier to explain with an example, so I will go with that."}),"\n",(0,t.jsx)(n.p,{children:"Say we have the following C code:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-C",children:"// We declare these so the code can compile. Can go into a separate library file.\r\nint AddMoney(int);\r\nvoid LoadScript(int);\r\nvoid PlayScript();\r\n\r\n// The function we're writing.\r\nvoid funFunction1() {\r\n  int v1 = AddMoney(3000);\r\n  if (v1) {\r\n    LoadScript(12);\r\n    PlayScript();\r\n  }\r\n  for (int i = 0; i < 99; ++i) {\r\n    int v2 = AddMoney(i);\r\n  }\r\n  //...\r\n}\n"})}),"\n",(0,t.jsx)(n.p,{children:"Our compiler will take our C code and turn it into Assembly. How, you might be asking yourself? I will give you a high level idea of what is going on."}),"\n",(0,t.jsx)(n.p,{children:"See, when we do an operation in C, the operation we do has a corresponding set of Assembly. By parsing the C file, the compiler can match each operation in our C source code to a list of Assembly instructions that are functionally equivalent. This yields an intermediate Assembly file, which pertains to the architecture of the system we are compiling the binary for. In this case, it would yield ARMv5T Assembly (unless otherwise specified), which is the Assembly variant used on the Nintendo DS."}),"\n",(0,t.jsxs)(n.p,{children:["In the case of our file, it would turn it into the following assembly (courtesy of ",(0,t.jsx)(n.code,{children:"gcc"}),"):"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ASM",children:"funFunction1:\r\n        push    {r7, lr}\r\n        sub     sp, sp, #16\r\n        add     r7, sp, #0\r\n        movw    r0, #3000\r\n        bl      AddMoney\r\n        str     r0, [r7, #8]\r\n        ldr     r3, [r7, #8]\r\n        cmp     r3, #0\r\n        beq     .L2\r\n        movs    r0, #12\r\n        bl      LoadScript\r\n        bl      PlayScript\r\n.L2:\r\n        movs    r3, #0\r\n        str     r3, [r7, #12]\r\n        b       .L3\r\n.L4:\r\n        ldr     r0, [r7, #12]\r\n        bl      AddMoney\r\n        str     r0, [r7, #4]\r\n        ldr     r3, [r7, #12]\r\n        adds    r3, r3, #1\r\n        str     r3, [r7, #12]\r\n.L3:\r\n        ldr     r3, [r7, #12]\r\n        cmp     r3, #98\r\n        ble     .L4\r\n        nop\r\n        nop\r\n        adds    r7, r7, #16\r\n        mov     sp, r7\r\n        pop     {r7, pc}\n"})}),"\n",(0,t.jsx)(n.p,{children:"This code is functionally equivalent to the code we wrote, but might be harder to understand at first glance."}),"\n",(0,t.jsx)(n.h2,{id:"insertion-process",children:"Insertion Process"}),"\n",(0,t.jsx)(n.h3,{id:"fixing-our-assembly",children:"Fixing our Assembly"}),"\n",(0,t.jsx)(n.p,{children:"Similar to the above, assembling Assembly consists of taking our code and translating it into a format that our processor can understand. The Executable and Linkable Format, or ELF, allows us to simplify this process."}),"\n",(0,t.jsxs)(n.p,{children:["Simply put, our processor does not read assembly -- only machine code -- and as such, we need to give it a set of bytes that it ",(0,t.jsx)(n.em,{children:"can"})," read. But, before we can give it bytes to read, we need to make sure ",(0,t.jsx)(n.em,{children:"all"})," of our instructions are correct. With simple arithmetic instructions such as addition and subtraction, this is light-work -- no further verification needs to be done. However, with function calls, ",(0,t.jsx)(n.em,{children:"how"})," will the assembly know where we are telling it to go?"]}),"\n",(0,t.jsx)(n.p,{children:"This is easily solved by converting our assembly into an ELF file. With an ELF, we can perform a process known as linking. Linking is one of the most important parts of the entire compilation process, and for good reason; with our Assembly in ELF format, we can define the addresses of functions we are calling, determine the order of multiple files being linked together, and create relocatable objects, all of which solve our earlier problems. So, let's go into detail about linking."}),"\n",(0,t.jsx)(n.h4,{id:"assembly-to-executable-and-linkable-format-elf-and-linking",children:"Assembly to Executable and Linkable Format (ELF), and Linking"}),"\n",(0,t.jsx)(n.p,{children:"On the high level, linking is performed using a linker. A linker is equipped with a translation table which takes in symbol names, and translates them to addresses. This translation table is comprised of all of the addresses of functions in the binaries we link together, and a (optionally) hand-crafted symbol to address map."}),"\n",(0,t.jsx)(n.p,{children:"This hand-crafted translation table is an integral part of code injection. Without it, calling existing functions would be practically impossible. This translation table is created by researching the ROM's code, and documenting the functions. We then give names to these functions, which we later use as symbols. This creates a one-to-one mapping that allows us to properly fix our addresses."}),"\n",(0,t.jsx)(n.p,{children:"Take this segment of our Assembly from above, for example."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ARMASM",children:"        movw    r0, #3000\r\n        bl      AddMoney\n"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"bl"}),", which performs a function call in this case, will force the program to jump to the function ",(0,t.jsx)(n.code,{children:"AddMoney"}),". But, ",(0,t.jsx)(n.em,{children:"where"})," is ",(0,t.jsx)(n.code,{children:"AddMoney"}),"? We as humans know that it is at the address ",(0,t.jsx)(n.code,{children:"30"}),", as I had mentioned previously. But, what about the computer?"]}),"\n",(0,t.jsx)(n.p,{children:"With a translation table similar to below (note: this is likely not valid syntax, I am just making this up):"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"BEGIN_TRANSLATION_DEFINITIONS\r\nAddMoney: 30\r\nLoadScript: 45\r\nPlayScript: 60\r\nEND_TRANSLATION_DEFINITIONS\n"})}),"\n",(0,t.jsx)(n.p,{children:"The aforementioned code becomes the following:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ARMASM",children:"        movw    r0, #3000\r\n        bl      30 @ Note, this will likely be a relative offset (destination - address of this instruction) and not an absolute one. This is just for demonstration.\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Pretty neat, huh? The same thing would happen to ",(0,t.jsx)(n.code,{children:"bl LoadScript"})," or ",(0,t.jsx)(n.code,{children:"bl PlayScript"}),", provided those were the instructions there."]}),"\n",(0,t.jsx)(n.p,{children:"That being said, how do we perform linking with code injection?"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["In the case of Generation IV, BluRose uses the linker provided by devkitPro (which is ",(0,t.jsx)(n.code,{children:"arm-none-eabi-ld"}),") and a hand crafted translation table to fix the addresses to in-game functions. They also use a linker script to rearrange the order of their binary, which is a possibility I mentioned previously."]}),"\n",(0,t.jsx)(n.li,{children:"In the case of Generation V, the input source code is first linked using the default toolchain, then later post-processed using a provided symbol mapping database during conversion to the RPM executable format. This means that before the final step, the ELF isn't bound to a fixed binary layout, providing simpler targeting of different games/revisions. Programs that only provide support functionality (file format libraries, codecs) are game-independent and can be loaded on-demand as DLLs."}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"After linking, we will usually end up with an ELF file that we can use to create our final binary."})]})}function h(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},1151:(e,n,i)=>{i.d(n,{Z:()=>a,a:()=>r});var t=i(7294);const o={},s=t.createContext(o);function r(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);