(this["webpackJsonphackerrank-test"]=this["webpackJsonphackerrank-test"]||[]).push([[0],{12:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),r=n(3),s=n.n(r),l=(n(12),n(4)),o=n(5),i=n(7),h=n(6),u=n(0),j=function(e){return Object(u.jsx)("div",{children:e.show?Object(u.jsx)("h3",{className:"text-center message",children:"Form is Complete"}):Object(u.jsx)("h3",{className:"text-center message",children:"Form is Incomplete"})})},d=function(e){Object(i.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={name:"",email:"",phone:"",blog:"",complete:!1},e.onValidURL=function(e){return!!new RegExp("^(https?:\\/\\/)?((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|((\\d{1,3}\\.){3}\\d{1,3}))(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*(\\?[;&a-z\\d%_.~+=-]*)?(\\#[-a-z\\d_]*)?$","i").test(e)},e.onSubmit=function(){e.state.name&&e.state.email&&e.state.phone&&e.state.blog?!0===e.onValidURL(e.state.blog)?e.setState({complete:!0}):e.setState({complete:!1}):e.setState({complete:!1})},e}return Object(o.a)(n,[{key:"render",value:function(){var e=this;return Object(u.jsxs)("div",{className:"row",children:[Object(u.jsx)("h1",{className:"text-center",children:"Form Validation"}),Object(u.jsxs)("form",{children:[Object(u.jsx)("h3",{children:"Name:"}),Object(u.jsx)("input",{onChange:function(t){return e.setState({name:t.target.value})},type:"text",value:this.state.name,placeholder:"Enter your name"}),Object(u.jsx)("h3",{children:"Email:"}),Object(u.jsx)("input",{onChange:function(t){return e.setState({email:t.target.value})},type:"email",value:this.state.email,placeholder:"Enter your email"}),Object(u.jsx)("h3",{children:"Phone:"}),Object(u.jsx)("input",{type:"text",onChange:function(t){return e.setState({phone:t.target.value})},value:this.state.phone,placeholder:"Enter your phone number"}),Object(u.jsx)("h3",{children:"Blog URL:"}),Object(u.jsx)("input",{type:"url",onChange:function(t){return e.setState({blog:t.target.value})},value:this.state.blog,placeholder:"Enter your blog URL"}),Object(u.jsx)("div",{className:"small-6 small-centered text-center columns",children:Object(u.jsx)("a",{href:"#",onClick:this.onSubmit,className:"button success expand round text-center",children:"Verify"})})]}),Object(u.jsx)(j,{show:this.state.complete})]})}}]),n}(a.Component);var m=function(){return Object(u.jsx)("div",{children:Object(u.jsx)(d,{})})},b=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,15)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),a(e),c(e),r(e),s(e)}))};s.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(m,{})}),document.getElementById("root")),b()}},[[14,1,2]]]);
//# sourceMappingURL=main.65f0d6e9.chunk.js.map