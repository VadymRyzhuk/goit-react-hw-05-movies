"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[127],{127:function(e,t,r){r.r(t),r.d(t,{default:function(){return b},defaultImage:function(){return _}});var n=r(861),a=r(439),s=r(757),i=r.n(s),c=r(791),u=r(390),o="ErrorMessage_error__MR0Ic",p="ErrorMessage_messageErrorP__QfDjC",l=r(184),h=function(){return(0,l.jsx)("div",{className:o,children:(0,l.jsx)("p",{className:p,children:"Sorry, we don\u2019t heve any info about this movie :("})})},d=r(689),f=r(87),m="MovieDetailsPage_postWrap__PgZKc",v="MovieDetailsPage_text__vp0Sm",x="MovieDetailsPage_addInfo__981yG",j=r(321),g=(0,c.lazy)((function(){return r.e(629).then(r.bind(r,629))})),y=(0,c.lazy)((function(){return r.e(642).then(r.bind(r,642))})),_="https://cdn4.iconfinder.com/data/icons/small-n-flat/24/movie-alt2-512.png",b=function(){var e,t,r=(0,d.TH)(),s=(0,c.useRef)(null!==(e=null===(t=r.state)||void 0===t?void 0:t.from)&&void 0!==e?e:"/movies"),o=(0,d.UO)().movieId,p=(0,c.useState)("idle"),b=(0,a.Z)(p,2),w=b[0],k=b[1],Z=(0,c.useState)(null),I=(0,a.Z)(Z,2),M=I[0],N=I[1],z=(0,c.useState)(null),S=(0,a.Z)(z,2),U=S[0],D=S[1];return(0,c.useEffect)((function(){var e=function(){var e=(0,n.Z)(i().mark((function e(){var t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,k("pending"),e.next=4,(0,u.uV)(o);case 4:t=e.sent,N(t),k("success"),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(0),D(e.t0.message),k("error");case 13:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}();e()}),[o]),(0,l.jsxs)("div",{children:[(0,l.jsx)(f.rU,{to:s.current,children:(0,l.jsx)("button",{style:{marginLeft:20},type:"button",children:"Go back"})}),"error"===w&&(0,l.jsx)(h,{error:U}),"success"===w&&(0,l.jsxs)("div",{className:m,children:[(0,l.jsxs)("div",{children:[(0,l.jsx)("img",{src:M.poster_path?"https://image.tmdb.org/t/p/w500/".concat(M.poster_path):_,alt:M.title,width:280,height:370}),(0,l.jsx)("br",{}),(0,l.jsx)("br",{})]}),(0,l.jsxs)("div",{children:[(0,l.jsx)("h1",{children:M.title}),(0,l.jsxs)("p",{children:["User score: ",Math.round(10*M.vote_average)," % "]}),(0,l.jsx)("h2",{children:"Overview"}),(0,l.jsx)("p",{className:v,children:M.overview}),(0,l.jsx)("h3",{children:"Genres"}),(0,l.jsx)("p",{children:M.genres.map((function(e){return e.name})).join("  ")})]})]}),"success"===w&&(0,l.jsxs)("div",{children:[(0,l.jsx)("h4",{className:x,children:"Additional information:"}),(0,l.jsxs)("ul",{children:[(0,l.jsx)("li",{children:(0,l.jsx)(f.OL,{to:"cast",children:"Cast"})}),(0,l.jsx)("li",{children:(0,l.jsx)(f.OL,{to:"reviews",children:"Reviews"})})]}),(0,l.jsx)("div",{children:(0,l.jsx)(c.Suspense,{fallback:(0,l.jsx)(j.a,{}),children:(0,l.jsxs)(d.Z5,{children:[(0,l.jsx)(d.AW,{path:"cast",element:(0,l.jsx)(g,{})}),(0,l.jsx)(d.AW,{path:"reviews",element:(0,l.jsx)(y,{})})]})})})]})]})}},390:function(e,t,r){r.d(t,{OQ:function(){return l},Rb:function(){return m},pq:function(){return x},s_:function(){return o},uV:function(){return d}});var n=r(861),a=r(757),s=r.n(a),i=r(340),c="Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NmVkODUxMzQxMDY3YmQ1NjVlY2VkN2IzMWUzMmFjMCIsInN1YiI6IjY1YWFiNzg5ZDk1NDIwMDBjNjIxNWUyMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.SuKtMD1Cn2_-nHGHgUykclDXuZiTXI9zSkgi4ql7D_Y",u="56ed851341067bd565eced7b31e32ac0";function o(){return p.apply(this,arguments)}function p(){return(p=(0,n.Z)(s().mark((function e(){var t,r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={method:"GET",url:"https://api.themoviedb.org/3/trending/all/day",params:{language:"en-US",api_key:u},headers:{accept:"application/json",Authorization:c}},e.next=3,(0,i.Z)(t);case 3:return r=e.sent,e.abrupt("return",r.data.results);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function l(e){return h.apply(this,arguments)}function h(){return(h=(0,n.Z)(s().mark((function e(t){var r,n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r={method:"GET",url:"https://api.themoviedb.org/3/search/movie",params:{api_key:u,query:t,language:"en-US",page:1},headers:{accept:"application/json",Authorization:c}},e.next=3,(0,i.Z)(r);case 3:return n=e.sent,e.abrupt("return",n.data.results);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function d(e){return f.apply(this,arguments)}function f(){return(f=(0,n.Z)(s().mark((function e(t){var r,n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r={method:"GET",url:"https://api.themoviedb.org/3/movie/".concat(t),params:{api_key:u,language:"en-US"},headers:{accept:"application/json",Authorization:c}},e.next=3,(0,i.Z)(r);case 3:return n=e.sent,e.abrupt("return",n.data);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function m(e){return v.apply(this,arguments)}function v(){return(v=(0,n.Z)(s().mark((function e(t){var r,n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r={method:"GET",url:"https://api.themoviedb.org/3/movie/".concat(t,"/credits"),params:{api_key:u,language:"en-US"},headers:{accept:"application/json",Authorization:c}},e.next=3,(0,i.Z)(r);case 3:return n=e.sent,e.abrupt("return",n.data.cast);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function x(e){return j.apply(this,arguments)}function j(){return(j=(0,n.Z)(s().mark((function e(t){var r,n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r={method:"GET",url:"https://api.themoviedb.org/3/movie/".concat(t,"/reviews"),params:{api_key:u,language:"en-US"},headers:{accept:"application/json",Authorization:c}},e.next=3,(0,i.Z)(r);case 3:return n=e.sent,e.abrupt("return",n.data.results);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}}}]);
//# sourceMappingURL=127.c4fa63c6.chunk.js.map