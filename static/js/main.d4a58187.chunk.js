(this["webpackJsonpavaye-site"]=this["webpackJsonpavaye-site"]||[]).push([[0],{54:function(n,t,e){},55:function(n,t,e){},76:function(n,t,e){"use strict";e.r(t);var i,o,s,a=e(0),c=e.n(a),r=e(19),l=e.n(r),d=(e(54),e.p,e(55),e(31)),h=e(8),m=e(9),p=e(16),u=e(17),g=e(39),b=e(22),j=function(n){Object(p.a)(e,n);var t=Object(u.a)(e);function e(){var n;return Object(h.a)(this,e),(n=t.apply(this,arguments)).slotElement=n.querySelectorAll("img"),n.imageIndex=0,n.buttonOnTop="false",window.onload=function(){window.location.hash||(window.location=window.location+"#loaded",window.location.reload())},n}return Object(m.a)(e,[{key:"render",value:function(){return Object(b.c)(i||(i=Object(d.a)(['\n      <p class="imageCounter">','</p>\n      <div class="contain">\n      <button style="display: ','"  class="left slideButton" @click="','">&#10094;</button>\n      <img src="','"></img>\n      <button style="display: ','" class="right slideButton" @click="','">&#10095;</button>\n      </div>\n      <div class="buttonContain">\n      <button style="display: ','" class="left slideButton" @click="','">&#10094;</button>\n      ','\n      <button style="display: ','" class="right slideButton" @click="','">&#10095;</button>\n      </div>\n      '])),this.imageIndex+1+"/"+this.slotElement.length,"true"===this.buttonOnTop?"":"none",this._decrement,this.slotElement.length>0&&this.slotElement[this.imageIndex].currentSrc,"true"===this.buttonOnTop?"":"none",this._increment,"true"===this.buttonOnTop?"none":"",this._decrement,this._anchors(),"true"===this.buttonOnTop?"none":"",this._increment)}},{key:"_increment",value:function(){this.imageIndex<this.slotElement.length-1?this.imageIndex++:this.imageIndex=0}},{key:"_decrement",value:function(){this.imageIndex>0?this.imageIndex--:this.imageIndex=this.slotElement.length-1}},{key:"_anchors",value:function(){var n=this,t=document.createElement("div");t.className="anchorsDiv";for(var e=function(e){(s=document.createElement("img")).className="selectionButton",s.innerHTML=e.toString(),s.src=n.slotElement[e].currentSrc,s.onclick=function(){n.imageIndex=e},s.style.border="5px solid black",e==n.imageIndex&&(s.style.opacity="100%",s.style.borderTop="thick solid #00fab7"),t.appendChild(s)},i=0;i<this.slotElement.length;i++){var s;e(i)}return Object(b.c)(o||(o=Object(d.a)(["",""])),t)}}],[{key:"styles",get:function(){return Object(b.b)(s||(s=Object(d.a)([".hidden {\n      visibility:hidden;\n    }\n  \n    :host {\n      display: block;\n      padding: 8px;\n      height: 50%;\n      background-color: transparent;\n    }\n  \n    .contain {\n      text-align:center;\n      line-height:10%;\n      height:var(--the-gallery-height,300px);\n      width: auto;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      margin: auto;\n    }\n  \n    .buttonContain{\n      text-align:center;\n      width: 100%;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n    }\n  \n    img{\n      display: inline-block;\n      max-height:100%;\n      text-align: center;\n      margin: 10%;\n    }\n  \n    .slideButton {\n      height:100px;\n      width:50px;\n  \n      margin: 0;\n      position: relative;\n  \n      background-color: transparent;\n      border: black;\n  \n      font-size: 40px;\n      line-height:100px;\n      border-radius: 20%;\n      border: 2px solid black;\n      padding-bottom: 100px;\n      \n  \n      transition-duration: 0.4s;\n      \n    }\n    .slideButton:hover{\n      background-color: black;\n      color: white;\n    }\n    .left{\n      left:5%;\n    }\n    .right{\n      right:5%;\n    }\n  \n    .counter {\n      margin: 0;\n      position: relative;\n      top: 5%;\n      right: 5%;\n      -ms-transform: translateY(-50%);\n      transform: translateY(-50%);\n    }\n  \n    .anchorsDiv{\n      display: flex;\n      justify-content: center;\n      line-height:100px;\n      height:100px;\n      max-width: 80%;\n      overflow-y:hidden;\n      overflow-x:hidden;\n      margin-top: 20px;\n      margin-left: 7%;\n      margin-right:7%;\n      flex-direction: row;\n      min-width: 0%;\n    }\n  \n    .selectionButton{\n      height:70px;\n      opacity: 70%;\n      transition-duration:0.4s;\n      object-fit: contain;\n      margin: 0px;\n      overflow-x:scroll;\n      cursor:pointer;\n      \n      \n  \n    }\n    .selectionButton:hover{\n        opacity: 100%;\n    }\n  \n  .imageCounter{\n      margin-left:70%;\n  }"])))}}]),e}(b.a);Object(g.a)([Object(b.d)()],j.prototype,"imageIndex",void 0),Object(g.a)([Object(b.d)()],j.prototype,"buttonOnTop",void 0),document.addEventListener("DOMContentLoaded",(function(n){window.customElements.define("the-gallery",j)}));var x=e(1),y=function(){return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("link",{rel:"stylesheet",href:"https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css",integrity:"sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l",crossOrigin:"anonymous"}),Object(x.jsx)("div",{className:"jumbotron jumbotron-fluid",children:Object(x.jsxs)("div",{className:"container",children:[Object(x.jsx)("h1",{className:"display-4",children:"Hi, my name is Avaye Dawadi"}),Object(x.jsx)("p",{className:"lead",children:"This is my personal website. Welcome to the journey!"})]})}),Object(x.jsx)("h1",{style:{textAlign:"center"},children:"Picture Gallery"}),Object(x.jsxs)("the-gallery",{buttonOnTop:"false",children:[Object(x.jsx)("img",{src:"https://images.pexels.com/photos/736230/pexels-photo-736230.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"}),Object(x.jsx)("img",{src:"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/close-up-of-tulips-blooming-in-field-royalty-free-image-1584131603.jpg"}),Object(x.jsx)("img",{src:"https://cdn.britannica.com/84/73184-004-E5A450B5/Sunflower-field-Fargo-North-Dakota.jpg"}),Object(x.jsx)("img",{src:"https://images.pexels.com/photos/60597/dahlia-red-blossom-bloom-60597.jpeg?cs=srgb&dl=pexels-pixabay-60597.jpg&fm=jpg"}),Object(x.jsx)("img",{src:"https://www.legacy.com/wp-content/uploads/2020/01/Sympathy-flowers-orange-1000-shutterstock_694680475-1200x900.jpg"})]})]})},f=e(48),O=e(5),v=e(80),w=e(79),k=e(81),E=(e(58),function(){return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("link",{rel:"stylesheet",href:"https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css",integrity:"sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l",crossOrigin:"anonymous"}),Object(x.jsx)(v.a,{bg:"primary",variant:"dark",children:Object(x.jsxs)(w.a,{children:[Object(x.jsx)(v.a.Brand,{href:"/",children:"Avaye's Site"}),Object(x.jsxs)(k.a,{className:"me-auto",children:[Object(x.jsx)(k.a.Link,{href:"/",children:"Home"}),Object(x.jsx)(k.a.Link,{href:"/wc",children:"Web Components"})]})]})})]})}),I=function(){return Object(x.jsx)("h1",{children:"Web Components page - I am eventually going to put all the web components I build on this page"})};var T=function(){return Object(x.jsx)(x.Fragment,{children:Object(x.jsxs)(f.a,{children:[Object(x.jsx)(E,{}),Object(x.jsxs)(O.c,{children:[Object(x.jsx)(O.a,{path:"/",component:y,exact:!0}),Object(x.jsx)(O.a,{path:"/wc",component:I,exact:!0})]})]})})},B=function(n){n&&n instanceof Function&&e.e(3).then(e.bind(null,82)).then((function(t){var e=t.getCLS,i=t.getFID,o=t.getFCP,s=t.getLCP,a=t.getTTFB;e(n),i(n),o(n),s(n),a(n)}))};l.a.render(Object(x.jsx)(c.a.StrictMode,{children:Object(x.jsx)(T,{})}),document.getElementById("root")),B()}},[[76,1,2]]]);
//# sourceMappingURL=main.d4a58187.chunk.js.map