import{S as R,i as C,s as S,l as U,g as I,o as _,p as D,q as T,d as b,n as A,I as N,J as P,K as O,L as V,e as p,t as j,k as M,c as y,a as x,h as z,m as L,b as k,M as g,E as v}from"../chunks/index-7969860d.js";import{a as B}from"../chunks/paths-1c47712a.js";import{l as F,s as G}from"../chunks/worker-f7296508.js";import"../chunks/index-3d8bec42.js";(()=>{const s=()=>{const n=new Error("not implemented");return n.code="ENOSYS",n};if(!globalThis.fs){let n="";globalThis.fs={constants:{O_WRONLY:-1,O_RDWR:-1,O_CREAT:-1,O_TRUNC:-1,O_APPEND:-1,O_EXCL:-1},writeSync(e,r){n+=m.decode(r);const o=n.lastIndexOf(`
`);return o!=-1&&(console.log(n.substr(0,o)),n=n.substr(o+1)),r.length},write(e,r,o,a,d,u){if(o!==0||a!==r.length||d!==null){u(s());return}const w=this.writeSync(e,r);u(null,w)},chmod(e,r,o){o(s())},chown(e,r,o,a){a(s())},close(e,r){r(s())},fchmod(e,r,o){o(s())},fchown(e,r,o,a){a(s())},fstat(e,r){r(s())},fsync(e,r){r(null)},ftruncate(e,r,o){o(s())},lchown(e,r,o,a){a(s())},link(e,r,o){o(s())},lstat(e,r){r(s())},mkdir(e,r,o){o(s())},open(e,r,o,a){a(s())},read(e,r,o,a,d,u){u(s())},readdir(e,r){r(s())},readlink(e,r){r(s())},rename(e,r,o){o(s())},rmdir(e,r){r(s())},stat(e,r){r(s())},symlink(e,r,o){o(s())},truncate(e,r,o){o(s())},unlink(e,r){r(s())},utimes(e,r,o,a){a(s())}}}if(globalThis.process||(globalThis.process={getuid(){return-1},getgid(){return-1},geteuid(){return-1},getegid(){return-1},getgroups(){throw s()},pid:-1,ppid:-1,umask(){throw s()},cwd(){throw s()},chdir(){throw s()}}),!globalThis.crypto)throw new Error("globalThis.crypto is not available, polyfill required (crypto.getRandomValues only)");if(!globalThis.performance)throw new Error("globalThis.performance is not available, polyfill required (performance.now only)");if(!globalThis.TextEncoder)throw new Error("globalThis.TextEncoder is not available, polyfill required");if(!globalThis.TextDecoder)throw new Error("globalThis.TextDecoder is not available, polyfill required");const l=new TextEncoder("utf-8"),m=new TextDecoder("utf-8");globalThis.Go=class{constructor(){this.argv=["js"],this.env={},this.exit=t=>{t!==0&&console.warn("exit code:",t)},this._exitPromise=new Promise(t=>{this._resolveExitPromise=t}),this._pendingEvent=null,this._scheduledTimeouts=new Map,this._nextCallbackTimeoutID=1;const n=(t,i)=>{this.mem.setUint32(t+0,i,!0),this.mem.setUint32(t+4,Math.floor(i/4294967296),!0)},e=t=>{const i=this.mem.getUint32(t+0,!0),c=this.mem.getInt32(t+4,!0);return i+c*4294967296},r=t=>{const i=this.mem.getFloat64(t,!0);if(i===0)return;if(!isNaN(i))return i;const c=this.mem.getUint32(t,!0);return this._values[c]},o=(t,i)=>{if(typeof i=="number"&&i!==0){if(isNaN(i)){this.mem.setUint32(t+4,2146959360,!0),this.mem.setUint32(t,0,!0);return}this.mem.setFloat64(t,i,!0);return}if(i===void 0){this.mem.setFloat64(t,0,!0);return}let h=this._ids.get(i);h===void 0&&(h=this._idPool.pop(),h===void 0&&(h=this._values.length),this._values[h]=i,this._goRefCounts[h]=0,this._ids.set(i,h)),this._goRefCounts[h]++;let f=0;switch(typeof i){case"object":i!==null&&(f=1);break;case"string":f=2;break;case"symbol":f=3;break;case"function":f=4;break}this.mem.setUint32(t+4,2146959360|f,!0),this.mem.setUint32(t,h,!0)},a=t=>{const i=e(t+0),c=e(t+8);return new Uint8Array(this._inst.exports.mem.buffer,i,c)},d=t=>{const i=e(t+0),c=e(t+8),h=new Array(c);for(let f=0;f<c;f++)h[f]=r(i+f*8);return h},u=t=>{const i=e(t+0),c=e(t+8);return m.decode(new DataView(this._inst.exports.mem.buffer,i,c))},w=Date.now()-performance.now();this.importObject={go:{"runtime.wasmExit":t=>{t>>>=0;const i=this.mem.getInt32(t+8,!0);this.exited=!0,delete this._inst,delete this._values,delete this._goRefCounts,delete this._ids,delete this._idPool,this.exit(i)},"runtime.wasmWrite":t=>{t>>>=0;const i=e(t+8),c=e(t+16),h=this.mem.getInt32(t+24,!0);fs.writeSync(i,new Uint8Array(this._inst.exports.mem.buffer,c,h))},"runtime.resetMemoryDataView":t=>{this.mem=new DataView(this._inst.exports.mem.buffer)},"runtime.nanotime1":t=>{t>>>=0,n(t+8,(w+performance.now())*1e6)},"runtime.walltime":t=>{t>>>=0;const i=new Date().getTime();n(t+8,i/1e3),this.mem.setInt32(t+16,i%1e3*1e6,!0)},"runtime.scheduleTimeoutEvent":t=>{t>>>=0;const i=this._nextCallbackTimeoutID;this._nextCallbackTimeoutID++,this._scheduledTimeouts.set(i,setTimeout(()=>{for(this._resume();this._scheduledTimeouts.has(i);)console.warn("scheduleTimeoutEvent: missed timeout event"),this._resume()},e(t+8)+1)),this.mem.setInt32(t+16,i,!0)},"runtime.clearTimeoutEvent":t=>{t>>>=0;const i=this.mem.getInt32(t+8,!0);clearTimeout(this._scheduledTimeouts.get(i)),this._scheduledTimeouts.delete(i)},"runtime.getRandomData":t=>{t>>>=0,crypto.getRandomValues(a(t+8))},"syscall/js.finalizeRef":t=>{t>>>=0;const i=this.mem.getUint32(t+8,!0);if(this._goRefCounts[i]--,this._goRefCounts[i]===0){const c=this._values[i];this._values[i]=null,this._ids.delete(c),this._idPool.push(i)}},"syscall/js.stringVal":t=>{t>>>=0,o(t+24,u(t+8))},"syscall/js.valueGet":t=>{t>>>=0;const i=Reflect.get(r(t+8),u(t+16));t=this._inst.exports.getsp()>>>0,o(t+32,i)},"syscall/js.valueSet":t=>{t>>>=0,Reflect.set(r(t+8),u(t+16),r(t+32))},"syscall/js.valueDelete":t=>{t>>>=0,Reflect.deleteProperty(r(t+8),u(t+16))},"syscall/js.valueIndex":t=>{t>>>=0,o(t+24,Reflect.get(r(t+8),e(t+16)))},"syscall/js.valueSetIndex":t=>{t>>>=0,Reflect.set(r(t+8),e(t+16),r(t+24))},"syscall/js.valueCall":t=>{t>>>=0;try{const i=r(t+8),c=Reflect.get(i,u(t+16)),h=d(t+32),f=Reflect.apply(c,i,h);t=this._inst.exports.getsp()>>>0,o(t+56,f),this.mem.setUint8(t+64,1)}catch(i){t=this._inst.exports.getsp()>>>0,o(t+56,i),this.mem.setUint8(t+64,0)}},"syscall/js.valueInvoke":t=>{t>>>=0;try{const i=r(t+8),c=d(t+16),h=Reflect.apply(i,void 0,c);t=this._inst.exports.getsp()>>>0,o(t+40,h),this.mem.setUint8(t+48,1)}catch(i){t=this._inst.exports.getsp()>>>0,o(t+40,i),this.mem.setUint8(t+48,0)}},"syscall/js.valueNew":t=>{t>>>=0;try{const i=r(t+8),c=d(t+16),h=Reflect.construct(i,c);t=this._inst.exports.getsp()>>>0,o(t+40,h),this.mem.setUint8(t+48,1)}catch(i){t=this._inst.exports.getsp()>>>0,o(t+40,i),this.mem.setUint8(t+48,0)}},"syscall/js.valueLength":t=>{t>>>=0,n(t+16,parseInt(r(t+8).length))},"syscall/js.valuePrepareString":t=>{t>>>=0;const i=l.encode(String(r(t+8)));o(t+16,i),n(t+24,i.length)},"syscall/js.valueLoadString":t=>{t>>>=0;const i=r(t+8);a(t+16).set(i)},"syscall/js.valueInstanceOf":t=>{t>>>=0,this.mem.setUint8(t+24,r(t+8)instanceof r(t+16)?1:0)},"syscall/js.copyBytesToGo":t=>{t>>>=0;const i=a(t+8),c=r(t+32);if(!(c instanceof Uint8Array||c instanceof Uint8ClampedArray)){this.mem.setUint8(t+48,0);return}const h=c.subarray(0,i.length);i.set(h),n(t+40,h.length),this.mem.setUint8(t+48,1)},"syscall/js.copyBytesToJS":t=>{t>>>=0;const i=r(t+8),c=a(t+16);if(!(i instanceof Uint8Array||i instanceof Uint8ClampedArray)){this.mem.setUint8(t+48,0);return}const h=c.subarray(0,i.length);i.set(h),n(t+40,h.length),this.mem.setUint8(t+48,1)},debug:t=>{console.log(t)}}}}async run(n){if(!(n instanceof WebAssembly.Instance))throw new Error("Go.run: WebAssembly.Instance expected");this._inst=n,this.mem=new DataView(this._inst.exports.mem.buffer),this._values=[NaN,0,null,!0,!1,globalThis,this],this._goRefCounts=new Array(this._values.length).fill(1/0),this._ids=new Map([[0,1],[null,2],[!0,3],[!1,4],[globalThis,5],[this,6]]),this._idPool=[],this.exited=!1;let e=4096;const r=t=>{const i=e,c=l.encode(t+"\0");return new Uint8Array(this.mem.buffer,e,c.length).set(c),e+=c.length,e%8!==0&&(e+=8-e%8),i},o=this.argv.length,a=[];this.argv.forEach(t=>{a.push(r(t))}),a.push(0),Object.keys(this.env).sort().forEach(t=>{a.push(r(`${t}=${this.env[t]}`))}),a.push(0);const u=e;a.forEach(t=>{this.mem.setUint32(e,t,!0),this.mem.setUint32(e+4,0,!0),e+=8});const w=4096+8192;if(e>=w)throw new Error("total length of command line and environment variables exceeds limit");this._inst.exports.run(o,u),this.exited&&this._resolveExitPromise(),await this._exitPromise}_resume(){if(this.exited)throw new Error("Go program has already exited");this._inst.exports.resume(),this.exited&&this._resolveExitPromise()}_makeFuncWrapper(n){const e=this;return function(){const r={id:n,this:this,args:arguments};return e._pendingEvent=r,e._resume(),r.result}}}})();function W(s){let l;const m=s[2].default,n=N(m,s,s[1],null);return{c(){n&&n.c()},l(e){n&&n.l(e)},m(e,r){n&&n.m(e,r),l=!0},p(e,r){n&&n.p&&(!l||r&2)&&P(n,m,e,e[1],l?V(m,e[1],r,null):O(e[1]),null)},i(e){l||(T(n,e),l=!0)},o(e){_(n,e),l=!1},d(e){n&&n.d(e)}}}function $(s){let l,m,n,e,r,o,a,d,u;return{c(){l=p("div"),m=p("div"),n=p("div"),e=p("div"),r=p("h1"),o=j("Timeless Calculator"),a=M(),d=p("h2"),u=j("Loading..."),this.h()},l(w){l=y(w,"DIV",{class:!0});var t=x(l);m=y(t,"DIV",{class:!0});var i=x(m);n=y(i,"DIV",{class:!0});var c=x(n);e=y(c,"DIV",{});var h=x(e);r=y(h,"H1",{class:!0});var f=x(r);o=z(f,"Timeless Calculator"),f.forEach(b),a=L(h),d=y(h,"H2",{class:!0});var E=x(d);u=z(E,"Loading..."),E.forEach(b),h.forEach(b),c.forEach(b),i.forEach(b),t.forEach(b),this.h()},h(){k(r,"class","text-white mb-10 text-center"),k(d,"class","text-center"),k(n,"class","py-10 flex flex-col justify-between"),k(m,"class","flex flex-col"),k(l,"class","flex flex-row justify-center h-screen")},m(w,t){I(w,l,t),g(l,m),g(m,n),g(n,e),g(e,r),g(r,o),g(e,a),g(e,d),g(d,u)},p:v,i:v,o:v,d(w){w&&b(l)}}}function q(s){let l,m,n,e;const r=[$,W],o=[];function a(d,u){return d[0]?0:1}return l=a(s),m=o[l]=r[l](s),{c(){m.c(),n=U()},l(d){m.l(d),n=U()},m(d,u){o[l].m(d,u),I(d,n,u),e=!0},p(d,[u]){let w=l;l=a(d),l===w?o[l].p(d,u):(A(),_(o[w],1,1,()=>{o[w]=null}),D(),m=o[l],m?m.p(d,u):(m=o[l]=r[l](d),m.c()),T(m,1),m.m(n.parentNode,n))},i(d){e||(T(m),e=!0)},o(d){_(m),e=!1},d(d){o[l].d(d),d&&b(n)}}}function H(s,l,m){let{$$slots:n={},$$scope:e}=l,r=!0;const o=new Go;return fetch(B+"/calculator.wasm").then(a=>a.arrayBuffer()).then(a=>{WebAssembly.instantiate(a,o.importObject).then(d=>{o.run(d.instance),m(0,r=!1),F()}),G.boot(a)}),s.$$set=a=>{"$$scope"in a&&m(1,e=a.$$scope)},[r,e,n]}class Q extends R{constructor(l){super(),C(this,l,H,q,S,{})}}export{Q as default};
