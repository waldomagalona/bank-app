(this["webpackJsonpbank-app"]=this["webpackJsonpbank-app"]||[]).push([[0],{12:function(e,t,n){},13:function(e,t,n){},14:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var s=n(1),c=n.n(s),i=n(7),r=n.n(i),a=(n(12),n(2)),l=n(3),o=n(5),j=n(4),d=(n(13),n(14),n(0)),h=function(e){Object(o.a)(n,e);var t=Object(j.a)(n);function n(e){return Object(a.a)(this,n),t.call(this,e)}return Object(l.a)(n,[{key:"render",value:function(){return Object(d.jsxs)("div",{className:"base-container",ref:this.props.containerRef,children:[Object(d.jsx)("div",{className:"header",children:"Login"}),Object(d.jsxs)("div",{className:"content",children:[Object(d.jsxs)("div",{className:"logo",children:[Object(d.jsx)("h1",{children:"BDW"}),Object(d.jsx)("p",{children:"Bangko De Waldo"})]}),Object(d.jsxs)("div",{className:"form",children:[Object(d.jsxs)("div",{className:"form-group",children:[Object(d.jsx)("label",{htmlFor:"username",children:"Username"}),Object(d.jsx)("input",{type:"text",name:"username",placeholder:"username"})]}),Object(d.jsxs)("div",{className:"form-group",children:[Object(d.jsx)("label",{htmlFor:"password",children:"Password"}),Object(d.jsx)("input",{type:"password",name:"password",placeholder:"password"})]})]})]}),Object(d.jsx)("div",{className:"footer",children:Object(d.jsx)("button",{type:"button",className:"btn",children:"Login"})})]})}}]),n}(c.a.Component),b=function(e){Object(o.a)(n,e);var t=Object(j.a)(n);function n(e){return Object(a.a)(this,n),t.call(this,e)}return Object(l.a)(n,[{key:"render",value:function(){return Object(d.jsxs)("div",{className:"base-container",ref:this.props.containerRef,children:[Object(d.jsx)("div",{className:"header",children:"Register"}),Object(d.jsxs)("div",{className:"content",children:[Object(d.jsxs)("div",{className:"logo",children:[Object(d.jsx)("h1",{children:"BDW"}),Object(d.jsx)("p",{children:"Bangko De Waldo"})]}),Object(d.jsxs)("div",{className:"form",children:[Object(d.jsxs)("div",{className:"form-group",children:[Object(d.jsx)("label",{htmlFor:"username",children:"Username"}),Object(d.jsx)("input",{type:"text",name:"username",placeholder:"username"})]}),Object(d.jsxs)("div",{className:"form-group",children:[Object(d.jsx)("label",{htmlFor:"email",children:"Email"}),Object(d.jsx)("input",{type:"text",name:"email",placeholder:"email"})]}),Object(d.jsxs)("div",{className:"form-group",children:[Object(d.jsx)("label",{htmlFor:"password",children:"Password"}),Object(d.jsx)("input",{type:"text",name:"password",placeholder:"password"})]})]})]}),Object(d.jsx)("div",{className:"footer",children:Object(d.jsx)("button",{type:"button",className:"btn",children:"Register"})})]})}}]),n}(c.a.Component),u=function(e){Object(o.a)(n,e);var t=Object(j.a)(n);function n(e){var s;return Object(a.a)(this,n),(s=t.call(this,e)).state={isLogginActive:!0},s}return Object(l.a)(n,[{key:"componentDidMount",value:function(){this.rightSide.classList.add("right")}},{key:"changeState",value:function(){this.state.isLogginActive?(this.rightSide.classList.remove("right"),this.rightSide.classList.add("left")):(this.rightSide.classList.remove("left"),this.rightSide.classList.add("right")),this.setState((function(e){return{isLogginActive:!e.isLogginActive}}))}},{key:"render",value:function(){var e=this,t=this.state.isLogginActive,n=t?"Register":"Login",s=t?"login":"register";return Object(d.jsx)("div",{className:"App",children:Object(d.jsxs)("div",{className:"login",children:[Object(d.jsxs)("div",{className:"container",ref:function(t){return e.container=t},children:[t&&Object(d.jsx)(h,{containerRef:function(t){return e.current=t}}),!t&&Object(d.jsx)(b,{containerRef:function(t){return e.current=t}})]}),Object(d.jsx)(m,{current:n,currentActive:s,containerRef:function(t){return e.rightSide=t},onClick:this.changeState.bind(this)})]})})}}]),n}(c.a.Component),m=function(e){return Object(d.jsx)("div",{className:"right-side",ref:e.containerRef,onClick:e.onClick,children:Object(d.jsx)("div",{className:"inner-container",children:Object(d.jsx)("div",{className:"text",children:e.current})})})},O=u,p=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(t){var n=t.getCLS,s=t.getFID,c=t.getFCP,i=t.getLCP,r=t.getTTFB;n(e),s(e),c(e),i(e),r(e)}))};r.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(O,{})}),document.getElementById("root")),p()}},[[16,1,2]]]);
//# sourceMappingURL=main.53a05e54.chunk.js.map