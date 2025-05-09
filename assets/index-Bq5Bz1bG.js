(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&a(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}})();/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */function ln(t,e,n){return(e=fn(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function $t(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),n.push.apply(n,a)}return n}function s(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?$t(Object(n),!0).forEach(function(a){ln(t,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):$t(Object(n)).forEach(function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(n,a))})}return t}function cn(t,e){if(typeof t!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var a=n.call(t,e);if(typeof a!="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function fn(t){var e=cn(t,"string");return typeof e=="symbol"?e:e+""}const qt=()=>{};let Lt={},Ae={},we=null,ke={mark:qt,measure:qt};try{typeof window<"u"&&(Lt=window),typeof document<"u"&&(Ae=document),typeof MutationObserver<"u"&&(we=MutationObserver),typeof performance<"u"&&(ke=performance)}catch{}const{userAgent:Bt=""}=Lt.navigator||{},N=Lt,p=Ae,Kt=we,J=ke;N.document;const O=!!p.documentElement&&!!p.head&&typeof p.addEventListener=="function"&&typeof p.createElement=="function",Se=~Bt.indexOf("MSIE")||~Bt.indexOf("Trident/");var un=/fa(s|r|l|t|d|dr|dl|dt|b|k|kd|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,dn=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,Ee={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"}},mn={GROUP:"duotone-group",PRIMARY:"primary",SECONDARY:"secondary"},Pe=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],h="classic",rt="duotone",gn="sharp",pn="sharp-duotone",Oe=[h,rt,gn,pn],hn={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"}},yn={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"}},bn=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}]]),vn={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",brands:"fab"},duotone:{solid:"fad",regular:"fadr",light:"fadl",thin:"fadt"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds",regular:"fasdr",light:"fasdl",thin:"fasdt"}},xn=["fak","fa-kit","fakd","fa-kit-duotone"],Qt={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},An=["kit"],wn={kit:{"fa-kit":"fak"}},kn=["fak","fakd"],Sn={kit:{fak:"fa-kit"}},Jt={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},Z={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},En=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],Pn=["fak","fa-kit","fakd","fa-kit-duotone"],On={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},Cn={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"}},In={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"]},ht={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"}},Nn=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands"],yt=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt",...En,...Nn],Fn=["solid","regular","light","thin","duotone","brands"],Ce=[1,2,3,4,5,6,7,8,9,10],Ln=Ce.concat([11,12,13,14,15,16,17,18,19,20]),Tn=[...Object.keys(In),...Fn,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",Z.GROUP,Z.SWAP_OPACITY,Z.PRIMARY,Z.SECONDARY].concat(Ce.map(t=>"".concat(t,"x"))).concat(Ln.map(t=>"w-".concat(t))),Mn={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}};const E="___FONT_AWESOME___",bt=16,Ie="fa",Ne="svg-inline--fa",_="data-fa-i2svg",vt="data-fa-pseudo-element",_n="data-fa-pseudo-element-pending",Tt="data-prefix",Mt="data-icon",Zt="fontawesome-i2svg",Rn="async",Dn=["HTML","HEAD","STYLE","SCRIPT"],Fe=(()=>{try{return!0}catch{return!1}})();function K(t){return new Proxy(t,{get(e,n){return n in e?e[n]:e[h]}})}const Le=s({},Ee);Le[h]=s(s(s(s({},{"fa-duotone":"duotone"}),Ee[h]),Qt.kit),Qt["kit-duotone"]);const zn=K(Le),xt=s({},vn);xt[h]=s(s(s(s({},{duotone:"fad"}),xt[h]),Jt.kit),Jt["kit-duotone"]);const te=K(xt),At=s({},ht);At[h]=s(s({},At[h]),Sn.kit);const _t=K(At),wt=s({},Cn);wt[h]=s(s({},wt[h]),wn.kit);K(wt);const jn=un,Te="fa-layers-text",Yn=dn,Un=s({},hn);K(Un);const Wn=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],ut=mn,Hn=[...An,...Tn],X=N.FontAwesomeConfig||{};function Gn(t){var e=p.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function Xn(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}p&&typeof p.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(e=>{let[n,a]=e;const r=Xn(Gn(n));r!=null&&(X[a]=r)});const Me={styleDefault:"solid",familyDefault:h,cssPrefix:Ie,replacementClass:Ne,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};X.familyPrefix&&(X.cssPrefix=X.familyPrefix);const W=s(s({},Me),X);W.autoReplaceSvg||(W.observeMutations=!1);const c={};Object.keys(Me).forEach(t=>{Object.defineProperty(c,t,{enumerable:!0,set:function(e){W[t]=e,V.forEach(n=>n(c))},get:function(){return W[t]}})});Object.defineProperty(c,"familyPrefix",{enumerable:!0,set:function(t){W.cssPrefix=t,V.forEach(e=>e(c))},get:function(){return W.cssPrefix}});N.FontAwesomeConfig=c;const V=[];function Vn(t){return V.push(t),()=>{V.splice(V.indexOf(t),1)}}const I=bt,w={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function $n(t){if(!t||!O)return;const e=p.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;const n=p.head.childNodes;let a=null;for(let r=n.length-1;r>-1;r--){const i=n[r],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(a=i)}return p.head.insertBefore(e,a),t}const qn="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function $(){let t=12,e="";for(;t-- >0;)e+=qn[Math.random()*62|0];return e}function H(t){const e=[];for(let n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function Rt(t){return t.classList?H(t.classList):(t.getAttribute("class")||"").split(" ").filter(e=>e)}function _e(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Bn(t){return Object.keys(t||{}).reduce((e,n)=>e+"".concat(n,'="').concat(_e(t[n]),'" '),"").trim()}function it(t){return Object.keys(t||{}).reduce((e,n)=>e+"".concat(n,": ").concat(t[n].trim(),";"),"")}function Dt(t){return t.size!==w.size||t.x!==w.x||t.y!==w.y||t.rotate!==w.rotate||t.flipX||t.flipY}function Kn(t){let{transform:e,containerWidth:n,iconWidth:a}=t;const r={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(e.x*32,", ").concat(e.y*32,") "),o="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),l="rotate(".concat(e.rotate," 0 0)"),u={transform:"".concat(i," ").concat(o," ").concat(l)},f={transform:"translate(".concat(a/2*-1," -256)")};return{outer:r,inner:u,path:f}}function Qn(t){let{transform:e,width:n=bt,height:a=bt,startCentered:r=!1}=t,i="";return r&&Se?i+="translate(".concat(e.x/I-n/2,"em, ").concat(e.y/I-a/2,"em) "):r?i+="translate(calc(-50% + ".concat(e.x/I,"em), calc(-50% + ").concat(e.y/I,"em)) "):i+="translate(".concat(e.x/I,"em, ").concat(e.y/I,"em) "),i+="scale(".concat(e.size/I*(e.flipX?-1:1),", ").concat(e.size/I*(e.flipY?-1:1),") "),i+="rotate(".concat(e.rotate,"deg) "),i}var Jn=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Free";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Free";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Pro";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Pro";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-regular: normal 400 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-light: normal 300 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-thin: normal 100 1em/1 "Font Awesome 6 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-regular: normal 400 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-light: normal 300 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-thin: normal 100 1em/1 "Font Awesome 6 Sharp Duotone";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    animation-delay: -1ms;
    animation-duration: 1ms;
    animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}`;function Re(){const t=Ie,e=Ne,n=c.cssPrefix,a=c.replacementClass;let r=Jn;if(n!==t||a!==e){const i=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),l=new RegExp("\\.".concat(e),"g");r=r.replace(i,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(l,".".concat(a))}return r}let ee=!1;function dt(){c.autoAddCss&&!ee&&($n(Re()),ee=!0)}var Zn={mixout(){return{dom:{css:Re,insertCss:dt}}},hooks(){return{beforeDOMElementCreation(){dt()},beforeI2svg(){dt()}}}};const P=N||{};P[E]||(P[E]={});P[E].styles||(P[E].styles={});P[E].hooks||(P[E].hooks={});P[E].shims||(P[E].shims=[]);var k=P[E];const De=[],ze=function(){p.removeEventListener("DOMContentLoaded",ze),nt=1,De.map(t=>t())};let nt=!1;O&&(nt=(p.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(p.readyState),nt||p.addEventListener("DOMContentLoaded",ze));function ta(t){O&&(nt?setTimeout(t,0):De.push(t))}function Q(t){const{tag:e,attributes:n={},children:a=[]}=t;return typeof t=="string"?_e(t):"<".concat(e," ").concat(Bn(n),">").concat(a.map(Q).join(""),"</").concat(e,">")}function ne(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var mt=function(e,n,a,r){var i=Object.keys(e),o=i.length,l=n,u,f,d;for(a===void 0?(u=1,d=e[i[0]]):(u=0,d=a);u<o;u++)f=i[u],d=l(d,e[f],f,e);return d};function ea(t){const e=[];let n=0;const a=t.length;for(;n<a;){const r=t.charCodeAt(n++);if(r>=55296&&r<=56319&&n<a){const i=t.charCodeAt(n++);(i&64512)==56320?e.push(((r&1023)<<10)+(i&1023)+65536):(e.push(r),n--)}else e.push(r)}return e}function kt(t){const e=ea(t);return e.length===1?e[0].toString(16):null}function na(t,e){const n=t.length;let a=t.charCodeAt(e),r;return a>=55296&&a<=56319&&n>e+1&&(r=t.charCodeAt(e+1),r>=56320&&r<=57343)?(a-55296)*1024+r-56320+65536:a}function ae(t){return Object.keys(t).reduce((e,n)=>{const a=t[n];return!!a.icon?e[a.iconName]=a.icon:e[n]=a,e},{})}function St(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const{skipHooks:a=!1}=n,r=ae(e);typeof k.hooks.addPack=="function"&&!a?k.hooks.addPack(t,ae(e)):k.styles[t]=s(s({},k.styles[t]||{}),r),t==="fas"&&St("fa",e)}const{styles:q,shims:aa}=k,je=Object.keys(_t),ra=je.reduce((t,e)=>(t[e]=Object.keys(_t[e]),t),{});let zt=null,Ye={},Ue={},We={},He={},Ge={};function ia(t){return~Hn.indexOf(t)}function oa(t,e){const n=e.split("-"),a=n[0],r=n.slice(1).join("-");return a===t&&r!==""&&!ia(r)?r:null}const Xe=()=>{const t=a=>mt(q,(r,i,o)=>(r[o]=mt(i,a,{}),r),{});Ye=t((a,r,i)=>(r[3]&&(a[r[3]]=i),r[2]&&r[2].filter(l=>typeof l=="number").forEach(l=>{a[l.toString(16)]=i}),a)),Ue=t((a,r,i)=>(a[i]=i,r[2]&&r[2].filter(l=>typeof l=="string").forEach(l=>{a[l]=i}),a)),Ge=t((a,r,i)=>{const o=r[2];return a[i]=i,o.forEach(l=>{a[l]=i}),a});const e="far"in q||c.autoFetchSvg,n=mt(aa,(a,r)=>{const i=r[0];let o=r[1];const l=r[2];return o==="far"&&!e&&(o="fas"),typeof i=="string"&&(a.names[i]={prefix:o,iconName:l}),typeof i=="number"&&(a.unicodes[i.toString(16)]={prefix:o,iconName:l}),a},{names:{},unicodes:{}});We=n.names,He=n.unicodes,zt=ot(c.styleDefault,{family:c.familyDefault})};Vn(t=>{zt=ot(t.styleDefault,{family:c.familyDefault})});Xe();function jt(t,e){return(Ye[t]||{})[e]}function sa(t,e){return(Ue[t]||{})[e]}function M(t,e){return(Ge[t]||{})[e]}function Ve(t){return We[t]||{prefix:null,iconName:null}}function la(t){const e=He[t],n=jt("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function F(){return zt}const $e=()=>({prefix:null,iconName:null,rest:[]});function ca(t){let e=h;const n=je.reduce((a,r)=>(a[r]="".concat(c.cssPrefix,"-").concat(r),a),{});return Oe.forEach(a=>{(t.includes(n[a])||t.some(r=>ra[a].includes(r)))&&(e=a)}),e}function ot(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{family:n=h}=e,a=zn[n][t];if(n===rt&&!t)return"fad";const r=te[n][t]||te[n][a],i=t in k.styles?t:null;return r||i||null}function fa(t){let e=[],n=null;return t.forEach(a=>{const r=oa(c.cssPrefix,a);r?n=r:a&&e.push(a)}),{iconName:n,rest:e}}function re(t){return t.sort().filter((e,n,a)=>a.indexOf(e)===n)}function st(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{skipLookups:n=!1}=e;let a=null;const r=yt.concat(Pn),i=re(t.filter(g=>r.includes(g))),o=re(t.filter(g=>!yt.includes(g))),l=i.filter(g=>(a=g,!Pe.includes(g))),[u=null]=l,f=ca(i),d=s(s({},fa(o)),{},{prefix:ot(u,{family:f})});return s(s(s({},d),ga({values:t,family:f,styles:q,config:c,canonical:d,givenPrefix:a})),ua(n,a,d))}function ua(t,e,n){let{prefix:a,iconName:r}=n;if(t||!a||!r)return{prefix:a,iconName:r};const i=e==="fa"?Ve(r):{},o=M(a,r);return r=i.iconName||o||r,a=i.prefix||a,a==="far"&&!q.far&&q.fas&&!c.autoFetchSvg&&(a="fas"),{prefix:a,iconName:r}}const da=Oe.filter(t=>t!==h||t!==rt),ma=Object.keys(ht).filter(t=>t!==h).map(t=>Object.keys(ht[t])).flat();function ga(t){const{values:e,family:n,canonical:a,givenPrefix:r="",styles:i={},config:o={}}=t,l=n===rt,u=e.includes("fa-duotone")||e.includes("fad"),f=o.familyDefault==="duotone",d=a.prefix==="fad"||a.prefix==="fa-duotone";if(!l&&(u||f||d)&&(a.prefix="fad"),(e.includes("fa-brands")||e.includes("fab"))&&(a.prefix="fab"),!a.prefix&&da.includes(n)&&(Object.keys(i).find(m=>ma.includes(m))||o.autoFetchSvg)){const m=bn.get(n).defaultShortPrefixId;a.prefix=m,a.iconName=M(a.prefix,a.iconName)||a.iconName}return(a.prefix==="fa"||r==="fa")&&(a.prefix=F()||"fas"),a}class pa{constructor(){this.definitions={}}add(){for(var e=arguments.length,n=new Array(e),a=0;a<e;a++)n[a]=arguments[a];const r=n.reduce(this._pullDefinitions,{});Object.keys(r).forEach(i=>{this.definitions[i]=s(s({},this.definitions[i]||{}),r[i]),St(i,r[i]);const o=_t[h][i];o&&St(o,r[i]),Xe()})}reset(){this.definitions={}}_pullDefinitions(e,n){const a=n.prefix&&n.iconName&&n.icon?{0:n}:n;return Object.keys(a).map(r=>{const{prefix:i,iconName:o,icon:l}=a[r],u=l[2];e[i]||(e[i]={}),u.length>0&&u.forEach(f=>{typeof f=="string"&&(e[i][f]=l)}),e[i][o]=l}),e}}let ie=[],Y={};const U={},ha=Object.keys(U);function ya(t,e){let{mixoutsTo:n}=e;return ie=t,Y={},Object.keys(U).forEach(a=>{ha.indexOf(a)===-1&&delete U[a]}),ie.forEach(a=>{const r=a.mixout?a.mixout():{};if(Object.keys(r).forEach(i=>{typeof r[i]=="function"&&(n[i]=r[i]),typeof r[i]=="object"&&Object.keys(r[i]).forEach(o=>{n[i]||(n[i]={}),n[i][o]=r[i][o]})}),a.hooks){const i=a.hooks();Object.keys(i).forEach(o=>{Y[o]||(Y[o]=[]),Y[o].push(i[o])})}a.provides&&a.provides(U)}),n}function Et(t,e){for(var n=arguments.length,a=new Array(n>2?n-2:0),r=2;r<n;r++)a[r-2]=arguments[r];return(Y[t]||[]).forEach(o=>{e=o.apply(null,[e,...a])}),e}function R(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),a=1;a<e;a++)n[a-1]=arguments[a];(Y[t]||[]).forEach(i=>{i.apply(null,n)})}function L(){const t=arguments[0],e=Array.prototype.slice.call(arguments,1);return U[t]?U[t].apply(null,e):void 0}function Pt(t){t.prefix==="fa"&&(t.prefix="fas");let{iconName:e}=t;const n=t.prefix||F();if(e)return e=M(n,e)||e,ne(qe.definitions,n,e)||ne(k.styles,n,e)}const qe=new pa,ba=()=>{c.autoReplaceSvg=!1,c.observeMutations=!1,R("noAuto")},va={i2svg:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return O?(R("beforeI2svg",t),L("pseudoElements2svg",t),L("i2svg",t)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e}=t;c.autoReplaceSvg===!1&&(c.autoReplaceSvg=!0),c.observeMutations=!0,ta(()=>{Aa({autoReplaceSvgRoot:e}),R("watch",t)})}},xa={icon:t=>{if(t===null)return null;if(typeof t=="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:M(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){const e=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],n=ot(t[0]);return{prefix:n,iconName:M(n,e)||e}}if(typeof t=="string"&&(t.indexOf("".concat(c.cssPrefix,"-"))>-1||t.match(jn))){const e=st(t.split(" "),{skipLookups:!0});return{prefix:e.prefix||F(),iconName:M(e.prefix,e.iconName)||e.iconName}}if(typeof t=="string"){const e=F();return{prefix:e,iconName:M(e,t)||t}}}},v={noAuto:ba,config:c,dom:va,parse:xa,library:qe,findIconDefinition:Pt,toHtml:Q},Aa=function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e=p}=t;(Object.keys(k.styles).length>0||c.autoFetchSvg)&&O&&c.autoReplaceSvg&&v.dom.i2svg({node:e})};function lt(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(n=>Q(n))}}),Object.defineProperty(t,"node",{get:function(){if(!O)return;const n=p.createElement("div");return n.innerHTML=t.html,n.children}}),t}function wa(t){let{children:e,main:n,mask:a,attributes:r,styles:i,transform:o}=t;if(Dt(o)&&n.found&&!a.found){const{width:l,height:u}=n,f={x:l/u/2,y:.5};r.style=it(s(s({},i),{},{"transform-origin":"".concat(f.x+o.x/16,"em ").concat(f.y+o.y/16,"em")}))}return[{tag:"svg",attributes:r,children:e}]}function ka(t){let{prefix:e,iconName:n,children:a,attributes:r,symbol:i}=t;const o=i===!0?"".concat(e,"-").concat(c.cssPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:s(s({},r),{},{id:o}),children:a}]}]}function Yt(t){const{icons:{main:e,mask:n},prefix:a,iconName:r,transform:i,symbol:o,title:l,maskId:u,titleId:f,extra:d,watchable:g=!1}=t,{width:m,height:y}=n.found?n:e,C=kn.includes(a),T=[c.replacementClass,r?"".concat(c.cssPrefix,"-").concat(r):""].filter(j=>d.classes.indexOf(j)===-1).filter(j=>j!==""||!!j).concat(d.classes).join(" ");let x={children:[],attributes:s(s({},d.attributes),{},{"data-prefix":a,"data-icon":r,class:T,role:d.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(m," ").concat(y)})};const S=C&&!~d.classes.indexOf("fa-fw")?{width:"".concat(m/y*16*.0625,"em")}:{};g&&(x.attributes[_]=""),l&&(x.children.push({tag:"title",attributes:{id:x.attributes["aria-labelledby"]||"title-".concat(f||$())},children:[l]}),delete x.attributes.title);const b=s(s({},x),{},{prefix:a,iconName:r,main:e,mask:n,maskId:u,transform:i,symbol:o,styles:s(s({},S),d.styles)}),{children:A,attributes:z}=n.found&&e.found?L("generateAbstractMask",b)||{children:[],attributes:{}}:L("generateAbstractIcon",b)||{children:[],attributes:{}};return b.children=A,b.attributes=z,o?ka(b):wa(b)}function oe(t){const{content:e,width:n,height:a,transform:r,title:i,extra:o,watchable:l=!1}=t,u=s(s(s({},o.attributes),i?{title:i}:{}),{},{class:o.classes.join(" ")});l&&(u[_]="");const f=s({},o.styles);Dt(r)&&(f.transform=Qn({transform:r,startCentered:!0,width:n,height:a}),f["-webkit-transform"]=f.transform);const d=it(f);d.length>0&&(u.style=d);const g=[];return g.push({tag:"span",attributes:u,children:[e]}),i&&g.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),g}function Sa(t){const{content:e,title:n,extra:a}=t,r=s(s(s({},a.attributes),n?{title:n}:{}),{},{class:a.classes.join(" ")}),i=it(a.styles);i.length>0&&(r.style=i);const o=[];return o.push({tag:"span",attributes:r,children:[e]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}const{styles:gt}=k;function Ot(t){const e=t[0],n=t[1],[a]=t.slice(4);let r=null;return Array.isArray(a)?r={tag:"g",attributes:{class:"".concat(c.cssPrefix,"-").concat(ut.GROUP)},children:[{tag:"path",attributes:{class:"".concat(c.cssPrefix,"-").concat(ut.SECONDARY),fill:"currentColor",d:a[0]}},{tag:"path",attributes:{class:"".concat(c.cssPrefix,"-").concat(ut.PRIMARY),fill:"currentColor",d:a[1]}}]}:r={tag:"path",attributes:{fill:"currentColor",d:a}},{found:!0,width:e,height:n,icon:r}}const Ea={found:!1,width:512,height:512};function Pa(t,e){!Fe&&!c.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function Ct(t,e){let n=e;return e==="fa"&&c.styleDefault!==null&&(e=F()),new Promise((a,r)=>{if(n==="fa"){const i=Ve(t)||{};t=i.iconName||t,e=i.prefix||e}if(t&&e&&gt[e]&&gt[e][t]){const i=gt[e][t];return a(Ot(i))}Pa(t,e),a(s(s({},Ea),{},{icon:c.showMissingIcons&&t?L("missingIconAbstract")||{}:{}}))})}const se=()=>{},It=c.measurePerformance&&J&&J.mark&&J.measure?J:{mark:se,measure:se},G='FA "6.7.2"',Oa=t=>(It.mark("".concat(G," ").concat(t," begins")),()=>Be(t)),Be=t=>{It.mark("".concat(G," ").concat(t," ends")),It.measure("".concat(G," ").concat(t),"".concat(G," ").concat(t," begins"),"".concat(G," ").concat(t," ends"))};var Ut={begin:Oa,end:Be};const tt=()=>{};function le(t){return typeof(t.getAttribute?t.getAttribute(_):null)=="string"}function Ca(t){const e=t.getAttribute?t.getAttribute(Tt):null,n=t.getAttribute?t.getAttribute(Mt):null;return e&&n}function Ia(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(c.replacementClass)}function Na(){return c.autoReplaceSvg===!0?et.replace:et[c.autoReplaceSvg]||et.replace}function Fa(t){return p.createElementNS("http://www.w3.org/2000/svg",t)}function La(t){return p.createElement(t)}function Ke(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{ceFn:n=t.tag==="svg"?Fa:La}=e;if(typeof t=="string")return p.createTextNode(t);const a=n(t.tag);return Object.keys(t.attributes||[]).forEach(function(i){a.setAttribute(i,t.attributes[i])}),(t.children||[]).forEach(function(i){a.appendChild(Ke(i,{ceFn:n}))}),a}function Ta(t){let e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}const et={replace:function(t){const e=t[0];if(e.parentNode)if(t[1].forEach(n=>{e.parentNode.insertBefore(Ke(n),e)}),e.getAttribute(_)===null&&c.keepOriginalSource){let n=p.createComment(Ta(e));e.parentNode.replaceChild(n,e)}else e.remove()},nest:function(t){const e=t[0],n=t[1];if(~Rt(e).indexOf(c.replacementClass))return et.replace(t);const a=new RegExp("".concat(c.cssPrefix,"-.*"));if(delete n[0].attributes.id,n[0].attributes.class){const i=n[0].attributes.class.split(" ").reduce((o,l)=>(l===c.replacementClass||l.match(a)?o.toSvg.push(l):o.toNode.push(l),o),{toNode:[],toSvg:[]});n[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?e.removeAttribute("class"):e.setAttribute("class",i.toNode.join(" "))}const r=n.map(i=>Q(i)).join(`
