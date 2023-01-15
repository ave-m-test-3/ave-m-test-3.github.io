var e=Object.defineProperty,t=Object.defineProperties,o=Object.getOwnPropertyDescriptors,n=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable,s=(t,o,n)=>o in t?e(t,o,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[o]=n,l=(e,t)=>{for(var o in t||(t={}))a.call(t,o)&&s(e,o,t[o]);if(n)for(var o of n(t))i.call(t,o)&&s(e,o,t[o]);return e},r=(e,n)=>t(e,o(n));import{_ as c,x as d}from"./index.67f94cb9.js";import{r as h,P as u,o as m,x as p,C as w,E as g,F as v,z as f,J as b,y,Q as $,V as k,M as _,O as N,I as C,w as L,H as S,c as x}from"./vendor.a48c6377.js";const P={name:"NewPair",props:{tableList:Array,loading:{type:Boolean,default:!1}},data:()=>({defaultIcon:new URL("/assets/icon-default.995adb35.png",self.location).href}),computed:{isLoading(){return this.loading}},methods:{tableRowClick(e){var t,o,n;(null==(t=null==window?void 0:window.main)?void 0:t.openMarket)?null==(n=null==(o=null==window?void 0:window.main)?void 0:o.openMarket)||n.call(o,e.target_token,e.chain):this.$f.openBrowser("https://ave.ai/token/"+e.target_token+"-"+e.chain)}}},z=e=>(_("data-v-32249d78"),e=e(),N(),e),D={class:"table"},U={class:"table-list"},O={class:"table-item table-header"},V={class:"table-item_d"},I={class:"table-item_d"},j=z((()=>w("th",{class:"table-item_d th"},"AMM",-1))),B={class:"table-item_d th"},E={class:"table-item_d"},M=["onClick"],A={class:"table-item_d symbol"},q={key:0},F={class:"main"},R=z((()=>w("br",null,null,-1))),T={class:"minor"},H=C("/ "),J={key:1},Q={class:"main"},G=z((()=>w("br",null,null,-1))),K={class:"minor"},W=C("/ "),X={class:"table-item_d"},Y={class:"main"},Z=z((()=>w("br",null,null,-1))),ee={class:"minor"},te={class:"main"},oe=z((()=>w("br",null,null,-1))),ne={class:"minor"},ae={class:"table-item_d"},ie=["src"],se={class:"table-item_d"},le=["src"],re={class:"table-item_d"},ce={class:"main"},de=z((()=>w("br",null,null,-1))),he={class:"minor"};const ue={style:{display:"flex","align-items":"center"}},me=["src"],pe={class:"btn-content"},we=["src"],ge={style:{height:"50vh","overflow-y":"auto"}},ve=["src"],fe={class:"popup-title"},be=["src"],ye={class:"btn-content"};var $e=c({name:"Pool",components:{NewPairs:c(P,[["render",function(e,t,o,n,a,i){const s=h("van-image"),l=h("van-empty"),r=u("imageError");return m(),p("div",D,[w("table",U,[w("tr",O,[w("th",V,g(e.$t("poolPair")),1),w("th",I,g(e.$t("pairAmount")),1),j,w("th",B,g(e.$t("chain")),1),w("th",E,g(e.$t("poolSize")),1)]),(m(!0),p(v,null,f(o.tableList,((t,o)=>(m(),p("tr",{class:"table-item",key:o,onClick:b((e=>i.tableRowClick(t)),["stop"])},[w("td",A,[t.target_token===t.token0_address?(m(),p("div",q,[w("div",F,[y(s,{class:"icon-token",round:"",width:"0.32rem",height:"0.32rem","icon-size":"0.32rem","lazy-load":"","show-loading":"",src:e.$f.formatIcon(`${t.token0_address}-${t.chain}`),"error-icon":a.defaultIcon},null,8,["src","error-icon"]),w("span",null,g(t.token0_symbol),1)]),R,w("div",T,[H,y(s,{class:"icon-token",round:"",width:"0.32rem",height:"0.32rem","icon-size":"0.32rem","lazy-load":"","show-loading":"",src:t.logoURI||e.$f.formatIcon(`${t.token1_address}-${t.chain}`),"error-icon":a.defaultIcon},null,8,["src","error-icon"]),w("span",null,g(t.token1_symbol),1)])])):(m(),p("div",J,[w("div",Q,[y(s,{class:"icon-token",round:"",width:"0.32rem",height:"0.32rem","icon-size":"0.32rem","lazy-load":"","show-loading":"",src:e.$f.formatIcon(`${t.token1_address}-${t.chain}`),"error-icon":a.defaultIcon},null,8,["src","error-icon"]),w("span",null,g(t.token1_symbol),1)]),G,w("div",K,[W,y(s,{class:"icon-token",round:"",width:"0.32rem",height:"0.32rem","icon-size":"0.32rem","lazy-load":"","show-loading":"",src:e.$f.formatIcon(`${t.token0_address}-${t.chain}`),"error-icon":a.defaultIcon},null,8,["src","error-icon"]),w("span",null,g(t.token0_symbol),1)])]))]),w("td",X,[t.target_token===t.token0_address?(m(),p(v,{key:0},[w("span",Y,g(e.$f.formatNumUnit(t.reserve0,2)),1),Z,w("span",ee,"/"+g(e.$f.formatNumUnit(t.reserve1,2)),1)],64)):(m(),p(v,{key:1},[w("span",te,g(e.$f.formatNumUnit(t.reserve1,2)),1),oe,w("span",ne,"/"+g(e.$f.formatNumUnit(t.reserve0,2)),1)],64))]),w("td",ae,[$(w("img",{class:"icon-svg icon-symbol",style:{cursor:"default"},src:`https://www.avestorage.cloud/swap/${t.amm}.jpeg`,alt:"",srcset:""},null,8,ie),[[r]])]),w("td",se,[w("img",{class:"icon-svg icon-symbol",style:{cursor:"default"},src:`https://www.avestorage.cloud/chain/${t.chain}.png`,alt:"",srcset:""},null,8,le)]),w("td",re,[w("span",ce,"$"+g(t.target_token!==t.token0_address?e.$f.formatNumUnit(Math.round(t.reserve0*t.token0_price_usd*2)):e.$f.formatNumUnit(Math.round(t.reserve1*t.token1_price_usd*2))),1),de,w("span",he,g(e.$dayjs(1e3*t.created_at).fromNow()),1)])],8,M)))),128))]),$(y(l,{class:"empty",image:e.emptyNoDataLight,description:e.$t("empty")},null,8,["image","description"]),[[k,o.tableList&&0===o.tableList.length&&!i.isLoading]])])}],["__scopeId","data-v-32249d78"]])},data(){let e=Object.values(this.$store.state.chainConfig);e=e.map((e=>r(l({},e),{amm:Object.keys(e.swapUrl)})));const t=e.reduce(((e,t)=>e.concat(t.amm)),[]);return{conditions:{pageNO:1,pageSize:15,sort:"created_at",direction:"desc",chain:"",amm:"",minPoolSize:1e5},initNetworkList:e,amms:t,tableData:[],loading:!1,total:1e3,show:!1,filterPopupVisible:!1,listLoading:!1,finished:!1,show1:!1,show2:!1,error:!1,poolSizeOption:[{text:"$1000",value:1e3},{text:"$10000",value:1e4},{text:"$100000",value:1e5},{text:"$500000",value:5e5},{text:"$1000000",value:1e6},{text:"$2000000",value:2e6}]}},computed:{networkList(){return[{netName:"",name:this.$t("allChain")},...this.initNetworkList]},ammList(){let e=[];if(this.conditions.chain){e=this.networkList.find((e=>this.conditions.chain===e.netName)).swaps.map((e=>({text:e.show_name,value:e.name,icon:`https://www.avestorage.cloud/swap/${e.name}.jpeg`})))||[]}else{e=this.networkList.reduce(((e,t)=>e.concat(t.swaps||[])),[]).map((e=>({text:e.show_name,value:e.name,icon:`https://www.avestorage.cloud/swap/${e.name}.jpeg`})))||[]}return[{text:this.$t("allPool"),value:""}].concat(e)},chainName(){var e,t,o,n;return this.conditions.chain&&(null==(t=null==(e=this.$store.state.chainConfig)?void 0:e[this.conditions.chain])?void 0:t.name)?null==(n=null==(o=this.$store.state.chainConfig)?void 0:o[this.conditions.chain])?void 0:n.name:this.$t("allChain")},sortByList(){return[{name:this.$t("createdTime"),value:"created_at",color:"created_at"===this.conditions.sort?"#558BED":""},{name:this.$t("poolCirculatingSupply"),value:"poolSize",color:"poolSize"===this.conditions.sort?"#558BED":""}]},sortDirectionList(){return[{name:this.$t("ascending"),value:"asc",color:"asc"===this.conditions.direction?"#558BED":""},{name:this.$t("descending"),value:"desc",color:"desc"===this.conditions.direction?"#558BED":""}]},activeSort(){var e;return null==(e=this.sortByList.find((e=>e.value===this.conditions.sort)))?void 0:e.name},activeDirection(){var e;return null==(e=this.sortDirectionList.find((e=>e.value===this.conditions.direction)))?void 0:e.name}},activated(){this.getNewPairs()},methods:{query(){this.filterPopupVisible=!1,this.conditions.pageNO=1,this.tableData=[],this.finished=!1,this.error=!1,this.getNewPairs()},getNewPairs(){this.loading=!0,d(r(l({},this.conditions),{minPoolSize:Math.round(this.conditions.minPoolSize/2)})).then((e=>{this.total=e.total;let t=Array.isArray(e.data)?e.data:[];this.tableData=this.tableData.concat(t),(this.tableData.length>=this.total||t.length<this.conditions.pageSize)&&(this.finished=!0)})).catch((()=>{this.error=!0})).finally((()=>{this.loading=!1}))},selectChain(e){this.show=!1,this.$refs.dropDownChain.toggle(!1),this.conditions.chain=e.netName,this.conditions.amm="",this.query()},onLoad(){this.conditions.pageNO++,this.getNewPairs()},onSelect1(e){this.conditions.sort=e.value,this.show1=!1},onSelect2(e){this.conditions.direction=e.value,this.show2=!1}}},[["render",function(e,t,o,n,a,i){const s=h("van-notice-bar"),l=h("van-icon"),r=h("van-cell"),c=h("van-dropdown-item"),d=h("van-dropdown-menu"),k=h("new-pairs"),_=h("van-list"),N=h("van-action-sheet"),P=h("van-button"),z=h("van-field"),D=h("van-stepper"),U=h("van-form"),O=h("van-popup"),V=u("imageError");return m(),p(v,null,[y(s,{class:"new-pool-notice",mode:"closeable","left-icon":"info-o",background:"#FFFBE8",color:"#ED6A0C",wrapable:"",scrollable:!1},{default:L((()=>[C(g(e.$t("newPoolNotice")),1)])),_:1}),y(d,{"active-color":"#558BED",class:"filter-menu"},{default:L((()=>[y(c,{modelValue:a.conditions.chain,"onUpdate:modelValue":t[0]||(t[0]=e=>a.conditions.chain=e),teleport:"#app",ref:"dropDownChain"},{title:L((()=>[w("div",ue,[a.conditions.chain?(m(),p("img",{key:0,class:"icon-svg icon-net-connect",style:{cursor:"default"},src:`https://www.avestorage.cloud/chain/${a.conditions.chain}.png`,alt:"",srcset:""},null,8,me)):S("",!0),w("span",pe,g(i.chainName),1)])])),default:L((()=>[(m(!0),p(v,null,f(i.networkList,(t=>(m(),x(r,{key:t.netName,class:"list-item",onClick:b((e=>i.selectChain(t)),["stop"]),title:t.name,icon:e.$f.formatIcon(t),size:"large",clickable:"",center:""},{icon:L((()=>[t.netName?(m(),p("img",{key:0,class:"icon-svg icon-net-connect",style:{cursor:"default"},src:`https://www.avestorage.cloud/chain/${t.netName}.png`,alt:"",srcset:""},null,8,we)):S("",!0)])),"right-icon":L((()=>[a.conditions.chain===t.netName?(m(),x(l,{key:0,color:"#558BED",name:"success"})):S("",!0)])),_:2},1032,["onClick","title","icon"])))),128))])),_:1},8,["modelValue"]),$(y(c,{modelValue:a.conditions.amm,"onUpdate:modelValue":t[1]||(t[1]=e=>a.conditions.amm=e),options:i.ammList,onChange:i.query},null,8,["modelValue","options","onChange"]),[[V]]),y(c,{modelValue:a.conditions.minPoolSize,"onUpdate:modelValue":t[2]||(t[2]=e=>a.conditions.minPoolSize=e),options:a.poolSizeOption,onChange:i.query},null,8,["modelValue","options","onChange"])])),_:1}),w("main",null,[y(_,{loading:a.loading,"onUpdate:loading":t[3]||(t[3]=e=>a.loading=e),finished:a.finished,error:a.error,"onUpdate:error":t[4]||(t[4]=e=>a.error=e),"error-text":e.$t("errorText"),onLoad:i.onLoad,"loading-text":e.$t("loading"),"finished-text":e.$t("noMore")},{default:L((()=>[y(k,{tableList:a.tableData,loading:a.loading},null,8,["tableList","loading"])])),_:1},8,["loading","finished","error","error-text","onLoad","loading-text","finished-text"]),y(N,{show:a.show,"onUpdate:show":t[5]||(t[5]=e=>a.show=e),"cancel-text":e.$t("cancel"),description:e.$t("selectChain"),teleport:"#app","close-on-click-action":""},{default:L((()=>[w("div",ge,[(m(!0),p(v,null,f(i.networkList,(t=>(m(),x(r,{key:t.netName,class:"list-item",onClick:b((e=>i.selectChain(t)),["stop"]),title:t.name,icon:e.$f.formatIcon(t),value:t.netName,size:"large",clickable:""},{icon:L((()=>[t.netName?(m(),p("img",{key:0,class:"icon-svg icon-net-connect",style:{cursor:"default"},src:`https://www.avestorage.cloud/chain/${t.netName}.png`,alt:"",srcset:""},null,8,ve)):S("",!0)])),_:2},1032,["onClick","title","icon","value"])))),128))])])),_:1},8,["show","cancel-text","description"]),y(O,{show:a.filterPopupVisible,"onUpdate:show":t[10]||(t[10]=e=>a.filterPopupVisible=e),class:"popup-container filter",closeable:!0,"close-on-click-overlay":!1,"close-on-popstate":!1,round:"",position:"center",teleport:"#app",style:{width:"90%"}},{default:L((()=>[w("h3",fe,g(e.$t("filterCriteria")),1),y(U,{class:"popup-content",ref:"form","validate-first":"",onSubmit:i.query,"input-align":"right"},{default:L((()=>[y(z,{label:"Chain",placeholder:"",readonly:""},{input:L((()=>[y(P,{plain:"",hairline:"",type:"primary",size:"small",onClick:t[6]||(t[6]=e=>a.show=!0)},{default:L((()=>[a.conditions.chain?(m(),p("img",{key:0,class:"icon-svg icon-net-connect",style:{cursor:"default"},src:`https://www.avestorage.cloud/chain/${a.conditions.chain}.png`,alt:"",srcset:""},null,8,be)):S("",!0),w("span",ye,g(i.chainName),1),y(l,{name:"arrow-down"})])),_:1})])),_:1}),y(z,{label:e.$t("minCirculatingSupply"),placeholder:"",readonly:""},{input:L((()=>[y(D,{modelValue:a.conditions.minPoolSize,"onUpdate:modelValue":t[7]||(t[7]=e=>a.conditions.minPoolSize=e),"input-width":"80px",min:1e5,step:1e4},null,8,["modelValue"])])),_:1},8,["label"]),y(z,{label:e.$t("sortBy"),placeholder:"",readonly:"",clickable:"","right-icon":"arrow-down","model-value":i.activeSort,onClick:t[8]||(t[8]=b((e=>a.show1=!0),["stop"]))},null,8,["label","model-value"]),y(z,{label:e.$t("sortDirection"),placeholder:"",readonly:"",clickable:"","right-icon":"arrow-down","model-value":i.activeDirection,onClick:t[9]||(t[9]=b((e=>a.show2=!0),["stop"]))},null,8,["label","model-value"]),y(P,{class:"sumbit-btn",round:"",block:"",type:"primary","native-type":"submit"},{default:L((()=>[C(g(e.$t("search")),1)])),_:1})])),_:1},8,["onSubmit"])])),_:1},8,["show"]),y(N,{show:a.show1,"onUpdate:show":t[11]||(t[11]=e=>a.show1=e),"cancel-text":e.$t("cancel"),description:e.$t("sortBy"),teleport:"#app","close-on-click-action":"",actions:i.sortByList,onSelect:i.onSelect1},null,8,["show","cancel-text","description","actions","onSelect"]),y(N,{show:a.show2,"onUpdate:show":t[12]||(t[12]=e=>a.show2=e),"cancel-text":e.$t("cancel"),description:e.$t("sortDirection"),teleport:"#app","close-on-click-action":"",actions:i.sortDirectionList,onSelect:i.onSelect2},null,8,["show","cancel-text","description","actions","onSelect"])])],64)}],["__scopeId","data-v-8ef3f0f0"]]);export{$e as default};
