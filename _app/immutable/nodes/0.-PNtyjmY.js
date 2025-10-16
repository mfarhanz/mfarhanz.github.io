import"../chunks/DsnmJJEf.js";import"../chunks/69_IOA4Y.js";import{aW as pt,aX as ht,am as gt,b as _t,h as et,a as bt,e as kt,f as xt,g as $t,i as yt,k as wt,U as Nt,p as Mt,aD as J,v as ft,a8 as zt,aY as It,E as Tt,aZ as Ft,a_ as Ot,a$ as St,b0 as Et,b1 as At,b2 as dt,ah as Lt,aN as Ct,a1 as E,at as q,an as L,m as y,t as Q,l as F,x as A,ar as W,u as V,n as S,o as k,q as h,w as N,a2 as ut,a3 as Y,y as G,b3 as Pt,b4 as jt,b5 as Rt,F as qt}from"../chunks/Bdkm79w8.js";import{I as D,s as C}from"../chunks/DLzvJlPB.js";import{s as X,a as H}from"../chunks/BLn4qF3I.js";import{i as tt}from"../chunks/CBNeH9sI.js";import{l as U,s as Z,a as Dt,b as rt,p as Ut}from"../chunks/BS08YxWH.js";import{i as st}from"../chunks/CmsqGR7j.js";import{e as nt,i as ot,c as Zt}from"../chunks/Cz0llH_K.js";import{w as Bt}from"../chunks/AGnON8J6.js";import{s as Wt}from"../chunks/Bu_GSd_j.js";function Xt(t,a,r){et&&bt();var e=t,s=Nt,i,n,o=null,x=pt()?ht:gt;function v(){i&&Mt(i),o!==null&&(o.lastChild.remove(),e.before(o),o=null),i=n}_t(()=>{if(x(s,s=a())){var l=e,m=yt();m&&(o=document.createDocumentFragment(),o.append(l=kt())),n=xt(()=>r(l)),m?$t.add_callback(v):v()}}),et&&(e=wt)}function Yt(t,a,r){J(()=>{var e=ft(()=>a(t,r?.())||{});if(e?.destroy)return()=>e.destroy()})}const Gt=()=>performance.now(),M={tick:t=>requestAnimationFrame(t),now:()=>Gt(),tasks:new Set};function vt(){const t=M.now();M.tasks.forEach(a=>{a.c(t)||(M.tasks.delete(a),a.f())}),M.tasks.size!==0&&M.tick(vt)}function Ht(t){let a;return M.tasks.size===0&&M.tick(vt),{promise:new Promise(r=>{M.tasks.add(a={c:t,f:r})}),abort(){M.tasks.delete(a)}}}function R(t,a){dt(()=>{t.dispatchEvent(new CustomEvent(a))})}function Kt(t){if(t==="float")return"cssFloat";if(t==="offset")return"cssOffset";if(t.startsWith("--"))return t;const a=t.split("-");return a.length===1?a[0]:a[0]+a.slice(1).map(r=>r[0].toUpperCase()+r.slice(1)).join("")}function it(t){const a={},r=t.split(";");for(const e of r){const[s,i]=e.split(":");if(!s||i===void 0)break;const n=Kt(s.trim());a[n]=i.trim()}return a}const Jt=t=>t;function ct(t,a,r,e){var s=(t&Et)!==0,i=(t&At)!==0,n=s&&i,o=(t&St)!==0,x=n?"both":s?"in":"out",v,l=a.inert,m=a.style.overflow,p,f;function $(){return dt(()=>v??=r()(a,e?.()??{},{direction:x}))}var d={is_global:o,in(){if(a.inert=l,!s){f?.abort(),f?.reset?.();return}i||p?.abort(),R(a,"introstart"),p=K(a,$(),f,1,()=>{R(a,"introend"),p?.abort(),p=v=void 0,a.style.overflow=m})},out(I){if(!i){I?.(),v=void 0;return}a.inert=!0,R(a,"outrostart"),f=K(a,$(),p,0,()=>{R(a,"outroend"),I?.()})},stop:()=>{p?.abort(),f?.abort()}},u=zt;if((u.transitions??=[]).push(d),s&&It){var b=o;if(!b){for(var g=u.parent;g&&(g.f&Tt)!==0;)for(;(g=g.parent)&&(g.f&Ft)===0;);b=!g||(g.f&Ot)!==0}b&&J(()=>{ft(()=>d.in())})}}function K(t,a,r,e,s){var i=e===1;if(Lt(a)){var n,o=!1;return Ct(()=>{if(!o){var u=a({direction:i?"in":"out"});n=K(t,u,r,e,s)}}),{abort:()=>{o=!0,n?.abort()},deactivate:()=>n.deactivate(),reset:()=>n.reset(),t:()=>n.t()}}if(r?.deactivate(),!a?.duration)return s(),{abort:E,deactivate:E,reset:E,t:()=>e};const{delay:x=0,css:v,tick:l,easing:m=Jt}=a;var p=[];if(i&&r===void 0&&(l&&l(0,1),v)){var f=it(v(0,1));p.push(f,f)}var $=()=>1-e,d=t.animate(p,{duration:x,fill:"forwards"});return d.onfinish=()=>{d.cancel();var u=r?.t()??1-e;r?.abort();var b=e-u,g=a.duration*Math.abs(b),I=[];if(g>0){var P=!1;if(v)for(var z=Math.ceil(g/16.666666666666668),O=0;O<=z;O+=1){var c=u+b*m(O/z),w=it(v(c,1-c));I.push(w),P||=w.overflow==="hidden"}P&&(t.style.overflow="hidden"),$=()=>{var _=d.currentTime;return u+b*m(_/g)},l&&Ht(()=>{if(d.playState!=="running")return!1;var _=$();return l(_,1-_),!0})}d=t.animate(I,{duration:g,fill:"forwards"}),d.onfinish=()=>{$=()=>e,l?.(e,1-e),s()}},{abort:()=>{d&&(d.cancel(),d.effect=null,d.onfinish=E)},deactivate:()=>{s=E},reset:()=>{e===0&&l?.(1,0)},t:()=>$()}}const Qt=({url:t})=>{const{pathname:a}=t;return{pathname:a}},Sa=Object.freeze(Object.defineProperty({__proto__:null,load:Qt},Symbol.toStringTag,{value:"Module"})),Vt="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='107'%20height='128'%20viewBox='0%200%20107%20128'%3e%3ctitle%3esvelte-logo%3c/title%3e%3cpath%20d='M94.157%2022.819c-10.4-14.885-30.94-19.297-45.792-9.835L22.282%2029.608A29.92%2029.92%200%200%200%208.764%2049.65a31.5%2031.5%200%200%200%203.108%2020.231%2030%2030%200%200%200-4.477%2011.183%2031.9%2031.9%200%200%200%205.448%2024.116c10.402%2014.887%2030.942%2019.297%2045.791%209.835l26.083-16.624A29.92%2029.92%200%200%200%2098.235%2078.35a31.53%2031.53%200%200%200-3.105-20.232%2030%2030%200%200%200%204.474-11.182%2031.88%2031.88%200%200%200-5.447-24.116'%20style='fill:%23ff3e00'/%3e%3cpath%20d='M45.817%20106.582a20.72%2020.72%200%200%201-22.237-8.243%2019.17%2019.17%200%200%201-3.277-14.503%2018%2018%200%200%201%20.624-2.435l.49-1.498%201.337.981a33.6%2033.6%200%200%200%2010.203%205.098l.97.294-.09.968a5.85%205.85%200%200%200%201.052%203.878%206.24%206.24%200%200%200%206.695%202.485%205.8%205.8%200%200%200%201.603-.704L69.27%2076.28a5.43%205.43%200%200%200%202.45-3.631%205.8%205.8%200%200%200-.987-4.371%206.24%206.24%200%200%200-6.698-2.487%205.7%205.7%200%200%200-1.6.704l-9.953%206.345a19%2019%200%200%201-5.296%202.326%2020.72%2020.72%200%200%201-22.237-8.243%2019.17%2019.17%200%200%201-3.277-14.502%2017.99%2017.99%200%200%201%208.13-12.052l26.081-16.623a19%2019%200%200%201%205.3-2.329%2020.72%2020.72%200%200%201%2022.237%208.243%2019.17%2019.17%200%200%201%203.277%2014.503%2018%2018%200%200%201-.624%202.435l-.49%201.498-1.337-.98a33.6%2033.6%200%200%200-10.203-5.1l-.97-.294.09-.968a5.86%205.86%200%200%200-1.052-3.878%206.24%206.24%200%200%200-6.696-2.485%205.8%205.8%200%200%200-1.602.704L37.73%2051.72a5.42%205.42%200%200%200-2.449%203.63%205.79%205.79%200%200%200%20.986%204.372%206.24%206.24%200%200%200%206.698%202.486%205.8%205.8%200%200%200%201.602-.704l9.952-6.342a19%2019%200%200%201%205.295-2.328%2020.72%2020.72%200%200%201%2022.237%208.242%2019.17%2019.17%200%200%201%203.277%2014.503%2018%2018%200%200%201-8.13%2012.053l-26.081%2016.622a19%2019%200%200%201-5.3%202.328'%20style='fill:%23fff'/%3e%3c/svg%3e",ta=()=>{const t=localStorage.getItem("theme");return t?t==="dark":window.matchMedia("(prefers-color-scheme: dark)").matches},at=Bt(ta());at.subscribe(t=>{const a=document.documentElement;t?(a.classList.add("dark"),localStorage.setItem("theme","dark")):(a.classList.remove("dark"),localStorage.setItem("theme","light"))});function aa(){at.update(t=>!t)}function ea(t,a){const r=U(a,["children","$$slots","$$events","$$legacy"]);/**
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
 */const e=[["path",{d:"M4 5h16"}],["path",{d:"M4 12h16"}],["path",{d:"M4 19h16"}]];D(t,Z({name:"menu"},()=>r,{get iconNode(){return e},children:(s,i)=>{var n=q(),o=L(n);C(o,a,"default",{}),y(s,n)},$$slots:{default:!0}}))}function ra(t,a){const r=U(a,["children","$$slots","$$events","$$legacy"]);/**
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
 */const e=[["path",{d:"M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401"}]];D(t,Z({name:"moon"},()=>r,{get iconNode(){return e},children:(s,i)=>{var n=q(),o=L(n);C(o,a,"default",{}),y(s,n)},$$slots:{default:!0}}))}function sa(t,a){const r=U(a,["children","$$slots","$$events","$$legacy"]);/**
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
 */const e=[["circle",{cx:"12",cy:"12",r:"4"}],["path",{d:"M12 2v2"}],["path",{d:"M12 20v2"}],["path",{d:"m4.93 4.93 1.41 1.41"}],["path",{d:"m17.66 17.66 1.41 1.41"}],["path",{d:"M2 12h2"}],["path",{d:"M20 12h2"}],["path",{d:"m6.34 17.66-1.41 1.41"}],["path",{d:"m19.07 4.93-1.41 1.41"}]];D(t,Z({name:"sun"},()=>r,{get iconNode(){return e},children:(s,i)=>{var n=q(),o=L(n);C(o,a,"default",{}),y(s,n)},$$slots:{default:!0}}))}function na(t,a){const r=U(a,["children","$$slots","$$events","$$legacy"]);/**
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
 */const e=[["path",{d:"M18 6 6 18"}],["path",{d:"m6 6 12 12"}]];D(t,Z({name:"x"},()=>r,{get iconNode(){return e},children:(s,i)=>{var n=q(),o=L(n);C(o,a,"default",{}),y(s,n)},$$slots:{default:!0}}))}const oa=()=>{const t=Wt;return{page:{subscribe:t.page.subscribe},navigating:{subscribe:t.navigating.subscribe},updated:t.updated}},ia={subscribe(t){return oa().page.subscribe(t)}};var ca=F('<li class="flex w-full sm:w-auto"><a> </a></li>'),la=F("<a> </a>"),fa=F('<nav class="sticky w-full flex items-center justify-between top-0 z-50 px-[12vw] py-[1.5vh] md:py-[1vh] lg:py-[2.2vh] backdrop-blur bg-light-background-trans dark:bg-dark-background-trans smooth-trans-8"><a href="/" class="font-bold subtitle-sizing-1 site-title-font pr-4 text-light-primary dark:text-dark-primary smooth-trans-8">Farhan Zia</a> <div class="flex items-center gap-[2vw]"><ul class="hidden sm:flex flex-row sm:items-center button-text-sizing text-light-text dark:text-dark-text gap-[1vw]"></ul> <div class="flex items-center gap-3"><button class="p-2 smooth-trans-2 hover:tilt-zoom-1" aria-label="Toggle theme"><!></button> <button id="menu-toggle" class="sm:hidden rounded-md icon-button smooth-trans-2" aria-label="Toggle navigation menu"><!></button></div></div></nav> <div><div class="flex flex-col items-end gap-4 p-8 mt-20 button-text-sizing text-light-text dark:text-dark-text"></div></div>',1);function da(t,a){Q(a,!1);const r=()=>rt(ia,"$page",s),e=()=>rt(at,"$darkMode",s),[s,i]=Dt(),n=[{name:"Home",href:"/"},{name:"Projects",href:"/projects"},{name:"Notes",href:"/notes"},{name:"Contact",href:"/contact"}];let o=ut(!1);tt();var x=fa(),v=L(x),l=S(k(v),2),m=k(l);nt(m,5,()=>n,ot,(c,w)=>{var _=ca(),T=k(_);let j;var B=k(T,!0);h(T),h(_),A(mt=>{H(T,"href",N(w).href),j=X(T,1,"nav-link button-text-font smooth-trans-2 hover:tilt-zoom-1",null,j,mt),G(B,N(w).name)},[()=>({active:r().url.pathname===N(w).href})]),y(c,_)}),h(m);var p=S(m,2),f=k(p),$=k(f);{var d=c=>{ra(c,{class:"text-dark-text icon-sizing-2"})},u=c=>{sa(c,{class:"text-light-text icon-sizing-2"})};st($,c=>{e()?c(d):c(u,!1)})}h(f);var b=S(f,2),g=k(b);{var I=c=>{na(c,{class:"icon-sizing-2"})},P=c=>{ea(c,{class:"icon-sizing-2"})};st(g,c=>{N(o)?c(I):c(P,!1)})}h(b),h(p),h(l),h(v);var z=S(v,2),O=k(z);nt(O,5,()=>n,ot,(c,w)=>{var _=la();let T;var j=k(_,!0);h(_),A(B=>{H(_,"href",N(w).href),T=X(_,1,"nav-link button-text-font w-full text-center smooth-trans-2 tilt-zoom-0",null,T,B),G(j,N(w).name)},[()=>({active:r().url.pathname===N(w).href})]),y(c,_)}),h(O),h(z),Yt(z,c=>Zt?.(c)),J(()=>W("click_outside",z,()=>Y(o,!1))),A(()=>X(z,1,`sm:hidden flex fixed top-0 right-0 z-40 h-full backdrop-blur-sm bg-light-drawer dark:bg-dark-drawer smooth-trans-3 ${N(o)?"translate-x-0":"translate-x-full"}`)),W("click",f,function(...c){aa?.apply(this,c)}),W("click",b,()=>Y(o,!N(o))),y(t,x),V(),i()}var ua=F('<footer class="w-full flex justify-center py-[2vh] alt-text-sizing text-light-text-muted dark:text-dark-text-muted bg-light-background-trans dark:bg-dark-background-trans smooth-trans-8"><p> </p></footer>');function va(t,a){Q(a,!1),tt();var r=ua(),e=k(r),s=k(e);h(e),h(r),A(i=>G(s,`© ${i??""} Farhan Zia`),[()=>new Date().getFullYear()]),y(t,r),V()}function ma(t){return t<.5?4*t*t*t:.5*Math.pow(2*t-2,3)+1}function pa(t){const a=typeof t=="string"&&t.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);return a?[parseFloat(a[1]),a[2]||"px"]:[t,"px"]}function lt(t,{delay:a=0,duration:r=400,easing:e=ma,amount:s=5,opacity:i=0}={}){const n=getComputedStyle(t),o=+n.opacity,x=n.filter==="none"?"":n.filter,v=o*(1-i),[l,m]=pa(s);return{delay:a,duration:r,easing:e,css:(p,f)=>`opacity: ${o-v*f}; filter: ${x} blur(${f*l}${m});`}}function ha(t){return t*t*t}function ga(t){const a=t-1;return a*a*a+1}var _a=F('<link rel="icon"/>'),ba=F('<main class="min-h-screen smooth-trans-8"><!></main>'),ka=F('<div class="min-h-fit min-w-fit overflow-clip bg-light-background text-light-text dark:bg-dark-background dark:text-dark-text smooth-trans-8"><!> <!> <!></div>');function Ea(t,a){Q(a,!1);const r=ut();let e=Ut(a,"data",8);const s=200,i=s+100,n=.2,o=15,l={blur:{in:{delay:i,duration:s,easing:ga,amount:o,opacity:n},out:{duration:s,easing:ha,amount:o,opacity:n}}};Pt(()=>qt(e()),()=>{Y(r,e().pathname)}),jt(),tt();var m=ka();Rt(d=>{var u=_a();A(()=>H(u,"href",Vt)),y(d,u)});var p=k(m);da(p,{});var f=S(p,2);Xt(f,()=>N(r),d=>{var u=ba(),b=k(u);C(b,a,"default",{}),h(u),ct(1,u,()=>lt,()=>l.blur.in),ct(2,u,()=>lt,()=>l.blur.out),y(d,u)});var $=S(f,2);va($,{}),h(m),y(t,m),V()}export{Ea as component,Sa as universal};
