let d;const W={},T={},m={},b={},H={},q={},ne=()=>{d=JSON.parse(window.SkillTree),Object.keys(d.groups).forEach(t=>{const n=d.groups[t];n.nodes.forEach(r=>{const s=d.nodes[r];s.isProxy||"classStartIndex"in s||s.expansionJewel&&s.expansionJewel.parent||s.isBlighted||s.ascendancyName||(W[parseInt(t)]=n,T[parseInt(r)]=s)})}),d.skillSprites.keystoneInactive.forEach(t=>Object.keys(t.coords).forEach(n=>m[n]=t)),d.skillSprites.notableInactive.forEach(t=>Object.keys(t.coords).forEach(n=>m[n]=t)),d.skillSprites.normalInactive.forEach(t=>Object.keys(t.coords).forEach(n=>m[n]=t)),d.skillSprites.masteryInactive.forEach(t=>Object.keys(t.coords).forEach(n=>m[n]=t)),d.skillSprites.keystoneActive.forEach(t=>Object.keys(t.coords).forEach(n=>b[n]=t)),d.skillSprites.notableActive.forEach(t=>Object.keys(t.coords).forEach(n=>b[n]=t)),d.skillSprites.normalActive.forEach(t=>Object.keys(t.coords).forEach(n=>b[n]=t)),d.skillSprites.masteryInactive.forEach(t=>Object.keys(t.coords).forEach(n=>b[n]=t)),JSON.parse(window.PassiveTranslations).forEach(t=>{t.ids.forEach(n=>{H[n]=t})}),Object.keys(window.TreeToPassive).forEach(t=>{q[window.TreeToPassive[t]]=parseInt(t)})},G={negate:-1,times_twenty:.05,canonical_stat:1,per_minute_to_per_second:60,milliseconds_to_seconds:1e3,display_indexable_support:1,divide_by_one_hundred:100,milliseconds_to_seconds_2dp_if_required:1e3,deciseconds_to_seconds:10,old_leech_percent:1,old_leech_permyriad:1e4,times_one_point_five:.6666666666666666,"30%_of_value":3.3333333333333335,divide_by_one_thousand:1e3,divide_by_twelve:12,divide_by_six:6,per_minute_to_per_second_2dp_if_required:60,"60%_of_value":1.6666666666666667,double:.5,negate_and_double:-.5,multiply_by_four:.25,per_minute_to_per_second_0dp:60,milliseconds_to_seconds_0dp:1e3,mod_value_to_item_class:1,milliseconds_to_seconds_2dp:1e3,multiplicative_damage_modifier:1,divide_by_one_hundred_2dp:100,per_minute_to_per_second_1dp:60,divide_by_one_hundred_2dp_if_required:100,divide_by_ten_1dp_if_required:10,milliseconds_to_seconds_1dp:1e3,divide_by_fifty:50,per_minute_to_per_second_2dp:60,divide_by_ten_0dp:10,divide_by_one_hundred_and_negate:-100,tree_expansion_jewel_passive:1,passive_hash:1,divide_by_ten_1dp:10,affliction_reward_type:1,divide_by_five:5,metamorphosis_reward_description:1,divide_by_two_0dp:2,divide_by_fifteen_0dp:15,divide_by_three:3,divide_by_twenty_then_double_0dp:10,divide_by_four:4},k=(e,t,n,r,s)=>({x:(Math.abs(d.min_x)+e+n)/s,y:(Math.abs(d.min_y)+t+r)/s}),V=(e,t,n)=>{const r=Math.PI/180*n,s=Math.cos(r),c=Math.sin(r),a=s*(t.x-e.x)+c*(t.y-e.y)+e.x,i=s*(t.y-e.y)-c*(t.x-e.x)+e.y;return{x:a,y:i}},S=[0,30,45,60,90,120,135,150,180,210,225,240,270,300,315,330],P=[0,10,20,30,40,45,50,60,70,80,90,100,110,120,130,135,140,150,160,170,180,190,200,210,220,225,230,240,250,260,270,280,290,300,310,315,320,330,340,350],z=(e,t)=>{const n=d.constants.skillsPerOrbit[e];return n==16?S[S.length-t]||0:n==40?P[P.length-t]||0:360-360/n*t},A=(e,t,n,r)=>{if(e.group===void 0||e.orbit===void 0||e.orbitIndex===void 0)return{x:0,y:0};const s=d.groups[e.group],c=z(e.orbit,e.orbitIndex),a=k(s.x,s.y,t,n,r),i=k(s.x,s.y-d.constants.orbitRadii[e.orbit],t,n,r);return V(a,i,c)},D=(e,t)=>Math.sqrt(Math.pow(e.x-t.x,2)+Math.pow(e.y-t.y,2)),re=(e,t)=>{let n=-1;for(let c=0;c<e.English.length;c++){const a=e.English[c];let i=!0;if(a.condition.length>0){const o=a.condition[0];o.min!==void 0&&t<o.min&&(console.log(t,"<",o.min,o.negated),i=!1),o.max!==void 0&&t>o.max&&(console.log(t,">",o.max,o.negated),i=!1),o.negated&&(i=!i)}if(i){n=c;break}}if(n==-1)return;const r=e.English[n];let s=t;return r.index_handlers.length>0&&r.index_handlers[0].forEach(c=>{s=s/(G[c]||1)}),r.string.replace("{0}",r.format[0].replace("#",s.toString()))},h={},se=e=>(e in h||(h[e]=new Image,h[e].src=d.assets[e]["0.3835"]),h[e]),J=1800,oe=e=>{const t=[],n=A(e,0,0,1);for(const r of Object.values(T)){const s=A(r,0,0,1);D(s,n)<J&&t.push(r)}return t},E={},ae=e=>{const t=typeof e=="string"?parseInt(e):e;return t in E||(E[t]=window.GetStatByIndex(t)),E[t]};function U(){return new Worker("/timeless-jewels/_app/immutable/assets/sync_worker.844332b1.js",{type:"module"})}const j=Symbol("Comlink.proxy"),B=Symbol("Comlink.endpoint"),F=Symbol("Comlink.releaseProxy"),w=Symbol("Comlink.thrown"),M=e=>typeof e=="object"&&e!==null||typeof e=="function",Y={canHandle:e=>M(e)&&e[j],serialize(e){const{port1:t,port2:n}=new MessageChannel;return N(e,t),[n,[n]]},deserialize(e){return e.start(),L(e)}},K={canHandle:e=>M(e)&&w in e,serialize({value:e}){let t;return e instanceof Error?t={isError:!0,value:{message:e.message,name:e.name,stack:e.stack}}:t={isError:!1,value:e},[t,[]]},deserialize(e){throw e.isError?Object.assign(new Error(e.value.message),e.value):e.value}},I=new Map([["proxy",Y],["throw",K]]);function N(e,t=self){t.addEventListener("message",function n(r){if(!r||!r.data)return;const{id:s,type:c,path:a}=Object.assign({path:[]},r.data),i=(r.data.argumentList||[]).map(f);let o;try{const l=a.slice(0,-1).reduce((_,y)=>_[y],e),u=a.reduce((_,y)=>_[y],e);switch(c){case"GET":o=u;break;case"SET":l[a.slice(-1)[0]]=f(r.data.value),o=!0;break;case"APPLY":o=u.apply(l,i);break;case"CONSTRUCT":{const _=new u(...i);o=$(_)}break;case"ENDPOINT":{const{port1:_,port2:y}=new MessageChannel;N(e,y),o=Z(_,[_])}break;case"RELEASE":o=void 0;break;default:return}}catch(l){o={value:l,[w]:0}}Promise.resolve(o).catch(l=>({value:l,[w]:0})).then(l=>{const[u,_]=x(l);t.postMessage(Object.assign(Object.assign({},u),{id:s}),_),c==="RELEASE"&&(t.removeEventListener("message",n),C(t))})}),t.start&&t.start()}function Q(e){return e.constructor.name==="MessagePort"}function C(e){Q(e)&&e.close()}function L(e,t){return v(e,[],t)}function g(e){if(e)throw new Error("Proxy has been released and is not useable")}function v(e,t=[],n=function(){}){let r=!1;const s=new Proxy(n,{get(c,a){if(g(r),a===F)return()=>p(e,{type:"RELEASE",path:t.map(i=>i.toString())}).then(()=>{C(e),r=!0});if(a==="then"){if(t.length===0)return{then:()=>s};const i=p(e,{type:"GET",path:t.map(o=>o.toString())}).then(f);return i.then.bind(i)}return v(e,[...t,a])},set(c,a,i){g(r);const[o,l]=x(i);return p(e,{type:"SET",path:[...t,a].map(u=>u.toString()),value:o},l).then(f)},apply(c,a,i){g(r);const o=t[t.length-1];if(o===B)return p(e,{type:"ENDPOINT"}).then(f);if(o==="bind")return v(e,t.slice(0,-1));const[l,u]=O(i);return p(e,{type:"APPLY",path:t.map(_=>_.toString()),argumentList:l},u).then(f)},construct(c,a){g(r);const[i,o]=O(a);return p(e,{type:"CONSTRUCT",path:t.map(l=>l.toString()),argumentList:i},o).then(f)}});return s}function X(e){return Array.prototype.concat.apply([],e)}function O(e){const t=e.map(x);return[t.map(n=>n[0]),X(t.map(n=>n[1]))]}const R=new WeakMap;function Z(e,t){return R.set(e,t),e}function $(e){return Object.assign(e,{[j]:!0})}function x(e){for(const[t,n]of I)if(n.canHandle(e)){const[r,s]=n.serialize(e);return[{type:"HANDLER",name:t,value:r},s]}return[{type:"RAW",value:e},R.get(e)||[]]}function f(e){switch(e.type){case"HANDLER":return I.get(e.name).deserialize(e.value);case"RAW":return e.value}}function p(e,t,n){return new Promise(r=>{const s=ee();e.addEventListener("message",function c(a){!a.data||!a.data.id||a.data.id!==s||(e.removeEventListener("message",c),r(a.data))}),e.start&&e.start(),e.postMessage(Object.assign({id:s},t),n)})}function ee(){return new Array(4).fill(0).map(()=>Math.floor(Math.random()*Number.MAX_SAFE_INTEGER).toString(16)).join("-")}function te(){console.log("Creating sync worker");const e=new U,t=L(e);return{syncWorker:e,syncWrap:t}}const{syncWorker:ie,syncWrap:ce}=te();export{d as a,J as b,T as c,W as d,A as e,D as f,se as g,re as h,H as i,b as j,m as k,ne as l,ae as m,oe as n,z as o,$ as p,q,ce as s,k as t};