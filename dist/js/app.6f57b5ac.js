(function(){"use strict";var e={6761:function(e,n,t){var l=t(9242),r=t(3396);function o(e,n,t,l,o,a){const i=(0,r.up)("Header"),c=(0,r.up)("TopNav"),s=(0,r.up)("router-view");return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r.Wm)(i),(0,r.Wm)(c,{navItemsArray:e.getNav},null,8,["navItemsArray"]),(0,r.Wm)(s)],64)}const a={class:"header w-full"},i={class:"flex header__line w-full mx-auto"},c={class:"flex align-center"},s={class:"icon__menu"},u=["src"],d=["src"],p={class:"flex align-center"},g=["src"],v=["src"];function m(e,n,t,l,o,m){const f=(0,r.up)("BurgerMenu");return(0,r.wg)(),(0,r.iD)("div",a,[(0,r._)("div",i,[(0,r._)("div",c,[(0,r._)("div",s,[(0,r.Wm)(f)]),(0,r._)("img",{class:"pointer icon__search",src:e.searchIcon,alt:"search"},null,8,u)]),(0,r._)("img",{class:"icon__logo",src:e.logoIcon,alt:"logo"},null,8,d),(0,r._)("div",p,[(0,r._)("img",{class:"pointer icon__person",src:e.personIcon,alt:"person"},null,8,g),(0,r._)("img",{class:"pointer icon__cart",src:e.cartIcon,alt:"cart"},null,8,v)])])])}var f=t.p+"img/menu.3f81bd00.svg",_=t.p+"img/search.92a7fa0e.svg",b=t.p+"img/logo.2eb93bb0.svg",h=t.p+"img/person.603e7d42.svg",k=t.p+"img/cart-full.8777c308.svg",w=t(7139);const y={class:"flex align-center justify-center navigation"},A={class:"flex nav-ul"},I=["onMouseenter","onMouseleave"],C={key:0,class:"wrapper"};function x(e,n,t,l,o,a){const i=(0,r.up)("TopMenu");return(0,r.wg)(),(0,r.iD)("div",null,[(0,r._)("nav",y,[(0,r._)("ul",A,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(t.navItemsArray,((e,n)=>((0,r.wg)(),(0,r.iD)("li",{class:(0,w.C_)(["clear-list nav-li justify-center",{delivery:"Доставка"===e.name}]),key:e.name,onMouseenter:e=>a.toggleActive(n),onMouseleave:e=>a.toggleActive(n)},[(0,r._)("span",{class:(0,w.C_)(["nav-link pointer",{active:e.isActive}])},(0,w.zw)(e.name),3),e.isActive?((0,r.wg)(),(0,r.iD)("div",C,[(0,r.Wm)(i)])):(0,r.kq)("",!0)],42,I)))),128))])])])}const M={class:"top-menu-wrapper w-full flex justify-center"},D={class:"content-wrapper w-full h-full"},W={class:"content flex justify-between"},j={class:"left-part"},S={class:"right-part"};function T(e,n,t,l,o,a){const i=(0,r.up)("MostPopularSearches"),c=(0,r.up)("PopularInCategory");return(0,r.wg)(),(0,r.iD)("div",M,[(0,r._)("div",D,[(0,r._)("div",W,[(0,r._)("div",j,[(0,r.Wm)(i,{popular:e.getPopularSearches},null,8,["popular"])]),(0,r._)("div",S,[(0,r.Wm)(c,{popular:e.getPopularInCategory},null,8,["popular"])])])])])}var O=t(65);const P=e=>((0,r.dD)("data-v-27be5a28"),e=e(),(0,r.Cn)(),e),U=P((()=>(0,r._)("span",{class:"list-title"},"Найпопулярніші пошукові запити",-1))),q={class:"clear-list popular-list"},F={class:"pointer"};function H(e,n,t,l,o,a){return(0,r.wg)(),(0,r.iD)("div",null,[U,(0,r._)("ul",q,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(t.popular,((e,n)=>((0,r.wg)(),(0,r.iD)("li",{class:"popular-item",key:n},[(0,r._)("span",F,(0,w.zw)(e),1)])))),128))])])}var N={name:"MostPopularSearches",props:{popular:{required:!0,type:Array}}},Z=t(89);const z=(0,Z.Z)(N,[["render",H],["__scopeId","data-v-27be5a28"]]);var E=z;const K=e=>((0,r.dD)("data-v-25bf5eb4"),e=e(),(0,r.Cn)(),e),Y=K((()=>(0,r._)("span",{class:"list-title"},"Популярне у цій категорії",-1))),L={class:"clear-list popular-list flex"};function $(e,n,t,l,o,a){const i=(0,r.up)("TopMenuItem");return(0,r.wg)(),(0,r.iD)("div",null,[Y,(0,r._)("ul",L,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(t.popular,((e,n)=>((0,r.wg)(),(0,r.iD)("li",{class:"popular-item",key:n},[(0,r.Wm)(i,{name:e.name,amount:e.amount,description:e.description,image:e.image},null,8,["name","amount","description","image"])])))),128))])])}const B={class:"image-wrapper flex justify-center align-center"},R=["src"],G={class:"item__name"},J={class:"item__description"},Q={class:"item__amount"};function V(e,n,t,l,o,a){const i=(0,r.up)("router-link");return(0,r.wg)(),(0,r.iD)("div",null,[(0,r._)("div",B,[(0,r._)("img",{src:t.image,alt:"popular item"},null,8,R)]),(0,r.Wm)(i,{to:"#",class:"decoration-none item__link"},{default:(0,r.w5)((()=>[(0,r._)("span",G,(0,w.zw)(t.name),1),(0,r._)("span",J,(0,w.zw)(t.description),1),(0,r._)("span",Q,(0,w.zw)(t.amount),1)])),_:1})])}var X={name:"TopMenuItem",props:{name:{required:!0,type:String},description:{required:!0,type:String},amount:{required:!0,type:String},image:{required:!0,type:String}}};const ee=(0,Z.Z)(X,[["render",V],["__scopeId","data-v-4ab04cd9"]]);var ne=ee,te={name:"PopularInCategory",components:{TopMenuItem:ne},props:{popular:{type:Array,required:!0}}};const le=(0,Z.Z)(te,[["render",$],["__scopeId","data-v-25bf5eb4"]]);var re=le,oe={name:"TopMenu",components:{PopularInCategory:re,MostPopularSearches:E},data:()=>({}),computed:{...(0,O.Se)(["getPopularSearches","getPopularInCategory"])}};const ae=(0,Z.Z)(oe,[["render",T],["__scopeId","data-v-25e4b011"]]);var ie=ae,ce={components:{TopMenu:ie},props:{navItemsArray:{type:Array,required:!0}},data:()=>({isActive:!1}),methods:{toggleActive(e){this.$store.commit("toggleActive",e)}}};const se=(0,Z.Z)(ce,[["render",x],["__scopeId","data-v-fc7996be"]]);var ue=se;const de=e=>((0,r.dD)("data-v-d2ad91e0"),e=e(),(0,r.Cn)(),e),pe=["src"],ge={key:1,class:"burger__wrapper"},ve={class:"flex close-wrap"},me=["src"],fe={class:"content content-1 flex flex-col justify-between h-full"},_e={class:"order-1"},be=de((()=>(0,r._)("span",{class:"d-block burger__title"},"Всі продукти",-1))),he=(0,r.Uk)("Продукти для дорослих "),ke=["src"],we=(0,r.Uk)("Продукти для дітей "),ye=["src"],Ae=de((()=>(0,r._)("div",{class:"divider mb-36"},null,-1))),Ie={class:"flex-col justify-between order-2"},Ce=(0,r.Uk)("Про компанію"),xe=(0,r.Uk)("Сертифікати"),Me=(0,r.Uk)("Питання-Відповідь"),De=(0,r.Uk)("Блог"),We=de((()=>(0,r._)("div",{class:"empty"},null,-1))),je=(0,r.Uk)("Доставка та оплата"),Se=(0,r.Uk)("Контакти"),Te=(0,r.Uk)("Вакансії"),Oe={class:"order-3"},Pe={class:"flex align-center mb-26 burger__call-center"},Ue=["src"],qe=de((()=>(0,r._)("span",{class:"burger__phone"},"0 800 330 039",-1))),Fe=de((()=>(0,r._)("span",{class:"burger__work-hours d-block"},[(0,r.Uk)("Call-центр работает"),(0,r._)("br"),(0,r.Uk)(" с 7:00 до 23:00")],-1))),He=de((()=>(0,r._)("div",{class:"divider"},null,-1))),Ne={class:"burger__selects flex justify-between"},Ze={class:"content flex flex-col justify-between h-full"},ze=["src"],Ee=(0,r.Uk)("Продукти для дорослих "),Ke=de((()=>(0,r._)("div",{class:"divider"},null,-1))),Ye={class:"burger__selects flex justify-between"},Le={class:"content flex flex-col justify-between h-full"},$e=["src"],Be=(0,r.Uk)("Продукти для дітей "),Re=de((()=>(0,r._)("div",{class:"divider"},null,-1))),Ge={class:"burger__selects flex justify-between"};function Je(e,n,t,o,a,i){const c=(0,r.up)("router-link"),s=(0,r.up)("Select");return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r._)("img",{class:"pointer icon__menu",src:e.menuIcon,alt:"menu",onClick:n[0]||(n[0]=(...e)=>i.toggleActive&&i.toggleActive(...e))},null,8,pe),e.isActive?((0,r.wg)(),(0,r.iD)("div",{key:0,class:"backdrop",onClick:n[1]||(n[1]=(...e)=>i.toggleActive&&i.toggleActive(...e))})):(0,r.kq)("",!0),e.isActive?((0,r.wg)(),(0,r.iD)("div",ge,[(0,r._)("div",ve,[(0,r._)("img",{class:"pointer close",src:e.closeIcon,alt:"close",onClick:n[2]||(n[2]=(...e)=>i.toggleActive&&i.toggleActive(...e))},null,8,me)]),(0,r.wy)((0,r._)("div",fe,[(0,r._)("div",null,[(0,r._)("div",_e,[be,(0,r._)("span",{class:"flex burger__link mb-28 align-center",onClick:n[3]||(n[3]=(...e)=>i.oldActive&&i.oldActive(...e))},[he,(0,r._)("img",{class:"to-right",src:e.toRightIcon,alt:"to right"},null,8,ke)]),(0,r._)("span",{class:"flex burger__link mb-36",onClick:n[4]||(n[4]=(...e)=>i.childrenActive&&i.childrenActive(...e))},[we,(0,r._)("img",{class:"to-right",src:e.toRightIcon,alt:"to right"},null,8,ye)]),Ae]),(0,r._)("div",Ie,[(0,r._)("div",null,[(0,r.Wm)(c,{to:"#",class:"d-block burger__link mb-32 decoration-none"},{default:(0,r.w5)((()=>[Ce])),_:1}),(0,r.Wm)(c,{to:"#",class:"d-block burger__link mb-32 decoration-none"},{default:(0,r.w5)((()=>[xe])),_:1}),(0,r.Wm)(c,{to:"#",class:"d-block burger__link mb-32 decoration-none"},{default:(0,r.w5)((()=>[Me])),_:1}),(0,r.Wm)(c,{to:"#",class:"d-block burger__link decoration-none"},{default:(0,r.w5)((()=>[De])),_:1})])])]),We,(0,r._)("div",null,[(0,r._)("div",null,[(0,r.Wm)(c,{to:"#",class:"d-block burger__link mb-32 decoration-none"},{default:(0,r.w5)((()=>[je])),_:1}),(0,r.Wm)(c,{to:"#",class:"d-block burger__link mb-32 decoration-none"},{default:(0,r.w5)((()=>[Se])),_:1}),(0,r.Wm)(c,{to:"#",class:"d-block burger__link decoration-none"},{default:(0,r.w5)((()=>[Te])),_:1})]),(0,r._)("div",Oe,[(0,r._)("div",Pe,[(0,r._)("img",{src:e.phoneIcon,alt:"phone"},null,8,Ue),qe,Fe]),He,(0,r._)("div",Ne,[(0,r.Wm)(s,{label:"Доставка",value:["Україна","Світ"]}),(0,r.Wm)(s,{label:"Мова",value:["Українська","Англійська"]}),(0,r.Wm)(s,{label:"Валюта",value:["Грн","Дол"]})])])])],512),[[l.F8,!this.old&&!this.children]]),(0,r.wy)((0,r._)("div",Ze,[(0,r._)("div",null,[(0,r.Wm)(c,{to:"#",class:"flex burger__title decoration-none align-center",onClick:i.returnToMainMenu},{default:(0,r.w5)((()=>[(0,r._)("img",{class:"to-left",src:e.toLeftIcon,alt:"to left"},null,8,ze),Ee])),_:1},8,["onClick"]),(0,r._)("ul",null,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(e.getForOld,(e=>((0,r.wg)(),(0,r.iD)("li",{class:"clear-list mb-32",key:e},[(0,r.Wm)(c,{to:"#",class:(0,w.C_)(["decoration-none burger__link",{bold:"Всі"===e}])},{default:(0,r.w5)((()=>[(0,r.Uk)((0,w.zw)(e),1)])),_:2},1032,["class"])])))),128))])]),(0,r._)("div",null,[Ke,(0,r._)("div",Ye,[(0,r.Wm)(s,{label:"Доставка",value:["Україна","Світ"]}),(0,r.Wm)(s,{label:"Мова",value:["Українська","Англійська"]}),(0,r.Wm)(s,{label:"Валюта",value:["Грн","Дол"]})])])],512),[[l.F8,!!this.old]]),(0,r.wy)((0,r._)("div",Le,[(0,r._)("div",null,[(0,r.Wm)(c,{to:"#",class:"flex burger__title decoration-none align-center",onClick:i.returnToMainMenu},{default:(0,r.w5)((()=>[(0,r._)("img",{class:"to-left",src:e.toLeftIcon,alt:"to left"},null,8,$e),Be])),_:1},8,["onClick"]),(0,r._)("ul",null,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(e.getForChildren,(e=>((0,r.wg)(),(0,r.iD)("li",{class:"clear-list mb-32",key:e},[(0,r.Wm)(c,{to:"#",class:(0,w.C_)(["decoration-none burger__link",{bold:"Всі"===e}])},{default:(0,r.w5)((()=>[(0,r.Uk)((0,w.zw)(e),1)])),_:2},1032,["class"])])))),128))])]),(0,r._)("div",null,[Re,(0,r._)("div",Ge,[(0,r.Wm)(s,{label:"Доставка",value:["Україна","Світ"]}),(0,r.Wm)(s,{label:"Мова",value:["Українська","Англійська"]}),(0,r.Wm)(s,{label:"Валюта",value:["Грн","Дол"]})])])],512),[[l.F8,!!this.children]])])):(0,r.kq)("",!0)],64)}var Qe=t.p+"img/close.6292299e.svg",Ve=t.p+"img/phone.d343e35a.svg",Xe=t.p+"img/toRight.029ccbe0.svg",en=t.p+"img/toLeft.e0edf583.svg";const nn={class:"flex-col justify-start"},tn={class:"d-block"},ln=["src"];function rn(e,n,t,l,o,a){return(0,r.wg)(),(0,r.iD)("div",nn,[(0,r._)("label",tn,(0,w.zw)(t.label),1),(0,r._)("select",null,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(t.value,(n=>((0,r.wg)(),(0,r.iD)("option",null,[(0,r.Uk)((0,w.zw)(n)+" ",1),(0,r._)("img",{src:e.checkedIcon,alt:"checked"},null,8,ln)])))),256))])])}var on=t.p+"img/checked.a014a694.svg",an={name:"Select",props:{label:{required:!0,type:String},value:{required:!0,type:Array}},data:()=>({checkedIcon:on})};const cn=(0,Z.Z)(an,[["render",rn],["__scopeId","data-v-04248f34"]]);var sn=cn,un={name:"BurgerMenu",components:{Select:sn},data:()=>({menuIcon:f,closeIcon:Qe,phoneIcon:Ve,toRightIcon:Xe,toLeftIcon:en,isActive:!1,old:!1,children:!1}),methods:{toggleActive(){this.isActive=!this.isActive},oldActive(){this.old=!0,this.children=!1},childrenActive(){this.old=!1,this.children=!0},returnToMainMenu(){this.old=!1,this.children=!1}},computed:{...(0,O.Se)(["getForOld","getForChildren"])}};const dn=(0,Z.Z)(un,[["render",Je],["__scopeId","data-v-d2ad91e0"]]);var pn=dn,gn={name:"Header",components:{BurgerMenu:pn,TopNavMenu:ue},data:()=>({menuIcon:f,searchIcon:_,logoIcon:b,personIcon:h,cartIcon:k})};const vn=(0,Z.Z)(gn,[["render",m],["__scopeId","data-v-431f05a4"]]);var mn=vn,fn={name:"App",components:{Header:mn,TopNav:ue},computed:{...(0,O.Se)(["getNav"])}};const _n=(0,Z.Z)(fn,[["render",o]]);var bn=_n,hn=t(2483);function kn(e,n){return null}const wn={},yn=(0,Z.Z)(wn,[["render",kn]]);var An=yn;const In=[{path:"/",name:"home",component:An},{path:"/about",name:"about",component:()=>t.e(443).then(t.bind(t,7381))}],Cn=(0,hn.p7)({history:(0,hn.PO)("perla-helsa/"),routes:In});var xn=Cn,Mn=t.p+"img/product-1.f22a4135.png",Dn=t.p+"img/product-2.e1fcbaa0.png",Wn={state:{nav:[{name:"Омега-3",link:"/#",isActive:!1},{name:"Вітаміни",link:"/#",isActive:!1},{name:"Добавки",link:"/#",isActive:!1},{name:"Доставка",link:"/#",isActive:!1},{name:"Про нас",link:"/#",isActive:!1}],popularSearches:["Колаген","Омега-3","Вітамін Д3","Сквален","Вітаміни для дітей"],popularInCategory:[{name:"Колаген",description:"Пептиди 1-типу із Франції",amount:"30 порцій у стіках",image:`${Mn}`},{name:"Вітамін D3 2000 ME",description:"Пептиди 1-типу із Франції",amount:"60 капсул",image:`${Dn}`},{name:"Омега-3 Тріска",description:"Пептиди 1-типу із Франції",amount:"120 капсул",image:`${Mn}`},{name:"Омега-3 Тунець",description:"Пептиди 1-типу із Франції",amount:"120 капсул",image:`${Dn}`}],forOld:["Всі","Колаген","Омега-3 Тунець","Омега-3 Тріска","Вітамін D3 2000 ME","Вітамін D3 5000 ME","Сквален","Акулячий жир"],forChildren:["Всі","Kids Омега-3  Тунець","Kids Омега-3  Тріска","Kids Вітамін Д3"]},getters:{getNav:e=>e.nav,getPopularSearches:e=>e.popularSearches,getPopularInCategory:e=>e.popularInCategory,getForOld:e=>e.forOld,getForChildren:e=>e.forChildren},mutations:{toggleActive(e,n){e.nav[n].isActive=!e.nav[n].isActive}}},jn=(0,O.MT)({modules:{TopNavMenu:Wn}});(0,l.ri)(bn).use(jn).use(xn).mount("#app")}},n={};function t(l){var r=n[l];if(void 0!==r)return r.exports;var o=n[l]={exports:{}};return e[l](o,o.exports,t),o.exports}t.m=e,function(){var e=[];t.O=function(n,l,r,o){if(!l){var a=1/0;for(u=0;u<e.length;u++){l=e[u][0],r=e[u][1],o=e[u][2];for(var i=!0,c=0;c<l.length;c++)(!1&o||a>=o)&&Object.keys(t.O).every((function(e){return t.O[e](l[c])}))?l.splice(c--,1):(i=!1,o<a&&(a=o));if(i){e.splice(u--,1);var s=r();void 0!==s&&(n=s)}}return n}o=o||0;for(var u=e.length;u>0&&e[u-1][2]>o;u--)e[u]=e[u-1];e[u]=[l,r,o]}}(),function(){t.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(n,{a:n}),n}}(),function(){t.d=function(e,n){for(var l in n)t.o(n,l)&&!t.o(e,l)&&Object.defineProperty(e,l,{enumerable:!0,get:n[l]})}}(),function(){t.f={},t.e=function(e){return Promise.all(Object.keys(t.f).reduce((function(n,l){return t.f[l](e,n),n}),[]))}}(),function(){t.u=function(e){return"js/about.a5cdd0b2.js"}}(),function(){t.miniCssF=function(e){}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){var e={},n="perla-helsa:";t.l=function(l,r,o,a){if(e[l])e[l].push(r);else{var i,c;if(void 0!==o)for(var s=document.getElementsByTagName("script"),u=0;u<s.length;u++){var d=s[u];if(d.getAttribute("src")==l||d.getAttribute("data-webpack")==n+o){i=d;break}}i||(c=!0,i=document.createElement("script"),i.charset="utf-8",i.timeout=120,t.nc&&i.setAttribute("nonce",t.nc),i.setAttribute("data-webpack",n+o),i.src=l),e[l]=[r];var p=function(n,t){i.onerror=i.onload=null,clearTimeout(g);var r=e[l];if(delete e[l],i.parentNode&&i.parentNode.removeChild(i),r&&r.forEach((function(e){return e(t)})),n)return n(t)},g=setTimeout(p.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=p.bind(null,i.onerror),i.onload=p.bind(null,i.onload),c&&document.head.appendChild(i)}}}(),function(){t.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){t.p="perla-helsa/"}(),function(){var e={143:0};t.f.j=function(n,l){var r=t.o(e,n)?e[n]:void 0;if(0!==r)if(r)l.push(r[2]);else{var o=new Promise((function(t,l){r=e[n]=[t,l]}));l.push(r[2]=o);var a=t.p+t.u(n),i=new Error,c=function(l){if(t.o(e,n)&&(r=e[n],0!==r&&(e[n]=void 0),r)){var o=l&&("load"===l.type?"missing":l.type),a=l&&l.target&&l.target.src;i.message="Loading chunk "+n+" failed.\n("+o+": "+a+")",i.name="ChunkLoadError",i.type=o,i.request=a,r[1](i)}};t.l(a,c,"chunk-"+n,n)}},t.O.j=function(n){return 0===e[n]};var n=function(n,l){var r,o,a=l[0],i=l[1],c=l[2],s=0;if(a.some((function(n){return 0!==e[n]}))){for(r in i)t.o(i,r)&&(t.m[r]=i[r]);if(c)var u=c(t)}for(n&&n(l);s<a.length;s++)o=a[s],t.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return t.O(u)},l=self["webpackChunkperla_helsa"]=self["webpackChunkperla_helsa"]||[];l.forEach(n.bind(null,0)),l.push=n.bind(null,l.push.bind(l))}();var l=t.O(void 0,[998],(function(){return t(6761)}));l=t.O(l)})();
//# sourceMappingURL=app.6f57b5ac.js.map