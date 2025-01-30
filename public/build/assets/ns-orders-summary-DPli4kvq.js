import{_ as h,n as x}from"./currency-B1QCtbGi.js";import{_ as p}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{r as d,o,c as l,a as s,t as n,f as c,e as u,F as b,b as v,n as _}from"./runtime-core.esm-bundler-VrNrzzXC.js";const y={name:"ns-orders-summary",data(){return{orders:[],subscription:null,hasLoaded:!1}},mounted(){this.hasLoaded=!1,this.subscription=Dashboard.recentOrders.subscribe(i=>{this.hasLoaded=!0,this.orders=i})},methods:{__:h,nsCurrency:x},unmounted(){this.subscription.unsubscribe()}},g={id:"ns-orders-summary",class:"flex flex-auto flex-col shadow rounded-lg overflow-hidden"},k={class:"p-2 flex title items-center justify-between border-b"},w={class:"font-semibold"},C={class:"head flex-auto flex-col flex h-64 overflow-y-auto ns-scrollbar"},L={key:0,class:"h-full flex items-center justify-center"},j={key:1,class:"h-full flex items-center justify-center flex-col"},O={class:"text-sm text-center"},B={class:"text-lg font-semibold"},N={class:"flex -mx-2"},V={class:"px-1"},z={class:"text-semibold text-xs"},D={class:"px-1"},F={class:"text-semibold text-xs"};function R(i,e,S,E,r,a){const m=d("ns-close-button"),f=d("ns-spinner");return o(),l("div",g,[s("div",k,[s("h3",w,n(a.__("Recents Orders")),1),s("div",null,[c(m,{onClick:e[0]||(e[0]=t=>i.$emit("onRemove"))})])]),s("div",C,[r.hasLoaded?u("",!0):(o(),l("div",L,[c(f,{size:"8",border:"4"})])),r.hasLoaded&&r.orders.length===0?(o(),l("div",j,[e[1]||(e[1]=s("i",{class:"las la-grin-beam-sweat text-6xl"},null,-1)),s("p",O,n(a.__("Well.. nothing to show for the meantime.")),1)])):u("",!0),(o(!0),l(b,null,v(r.orders,t=>(o(),l("div",{key:t.id,class:_([t.payment_status==="paid"?"paid-order":"other-order","border-b single-order p-2 flex justify-between"])},[s("div",null,[s("h3",B,n(a.__("Order"))+" : "+n(t.code),1),s("div",N,[s("div",V,[s("h4",z,[e[2]||(e[2]=s("i",{class:"lar la-user-circle"},null,-1)),s("span",null,n(t.user.username),1)])]),e[4]||(e[4]=s("div",{class:"divide-y-4"},null,-1)),s("div",D,[s("h4",F,[e[3]||(e[3]=s("i",{class:"las la-clock"},null,-1)),s("span",null,n(t.created_at),1)])])])]),s("div",null,[s("h2",{class:_([t.payment_status==="paid"?"paid-currency":"unpaid-currency","text-xl font-bold"])},n(a.nsCurrency(t.total)),3)])],2))),128))])])}const G=p(y,[["render",R]]);export{G as default};