`);e.setAttribute(_,""),e.innerHTML=r}};function ce(t){t()}function Qe(t,e){const n=typeof e=="function"?e:tt;if(t.length===0)n();else{let a=ce;c.mutateApproach===Rn&&(a=N.requestAnimationFrame||ce),a(()=>{const r=Na(),i=Ut.begin("mutate");t.map(r),i(),n()})}}let Wt=!1;function Je(){Wt=!0}function Nt(){Wt=!1}let at=null;function fe(t){if(!Kt||!c.observeMutations)return;const{treeCallback:e=tt,nodeCallback:n=tt,pseudoElementsCallback:a=tt,observeMutationsRoot:r=p}=t;at=new Kt(i=>{if(Wt)return;const o=F();H(i).forEach(l=>{if(l.type==="childList"&&l.addedNodes.length>0&&!le(l.addedNodes[0])&&(c.searchPseudoElements&&a(l.target),e(l.target)),l.type==="attributes"&&l.target.parentNode&&c.searchPseudoElements&&a(l.target.parentNode),l.type==="attributes"&&le(l.target)&&~Wn.indexOf(l.attributeName))if(l.attributeName==="class"&&Ca(l.target)){const{prefix:u,iconName:f}=st(Rt(l.target));l.target.setAttribute(Tt,u||o),f&&l.target.setAttribute(Mt,f)}else Ia(l.target)&&n(l.target)})}),O&&at.observe(r,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function Ma(){at&&at.disconnect()}function _a(t){const e=t.getAttribute("style");let n=[];return e&&(n=e.split(";").reduce((a,r)=>{const i=r.split(":"),o=i[0],l=i.slice(1);return o&&l.length>0&&(a[o]=l.join(":").trim()),a},{})),n}function Ra(t){const e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),a=t.innerText!==void 0?t.innerText.trim():"";let r=st(Rt(t));return r.prefix||(r.prefix=F()),e&&n&&(r.prefix=e,r.iconName=n),r.iconName&&r.prefix||(r.prefix&&a.length>0&&(r.iconName=sa(r.prefix,t.innerText)||jt(r.prefix,kt(t.innerText))),!r.iconName&&c.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(r.iconName=t.firstChild.data)),r}function Da(t){const e=H(t.attributes).reduce((r,i)=>(r.name!=="class"&&r.name!=="style"&&(r[i.name]=i.value),r),{}),n=t.getAttribute("title"),a=t.getAttribute("data-fa-title-id");return c.autoA11y&&(n?e["aria-labelledby"]="".concat(c.replacementClass,"-title-").concat(a||$()):(e["aria-hidden"]="true",e.focusable="false")),e}function za(){return{iconName:null,title:null,titleId:null,prefix:null,transform:w,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function ue(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0};const{iconName:n,prefix:a,rest:r}=Ra(t),i=Da(t),o=Et("parseNodeAttributes",{},t);let l=e.styleParser?_a(t):[];return s({iconName:n,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:a,transform:w,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:r,styles:l,attributes:i}},o)}const{styles:ja}=k;function Ze(t){const e=c.autoReplaceSvg==="nest"?ue(t,{styleParser:!1}):ue(t);return~e.extra.classes.indexOf(Te)?L("generateLayersText",t,e):L("generateSvgReplacementMutation",t,e)}function Ya(){return[...xn,...yt]}function de(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!O)return Promise.resolve();const n=p.documentElement.classList,a=d=>n.add("".concat(Zt,"-").concat(d)),r=d=>n.remove("".concat(Zt,"-").concat(d)),i=c.autoFetchSvg?Ya():Pe.concat(Object.keys(ja));i.includes("fa")||i.push("fa");const o=[".".concat(Te,":not([").concat(_,"])")].concat(i.map(d=>".".concat(d,":not([").concat(_,"])"))).join(", ");if(o.length===0)return Promise.resolve();let l=[];try{l=H(t.querySelectorAll(o))}catch{}if(l.length>0)a("pending"),r("complete");else return Promise.resolve();const u=Ut.begin("onTree"),f=l.reduce((d,g)=>{try{const m=Ze(g);m&&d.push(m)}catch(m){Fe||m.name==="MissingIcon"&&console.error(m)}return d},[]);return new Promise((d,g)=>{Promise.all(f).then(m=>{Qe(m,()=>{a("active"),a("complete"),r("pending"),typeof e=="function"&&e(),u(),d()})}).catch(m=>{u(),g(m)})})}function Ua(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Ze(t).then(n=>{n&&Qe([n],e)})}function Wa(t){return function(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const a=(e||{}).icon?e:Pt(e||{});let{mask:r}=n;return r&&(r=(r||{}).icon?r:Pt(r||{})),t(a,s(s({},n),{},{mask:r}))}}const Ha=function(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=w,symbol:a=!1,mask:r=null,maskId:i=null,title:o=null,titleId:l=null,classes:u=[],attributes:f={},styles:d={}}=e;if(!t)return;const{prefix:g,iconName:m,icon:y}=t;return lt(s({type:"icon"},t),()=>(R("beforeDOMElementCreation",{iconDefinition:t,params:e}),c.autoA11y&&(o?f["aria-labelledby"]="".concat(c.replacementClass,"-title-").concat(l||$()):(f["aria-hidden"]="true",f.focusable="false")),Yt({icons:{main:Ot(y),mask:r?Ot(r.icon):{found:!1,width:null,height:null,icon:{}}},prefix:g,iconName:m,transform:s(s({},w),n),symbol:a,title:o,maskId:i,titleId:l,extra:{attributes:f,styles:d,classes:u}})))};var Ga={mixout(){return{icon:Wa(Ha)}},hooks(){return{mutationObserverCallbacks(t){return t.treeCallback=de,t.nodeCallback=Ua,t}}},provides(t){t.i2svg=function(e){const{node:n=p,callback:a=()=>{}}=e;return de(n,a)},t.generateSvgReplacementMutation=function(e,n){const{iconName:a,title:r,titleId:i,prefix:o,transform:l,symbol:u,mask:f,maskId:d,extra:g}=n;return new Promise((m,y)=>{Promise.all([Ct(a,o),f.iconName?Ct(f.iconName,f.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(C=>{let[T,x]=C;m([e,Yt({icons:{main:T,mask:x},prefix:o,iconName:a,transform:l,symbol:u,maskId:d,title:r,titleId:i,extra:g,watchable:!0})])}).catch(y)})},t.generateAbstractIcon=function(e){let{children:n,attributes:a,main:r,transform:i,styles:o}=e;const l=it(o);l.length>0&&(a.style=l);let u;return Dt(i)&&(u=L("generateAbstractTransformGrouping",{main:r,transform:i,containerWidth:r.width,iconWidth:r.width})),n.push(u||r.icon),{children:n,attributes:a}}}},Xa={mixout(){return{layer(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{classes:n=[]}=e;return lt({type:"layer"},()=>{R("beforeDOMElementCreation",{assembler:t,params:e});let a=[];return t(r=>{Array.isArray(r)?r.map(i=>{a=a.concat(i.abstract)}):a=a.concat(r.abstract)}),[{tag:"span",attributes:{class:["".concat(c.cssPrefix,"-layers"),...n].join(" ")},children:a}]})}}}},Va={mixout(){return{counter(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{title:n=null,classes:a=[],attributes:r={},styles:i={}}=e;return lt({type:"counter",content:t},()=>(R("beforeDOMElementCreation",{content:t,params:e}),Sa({content:t.toString(),title:n,extra:{attributes:r,styles:i,classes:["".concat(c.cssPrefix,"-layers-counter"),...a]}})))}}}},$a={mixout(){return{text(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=w,title:a=null,classes:r=[],attributes:i={},styles:o={}}=e;return lt({type:"text",content:t},()=>(R("beforeDOMElementCreation",{content:t,params:e}),oe({content:t,transform:s(s({},w),n),title:a,extra:{attributes:i,styles:o,classes:["".concat(c.cssPrefix,"-layers-text"),...r]}})))}}},provides(t){t.generateLayersText=function(e,n){const{title:a,transform:r,extra:i}=n;let o=null,l=null;if(Se){const u=parseInt(getComputedStyle(e).fontSize,10),f=e.getBoundingClientRect();o=f.width/u,l=f.height/u}return c.autoA11y&&!a&&(i.attributes["aria-hidden"]="true"),Promise.resolve([e,oe({content:e.innerHTML,width:o,height:l,transform:r,title:a,extra:i,watchable:!0})])}}};const qa=new RegExp('"',"ug"),me=[1105920,1112319],ge=s(s(s(s({},{FontAwesome:{normal:"fas",400:"fas"}}),yn),Mn),On),Ft=Object.keys(ge).reduce((t,e)=>(t[e.toLowerCase()]=ge[e],t),{}),Ba=Object.keys(Ft).reduce((t,e)=>{const n=Ft[e];return t[e]=n[900]||[...Object.entries(n)][0][1],t},{});function Ka(t){const e=t.replace(qa,""),n=na(e,0),a=n>=me[0]&&n<=me[1],r=e.length===2?e[0]===e[1]:!1;return{value:kt(r?e[0]:e),isSecondary:a||r}}function Qa(t,e){const n=t.replace(/^['"]|['"]$/g,"").toLowerCase(),a=parseInt(e),r=isNaN(a)?"normal":a;return(Ft[n]||{})[r]||Ba[n]}function pe(t,e){const n="".concat(_n).concat(e.replace(":","-"));return new Promise((a,r)=>{if(t.getAttribute(n)!==null)return a();const o=H(t.children).filter(m=>m.getAttribute(vt)===e)[0],l=N.getComputedStyle(t,e),u=l.getPropertyValue("font-family"),f=u.match(Yn),d=l.getPropertyValue("font-weight"),g=l.getPropertyValue("content");if(o&&!f)return t.removeChild(o),a();if(f&&g!=="none"&&g!==""){const m=l.getPropertyValue("content");let y=Qa(u,d);const{value:C,isSecondary:T}=Ka(m),x=f[0].startsWith("FontAwesome");let S=jt(y,C),b=S;if(x){const A=la(C);A.iconName&&A.prefix&&(S=A.iconName,y=A.prefix)}if(S&&!T&&(!o||o.getAttribute(Tt)!==y||o.getAttribute(Mt)!==b)){t.setAttribute(n,b),o&&t.removeChild(o);const A=za(),{extra:z}=A;z.attributes[vt]=e,Ct(S,y).then(j=>{const on=Yt(s(s({},A),{},{icons:{main:j,mask:$e()},prefix:y,iconName:b,extra:z,watchable:!0})),ft=p.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?t.insertBefore(ft,t.firstChild):t.appendChild(ft),ft.outerHTML=on.map(sn=>Q(sn)).join(`
`),t.removeAttribute(n),a()}).catch(r)}else a()}else a()})}function Ja(t){return Promise.all([pe(t,"::before"),pe(t,"::after")])}function Za(t){return t.parentNode!==document.head&&!~Dn.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(vt)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function he(t){if(O)return new Promise((e,n)=>{const a=H(t.querySelectorAll("*")).filter(Za).map(Ja),r=Ut.begin("searchPseudoElements");Je(),Promise.all(a).then(()=>{r(),Nt(),e()}).catch(()=>{r(),Nt(),n()})})}var tr={hooks(){return{mutationObserverCallbacks(t){return t.pseudoElementsCallback=he,t}}},provides(t){t.pseudoElements2svg=function(e){const{node:n=p}=e;c.searchPseudoElements&&he(n)}}};let ye=!1;var er={mixout(){return{dom:{unwatch(){Je(),ye=!0}}}},hooks(){return{bootstrap(){fe(Et("mutationObserverCallbacks",{}))},noAuto(){Ma()},watch(t){const{observeMutationsRoot:e}=t;ye?Nt():fe(Et("mutationObserverCallbacks",{observeMutationsRoot:e}))}}}};const be=t=>{let e={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce((n,a)=>{const r=a.toLowerCase().split("-"),i=r[0];let o=r.slice(1).join("-");if(i&&o==="h")return n.flipX=!0,n;if(i&&o==="v")return n.flipY=!0,n;if(o=parseFloat(o),isNaN(o))return n;switch(i){case"grow":n.size=n.size+o;break;case"shrink":n.size=n.size-o;break;case"left":n.x=n.x-o;break;case"right":n.x=n.x+o;break;case"up":n.y=n.y-o;break;case"down":n.y=n.y+o;break;case"rotate":n.rotate=n.rotate+o;break}return n},e)};var nr={mixout(){return{parse:{transform:t=>be(t)}}},hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-transform");return n&&(t.transform=be(n)),t}}},provides(t){t.generateAbstractTransformGrouping=function(e){let{main:n,transform:a,containerWidth:r,iconWidth:i}=e;const o={transform:"translate(".concat(r/2," 256)")},l="translate(".concat(a.x*32,", ").concat(a.y*32,") "),u="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),f="rotate(".concat(a.rotate," 0 0)"),d={transform:"".concat(l," ").concat(u," ").concat(f)},g={transform:"translate(".concat(i/2*-1," -256)")},m={outer:o,inner:d,path:g};return{tag:"g",attributes:s({},m.outer),children:[{tag:"g",attributes:s({},m.inner),children:[{tag:n.icon.tag,children:n.icon.children,attributes:s(s({},n.icon.attributes),m.path)}]}]}}}};const pt={x:0,y:0,width:"100%",height:"100%"};function ve(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function ar(t){return t.tag==="g"?t.children:[t]}var rr={hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-mask"),a=n?st(n.split(" ").map(r=>r.trim())):$e();return a.prefix||(a.prefix=F()),t.mask=a,t.maskId=e.getAttribute("data-fa-mask-id"),t}}},provides(t){t.generateAbstractMask=function(e){let{children:n,attributes:a,main:r,mask:i,maskId:o,transform:l}=e;const{width:u,icon:f}=r,{width:d,icon:g}=i,m=Kn({transform:l,containerWidth:d,iconWidth:u}),y={tag:"rect",attributes:s(s({},pt),{},{fill:"white"})},C=f.children?{children:f.children.map(ve)}:{},T={tag:"g",attributes:s({},m.inner),children:[ve(s({tag:f.tag,attributes:s(s({},f.attributes),m.path)},C))]},x={tag:"g",attributes:s({},m.outer),children:[T]},S="mask-".concat(o||$()),b="clip-".concat(o||$()),A={tag:"mask",attributes:s(s({},pt),{},{id:S,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[y,x]},z={tag:"defs",children:[{tag:"clipPath",attributes:{id:b},children:ar(g)},A]};return n.push(z,{tag:"rect",attributes:s({fill:"currentColor","clip-path":"url(#".concat(b,")"),mask:"url(#".concat(S,")")},pt)}),{children:n,attributes:a}}}},ir={provides(t){let e=!1;N.matchMedia&&(e=N.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){const n=[],a={fill:"currentColor"},r={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};n.push({tag:"path",attributes:s(s({},a),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});const i=s(s({},r),{},{attributeName:"opacity"}),o={tag:"circle",attributes:s(s({},a),{},{cx:"256",cy:"364",r:"28"}),children:[]};return e||o.children.push({tag:"animate",attributes:s(s({},r),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:s(s({},i),{},{values:"1;0;1;1;0;1;"})}),n.push(o),n.push({tag:"path",attributes:s(s({},a),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:e?[]:[{tag:"animate",attributes:s(s({},i),{},{values:"1;0;0;0;0;1;"})}]}),e||n.push({tag:"path",attributes:s(s({},a),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:s(s({},i),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:n}}}},or={hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-symbol"),a=n===null?!1:n===""?!0:n;return t.symbol=a,t}}}},sr=[Zn,Ga,Xa,Va,$a,tr,er,nr,rr,ir,or];ya(sr,{mixoutsTo:v});v.noAuto;v.config;const lr=v.library;v.dom;v.parse;v.findIconDefinition;v.toHtml;const tn=v.icon;v.layer;v.text;v.counter;/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */const cr={prefix:"fas",iconName:"rotate-left",icon:[512,512,["rotate-back","rotate-backward","undo-alt"],"f2ea","M48.5 224L40 224c-13.3 0-24-10.7-24-24L16 72c0-9.7 5.8-18.5 14.8-22.2s19.3-1.7 26.2 5.2L98.6 96.6c87.6-86.5 228.7-86.2 315.8 1c87.5 87.5 87.5 229.3 0 316.8s-229.3 87.5-316.8 0c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0c62.5 62.5 163.8 62.5 226.3 0s62.5-163.8 0-226.3c-62.2-62.2-162.7-62.5-225.3-1L185 183c6.9 6.9 8.9 17.2 5.2 26.2s-12.5 14.8-22.2 14.8L48.5 224z"]},fr={prefix:"fas",iconName:"rotate-right",icon:[512,512,["redo-alt","rotate-forward"],"f2f9","M463.5 224l8.5 0c13.3 0 24-10.7 24-24l0-128c0-9.7-5.8-18.5-14.8-22.2s-19.3-1.7-26.2 5.2L413.4 96.6c-87.6-86.5-228.7-86.2-315.8 1c-87.5 87.5-87.5 229.3 0 316.8s229.3 87.5 316.8 0c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0c-62.5 62.5-163.8 62.5-226.3 0s-62.5-163.8 0-226.3c62.2-62.2 162.7-62.5 225.3-1L327 183c-6.9 6.9-8.9 17.2-5.2 26.2s12.5 14.8 22.2 14.8l119.5 0z"]};lr.add(cr,fr);const en=tn({prefix:"fas",iconName:"rotate-left"}).node[0];en.classList.add("rotate-left");const nn=tn({prefix:"fas",iconName:"rotate-right"}).node[0];nn.classList.add("rotate-right");const ur=document.querySelector(".transformation-grid"),D=document.querySelector(".editing-image"),xe=document.getElementById("image-input"),dr=document.querySelector(".reset-btn"),Ht=document.querySelectorAll("input[type=range][data-name][data-unit]"),mr=document.querySelector(".flip-horizontal"),gr=document.querySelector(".flip-vertical"),pr=document.querySelector(".save-btn");rn(en);rn(nn);const hr=document.querySelector(".rotate-right"),yr=document.querySelector(".rotate-left"),an={};let Gt={},B=0,Xt=1,Vt=1;window.onload=()=>{for(const t of Ht){const e=t.dataset.name,n=t.value,a=t.dataset.unit;an[e]={value:n,unit:a}}};xe.addEventListener("change",t=>{var n;t.preventDefault();const e=(n=xe.files)==null?void 0:n[0];e&&(D.src=URL.createObjectURL(e))});Ht.forEach(t=>{t.addEventListener("input",e=>{e.preventDefault();const n=t.dataset.name,a=t.value,r=t.dataset.unit;Gt[n]={value:a,unit:r},console.log(n,a,r),br(),console.log(t.name),console.log(t.value)})});function br(){const t=Object.entries(Gt).map(([e,{value:n,unit:a}])=>`${e}(${n}${a})`).join(" ");D.style.filter=t,console.log(t)}dr.addEventListener("click",()=>{Gt={},D.style.filter="",D.style.transform="";for(const t of Ht){const e=t.dataset.name,n=an[e];n&&(t.value=n.value)}});function rn(t){const e=document.createElement("div");e.classList.add("transform-wrapper"),e.appendChild(t),ur.appendChild(e)}hr.addEventListener("click",()=>{B+=90,ct()});yr.addEventListener("click",()=>{B-=90,ct()});mr.addEventListener("click",()=>{Xt*=-1,ct()});gr.addEventListener("click",()=>{Vt*=-1,ct()});function ct(){D.style.transform=`rotate(${B}deg) scale(${Xt}, ${Vt})`}pr.addEventListener("click",()=>{const t=document.createElement("canvas"),e=t.getContext("2d"),n=D,a=n.naturalWidth,r=n.naturalHeight,i=Math.abs(B%180)===90;t.width=i?r:a,t.height=i?a:r,e.save(),e.translate(t.width/2,t.height/2),e.rotate(B*Math.PI/180),e.scale(Xt,Vt),e.filter=getComputedStyle(D).filter,e.drawImage(n,-a/2,-r/2,a,r),e.restore();const o=document.createElement("a");o.download="edited-image.png",o.href=t.toDataURL("image/png"),o.click()});
