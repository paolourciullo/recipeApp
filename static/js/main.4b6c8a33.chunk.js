(this["webpackJsonprecipe-app"]=this["webpackJsonprecipe-app"]||[]).push([[0],{12:function(e,t,c){},15:function(e,t,c){},16:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c.n(n),i=c(6),r=c.n(i),s=(c(12),c(4)),o=c.n(s),p=c(7),u=c(2),l=c(5),j=c.n(l),b=c(0),h=function(e){var t=e.title,c=e.calories,n=e.image,a=e.ingredients;return Object(b.jsxs)("div",{className:j.a.recipe,children:[t,Object(b.jsx)("h1",{}),Object(b.jsx)("ol",{children:a.map((function(e){return Object(b.jsx)("li",{children:e.text})}))}),Object(b.jsx)("p",{children:c}),Object(b.jsx)("img",{className:j.a.image,src:n,alt:"food plate"})]})},f=(c(15),function(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),c=t[0],a=t[1],i=Object(n.useState)(""),r=Object(u.a)(i,2),s=r[0],l=r[1],j=Object(n.useState)("chicken"),f=Object(u.a)(j,2),d=f[0],m=f[1];Object(n.useEffect)((function(){O()}),[d]);var O=function(){var e=Object(p.a)(o.a.mark((function e(){var t,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.edamam.com/search?q=".concat(d,"&app_id=").concat("211f7155","&app_key=").concat("2ecb37052835fb619671a8087d5d040a"));case 2:return t=e.sent,e.next=5,t.json();case 5:c=e.sent,a(c.hits),console.log(c.hits);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(b.jsxs)("div",{className:"App",children:[Object(b.jsxs)("form",{onSubmit:function(e){e.preventDefault(),m(s),l("")},className:"search-form",children:[Object(b.jsx)("input",{className:"search-bar",type:"text",value:s,onChange:function(e){l(e.target.value),console.log(s)}}),Object(b.jsx)("button",{className:"search-button",type:"submit",children:"Search"})]}),Object(b.jsx)("div",{className:"recipes",children:c.map((function(e){return Object(b.jsx)(h,{title:e.recipe.label,calories:e.recipe.calories,image:e.recipe.image,ingredients:e.recipe.ingredients},e.recipe.label)}))})]})}),d=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,17)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,i=t.getLCP,r=t.getTTFB;c(e),n(e),a(e),i(e),r(e)}))};r.a.render(Object(b.jsx)(a.a.StrictMode,{children:Object(b.jsx)(f,{})}),document.getElementById("root")),d()},5:function(e,t,c){e.exports={recipe:"recipe_recipe__npA-h",image:"recipe_image__sYFsk"}}},[[16,1,2]]]);
//# sourceMappingURL=main.4b6c8a33.chunk.js.map