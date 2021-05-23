(this["webpackJsonp07_Mars-viewer"]=this["webpackJsonp07_Mars-viewer"]||[]).push([[0],{13:function(t,e,n){},36:function(t,e,n){},37:function(t,e,n){},62:function(t,e,n){"use strict";n.r(e);var c=n(0),a=n.n(c),r=n(14),i=n.n(r),s=(n(36),n(37),n(12)),o=(n(13),n(30)),d=n.n(o).a.create({baseURL:"https://api.nasa.gov/mars-photos/api/v1/rovers/perseverance/",params:{api_key:"".concat("mnZ1RGUuqpXYAcDzlvT4uK7lFLW8DucGbNO9xvhK")}}),l=function(t){return d.get("photos?sol=".concat(t))},j={loadingStatus:"Photos are not loaded"},u=n(9),h=n(16),v=[],b=n(1);var p=function(t){var e=Object(u.c)((function(t){return t.Favorite})),n=[];e.length>0&&(n=e.filter((function(e){return e.id===t.imgProps.id})));var c=n.length>0?.3:1;return Object(b.jsx)("div",{onClick:function(){return t.onHeartClick(t.imgProps)},children:Object(b.jsxs)("svg",{width:"15",height:"15",viewBox:"0 0 98 89",fill:"none",className:"heart",xmlns:"http://www.w3.org/2000/svg",opacity:c,children:[Object(b.jsx)("path",{d:"M89.834 48.974L48.81 8.95 7.786 48.974 48.81 89l41.023-40.026z",fill:"#E30A17"}),Object(b.jsx)("path",{d:"M59.467 29.381c0 16.022-13.312 29.01-29.733 29.01C13.311 58.391 0 45.403 0 29.381 0 13.36 13.312.371 29.733.371c16.422 0 29.734 12.989 29.734 29.01z",fill:"#E30A17"}),Object(b.jsx)("path",{d:"M98 29.01c0 16.022-13.312 29.01-29.734 29.01-16.42 0-29.733-12.988-29.733-29.01C38.533 12.988 51.845 0 68.266 0 84.688 0 98 12.988 98 29.01z",fill:"#E30A17"})]})})},f=[];var O=function(){var t=Object(c.createRef)(),e=Object(u.c)((function(t){return t.Images})),n=Object(u.c)((function(t){return t.Status})),a=Object(u.b)(),r=function(t){a(function(t){return{type:"addFavoriteImage",payload:t}}(t))};return Object(b.jsxs)("div",{children:[Object(b.jsx)("div",{children:' Select Sol and press "load"!'}),Object(b.jsxs)("div",{children:[Object(b.jsx)("input",{type:"number",min:"1",max:"10",ref:t,style:{width:150}}),Object(b.jsx)("button",{onClick:function(){a({type:"setLoadingStatus"}),l(t.current.value).then((function(t){a({type:"addData",payload:t.data.photos}),a({type:"setLoadStatus",payload:t.data.photos.length})})).catch((function(t){return console.log(t)}))},children:"load"})]}),0===e.length?Object(b.jsxs)("div",{children:[" ",n.loadingStatus]}):0===e.length?null:Object(b.jsx)("div",{className:"image_container",children:e.map((function(t){return Object(b.jsxs)("div",{children:[Object(b.jsx)(p,{onHeartClick:r,imgProps:t}),Object(b.jsx)("img",{className:"image_item",src:"".concat(t.img_src),alt:"click for favorite"},t.id)]},t.id)}))})]})},g=n(3);var x=function(){var t=Object(u.c)((function(t){return t.Favorite})),e=Object(u.b)(),n=function(t){e(function(t){return{type:"removeFavoriteImage",payload:t}}(t))};return Object(b.jsx)("div",{children:0===t.length?Object(b.jsx)("div",{children:" No favourites photos, add some! "}):Object(b.jsx)("div",{className:"image_container",children:t.map((function(t){return Object(b.jsxs)("div",{children:[Object(b.jsx)(p,{onHeartClick:n,imgProps:t}),Object(b.jsx)("img",{className:"image_item",src:"".concat(t.img_src),alt:"click for favorite"},t.id)]},t.id)}))})})};var m=function(){return Object(b.jsx)("div",{children:Object(b.jsxs)(g.c,{children:[Object(b.jsx)(g.a,{path:"/",exact:!0,render:function(){return Object(b.jsx)(O,{})}}),Object(b.jsx)(g.a,{path:"/photos",render:function(){return Object(b.jsx)(O,{})}}),Object(b.jsx)(g.a,{path:"/favorites",render:function(){return Object(b.jsx)(x,{})}})]})})};var y=function(){return Object(b.jsx)("div",{children:Object(b.jsxs)(s.a,{children:[Object(b.jsxs)("div",{children:[Object(b.jsxs)("span",{children:[" ",Object(b.jsx)(s.b,{activeClassName:"activeLink",to:"/photos",children:"Photos "}),"  "]}),Object(b.jsx)("span",{children:" | "}),Object(b.jsxs)("span",{children:[" ",Object(b.jsx)(s.b,{activeClassName:"activeLink",to:"/favorites",children:"Favorites "}),"  "]})]}),Object(b.jsx)(m,{})]})})};var w=function(){return Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)(y,{}),Object(b.jsx)("span",{children:"learn react"})]})},S=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,63)).then((function(e){var n=e.getCLS,c=e.getFID,a=e.getFCP,r=e.getLCP,i=e.getTTFB;n(t),c(t),a(t),r(t),i(t)}))},F=n(17),L=n(31),k=Object(F.b)({Images:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"addData":return Object(h.a)(e.payload);default:return t}},Status:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"setLoadStatus":return 0===e.payload?{loadingStatus:"No photos for this sol"}:{loadingStatus:"Load success"};case"setLoadingStatus":return{loadingStatus:"Loading..."};default:return t}},Favorite:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"addFavoriteImage":var n=t.filter((function(t){return t.id===e.payload.id}));if(0===n.length)return[].concat(Object(h.a)(t),[e.payload]);var c=t.filter((function(t){return t.id!==e.payload.id}));return c;case"removeFavoriteImage":var a=t.filter((function(t){return t.id!==e.payload.id}));return a;default:return t}}}),C=Object(F.c)(k,Object(F.a)(L.a));window.store=C,i.a.render(Object(b.jsx)(a.a.StrictMode,{children:Object(b.jsx)(u.a,{store:C,children:Object(b.jsx)(w,{})})}),document.getElementById("root")),S()}},[[62,1,2]]]);
//# sourceMappingURL=main.9cb9387c.chunk.js.map