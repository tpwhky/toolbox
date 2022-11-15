"use strict";(globalThis["webpackChunktoolbox"]=globalThis["webpackChunktoolbox"]||[]).push([[641],{641:(t,e,o)=>{o.r(e),o.d(e,{default:()=>k});var i=o(9835),s=o(1957);const n={class:"fullscreen app"};function r(t,e,o,r,a,c){const u=(0,i.up)("menu-bar"),l=(0,i.up)("q-input");return(0,i.wg)(),(0,i.iD)("div",n,[(0,i.Wm)(u,{class:"bar",onCopy:e[0]||(e[0]=t=>c.copyToClipboard(a.input))}),(0,i.Wm)(l,{autogrow:"",autofocus:"",borderless:"",modelValue:a.input,"onUpdate:modelValue":[e[1]||(e[1]=t=>a.input=t),c.update],class:"input",ref:"input","input-style":"line-height: 2rem",onKeydown:e[2]||(e[2]=(0,s.D2)((t=>a.mode=0),["delete"]))},null,8,["modelValue","onUpdate:modelValue"])])}o(8964);const a={class:"q-gutter-x-sm"};function c(t,e,o,s,n,r){const c=(0,i.up)("q-btn");return(0,i.wg)(),(0,i.iD)("div",a,[(0,i.Wm)(c,{round:"",color:"white","text-color":"black",icon:s.matCopyAll,onClick:e[0]||(e[0]=e=>t.$emit("copy"))},null,8,["icon"]),(0,i.Wm)(c,{round:"",color:"white","text-color":"black",icon:s.matInfo,onClick:r.showInfo},null,8,["icon","onClick"]),(0,i.Wm)(c,{round:"",color:"white","text-color":"black",icon:s.matSettings,onClick:r.showSettings},null,8,["icon","onClick"])])}var u=o(6060);const l={name:"MenuBar",setup(){return{matSettings:u.krY,matInfo:u.Qec,matCopyAll:u.H3r}},methods:{showInfo(){this.$q.dialog({title:"usage",color:"black",message:'caret(^) for superscripts<br/>\n        underline(_) for subscripts<br/>\n        space/delete for normal characters<br/>\n        that is it...<br/><br/>\n        example: to write ²H₂O, you type: ^2 H_2 O<br/><br/>\n        note that this tool does it by converting characters to the superscript/subscript version of these characters(with different codes)\n        and should work on most modern platforms regardless of programs/apps used, however, not all characters will display as intended and do not expect consistency<br/><br/>\n        read: <a href="https://en.wikipedia.org/wiki/Unicode_subscripts_and_superscripts" target="_blank">wikipedia: unicode_subscripts_and_superscripts</a>',html:!0})},showSettings(){this.$q.dialog({title:"settings",color:"black",options:{type:"checkbox",model:[],items:[{label:"auto-copy",value:"autoCopy"}]}})}}};var d=o(1639),p=o(5157),h=o(9984),m=o.n(h);const b=(0,d.Z)(l,[["render",c]]),f=b;m()(l,"components",{QBtn:p.Z});const g={name:"sseditorMain",components:{MenuBar:f},data(){return{input:"",previous:"",mode:0,dismissIndicator:()=>{}}},watch:{mode(t){switch(this.dismissIndicator(),t){case 1:return void(this.dismissIndicator=this.$q.notify({color:"info",message:"entering subscripts",timeout:0}));case 2:return void(this.dismissIndicator=this.$q.notify({color:"warning",message:"entering superscripts",timeout:0}))}}},methods:{update(){const t=this.input.replace(this.previous,"");if("_"===t)return this.$nextTick((()=>{this.input=this.previous})),void(this.mode=1);if("^"===t)return this.$nextTick((()=>{this.input=this.previous})),void(this.mode=2);if(1===this.mode||2===this.mode){if(" "===t)return this.$nextTick((()=>{this.input=this.previous})),void(this.mode=0);if(this.input=this.previous,"\r\n"===t||"\n"===t||"\r"===t)return void(this.mode=0);this.input+=1===this.mode?this.getSub(t):this.getSuper(t)}this.previous=this.input},copyToClipboard(t){function e(t){var e=document.createElement("textarea");e.value=t,e.style.top="0",e.style.left="0",e.style.position="fixed",document.body.appendChild(e),e.focus(),e.select();try{document.execCommand("copy")}catch(o){}document.body.removeChild(e)}function o(t){navigator.clipboard?navigator.clipboard.writeText(t):e(t)}o(t),this.$q.notify({timeout:2,message:"Copied to clipboard."})},getSuper(t){return{0:"⁰",1:"¹",2:"²",3:"³",4:"⁴",5:"⁵",6:"⁶",7:"⁷",8:"⁸",9:"⁹","+":"⁺","-":"⁻","=":"⁼","(":"⁽",")":"⁾",a:"ᵃ",b:"ᵇ",c:"ᶜ",d:"ᵈ",e:"ᵉ",f:"ᶠ",g:"ᶢ",h:"ʰ",i:"ⁱ",j:"ʲ",k:"ᵏ",l:"ˡ",m:"ᵐ",n:"ⁿ",o:"ᵒ",p:"ᵖ",r:"ʳ",s:"ˢ",t:"ᵗ",u:"ᵘ",v:"ᵛ",w:"ʷ",x:"ˣ",y:"ʸ",z:"ᶻ",A:"ᴬ",B:"ᴮ",C:"ꟲ",D:"ᴰ",E:"ᴱ",F:"ꟳ",G:"ᴳ",H:"ᴴ",I:"ᴵ",J:"ᴶ",K:"ᴷ",L:"ᴸ",M:"ᴹ",N:"ᴺ",O:"ᴼ",P:"ᴾ",Q:"ꟴ",R:"ᴿ",S:"ˢ",T:"ᵀ",U:"ᵁ",V:"ⱽ",W:"ᵂ",X:"ˣ",Y:"ʸ",Z:"ᶻ"}[t]??t},getSub(t){return{0:"₀",1:"₁",2:"₂",3:"₃",4:"₄",5:"₅",6:"₆",7:"₇",8:"₈",9:"₉","+":"₊","-":"₋","=":"₌","(":"₍",")":"₎",a:"ₐ",e:"ₑ",h:"ₕ",i:"ᵢ",j:"ⱼ",k:"ₖ",l:"ₗ",m:"ₘ",n:"ₙ",o:"ₒ",p:"ₚ",r:"ᵣ",s:"ₛ",t:"ₜ",u:"ᵤ",v:"ᵥ",x:"ₓ"}[t]??t}}};var v=o(1169);const y=(0,d.Z)(g,[["render",r],["__scopeId","data-v-c25d9f84"]]),k=y;m()(g,"components",{QInput:v.Z})}}]);