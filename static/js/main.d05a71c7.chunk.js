(this.webpackJsonphomeworks=this.webpackJsonphomeworks||[]).push([[0],{11:function(e,t,r){e.exports={someClass:"Greeting_someClass__1Ndbl",wrapper:"Greeting_wrapper__1Kwuw",error:"Greeting_error__2zCdU",buttonAdd:"Greeting_buttonAdd__AMNEn",totalUsers:"Greeting_totalUsers__33foU",errorText:"Greeting_errorText__2QwHJ"}},15:function(e,t,r){e.exports={superInput:"SuperInputText_superInput__3kP8a",errorInput:"SuperInputText_errorInput__Y7C8U",error:"SuperInputText_error__1-E24"}},16:function(e,t,r){e.exports={checkbox:"SuperCheckbox_checkbox__3hyiV",spanClassName:"SuperCheckbox_spanClassName__bYJWs"}},22:function(e,t,r){e.exports={blue:"HW4_blue__3gNb8",column:"HW4_column__Gzfng",testSpanError:"HW4_testSpanError__2qPpx"}},23:function(e,t,r){e.exports={default:"SuperButton_default__3tLme",red:"SuperButton_red__3TbrG"}},29:function(e,t,r){e.exports={App:"App_App__wjZ2N"}},31:function(e,t,r){e.exports={wrapperError:"Error_wrapperError__2N0Bb"}},37:function(e,t,r){},46:function(e,t,r){"use strict";r.r(t);var n=r(1),a=r.n(n),s=r(28),c=r.n(s),i=(r(37),r(29)),o=r.n(i),l=r(7),j=r(6),u=r.n(j),d=r(0);function b(){return Object(d.jsx)("div",{className:u.a.wrapperList,children:Object(d.jsxs)("ul",{className:u.a.listLevel,children:[Object(d.jsx)("li",{className:u.a.listItem,children:Object(d.jsx)(l.b,{to:"./pre-junior",activeClassName:u.a.active,children:"pre-junior "})}),Object(d.jsx)("li",{className:u.a.listItem,children:Object(d.jsx)(l.b,{to:"./junior",activeClassName:u.a.active,children:"junior "})}),Object(d.jsx)("li",{className:u.a.listItem,children:Object(d.jsx)(l.b,{to:"./junior-plus",activeClassName:u.a.active,children:"junior+ "})}),Object(d.jsx)("li",{className:u.a.listItem,children:Object(d.jsx)("span",{className:u.a.menu,children:"Level Task"})})]})})}var h=r(2),x=r(8),O=r.n(x);var p=function(e){return Object(d.jsxs)("div",{className:O.a.wrapper,children:[Object(d.jsx)("img",{className:O.a.avatar,src:e.avatar,alt:"avatar"}),Object(d.jsxs)("div",{className:O.a.message,children:[Object(d.jsx)("p",{className:O.a.userName,children:e.name}),Object(d.jsxs)("p",{className:O.a.userMessage,children:[e.message," ",Object(d.jsx)("span",{className:O.a.userMessageTime,children:e.time})]})]})]})},m="https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",_="Some Name",f="some text",v="22:00";var g=function(){return Object(d.jsxs)("div",{children:[Object(d.jsx)("hr",{}),Object(d.jsx)(p,{avatar:m,name:_,message:f,time:v}),Object(d.jsx)("hr",{})]})},N=r(4);var C=function(e){return Object(d.jsxs)("div",{children:[e.affair.name,Object(d.jsx)("button",{onClick:function(){e.deleteAffairCallback(e.affair._id)},children:"X"})]})};var k=function(e){var t=e.data.map((function(t){return Object(d.jsx)(C,{affair:t,deleteAffairCallback:e.deleteAffairCallback},t._id)}));return Object(d.jsxs)("div",{children:[t,Object(d.jsx)("button",{onClick:function(){e.setFilter("all")},children:"All"}),Object(d.jsx)("button",{onClick:function(){e.setFilter("high")},children:"High"}),Object(d.jsx)("button",{onClick:function(){e.setFilter("middle")},children:"Middle"}),Object(d.jsx)("button",{onClick:function(){e.setFilter("low")},children:"Low"})]})},w=[{_id:1,name:"React",priority:"high"},{_id:2,name:"anime",priority:"low"},{_id:3,name:"games",priority:"low"},{_id:4,name:"work",priority:"high"},{_id:5,name:"html & css",priority:"middle"}];var y=function(){var e=Object(n.useState)(w),t=Object(N.a)(e,2),r=t[0],a=t[1],s=Object(n.useState)("low"),c=Object(N.a)(s,2),i=c[0],o=c[1],l=function(e,t){return"all"===t?e:"low"===t?e.filter((function(e){return"low"===e.priority})):"high"===t?e.filter((function(e){return"high"===e.priority})):"middle"===t?e.filter((function(e){return"middle"===e.priority})):e}(r,i);return Object(d.jsxs)("div",{children:[Object(d.jsx)("hr",{}),"homeworks 2",Object(d.jsx)(k,{data:l,setFilter:o,deleteAffairCallback:function(e){return a(function(e,t){return e.filter((function(e){return e._id!==t}))}(r,e))}}),Object(d.jsx)("hr",{}),Object(d.jsx)("hr",{})]})},S=r(32),T=r(11),A=r.n(T),E=function(e){var t=e.name,r=e.setNameCallback,n=e.addUser,a=e.error,s=e.totalUsers,c=e.inputError,i=A.a.error,o={border:c?"5px solid darkseagreen":"5px solid red"};return Object(d.jsxs)("div",{className:A.a.wrapper,children:[Object(d.jsx)("input",{onKeyPress:function(e){return 13===e.charCode?n():null},style:o,value:t,onChange:r,className:i}),Object(d.jsx)("button",{className:A.a.buttonAdd,onClick:n,children:"Add user"}),Object(d.jsxs)("span",{className:A.a.totalUsers,children:["All users - ",s]}),Object(d.jsx)("div",{children:Object(d.jsx)("span",{className:A.a.errorText,children:a})})]})},I=function(e){var t=e.users,r=e.addUserCallback,a=Object(n.useState)(""),s=Object(N.a)(a,2),c=s[0],i=s[1],o=Object(n.useState)(""),l=Object(N.a)(o,2),j=l[0],u=l[1],b=Object(n.useState)(!0),h=Object(N.a)(b,2),x=h[0],O=h[1],p=t.length;return Object(d.jsx)(E,{name:c,setNameCallback:function(e){var t=e.currentTarget.value,r=t.split("").filter((function(e){return" "===e}));" "===t?(u("\u0423 \u0442\u0435\u0431\u044f \u0438\u043c\u044f \u0441 \u043f\u0440\u043e\u0431\u0435\u043b\u0430 \u043d\u0430\u0447\u0438\u043d\u0430\u0435\u0442\u0441\u044f, \u0434\u0440\u0443\u0436\u043e\u0447\u0435\u043a?"),e.currentTarget.value="",O(!1)):t.length<2?(i(t.toUpperCase()),O(!0)):r.length>0?(u("\u041f\u0440\u043e\u0431\u0435\u043b\u044b \u043d\u0435\u043b\u044c\u0437\u044f!"),O(!1)):(u(""),i(t),O(!0))},addUser:function(){c.length<3||""===c?u("\u041d\u0443, \u0435\u0441\u043b\u0438 \u0443 \u0442\u0435\u0431\u044f \u0440\u0438\u043b\u0438 \u043c\u0435\u043d\u044c\u0448\u0435 3 \u0431\u0443\u043a\u0432 \u0438\u043c\u044f, \u0441\u043e\u0447\u0443\u0432\u0441\u0442\u0432\u0443\u044e"):(alert("Hello ".concat(c,"! ")),r(c),i(""))},error:j,totalUsers:p,inputError:x})},M=r(21);var U=function(){var e=Object(n.useState)([{_id:Object(M.v1)(),name:"Michel"}]),t=Object(N.a)(e,2),r=t[0],a=t[1];return Object(d.jsxs)("div",{children:[Object(d.jsx)("hr",{}),"homeworks 3",Object(d.jsx)(I,{users:r,addUserCallback:function(e){a([].concat(Object(S.a)(r),[{_id:Object(M.v1)(),name:e}]))}}),Object(d.jsx)("hr",{}),Object(d.jsx)("hr",{})]})},H=r(9),G=r(10),L=r(15),W=r.n(L),F=function(e){e.type;var t=e.onChange,r=e.onChangeText,n=e.onKeyPress,a=e.onEnter,s=e.error,c=e.className,i=e.spanClassName,o=Object(G.a)(e,["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"]),l="".concat(W.a.error," ").concat(i||""),j="".concat(W.a.superInput," ").concat(s?W.a.errorInput:""," ").concat(c);return console.log(s),Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("input",Object(H.a)({type:"text",onChange:function(e){t&&t(e),r&&r(e.currentTarget.value)},onKeyPress:function(e){n&&n(e),a&&"Enter"===e.key&&a()},className:j},o)),s&&Object(d.jsx)("span",{className:l,children:s})]})},J=r(22),P=r.n(J),B=r(23),K=r.n(B),X=function(e){var t=e.red,r=e.className,n=Object(G.a)(e,["red","className"]),a="".concat(t?K.a.red:K.a.default," ").concat(r);return Object(d.jsx)("button",Object(H.a)({className:a},n))},Y=r(16),q=r.n(Y),z=function(e){e.type,e.onChange;var t=e.onChangeChecked,r=e.className,n=(e.spanClassName,e.children),a=Object(G.a)(e,["type","onChange","onChangeChecked","className","spanClassName","children"]),s="".concat(q.a.checkbox," ").concat(r||"");return Object(d.jsxs)("label",{className:q.a.checkboxother,children:[Object(d.jsx)("input",Object(H.a)({type:"checkbox",onChange:function(e){t&&t(e.currentTarget.checked)},className:s},a)),n&&Object(d.jsx)("span",{className:q.a.spanClassName,children:n})]})};var Q=function(){var e=Object(n.useState)(""),t=Object(N.a)(e,2),r=t[0],a=t[1],s=r?"":"error",c=function(){s?alert("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442..."):alert(r)},i=Object(n.useState)(!1),o=Object(N.a)(i,2),l=o[0],j=o[1];return Object(d.jsxs)("div",{children:[Object(d.jsx)("hr",{}),"homeworks 4",Object(d.jsxs)("div",{className:P.a.column,children:[Object(d.jsx)(F,{value:r,onChangeText:a,onEnter:c,error:s}),Object(d.jsx)(F,{className:P.a.blue}),Object(d.jsx)(X,{children:"default"}),Object(d.jsx)(X,{red:!0,onClick:c,children:"delete "}),Object(d.jsx)(X,{disabled:!0,children:"disabled"}),Object(d.jsx)(z,{checked:l,onChangeChecked:j,children:"some text "}),Object(d.jsx)(z,{checked:l,onChange:function(e){return j(e.currentTarget.checked)}})]}),Object(d.jsx)("hr",{}),Object(d.jsx)("hr",{})]})};var R=function(){return Object(d.jsxs)("div",{children:[Object(d.jsx)(g,{}),Object(d.jsx)(y,{}),Object(d.jsx)(U,{}),Object(d.jsx)(Q,{})]})},Z=r(31),V=r.n(Z);var $=function(){return Object(d.jsxs)("div",{className:V.a.wrapperError,children:[Object(d.jsx)("div",{children:"404"}),Object(d.jsx)("div",{children:"Page not found!"}),Object(d.jsx)("div",{children:"\u2014\u0e05/\u1420.\u032b .\u141f\\\u0e05\u2014"})]})};function D(){return Object(d.jsx)("div",{})}function ee(){return Object(d.jsx)("div",{})}var te="/pre-junior",re="/junior",ne="/junior-plus";var ae=function(){return Object(d.jsx)("div",{children:Object(d.jsxs)(h.d,{children:[Object(d.jsx)(h.b,{path:"/",exact:!0,render:function(){return Object(d.jsx)(h.a,{to:te})}}),Object(d.jsx)(h.b,{path:te,render:function(){return Object(d.jsx)(R,{})}}),Object(d.jsx)(h.b,{path:re,render:function(){return Object(d.jsx)(D,{})}}),Object(d.jsx)(h.b,{path:ne,render:function(){return Object(d.jsx)(ee,{})}}),Object(d.jsx)(h.b,{render:function(){return Object(d.jsx)($,{})}})]})})};var se=function(){return Object(d.jsx)("div",{children:Object(d.jsxs)(l.a,{children:[Object(d.jsx)(b,{}),Object(d.jsx)(ae,{})]})})};var ce=function(){return Object(d.jsxs)("div",{className:o.a.App,children:[Object(d.jsx)("div",{children:"react homeworks:"}),Object(d.jsx)(se,{})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(Object(d.jsx)(a.a.StrictMode,{children:Object(d.jsx)(ce,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},6:function(e,t,r){e.exports={listLevel:"Header_listLevel__3btN-",menu:"Header_menu__3HxnJ",listItem:"Header_listItem__2OkEd",wrapperList:"Header_wrapperList__3mbJe",active:"Header_active__1j18B"}},8:function(e,t,r){e.exports={wrapper:"Message_wrapper__11OKF",avatar:"Message_avatar__QoOxs",message:"Message_message__1-grU",userName:"Message_userName__3kOxR",userMessage:"Message_userMessage__1WlJt",userMessageTime:"Message_userMessageTime__o3ngX"}}},[[46,1,2]]]);
//# sourceMappingURL=main.d05a71c7.chunk.js.map