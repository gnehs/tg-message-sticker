(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{277:function(t,e,n){var content=n(310);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(49).default)("1ff2e5ed",content,!0,{sourceMap:!1})},278:function(t,e,n){var content=n(312);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(49).default)("3ac57343",content,!0,{sourceMap:!1})},307:function(t,e,n){t.exports=n.p+"img/icon.ca61594.png"},309:function(t,e,n){"use strict";n(277)},310:function(t,e,n){(e=n(48)(!1)).push([t.i,".index-container[data-v-2a929fb3]{text-align:center;max-width:512px;padding:0 16px;margin:32px auto 0}.index-container .cu.chat[data-v-2a929fb3]{text-align:left}.index-container .cu.chat .message[data-v-2a929fb3]{padding:4px;margin:0}.index-container .block[data-v-2a929fb3]{background:#fff;color:#1976d2;margin:8px 0;padding:8px 16px 0;border-radius:4px;border:1px solid rgba(25,118,210,.23137)}",""]),t.exports=e},311:function(t,e,n){"use strict";n(278)},312:function(t,e,n){(e=n(48)(!1)).push([t.i,".output-container{background-color:#f3f3f3;border-radius:4px;padding:4px}.output-container img{width:100%}",""]),t.exports=e},392:function(t,e,n){"use strict";n.r(e);n(40),n(29),n(7),n(32),n(64),n(54);var r=n(8),o=n(308),l=n.n(o),c={data:function(){return{userInfoSource:"telegram",username:"gnehs_OwO",usernameFetching:!1,avatar:null,avatarFile:null,name:"gnehs",nameColor:"rgb(20, 177, 62)",admin:"",reply:{active:!1,name:"name",text:"text"},text:"請支援貼圖",time:"12:34",output:{svg:null,webp:null,png:null},outputShare:{svg:null,webp:null,png:null},resultDialog:!1,canShare:window.navigator.canShare}},watch:{avatarFile:function(){var t=this,e=new FileReader;e.onloadend=function(){t.avatar=e.result},e.readAsDataURL(this.avatarFile)},name:function(){var t;this.nameColor=(t=["#c75650","#d57b27","#7e6ccf","#4fb231","#2ea4ca"])[Math.floor(Math.random()*t.length)]}},methods:{toBlob:function(canvas,t){return new Promise((function(e,n){canvas.toBlob((function(t){e(t)}),t)}))},shareWebp:function(){var t=[new File([this.outputShare.webp],"".concat(this.name,"_").concat(this.text,".webp"),{type:"image/webp"})];navigator.canShare&&navigator.canShare({files:t})&&navigator.share({text:this.text,files:t,title:this.name})},print:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r,o,canvas,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=function(t){return new Promise((function(e,n){t.onload=function(){return e(t)},t.onerror=n}))},t.resultDialog=!0,t.output={svg:null,webp:null,png:null},r=t.$refs.printMe,e.next=6,l.a.toSvg(r);case 6:return t.output.svg=e.sent,o=t.$refs.outputImg,e.next=10,n(o);case 10:return canvas=document.createElement("canvas"),c=512/o.width*o.height,canvas.setAttribute("width",512),canvas.setAttribute("height",c),canvas.getContext("2d").drawImage(o,0,0,canvas.width,canvas.height),t.output.png=canvas.toDataURL(),t.output.webp=canvas.toDataURL("image/webp"),e.next=19,t.toBlob(canvas,"image/webp");case 19:t.outputShare.webp=e.sent;case 20:case"end":return e.stop()}}),e)})))()},fetchUserInfo:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r,img;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.usernameFetching=!0,e.next=3,fetch("https://tg-info.gnehs.workers.dev/".concat(t.username.replace("@",""))).then((function(t){return t.json()}));case 3:n=e.sent,r=n.name,img=n.img,t.name=r,t.avatar=img,t.usernameFetching=!1;case 9:case"end":return e.stop()}}),e)})))()}}},v=(n(309),n(311),n(67)),d=n(101),m=n.n(d),f=n(384),h=n(285),x=n(262),_=n(385),w=n(393),y=n(387),k=n(263),C=n(394),S=n(301),V=n(272),I=n(273),F=n(395),D=n(284),R=n(388),M=n(389),L=n(390),T=n(274),$=n(391),component=Object(v.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"index-container"},[r("img",{attrs:{src:n(307),width:"64px",alt:"icon"}}),t._v(" "),r("h1",[t._v("請支援貼圖")]),t._v(" "),r("div",{staticClass:"cu chat",attrs:{"data-style":"telegram"}},[r("div",{ref:"printMe",staticClass:"message text read"},[r("div",{staticClass:"avatar"},[r("img",{attrs:{src:t.avatar||"https://avatars.githubusercontent.com/u/16719720?s=460&u=3840af5115bb889cea5e8fa242b4e10b5ad3ab55&v=4",alt:"avatar"}})]),t._v(" "),r("div",{staticClass:"content"},[r("div",{staticClass:"author",style:{color:t.nameColor}},[t._v("\n\t\t\t\t\t"+t._s(t.name)+"\n\t\t\t\t\t"),t.admin?r("div",{staticClass:"admin"},[t._v(t._s(t.admin))]):t._e()]),t._v(" "),r("v-expand-transition",[t.reply.active?r("div",{staticClass:"reply"},[r("div",{staticClass:"author"},[t._v(t._s(t.reply.name))]),t._v(" "),r("div",{staticClass:"content"},[r("div",{staticClass:"text"},[t._v(t._s(t.reply.text))])])]):t._e()]),t._v(" "),t.text?r("div",{staticClass:"text"},[r("p",{domProps:{innerHTML:t._s(t.text.replace(/\n/g,"<br>"))}})]):t._e(),t._v(" "),t.time?r("div",{staticClass:"meta"},[r("div",{staticClass:"item"},[t._v(t._s(t.time))])]):t._e()],1)])]),t._v(" "),r("div",{staticClass:"block"},[r("h4",{staticStyle:{"text-align":"left"}},[t._v("User Info")]),t._v(" "),r("v-radio-group",{attrs:{row:""},model:{value:t.userInfoSource,callback:function(e){t.userInfoSource=e},expression:"userInfoSource"}},[r("v-radio",{attrs:{label:"fetch from telegram",value:"telegram"}}),t._v(" "),r("v-radio",{attrs:{label:"custom",value:"custom"}})],1),t._v(" "),"telegram"==t.userInfoSource?[r("v-text-field",{attrs:{label:"username",loading:t.usernameFetching},on:{change:t.fetchUserInfo},model:{value:t.username,callback:function(e){t.username=e},expression:"username"}})]:t._e(),t._v(" "),"custom"==t.userInfoSource?[r("v-file-input",{attrs:{accept:"image/*",label:"avatar"},model:{value:t.avatarFile,callback:function(e){t.avatarFile=e},expression:"avatarFile"}}),t._v(" "),r("v-text-field",{attrs:{label:"name"},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}})]:t._e()],2),t._v(" "),r("div",{staticClass:"block"},[r("h4",{staticStyle:{"text-align":"left"}},[t._v("Message")]),t._v(" "),r("v-text-field",{attrs:{label:"admin"},model:{value:t.admin,callback:function(e){t.admin=e},expression:"admin"}}),t._v(" "),r("v-textarea",{attrs:{label:"text"},model:{value:t.text,callback:function(e){t.text=e},expression:"text"}}),t._v(" "),r("v-text-field",{attrs:{label:"time"},model:{value:t.time,callback:function(e){t.time=e},expression:"time"}})],1),t._v(" "),r("div",{staticClass:"block"},[r("h4",{staticStyle:{"text-align":"left"}},[t._v("Reply")]),t._v(" "),r("v-checkbox",{attrs:{color:"red",label:"reply"},model:{value:t.reply.active,callback:function(e){t.$set(t.reply,"active",e)},expression:"reply.active"}}),t._v(" "),r("v-expand-transition",[r("div",{directives:[{name:"show",rawName:"v-show",value:t.reply.active,expression:"reply.active"}]},[r("v-text-field",{attrs:{color:"red",label:"reply name"},model:{value:t.reply.name,callback:function(e){t.$set(t.reply,"name",e)},expression:"reply.name"}}),t._v(" "),r("v-text-field",{attrs:{color:"red",label:"reply text"},model:{value:t.reply.text,callback:function(e){t.$set(t.reply,"text",e)},expression:"reply.text"}})],1)])],1),t._v(" "),r("a",{staticClass:"wr-btn",on:{click:t.print}},[t._v("Generate")]),t._v(" "),r("v-divider",{staticStyle:{margin:"10px 0"}}),t._v(" "),t._m(0),t._v(" "),r("v-dialog",{attrs:{width:"500"},model:{value:t.resultDialog,callback:function(e){t.resultDialog=e},expression:"resultDialog"}},[r("v-card",[r("v-card-title",[t._v("Result")]),t._v(" "),r("v-card-text",[r("div",{directives:[{name:"show",rawName:"v-show",value:t.output.svg,expression:"output.svg"}],staticClass:"output-container"},[r("img",{ref:"outputImg",attrs:{src:t.output.svg,alt:"output-img"}})]),t._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:!t.output.svg,expression:"!output.svg"}],staticStyle:{"text-align":"center",margin:"20px 0"}},[r("v-progress-circular",{attrs:{indeterminate:"",color:"primary"}})],1),t._v(" "),t.output.svg?r("div",[t._v("Long press the image or click download to save.")]):t._e()]),t._v(" "),r("v-card-actions",[r("v-menu",{attrs:{"offset-y":""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,o=e.attrs;return[r("v-btn",t._g(t._b({attrs:{color:"primary",text:""}},"v-btn",o,!1),n),[t._v("download")])]}}])},[t._v(" "),r("v-list",t._l(Object.keys(t.output),(function(e){return r("v-list-item",{key:e,attrs:{href:t.output[e],download:t.name+"_"+t.text+"."+e}},[r("v-list-item-title",[t._v("."+t._s(e))])],1)})),1)],1),t._v(" "),t.canShare&&t.outputShare.webp?r("v-btn",{attrs:{color:"primary",text:""},on:{click:t.shareWebp}},[t._v("share")]):t._e(),t._v(" "),r("v-spacer"),t._v(" "),r("v-btn",{attrs:{color:"primary",text:""},on:{click:function(e){t.resultDialog=!1}}},[t._v("close")])],1)],1)],1)],1)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("p",{staticStyle:{opacity:".7","font-size":".85em"}},[this._v("\n\t\tDeveloped by\n\t\t"),e("a",{attrs:{href:"https://gnehs.net",target:"_blank"}},[this._v("gnehs")]),this._v(" |\n\t\t"),e("a",{attrs:{href:"https://github.com/gnehs/tg-message-sticker",target:"_blank"}},[this._v("GitHub")])])}],!1,null,"2a929fb3",null);e.default=component.exports;m()(component,{VBtn:f.a,VCard:h.a,VCardActions:x.a,VCardText:x.b,VCardTitle:x.c,VCheckbox:_.a,VDialog:w.a,VDivider:y.a,VExpandTransition:k.a,VFileInput:C.a,VList:S.a,VListItem:V.a,VListItemTitle:I.a,VMenu:F.a,VProgressCircular:D.a,VRadio:R.a,VRadioGroup:M.a,VSpacer:L.a,VTextField:T.a,VTextarea:$.a})}}]);