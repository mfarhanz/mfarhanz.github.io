import"../chunks/DsnmJJEf.js";import"../chunks/69_IOA4Y.js";import{b3 as vt,b4 as pt,b5 as ht,b as mt,h as V,a as gt,e as bt,f as _t,g as kt,i as xt,k as $t,U as yt,p as wt,a6 as zt,b6 as Nt,E as Mt,b7 as It,b8 as Tt,az as Ft,w as St,b9 as Et,ba as Ot,bb as At,bc as ct,af as Lt,aB as Ct,Z as O,bd as Pt,ap as q,al as L,m as y,ak as X,l as T,am as A,be as tt,an as Y,n as E,o as k,q as m,z,_ as lt,a1 as ft,ao as H,bf as jt,bg as Rt,bh as qt,A as Bt}from"../chunks/C-mJPew1.js";import{I as B,s as C}from"../chunks/B-JSUk4s.js";import{e as at,i as et,s as G,b as K}from"../chunks/B304i8RM.js";import{i as J}from"../chunks/ccoRu3TB.js";import{l as U,s as Z,a as Ut,b as rt,p as Zt}from"../chunks/Dxh44Nzj.js";import{i as st}from"../chunks/BoF7yvto.js";import{s as Dt}from"../chunks/XVpn_uUO.js";function Gt(t,a,e){V&&gt();var r=t,s=yt,i,n,o=null,x=vt()?pt:ht;function v(){i&&wt(i),o!==null&&(o.lastChild.remove(),r.before(o),o=null),i=n}mt(()=>{if(x(s,s=a())){var l=r,p=xt();p&&(o=document.createDocumentFragment(),o.append(l=bt())),n=_t(()=>e(l)),p?kt.add_callback(v):v()}}),V&&(r=$t)}const Ht=()=>performance.now(),N={tick:t=>requestAnimationFrame(t),now:()=>Ht(),tasks:new Set};function dt(){const t=N.now();N.tasks.forEach(a=>{a.c(t)||(N.tasks.delete(a),a.f())}),N.tasks.size!==0&&N.tick(dt)}function Kt(t){let a;return N.tasks.size===0&&N.tick(dt),{promise:new Promise(e=>{N.tasks.add(a={c:t,f:e})}),abort(){N.tasks.delete(a)}}}function R(t,a){ct(()=>{t.dispatchEvent(new CustomEvent(a))})}function Wt(t){if(t==="float")return"cssFloat";if(t==="offset")return"cssOffset";if(t.startsWith("--"))return t;const a=t.split("-");return a.length===1?a[0]:a[0]+a.slice(1).map(e=>e[0].toUpperCase()+e.slice(1)).join("")}function nt(t){const a={},e=t.split(";");for(const r of e){const[s,i]=r.split(":");if(!s||i===void 0)break;const n=Wt(s.trim());a[n]=i.trim()}return a}const Xt=t=>t;function ot(t,a,e,r){var s=(t&Ot)!==0,i=(t&At)!==0,n=s&&i,o=(t&Et)!==0,x=n?"both":s?"in":"out",v,l=a.inert,p=a.style.overflow,h,f;function $(){return ct(()=>v??=e()(a,r?.()??{},{direction:x}))}var d={is_global:o,in(){if(a.inert=l,!s){f?.abort(),f?.reset?.();return}i||h?.abort(),R(a,"introstart"),h=W(a,$(),f,1,()=>{R(a,"introend"),h?.abort(),h=v=void 0,a.style.overflow=p})},out(M){if(!i){M?.(),v=void 0;return}a.inert=!0,R(a,"outrostart"),f=W(a,$(),h,0,()=>{R(a,"outroend"),M?.()})},stop:()=>{h?.abort(),f?.abort()}},u=zt;if((u.transitions??=[]).push(d),s&&Nt){var _=o;if(!_){for(var g=u.parent;g&&(g.f&Mt)!==0;)for(;(g=g.parent)&&(g.f&It)===0;);_=!g||(g.f&Tt)!==0}_&&Ft(()=>{St(()=>d.in())})}}function W(t,a,e,r,s){var i=r===1;if(Lt(a)){var n,o=!1;return Ct(()=>{if(!o){var u=a({direction:i?"in":"out"});n=W(t,u,e,r,s)}}),{abort:()=>{o=!0,n?.abort()},deactivate:()=>n.deactivate(),reset:()=>n.reset(),t:()=>n.t()}}if(e?.deactivate(),!a?.duration)return s(),{abort:O,deactivate:O,reset:O,t:()=>r};const{delay:x=0,css:v,tick:l,easing:p=Xt}=a;var h=[];if(i&&e===void 0&&(l&&l(0,1),v)){var f=nt(v(0,1));h.push(f,f)}var $=()=>1-r,d=t.animate(h,{duration:x,fill:"forwards"});return d.onfinish=()=>{d.cancel();var u=e?.t()??1-r;e?.abort();var _=r-u,g=a.duration*Math.abs(_),M=[];if(g>0){var P=!1;if(v)for(var F=Math.ceil(g/16.666666666666668),S=0;S<=F;S+=1){var c=u+_*p(S/F),w=nt(v(c,1-c));M.push(w),P||=w.overflow==="hidden"}P&&(t.style.overflow="hidden"),$=()=>{var b=d.currentTime;return u+_*p(b/g)},l&&Kt(()=>{if(d.playState!=="running")return!1;var b=$();return l(b,1-b),!0})}d=t.animate(M,{duration:g,fill:"forwards"}),d.onfinish=()=>{$=()=>r,l?.(r,1-r),s()}},{abort:()=>{d&&(d.cancel(),d.effect=null,d.onfinish=O)},deactivate:()=>{s=O},reset:()=>{r===0&&l?.(1,0)},t:()=>$()}}const Yt=({url:t})=>{const{pathname:a}=t;return{pathname:a}},Ia=Object.freeze(Object.defineProperty({__proto__:null,load:Yt},Symbol.toStringTag,{value:"Module"})),Jt="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='107'%20height='128'%20viewBox='0%200%20107%20128'%3e%3ctitle%3esvelte-logo%3c/title%3e%3cpath%20d='M94.157%2022.819c-10.4-14.885-30.94-19.297-45.792-9.835L22.282%2029.608A29.92%2029.92%200%200%200%208.764%2049.65a31.5%2031.5%200%200%200%203.108%2020.231%2030%2030%200%200%200-4.477%2011.183%2031.9%2031.9%200%200%200%205.448%2024.116c10.402%2014.887%2030.942%2019.297%2045.791%209.835l26.083-16.624A29.92%2029.92%200%200%200%2098.235%2078.35a31.53%2031.53%200%200%200-3.105-20.232%2030%2030%200%200%200%204.474-11.182%2031.88%2031.88%200%200%200-5.447-24.116'%20style='fill:%23ff3e00'/%3e%3cpath%20d='M45.817%20106.582a20.72%2020.72%200%200%201-22.237-8.243%2019.17%2019.17%200%200%201-3.277-14.503%2018%2018%200%200%201%20.624-2.435l.49-1.498%201.337.981a33.6%2033.6%200%200%200%2010.203%205.098l.97.294-.09.968a5.85%205.85%200%200%200%201.052%203.878%206.24%206.24%200%200%200%206.695%202.485%205.8%205.8%200%200%200%201.603-.704L69.27%2076.28a5.43%205.43%200%200%200%202.45-3.631%205.8%205.8%200%200%200-.987-4.371%206.24%206.24%200%200%200-6.698-2.487%205.7%205.7%200%200%200-1.6.704l-9.953%206.345a19%2019%200%200%201-5.296%202.326%2020.72%2020.72%200%200%201-22.237-8.243%2019.17%2019.17%200%200%201-3.277-14.502%2017.99%2017.99%200%200%201%208.13-12.052l26.081-16.623a19%2019%200%200%201%205.3-2.329%2020.72%2020.72%200%200%201%2022.237%208.243%2019.17%2019.17%200%200%201%203.277%2014.503%2018%2018%200%200%201-.624%202.435l-.49%201.498-1.337-.98a33.6%2033.6%200%200%200-10.203-5.1l-.97-.294.09-.968a5.86%205.86%200%200%200-1.052-3.878%206.24%206.24%200%200%200-6.696-2.485%205.8%205.8%200%200%200-1.602.704L37.73%2051.72a5.42%205.42%200%200%200-2.449%203.63%205.79%205.79%200%200%200%20.986%204.372%206.24%206.24%200%200%200%206.698%202.486%205.8%205.8%200%200%200%201.602-.704l9.952-6.342a19%2019%200%200%201%205.295-2.328%2020.72%2020.72%200%200%201%2022.237%208.242%2019.17%2019.17%200%200%201%203.277%2014.503%2018%2018%200%200%201-8.13%2012.053l-26.081%2016.622a19%2019%200%200%201-5.3%202.328'%20style='fill:%23fff'/%3e%3c/svg%3e",Qt=()=>{const t=localStorage.getItem("theme");return t?t==="dark":window.matchMedia("(prefers-color-scheme: dark)").matches},Q=Pt(Qt());Q.subscribe(t=>{const a=document.documentElement;t?(a.classList.add("dark"),localStorage.setItem("theme","dark")):(a.classList.remove("dark"),localStorage.setItem("theme","light"))});function Vt(){Q.update(t=>!t)}function ta(t,a){const e=U(a,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M4 5h16"}],["path",{d:"M4 12h16"}],["path",{d:"M4 19h16"}]];B(t,Z({name:"menu"},()=>e,{get iconNode(){return r},children:(s,i)=>{var n=q(),o=L(n);C(o,a,"default",{}),y(s,n)},$$slots:{default:!0}}))}function aa(t,a){const e=U(a,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401"}]];B(t,Z({name:"moon"},()=>e,{get iconNode(){return r},children:(s,i)=>{var n=q(),o=L(n);C(o,a,"default",{}),y(s,n)},$$slots:{default:!0}}))}function ea(t,a){const e=U(a,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["circle",{cx:"12",cy:"12",r:"4"}],["path",{d:"M12 2v2"}],["path",{d:"M12 20v2"}],["path",{d:"m4.93 4.93 1.41 1.41"}],["path",{d:"m17.66 17.66 1.41 1.41"}],["path",{d:"M2 12h2"}],["path",{d:"M20 12h2"}],["path",{d:"m6.34 17.66-1.41 1.41"}],["path",{d:"m19.07 4.93-1.41 1.41"}]];B(t,Z({name:"sun"},()=>e,{get iconNode(){return r},children:(s,i)=>{var n=q(),o=L(n);C(o,a,"default",{}),y(s,n)},$$slots:{default:!0}}))}function ra(t,a){const e=U(a,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M18 6 6 18"}],["path",{d:"m6 6 12 12"}]];B(t,Z({name:"x"},()=>e,{get iconNode(){return r},children:(s,i)=>{var n=q(),o=L(n);C(o,a,"default",{}),y(s,n)},$$slots:{default:!0}}))}const sa=()=>{const t=Dt;return{page:{subscribe:t.page.subscribe},navigating:{subscribe:t.navigating.subscribe},updated:t.updated}},na={subscribe(t){return sa().page.subscribe(t)}};var oa=T('<li class="flex w-full sm:w-auto"><a> </a></li>'),ia=T("<a> </a>"),ca=T('<nav class="sticky w-full flex items-center justify-between top-0 z-50 px-[12vw] py-[1.5vh] md:py-[1vh] lg:py-[2.2vh] backdrop-blur bg-light-background-trans dark:bg-dark-background-trans smooth-trans-8"><a href="/" class="subtitle-sizing-1 font-bold text-light-primary dark:text-dark-primary pr-4 smooth-trans-8">Farhan Zia</a> <div class="flex items-center gap-[2vw]"><ul class="hidden sm:flex flex-row sm:items-center button-text-sizing text-light-text dark:text-dark-text gap-[1vw]"></ul> <div class="flex items-center gap-3"><button class="p-2 smooth-trans-2 hover:tilt-zoom-1" aria-label="Toggle theme"><!></button> <button class="sm:hidden rounded-md icon-button smooth-trans-2" aria-label="Toggle navigation menu"><!></button></div></div></nav> <div><div class="flex flex-col items-end gap-4 p-8 mt-20 button-text-sizing"></div></div>',1);function la(t,a){X(a,!1);const e=()=>rt(na,"$page",s),r=()=>rt(Q,"$darkMode",s),[s,i]=Ut(),n=[{name:"Home",href:"/"},{name:"Projects",href:"/projects"},{name:"Notes",href:"/notes"},{name:"Contact",href:"/contact"}];let o=lt(!1);J();var x=ca(),v=L(x),l=E(k(v),2),p=k(l);at(p,5,()=>n,et,(c,w)=>{var b=oa(),I=k(b);let j;var D=k(I,!0);m(I),m(b),A(ut=>{K(I,"href",z(w).href),j=G(I,1,"nav-link smooth-trans-2 hover:tilt-zoom-1",null,j,ut),H(D,z(w).name)},[()=>({active:e().url.pathname===z(w).href})]),y(c,b)}),m(p);var h=E(p,2),f=k(h),$=k(f);{var d=c=>{aa(c,{class:"text-dark-text icon-sizing-2"})},u=c=>{ea(c,{class:"text-light-text icon-sizing-2"})};st($,c=>{r()?c(d):c(u,!1)})}m(f);var _=E(f,2),g=k(_);{var M=c=>{ra(c,{class:"icon-sizing-2"})},P=c=>{ta(c,{class:"icon-sizing-2"})};st(g,c=>{z(o)?c(M):c(P,!1)})}m(_),m(h),m(l),m(v);var F=E(v,2),S=k(F);at(S,5,()=>n,et,(c,w)=>{var b=ia();let I;var j=k(b,!0);m(b),A(D=>{K(b,"href",z(w).href),I=G(b,1,"nav-link w-full text-center smooth-trans-2 tilt-zoom-0",null,I,D),H(j,z(w).name)},[()=>({active:e().url.pathname===z(w).href})]),y(c,b)}),m(S),m(F),A(()=>G(F,1,`sm:hidden flex fixed top-0 right-0 z-40 h-full backdrop-blur-sm bg-light-drawer dark:bg-dark-drawer smooth-trans-3 ${z(o)?"translate-x-0":"translate-x-full"}`)),tt("click",f,function(...c){Vt?.apply(this,c)}),tt("click",_,()=>ft(o,!z(o))),y(t,x),Y(),i()}var fa=T('<footer class="w-full flex justify-center py-[2vh] alt-text-sizing text-light-text-muted dark:text-dark-text-muted bg-light-background-trans dark:bg-dark-background-trans smooth-trans-8"><p> </p></footer>');function da(t,a){X(a,!1),J();var e=fa(),r=k(e),s=k(r);m(r),m(e),A(i=>H(s,`© ${i??""} Farhan Zia`),[()=>new Date().getFullYear()]),y(t,e),Y()}function ua(t){return t<.5?4*t*t*t:.5*Math.pow(2*t-2,3)+1}function va(t){const a=typeof t=="string"&&t.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);return a?[parseFloat(a[1]),a[2]||"px"]:[t,"px"]}function it(t,{delay:a=0,duration:e=400,easing:r=ua,amount:s=5,opacity:i=0}={}){const n=getComputedStyle(t),o=+n.opacity,x=n.filter==="none"?"":n.filter,v=o*(1-i),[l,p]=va(s);return{delay:a,duration:e,easing:r,css:(h,f)=>`opacity: ${o-v*f}; filter: ${x} blur(${f*l}${p});`}}function pa(t){return t*t*t}function ha(t){const a=t-1;return a*a*a+1}var ma=T('<link rel="icon"/>'),ga=T('<main class="min-h-screen smooth-trans-8"><!></main>'),ba=T('<div class="min-h-fit min-w-fit overflow-clip bg-light-background text-light-text dark:bg-dark-background dark:text-dark-text smooth-trans-8"><!> <!> <!></div>');function Ta(t,a){X(a,!1);const e=lt();let r=Zt(a,"data",8);const s=200,i=s+100,n=.2,o=15,l={blur:{in:{delay:i,duration:s,easing:ha,amount:o,opacity:n},out:{duration:s,easing:pa,amount:o,opacity:n}}};jt(()=>Bt(r()),()=>{ft(e,r().pathname)}),Rt(),J();var p=ba();qt(d=>{var u=ma();A(()=>K(u,"href",Jt)),y(d,u)});var h=k(p);la(h,{});var f=E(h,2);Gt(f,()=>z(e),d=>{var u=ga(),_=k(u);C(_,a,"default",{}),m(u),ot(1,u,()=>it,()=>l.blur.in),ot(2,u,()=>it,()=>l.blur.out),y(d,u)});var $=E(f,2);da($,{}),m(p),y(t,p),Y()}export{Ta as component,Ia as universal};
