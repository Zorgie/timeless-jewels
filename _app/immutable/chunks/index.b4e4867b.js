function k(){}function et(t,e){for(const n in e)t[n]=e[n];return t}function K(t){return t()}function G(){return Object.create(null)}function v(t){t.forEach(K)}function F(t){return typeof t=="function"}function Et(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let C;function kt(t,e){return C||(C=document.createElement("a")),C.href=e,t===C.href}function nt(t){return Object.keys(t).length===0}function it(t,...e){if(t==null)return k;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function Nt(t,e,n){t.$$.on_destroy.push(it(e,n))}function St(t,e,n,i){if(t){const r=Q(t,e,n,i);return t[0](r)}}function Q(t,e,n,i){return t[1]&&i?et(n.ctx.slice(),t[1](i(e))):n.ctx}function At(t,e,n,i){if(t[2]&&i){const r=t[2](i(n));if(e.dirty===void 0)return r;if(typeof r=="object"){const l=[],s=Math.max(e.dirty.length,r.length);for(let o=0;o<s;o+=1)l[o]=e.dirty[o]|r[o];return l}return e.dirty|r}return e.dirty}function Ct(t,e,n,i,r,l){if(r){const s=Q(e,n,i,l);t.p(s,r)}}function jt(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}function Mt(t){const e={};for(const n in t)e[n]=!0;return e}function Ot(t){return t&&F(t.destroy)?t.destroy:k}const Pt=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global;let M=!1;function rt(){M=!0}function st(){M=!1}function ct(t,e,n,i){for(;t<e;){const r=t+(e-t>>1);n(r)<=i?t=r+1:e=r}return t}function ot(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const c=[];for(let u=0;u<e.length;u++){const f=e[u];f.claim_order!==void 0&&c.push(f)}e=c}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let r=0;for(let c=0;c<e.length;c++){const u=e[c].claim_order,f=(r>0&&e[n[r]].claim_order<=u?r+1:ct(1,r,_=>e[n[_]].claim_order,u))-1;i[c]=n[f]+1;const d=f+1;n[d]=c,r=Math.max(d,r)}const l=[],s=[];let o=e.length-1;for(let c=n[r]+1;c!=0;c=i[c-1]){for(l.push(e[c-1]);o>=c;o--)s.push(e[o]);o--}for(;o>=0;o--)s.push(e[o]);l.reverse(),s.sort((c,u)=>c.claim_order-u.claim_order);for(let c=0,u=0;c<s.length;c++){for(;u<l.length&&s[c].claim_order>=l[u].claim_order;)u++;const f=u<l.length?l[u]:null;t.insertBefore(s[c],f)}}function ut(t,e){if(M){for(ot(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function Tt(t,e,n){M&&!n?ut(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function lt(t){t.parentNode&&t.parentNode.removeChild(t)}function Dt(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function at(t){return document.createElement(t)}function ft(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function H(t){return document.createTextNode(t)}function Lt(){return H(" ")}function qt(){return H("")}function Bt(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function zt(t){return function(e){return e.preventDefault(),t.call(this,e)}}function Ft(t){return function(e){return e.stopPropagation(),t.call(this,e)}}function _t(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}const dt=["width","height"];function Ht(t,e){const n=Object.getOwnPropertyDescriptors(t.__proto__);for(const i in e)e[i]==null?t.removeAttribute(i):i==="style"?t.style.cssText=e[i]:i==="__value"?t.value=t[i]=e[i]:n[i]&&n[i].set&&dt.indexOf(i)===-1?t[i]=e[i]:_t(t,i,e[i])}function It(t){return t===""?null:+t}function ht(t){return Array.from(t.childNodes)}function mt(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function R(t,e,n,i,r=!1){mt(t);const l=(()=>{for(let s=t.claim_info.last_index;s<t.length;s++){const o=t[s];if(e(o)){const c=n(o);return c===void 0?t.splice(s,1):t[s]=c,r||(t.claim_info.last_index=s),o}}for(let s=t.claim_info.last_index-1;s>=0;s--){const o=t[s];if(e(o)){const c=n(o);return c===void 0?t.splice(s,1):t[s]=c,r?c===void 0&&t.claim_info.last_index--:t.claim_info.last_index=s,o}}return i()})();return l.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,l}function V(t,e,n,i){return R(t,r=>r.nodeName===e,r=>{const l=[];for(let s=0;s<r.attributes.length;s++){const o=r.attributes[s];n[o.name]||l.push(o.name)}l.forEach(s=>r.removeAttribute(s))},()=>i(e))}function Ut(t,e,n){return V(t,e,n,at)}function Wt(t,e,n){return V(t,e,n,ft)}function pt(t,e){return R(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>H(e),!0)}function Gt(t){return pt(t," ")}function Jt(t,e){e=""+e,t.data!==e&&(t.data=e)}function Kt(t,e){t.value=e??""}function Qt(t,e,n,i){n==null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}function Rt(t,e,n){t.classList[n?"add":"remove"](e)}function yt(t,e,{bubbles:n=!1,cancelable:i=!1}={}){const r=document.createEvent("CustomEvent");return r.initCustomEvent(t,n,i,e),r}function Vt(t,e){return new t(e)}let N;function E(t){N=t}function b(){if(!N)throw new Error("Function called outside component initialization");return N}function Xt(t){b().$$.before_update.push(t)}function Yt(t){b().$$.on_mount.push(t)}function Zt(t){b().$$.after_update.push(t)}function te(t){b().$$.on_destroy.push(t)}function ee(){const t=b();return(e,n,{cancelable:i=!1}={})=>{const r=t.$$.callbacks[e];if(r){const l=yt(e,n,{cancelable:i});return r.slice().forEach(s=>{s.call(t,l)}),!l.defaultPrevented}return!0}}function ne(t,e){return b().$$.context.set(t,e),e}function ie(t){return b().$$.context.get(t)}function re(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach(i=>i.call(this,e))}const $=[],J=[];let w=[];const q=[],X=Promise.resolve();let B=!1;function Y(){B||(B=!0,X.then(Z))}function se(){return Y(),X}function z(t){w.push(t)}function ce(t){q.push(t)}const L=new Set;let x=0;function Z(){if(x!==0)return;const t=N;do{try{for(;x<$.length;){const e=$[x];x++,E(e),gt(e.$$)}}catch(e){throw $.length=0,x=0,e}for(E(null),$.length=0,x=0;J.length;)J.pop()();for(let e=0;e<w.length;e+=1){const n=w[e];L.has(n)||(L.add(n),n())}w.length=0}while($.length);for(;q.length;)q.pop()();B=!1,L.clear(),E(t)}function gt(t){if(t.fragment!==null){t.update(),v(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(z)}}function bt(t){const e=[],n=[];w.forEach(i=>t.indexOf(i)===-1?e.push(i):n.push(i)),n.forEach(i=>i()),w=e}const j=new Set;let g;function oe(){g={r:0,c:[],p:g}}function ue(){g.r||v(g.c),g=g.p}function tt(t,e){t&&t.i&&(j.delete(t),t.i(e))}function xt(t,e,n,i){if(t&&t.o){if(j.has(t))return;j.add(t),g.c.push(()=>{j.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}function le(t,e){xt(t,1,1,()=>{e.delete(t.key)})}function ae(t,e,n,i,r,l,s,o,c,u,f,d){let _=t.length,m=l.length,h=_;const O={};for(;h--;)O[t[h].key]=h;const S=[],P=new Map,T=new Map,I=[];for(h=m;h--;){const a=d(r,l,h),p=n(a);let y=s.get(p);y?i&&I.push(()=>y.p(a,e)):(y=u(p,a),y.c()),P.set(p,S[h]=y),p in O&&T.set(p,Math.abs(h-O[p]))}const U=new Set,W=new Set;function D(a){tt(a,1),a.m(o,f),s.set(a.key,a),f=a.first,m--}for(;_&&m;){const a=S[m-1],p=t[_-1],y=a.key,A=p.key;a===p?(f=a.first,_--,m--):P.has(A)?!s.has(y)||U.has(y)?D(a):W.has(A)?_--:T.get(y)>T.get(A)?(W.add(y),D(a)):(U.add(A),_--):(c(p,s),_--)}for(;_--;){const a=t[_];P.has(a.key)||c(a,s)}for(;m;)D(S[m-1]);return v(I),S}function fe(t,e){const n={},i={},r={$$scope:1};let l=t.length;for(;l--;){const s=t[l],o=e[l];if(o){for(const c in s)c in o||(i[c]=1);for(const c in o)r[c]||(n[c]=o[c],r[c]=1);t[l]=o}else for(const c in s)r[c]=1}for(const s in i)s in n||(n[s]=void 0);return n}function _e(t,e,n){const i=t.$$.props[e];i!==void 0&&(t.$$.bound[i]=n,n(t.$$.ctx[i]))}function de(t){t&&t.c()}function he(t,e){t&&t.l(e)}function $t(t,e,n,i){const{fragment:r,after_update:l}=t.$$;r&&r.m(e,n),i||z(()=>{const s=t.$$.on_mount.map(K).filter(F);t.$$.on_destroy?t.$$.on_destroy.push(...s):v(s),t.$$.on_mount=[]}),l.forEach(z)}function wt(t,e){const n=t.$$;n.fragment!==null&&(bt(n.after_update),v(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function vt(t,e){t.$$.dirty[0]===-1&&($.push(t),Y(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function me(t,e,n,i,r,l,s,o=[-1]){const c=N;E(t);const u=t.$$={fragment:null,ctx:[],props:l,update:k,not_equal:r,bound:G(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(c?c.$$.context:[])),callbacks:G(),dirty:o,skip_bound:!1,root:e.target||c.$$.root};s&&s(u.root);let f=!1;if(u.ctx=n?n(t,e.props||{},(d,_,...m)=>{const h=m.length?m[0]:_;return u.ctx&&r(u.ctx[d],u.ctx[d]=h)&&(!u.skip_bound&&u.bound[d]&&u.bound[d](h),f&&vt(t,d)),_}):[],u.update(),f=!0,v(u.before_update),u.fragment=i?i(u.ctx):!1,e.target){if(e.hydrate){rt();const d=ht(e.target);u.fragment&&u.fragment.l(d),d.forEach(lt)}else u.fragment&&u.fragment.c();e.intro&&tt(t.$$.fragment),$t(t,e.target,e.anchor,e.customElement),st(),Z()}E(c)}class pe{$destroy(){wt(this,1),this.$destroy=k}$on(e,n){if(!F(n))return k;const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const r=i.indexOf(n);r!==-1&&i.splice(r,1)}}$set(e){this.$$set&&!nt(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{le as $,$t as A,wt as B,St as C,Ct as D,jt as E,At as F,ut as G,k as H,Nt as I,_e as J,kt as K,ce as L,Kt as M,Bt as N,It as O,v as P,Dt as Q,zt as R,pe as S,F as T,ne as U,te as V,ie as W,re as X,ee as Y,Pt as Z,ae as _,Lt as a,Rt as a0,ft as a1,Wt as a2,et as a3,Ht as a4,Ot as a5,fe as a6,Mt as a7,Xt as a8,Ft as a9,it as aa,Tt as b,Gt as c,xt as d,qt as e,ue as f,tt as g,lt as h,me as i,Zt as j,at as k,Ut as l,ht as m,_t as n,Yt as o,Qt as p,H as q,pt as r,Et as s,se as t,Jt as u,oe as v,J as w,Vt as x,de as y,he as z};