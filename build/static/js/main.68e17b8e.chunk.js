(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{16:function(e,t,n){e.exports=n(28)},21:function(e,t,n){},22:function(e,t,n){},28:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(12),c=n.n(l),o=(n(21),n(2)),u=n(3),i=n(5),s=n(4),m=n(13),h=function(e){Object(i.a)(n,e);var t=Object(s.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,r=new Array(a),l=0;l<a;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={A:"",B:"",C:"",D:""},e.change=function(t){e.setState(Object(m.a)({},t.target.name,t.target.value))},e.onSubmit=function(t,n){t.preventDefault(),e.setState({A:"",B:"",C:"",D:""}),e.props.onSubmit(e.state)},e}return Object(u.a)(n,[{key:"render",value:function(){var e=this;return r.a.createElement("form",null,r.a.createElement("input",{placeholder:"Question:",value:this.state.Question}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("h6",{className:"option"},"Option"),r.a.createElement("input",{name:"A",placeholder:"A:",value:this.state.A,onChange:function(t){return e.change(t)}}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("input",{name:"B",placeholder:"B:",value:this.state.B,onChange:function(t){return e.change(t)}}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("input",{name:"C",placeholder:"C:",value:this.state.C,onChange:function(t){return e.change(t)}}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("input",{name:"D",placeholder:"D:",value:this.state.D,onChange:function(t){return e.change(t)}}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("button",{onClick:function(t){return e.onSubmit(t)}},"Get Answer"))}}]),n}(r.a.Component),p=function(e){Object(i.a)(n,e);var t=Object(s.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"header"},r.a.createElement("h6",{className:"center"},"WELCOME TO YOUR CHOICE MAKER APP"),r.a.createElement("img",{src:"bg.png",className:"bg",alt:"bg"}))}}]),n}(r.a.Component),b=(n(22),n(15)),E=function(e){Object(i.a)(n,e);var t=Object(s.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,r=new Array(a),l=0;l<a;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={fields:[]},e.onSubmit=function(t){e.setState({fields:t})},e.deleteTodo=function(e){console.log(e.length)},e}return Object(u.a)(n,[{key:"render",value:function(){var e=this;return r.a.createElement(b.a,null,r.a.createElement("div",{className:"choicemaker-App container"},r.a.createElement(p,null),r.a.createElement("h6",{className:"question"},"Question"),r.a.createElement(h,{onSubmit:function(t){return e.onSubmit(t)}}),r.a.createElement("p",null,JSON.stringify(this.state.fields,null,2))))}}]),n}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(E,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[16,1,2]]]);
//# sourceMappingURL=main.68e17b8e.chunk.js.map