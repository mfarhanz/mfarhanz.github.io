import"../chunks/DsnmJJEf.js";import"../chunks/69_IOA4Y.js";import{bq as mt,br as pt,b1 as ht,b as gt,h as at,a as _t,f as bt,g as kt,i as xt,j as $t,l as wt,U as yt,p as Nt,a5 as zt,E as Mt,bs as It,bt as Tt,e as lt,u as Ft,bu as Ot,bv as St,bw as Et,bx as ft,ae as At,aB as Lt,_ as E,ak as R,aj as L,n as w,v as J,m as F,y as A,aw as G,w as Q,o as S,q as k,t as h,x as N,$ as dt,a0 as K,by as jt,bz as Ct,F as Pt}from"../chunks/D7BtekEc.js";import{c as qt,w as Rt,s as W,d as Bt}from"../chunks/BLKUhV-T.js";import{I as B,s as j}from"../chunks/C_n8pfH2.js";import{e as et,i as rt,s as H,a as X}from"../chunks/CmBMUbUl.js";import{i as V}from"../chunks/HOQmZraW.js";import{l as U,s as D,a as Ut,b as st,p as Dt}from"../chunks/BdgVRJRH.js";import{i as nt}from"../chunks/BOVUuWgY.js";import{a as Zt}from"../chunks/C4aSWd6M.js";import{c as Gt}from"../chunks/CBbI18hv.js";import{s as Ht}from"../chunks/VeW6P9k6.js";function Kt(t,a,e){at&&_t();var r=t,s=yt,i,n,o=null,x=mt()?pt:ht;function v(){i&&Nt(i),o!==null&&(o.lastChild.remove(),r.before(o),o=null),i=n}gt(()=>{if(x(s,s=a())){var l=r,m=$t();m&&(o=document.createDocumentFragment(),o.append(l=bt())),n=kt(()=>e(l)),m?xt.add_callback(v):v()}}),at&&(r=wt)}const Wt=()=>performance.now(),z={tick:t=>requestAnimationFrame(t),now:()=>Wt(),tasks:new Set};function ut(){const t=z.now();z.tasks.forEach(a=>{a.c(t)||(z.tasks.delete(a),a.f())}),z.tasks.size!==0&&z.tick(ut)}function Xt(t){let a;return z.tasks.size===0&&z.tick(ut),{promise:new Promise(e=>{z.tasks.add(a={c:t,f:e})}),abort(){z.tasks.delete(a)}}}function q(t,a){ft(()=>{t.dispatchEvent(new CustomEvent(a))})}function Yt(t){if(t==="float")return"cssFloat";if(t==="offset")return"cssOffset";if(t.startsWith("--"))return t;const a=t.split("-");return a.length===1?a[0]:a[0]+a.slice(1).map(e=>e[0].toUpperCase()+e.slice(1)).join("")}function ot(t){const a={},e=t.split(";");for(const r of e){const[s,i]=r.split(":");if(!s||i===void 0)break;const n=Yt(s.trim());a[n]=i.trim()}return a}const Jt=t=>t;function it(t,a,e,r){var s=(t&St)!==0,i=(t&Et)!==0,n=s&&i,o=(t&Ot)!==0,x=n?"both":s?"in":"out",v,l=a.inert,m=a.style.overflow,p,f;function $(){return ft(()=>v??=e()(a,r?.()??{},{direction:x}))}var d={is_global:o,in(){if(a.inert=l,!s){f?.abort(),f?.reset?.();return}i||p?.abort(),q(a,"introstart"),p=Y(a,$(),f,1,()=>{q(a,"introend"),p?.abort(),p=v=void 0,a.style.overflow=m})},out(I){if(!i){I?.(),v=void 0;return}a.inert=!0,q(a,"outrostart"),f=Y(a,$(),p,0,()=>{q(a,"outroend"),I?.()})},stop:()=>{p?.abort(),f?.abort()}},u=zt;if((u.transitions??=[]).push(d),s&&qt){var b=o;if(!b){for(var g=u.parent;g&&(g.f&Mt)!==0;)for(;(g=g.parent)&&(g.f&It)===0;);b=!g||(g.f&Tt)!==0}b&&lt(()=>{Ft(()=>d.in())})}}function Y(t,a,e,r,s){var i=r===1;if(At(a)){var n,o=!1;return Lt(()=>{if(!o){var u=a({direction:i?"in":"out"});n=Y(t,u,e,r,s)}}),{abort:()=>{o=!0,n?.abort()},deactivate:()=>n.deactivate(),reset:()=>n.reset(),t:()=>n.t()}}if(e?.deactivate(),!a?.duration)return s(),{abort:E,deactivate:E,reset:E,t:()=>r};const{delay:x=0,css:v,tick:l,easing:m=Jt}=a;var p=[];if(i&&e===void 0&&(l&&l(0,1),v)){var f=ot(v(0,1));p.push(f,f)}var $=()=>1-r,d=t.animate(p,{duration:x,fill:"forwards"});return d.onfinish=()=>{d.cancel();var u=e?.t()??1-r;e?.abort();var b=r-u,g=a.duration*Math.abs(b),I=[];if(g>0){var C=!1;if(v)for(var M=Math.ceil(g/16.666666666666668),O=0;O<=M;O+=1){var c=u+b*m(O/M),y=ot(v(c,1-c));I.push(y),C||=y.overflow==="hidden"}C&&(t.style.overflow="hidden"),$=()=>{var _=d.currentTime;return u+b*m(_/g)},l&&Xt(()=>{if(d.playState!=="running")return!1;var _=$();return l(_,1-_),!0})}d=t.animate(I,{duration:g,fill:"forwards"}),d.onfinish=()=>{$=()=>r,l?.(r,1-r),s()}},{abort:()=>{d&&(d.cancel(),d.effect=null,d.onfinish=E)},deactivate:()=>{s=E},reset:()=>{r===0&&l?.(1,0)},t:()=>$()}}const Qt=({url:t})=>{const{pathname:a}=t;return{pathname:a}},Ea=Object.freeze(Object.defineProperty({__proto__:null,load:Qt},Symbol.toStringTag,{value:"Module"})),Vt="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='107'%20height='128'%20viewBox='0%200%20107%20128'%3e%3ctitle%3esvelte-logo%3c/title%3e%3cpath%20d='M94.157%2022.819c-10.4-14.885-30.94-19.297-45.792-9.835L22.282%2029.608A29.92%2029.92%200%200%200%208.764%2049.65a31.5%2031.5%200%200%200%203.108%2020.231%2030%2030%200%200%200-4.477%2011.183%2031.9%2031.9%200%200%200%205.448%2024.116c10.402%2014.887%2030.942%2019.297%2045.791%209.835l26.083-16.624A29.92%2029.92%200%200%200%2098.235%2078.35a31.53%2031.53%200%200%200-3.105-20.232%2030%2030%200%200%200%204.474-11.182%2031.88%2031.88%200%200%200-5.447-24.116'%20style='fill:%23ff3e00'/%3e%3cpath%20d='M45.817%20106.582a20.72%2020.72%200%200%201-22.237-8.243%2019.17%2019.17%200%200%201-3.277-14.503%2018%2018%200%200%201%20.624-2.435l.49-1.498%201.337.981a33.6%2033.6%200%200%200%2010.203%205.098l.97.294-.09.968a5.85%205.85%200%200%200%201.052%203.878%206.24%206.24%200%200%200%206.695%202.485%205.8%205.8%200%200%200%201.603-.704L69.27%2076.28a5.43%205.43%200%200%200%202.45-3.631%205.8%205.8%200%200%200-.987-4.371%206.24%206.24%200%200%200-6.698-2.487%205.7%205.7%200%200%200-1.6.704l-9.953%206.345a19%2019%200%200%201-5.296%202.326%2020.72%2020.72%200%200%201-22.237-8.243%2019.17%2019.17%200%200%201-3.277-14.502%2017.99%2017.99%200%200%201%208.13-12.052l26.081-16.623a19%2019%200%200%201%205.3-2.329%2020.72%2020.72%200%200%201%2022.237%208.243%2019.17%2019.17%200%200%201%203.277%2014.503%2018%2018%200%200%201-.624%202.435l-.49%201.498-1.337-.98a33.6%2033.6%200%200%200-10.203-5.1l-.97-.294.09-.968a5.86%205.86%200%200%200-1.052-3.878%206.24%206.24%200%200%200-6.696-2.485%205.8%205.8%200%200%200-1.602.704L37.73%2051.72a5.42%205.42%200%200%200-2.449%203.63%205.79%205.79%200%200%200%20.986%204.372%206.24%206.24%200%200%200%206.698%202.486%205.8%205.8%200%200%200%201.602-.704l9.952-6.342a19%2019%200%200%201%205.295-2.328%2020.72%2020.72%200%200%201%2022.237%208.242%2019.17%2019.17%200%200%201%203.277%2014.503%2018%2018%200%200%201-8.13%2012.053l-26.081%2016.622a19%2019%200%200%201-5.3%202.328'%20style='fill:%23fff'/%3e%3c/svg%3e",ta=()=>{const t=localStorage.getItem("theme");return t?t==="dark":window.matchMedia("(prefers-color-scheme: dark)").matches},tt=Rt(ta());tt.subscribe(t=>{const a=document.documentElement;t?(a.classList.add("dark"),localStorage.setItem("theme","dark")):(a.classList.remove("dark"),localStorage.setItem("theme","light"))});function aa(){tt.update(t=>!t)}function ea(t,a){const e=U(a,["children","$$slots","$$events","$$legacy"]);/**
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
 */const r=[["path",{d:"M4 5h16"}],["path",{d:"M4 12h16"}],["path",{d:"M4 19h16"}]];B(t,D({name:"menu"},()=>e,{get iconNode(){return r},children:(s,i)=>{var n=R(),o=L(n);j(o,a,"default",{}),w(s,n)},$$slots:{default:!0}}))}function ra(t,a){const e=U(a,["children","$$slots","$$events","$$legacy"]);/**
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
 */const r=[["path",{d:"M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401"}]];B(t,D({name:"moon"},()=>e,{get iconNode(){return r},children:(s,i)=>{var n=R(),o=L(n);j(o,a,"default",{}),w(s,n)},$$slots:{default:!0}}))}function sa(t,a){const e=U(a,["children","$$slots","$$events","$$legacy"]);/**
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
 */const r=[["circle",{cx:"12",cy:"12",r:"4"}],["path",{d:"M12 2v2"}],["path",{d:"M12 20v2"}],["path",{d:"m4.93 4.93 1.41 1.41"}],["path",{d:"m17.66 17.66 1.41 1.41"}],["path",{d:"M2 12h2"}],["path",{d:"M20 12h2"}],["path",{d:"m6.34 17.66-1.41 1.41"}],["path",{d:"m19.07 4.93-1.41 1.41"}]];B(t,D({name:"sun"},()=>e,{get iconNode(){return r},children:(s,i)=>{var n=R(),o=L(n);j(o,a,"default",{}),w(s,n)},$$slots:{default:!0}}))}function na(t,a){const e=U(a,["children","$$slots","$$events","$$legacy"]);/**
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
 */const r=[["path",{d:"M18 6 6 18"}],["path",{d:"m6 6 12 12"}]];B(t,D({name:"x"},()=>e,{get iconNode(){return r},children:(s,i)=>{var n=R(),o=L(n);j(o,a,"default",{}),w(s,n)},$$slots:{default:!0}}))}const oa=()=>{const t=Ht;return{page:{subscribe:t.page.subscribe},navigating:{subscribe:t.navigating.subscribe},updated:t.updated}},ia={subscribe(t){return oa().page.subscribe(t)}};var ca=F('<li class="flex w-full sm:w-auto"><a> </a></li>'),la=F("<a> </a>"),fa=F('<nav class="sticky w-full flex items-center justify-between top-0 z-50 px-[12vw] py-[1.5vh] md:py-[1vh] lg:py-[2.2vh] backdrop-blur bg-light-background-trans dark:bg-dark-background-trans smooth-trans-8"><a href="/" class="font-bold subtitle-sizing-1 site-title-font pr-4 text-light-primary dark:text-dark-primary smooth-trans-8">Farhan Zia</a> <div class="flex items-center gap-[2vw]"><ul class="hidden sm:flex flex-row sm:items-center button-text-sizing text-light-text dark:text-dark-text gap-[1vw]"></ul> <div class="flex items-center gap-3"><button class="p-2 smooth-trans-2 hover:tilt-zoom-1" aria-label="Toggle theme"><!></button> <button id="menu-toggle" class="sm:hidden rounded-md icon-button smooth-trans-2" aria-label="Toggle navigation menu"><!></button></div></div></nav> <div><div class="flex flex-col items-end gap-4 p-8 mt-20 button-text-sizing text-light-text dark:text-dark-text"></div></div>',1);function da(t,a){J(a,!1);const e=()=>st(ia,"$page",s),r=()=>st(tt,"$darkMode",s),[s,i]=Ut(),n=[{name:"Home",href:"/"},{name:"Projects",href:"/projects"},{name:"Notes",href:"/notes"},{name:"Contact",href:"/contact"}];let o=dt(!1);V();var x=fa(),v=L(x),l=S(k(v),2),m=k(l);et(m,5,()=>n,rt,(c,y)=>{var _=ca(),T=k(_);let P;var Z=k(T,!0);h(T),h(_),A(vt=>{X(T,"href",N(y).href),P=H(T,1,"nav-link button-text-font smooth-trans-2 hover:tilt-zoom-1",null,P,vt),W(Z,N(y).name)},[()=>({active:e().url.pathname===N(y).href})]),w(c,_)}),h(m);var p=S(m,2),f=k(p),$=k(f);{var d=c=>{ra(c,{class:"text-dark-text icon-sizing-2"})},u=c=>{sa(c,{class:"text-light-text icon-sizing-2"})};nt($,c=>{r()?c(d):c(u,!1)})}h(f);var b=S(f,2),g=k(b);{var I=c=>{na(c,{class:"icon-sizing-2"})},C=c=>{ea(c,{class:"icon-sizing-2"})};nt(g,c=>{N(o)?c(I):c(C,!1)})}h(b),h(p),h(l),h(v);var M=S(v,2),O=k(M);et(O,5,()=>n,rt,(c,y)=>{var _=la();let T;var P=k(_,!0);h(_),A(Z=>{X(_,"href",N(y).href),T=H(_,1,"nav-link button-text-font w-full text-center smooth-trans-2 tilt-zoom-0",null,T,Z),W(P,N(y).name)},[()=>({active:e().url.pathname===N(y).href})]),w(c,_)}),h(O),h(M),Zt(M,c=>Gt?.(c)),lt(()=>G("click_outside",M,()=>K(o,!1))),A(()=>H(M,1,`sm:hidden flex fixed top-0 right-0 z-40 h-full backdrop-blur-sm bg-light-drawer dark:bg-dark-drawer smooth-trans-3 ${N(o)?"translate-x-0":"translate-x-full"}`)),G("click",f,function(...c){aa?.apply(this,c)}),G("click",b,()=>K(o,!N(o))),w(t,x),Q(),i()}var ua=F('<footer class="w-full flex justify-center py-[2vh] alt-text-sizing text-light-text-muted dark:text-dark-text-muted bg-light-background-trans dark:bg-dark-background-trans smooth-trans-8"><p> </p></footer>');function va(t,a){J(a,!1),V();var e=ua(),r=k(e),s=k(r);h(r),h(e),A(i=>W(s,`© ${i??""} Farhan Zia`),[()=>new Date().getFullYear()]),w(t,e),Q()}function ma(t){return t<.5?4*t*t*t:.5*Math.pow(2*t-2,3)+1}function pa(t){const a=typeof t=="string"&&t.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);return a?[parseFloat(a[1]),a[2]||"px"]:[t,"px"]}function ct(t,{delay:a=0,duration:e=400,easing:r=ma,amount:s=5,opacity:i=0}={}){const n=getComputedStyle(t),o=+n.opacity,x=n.filter==="none"?"":n.filter,v=o*(1-i),[l,m]=pa(s);return{delay:a,duration:e,easing:r,css:(p,f)=>`opacity: ${o-v*f}; filter: ${x} blur(${f*l}${m});`}}function ha(t){return t*t*t}function ga(t){const a=t-1;return a*a*a+1}var _a=F('<link rel="icon"/>'),ba=F('<main class="min-h-screen smooth-trans-8"><!></main>'),ka=F('<div class="min-h-fit min-w-fit overflow-clip bg-light-background text-light-text dark:bg-dark-background dark:text-dark-text smooth-trans-8"><!> <!> <!></div>');function Aa(t,a){J(a,!1);const e=dt();let r=Dt(a,"data",8);const s=200,i=s+100,n=.2,o=15,l={blur:{in:{delay:i,duration:s,easing:ga,amount:o,opacity:n},out:{duration:s,easing:ha,amount:o,opacity:n}}};jt(()=>Pt(r()),()=>{K(e,r().pathname)}),Ct(),V();var m=ka();Bt(d=>{var u=_a();A(()=>X(u,"href",Vt)),w(d,u)});var p=k(m);da(p,{});var f=S(p,2);Kt(f,()=>N(e),d=>{var u=ba(),b=k(u);j(b,a,"default",{}),h(u),it(1,u,()=>ct,()=>l.blur.in),it(2,u,()=>ct,()=>l.blur.out),w(d,u)});var $=S(f,2);va($,{}),h(m),w(t,m),Q()}export{Aa as component,Ea as universal};
