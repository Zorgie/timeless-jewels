import{H as p,s as w,aa as R,P as S,T as I}from"./index.a7675b96.js";import{a as T}from"./paths.478f4e65.js";const f=[];function x(e,t){return{subscribe:b(e,t).subscribe}}function b(e,t=p){let n;const r=new Set;function a(s){if(w(e,s)&&(e=s,n)){const u=!f.length;for(const l of r)l[1](),f.push(l,e);if(u){for(let l=0;l<f.length;l+=2)f[l][0](f[l+1]);f.length=0}}}function i(s){a(s(e))}function o(s,u=p){const l=[s,u];return r.add(l),r.size===1&&(n=t(a)||p),s(e),()=>{r.delete(l),r.size===0&&n&&(n(),n=null)}}return{set:a,update:i,subscribe:o}}function Y(e,t,n){const r=!Array.isArray(e),a=r?[e]:e,i=t.length<2;return x(n,o=>{let s=!1;const u=[];let l=0,_=p;const g=()=>{if(l)return;_();const c=t(r?u[0]:u,o);i?o(c):_=I(c)?c:p},A=a.map((c,h)=>R(c,E=>{u[h]=E,l&=~(1<<h),s&&g()},()=>{l|=1<<h}));return s=!0,g(),function(){S(A),_(),s=!1}})}const O="1681988081441",$="sveltekit:snapshot",j="sveltekit:scroll",q="sveltekit:index",m={tap:1,hover:2,viewport:3,eager:4,off:-1};function K(e){let t=e.baseURI;if(!t){const n=e.getElementsByTagName("base");t=n.length?n[0].href:e.URL}return t}function z(){return{x:pageXOffset,y:pageYOffset}}function d(e,t){return e.getAttribute(`data-sveltekit-${t}`)}const k={...m,"":m.hover};function y(e){let t=e.assignedSlot??e.parentNode;return(t==null?void 0:t.nodeType)===11&&(t=t.host),t}function C(e,t){for(;e&&e!==t;){if(e.nodeName.toUpperCase()==="A"&&e.hasAttribute("href"))return e;e=y(e)}}function D(e,t){let n;try{n=new URL(e instanceof SVGAElement?e.href.baseVal:e.href,document.baseURI)}catch{}const r=e instanceof SVGAElement?e.target.baseVal:e.target,a=!n||!!r||L(n,t)||(e.getAttribute("rel")||"").split(/\s+/).includes("external")||e.hasAttribute("download");return{url:n,external:a,target:r}}function G(e){let t=null,n=null,r=null,a=null,i=null,o=null,s=e;for(;s&&s!==document.documentElement;)r===null&&(r=d(s,"preload-code")),a===null&&(a=d(s,"preload-data")),t===null&&(t=d(s,"keepfocus")),n===null&&(n=d(s,"noscroll")),i===null&&(i=d(s,"reload")),o===null&&(o=d(s,"replacestate")),s=y(s);return{preload_code:k[r??"off"],preload_data:k[a??"off"],keep_focus:t==="off"?!1:t===""?!0:null,noscroll:n==="off"?!1:n===""?!0:null,reload:i==="off"?!1:i===""?!0:null,replace_state:o==="off"?!1:o===""?!0:null}}function v(e){const t=b(e);let n=!0;function r(){n=!0,t.update(o=>o)}function a(o){n=!1,t.set(o)}function i(o){let s;return t.subscribe(u=>{(s===void 0||n&&u!==s)&&o(s=u)})}return{notify:r,set:a,subscribe:i}}function U(){const{set:e,subscribe:t}=b(!1);let n;async function r(){clearTimeout(n);const a=await fetch(`${T}/_app/version.json`,{headers:{pragma:"no-cache","cache-control":"no-cache"}});if(a.ok){const o=(await a.json()).version!==O;return o&&(e(!0),clearTimeout(n)),o}else throw new Error(`Version check failed: ${a.status}`)}return{subscribe:t,check:r}}function L(e,t){return e.origin!==location.origin||!e.pathname.startsWith(t)}let N;function H(e){N=e.client}const X={url:v({}),page:v({}),navigating:b(null),updated:U()};export{q as I,m as P,j as S,$ as a,D as b,G as c,z as d,H as e,C as f,K as g,Y as h,L as i,N as j,x as r,X as s};