!function(e){var t={};function n(r){if(t[r])return t[r].exports;var a=t[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(r,a,function(t){return e[t]}.bind(null,a));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){n(1),e.exports=n(2)},function(e,t){const n=[{name:"Banana",calories:50,fat:.4,carbs:19.2},{name:"Apple",calories:57,fat:.01,carbs:19.4},{name:"Orange",calories:50,fat:.1,carbs:19.8},{name:"Blueberries",calories:30,fat:.2,carbs:19.1}],r=document.querySelector(".app__values"),a=window.matchMedia("screen and (min-width:500px)"),o=e=>{e?l():c()},c=()=>{r.innerHTML="";let e=document.createElement("ul");n.forEach(t=>{let n=document.createElement("li"),r=document.createElement("div");r.innerHTML="Name: "+t.name;let a=document.createElement("div");a.innerHTML="Calories: "+t.calories;let o=document.createElement("div");o.innerHTML="Fat: "+t.fat;let c=document.createElement("div");c.innerHTML="Carb: "+t.carbs,n.append(r,a,o,c),e.appendChild(n)}),r.appendChild(e)},l=()=>{r.innerHTML="";let e=document.createElement("table"),t=document.createElement("thead");t.innerHTML=" <tr><th>Name</th><th>Calories</th><th>Fat</th><th>Carbs</th></tr> ",e.appendChild(t);let a=document.createElement("tbody");n.forEach(e=>{let t=document.createElement("tr");t.innerHTML=`<td>${e.name}</td><td>${e.calories}</td><td>${e.fat}</td><td>${e.carbs}</td>`,a.appendChild(t)}),e.appendChild(a),r.appendChild(e)};o(a.matches),a.addListener(e=>{o(e.matches)})},function(e,t,n){}]);
//# sourceMappingURL=main.js.map