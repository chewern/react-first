(this["webpackJsonptask-manager"]=this["webpackJsonptask-manager"]||[]).push([[0],{14:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),a=n(7),o=n.n(a),s=(n(14),n(9)),i=n(5),d=n(2),l=n(0),u=function(e){var t=e.color,n=e.text,c=e.onClick;return Object(l.jsx)("button",{className:"btn",onClick:c,style:{backgroundColor:t},children:n})};u.defaultProps={color:"red"};var j=u,b=function(e){var t=e.title,n=e.onAdd,c=e.showAdd;return Object(l.jsxs)("header",{className:"header",children:[Object(l.jsx)("h1",{children:t}),Object(l.jsx)(j,{color:c?"red":"green",text:c?"Close":"Add",onClick:n})]})};b.defaultProps={title:"Task Manager"};var m=b,O=n(8),h=function(e){var t=e.task,n=e.onDelete,c=e.onToggle;return Object(l.jsxs)("div",{className:"task ".concat(t.reminder?"reminder":""),onDoubleClick:function(){return c(t.id)},children:[Object(l.jsxs)("h3",{children:[t.text," ",Object(l.jsx)(O.a,{style:{color:"red",cursor:"pointer"},onClick:function(){return n(t.id)}})]}),Object(l.jsxs)("p",{children:[t.day," "]})]})},x=function(e){var t=e.tasks,n=e.onDelete,c=e.onToggle;return Object(l.jsx)(l.Fragment,{children:t.map((function(e){return Object(l.jsx)(h,{task:e,onDelete:n,onToggle:c},e.id)}))})},f=function(e){var t=e.onAdd,n=Object(c.useState)(""),r=Object(d.a)(n,2),a=r[0],o=r[1],s=Object(c.useState)(""),i=Object(d.a)(s,2),u=i[0],j=i[1],b=Object(c.useState)(!1),m=Object(d.a)(b,2),O=m[0],h=m[1];return Object(l.jsxs)("form",{className:"add-form",onSubmit:function(e){e.preventDefault(),a?(t({text:a,day:u,reminder:O}),o(""),j(""),h(!1)):alert("Please add a task")},children:[Object(l.jsxs)("div",{className:"form-control",children:[Object(l.jsx)("label",{children:"Task"}),Object(l.jsx)("input",{type:"text",placeholder:"Add Task",value:a,onChange:function(e){return o(e.target.value)}})]}),Object(l.jsxs)("div",{className:"form-control",children:[Object(l.jsx)("label",{children:"Date & Time"}),Object(l.jsx)("input",{type:"text",placeholder:"Add Date & Time",value:u,onChange:function(e){return j(e.target.value)}})]}),Object(l.jsxs)("div",{className:"form-control form-control-check",children:[Object(l.jsx)("label",{children:"Set Reminder"}),Object(l.jsx)("input",{type:"checkbox",checked:O,value:O,onChange:function(e){return h(e.currentTarget.checked)}})]}),Object(l.jsx)("input",{className:"btn btn-block",type:"submit",value:"Save Task"})]})},g=function(){var e=Object(c.useState)(),t=Object(d.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)([{id:1,text:"Running",day:"15 Feb 2021 3:30pm",reminder:!0},{id:2,text:"Swimming",day:"22 Feb 2021 3:30pm",reminder:!0},{id:3,text:"Sleeping",day:"24 Feb 2021 8:30pm",reminder:!0}]),o=Object(d.a)(a,2),u=o[0],j=o[1];return Object(l.jsxs)("div",{className:"container",children:[Object(l.jsx)(m,{title:"Task List",onAdd:function(){return r(!n)},showAdd:n}),n&&Object(l.jsx)(f,{onAdd:function(e){var t=Math.floor(1e4*Math.random())+1,n=Object(i.a)({id:t},e);j([].concat(Object(s.a)(u),[n]))}}),u.length>0?Object(l.jsx)(x,{tasks:u,onDelete:function(e){j(u.filter((function(t){return t.id!==e})))},onToggle:function(e){j(u.map((function(t){return t.id===e?Object(i.a)(Object(i.a)({},t),{},{reminder:!t.reminder}):t})))}}):"No Task to Display"]})},k=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,o=t.getTTFB;n(e),c(e),r(e),a(e),o(e)}))};o.a.render(Object(l.jsx)(r.a.StrictMode,{children:Object(l.jsx)(g,{})}),document.getElementById("root")),k()}},[[16,1,2]]]);
//# sourceMappingURL=main.38a83b6d.chunk.js.map