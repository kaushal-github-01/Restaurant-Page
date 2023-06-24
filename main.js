(()=>{"use strict";const e=function(){const e=document.getElementById("content"),t=document.createElement("img");t.src="./images/body-bg.jpg",t.alt="bodyBgImg",t.id="bodyBgImg",e.appendChild(t);const n=document.createElement("header"),c=document.createElement("img");c.src="https://global-uploads.webflow.com/5e157548d6f7910beea4e2d6/63bec227e3a0e22bde8ac2b5_Screen%20Shot%202023-01-11%20at%208.16.34%20PM.png",c.alt="logoImg",c.id="logo",n.appendChild(c);const d=["Home","Menu","About","Login"],o=["","","",""];for(let e=0;e<d.length;e++){const t=document.createElement("a");t.href=o[e],t.textContent=d[e],n.appendChild(t)}const a=document.createElement("section");a.setAttribute("class","homepage");const l=document.createElement("h1");l.textContent="Welcome to The Savory Bistro!",a.appendChild(l);const i=document.createElement("footer");i.textContent="© The Dream Industries",e.appendChild(n),e.appendChild(a),e.appendChild(i)},t=function(){const e=document.getElementById("content"),t=document.createElement("img");t.src="./images/body-bg.jpg",t.alt="bodyBgImg",t.id="bodyBgImg",e.appendChild(t);const n=document.createElement("header"),c=document.createElement("img");c.src="https://global-uploads.webflow.com/5e157548d6f7910beea4e2d6/63bec227e3a0e22bde8ac2b5_Screen%20Shot%202023-01-11%20at%208.16.34%20PM.png",c.alt="logoImg",c.id="logo",n.appendChild(c);const d=["Home","Menu","About","Login"],o=["","","",""];for(let e=0;e<d.length;e++){const t=document.createElement("a");t.href=o[e],t.textContent=d[e],n.appendChild(t)}const a=document.createElement("section");a.setAttribute("class","menu");const l=document.createElement("div");l.setAttribute("class","starters");const i=document.createElement("h3");i.textContent="Starters",l.appendChild(i);const r=document.createElement("ul");l.appendChild(r);const m=document.createElement("li");r.appendChild(m);const s=document.createElement("h4");s.textContent="Bruschetta",m.appendChild(s);const p=document.createElement("p");p.textContent="Tomatoes, basil, garlic, and olive oil on toasted bread",m.appendChild(p);const h=document.createElement("li");r.appendChild(h);const u=document.createElement("h4");u.textContent="Caprese Salad",h.appendChild(u);const C=document.createElement("p");C.textContent="Buffalo mozzarella, tomatoes, basil, and balsamic glaze",h.appendChild(C);const E=document.createElement("li");r.appendChild(E);const g=document.createElement("h4");g.textContent="Spinach and Artichoke Dip",E.appendChild(g);const b=document.createElement("p");b.textContent="Creamy spinach and artichoke dip served with toasted baguette",E.appendChild(b);const f=document.createElement("div");f.setAttribute("class","main_courses");const v=document.createElement("h3");v.textContent="Main Courses",f.appendChild(v);const x=document.createElement("ul");f.appendChild(x);const k=document.createElement("li");x.appendChild(k);const L=document.createElement("h4");L.textContent="Grilled Salmon",k.appendChild(L);const w=document.createElement("p");w.textContent="Grilled salmon fillet with lemon butter sauce, served with roasted vegetables",k.appendChild(w);const y=document.createElement("li");x.appendChild(y);const B=document.createElement("h4");B.textContent="Filet Mignon",y.appendChild(B);const D=document.createElement("p");D.textContent="Tender filet mignon steak cooked to perfection, served with mashed potatoes and grilled asparagus",y.appendChild(D);const I=document.createElement("li");x.appendChild(I);const M=document.createElement("h4");M.textContent="Eggplant Parmesan",I.appendChild(M);const T=document.createElement("p");T.textContent="Breaded and baked eggplant topped with marinara sauce, mozzarella, and Parmesan cheese, served with spaghetti",I.appendChild(T);const S=document.createElement("div");S.setAttribute("class","desserts");const A=document.createElement("h3");A.textContent="Desserts",S.appendChild(A);const z=document.createElement("ul");S.appendChild(z);const H=document.createElement("li");z.appendChild(H);const P=document.createElement("h4");P.textContent="Tiramisu",H.appendChild(P);const _=document.createElement("p");_.textContent="Layers of espresso-soaked ladyfingers, mascarpone cream, and cocoa",H.appendChild(_);const j=document.createElement("li");z.appendChild(j);const G=document.createElement("h4");G.textContent="Chocolate Lava Cake",j.appendChild(G);const W=document.createElement("p");W.textContent="Warm chocolate cake with a molten chocolate center, served with vanilla ice cream",j.appendChild(W);const F=document.createElement("li");z.appendChild(F);const q=document.createElement("h4");q.textContent="Crème Brûlée",F.appendChild(q);const J=document.createElement("p");J.textContent="Classic vanilla custard with a caramelized sugar crust",F.appendChild(J),a.appendChild(l),a.appendChild(f),a.appendChild(S);const K=document.createElement("footer");K.textContent="© The Dream Industries",e.appendChild(n),e.appendChild(a),e.appendChild(K)};e();let n="homepage";const c=content.children[1].children[1],d=content.children[1].children[2];function o(){const c=content.children[1].children[1],d=content.children[1].children[2],a=content.children[1].children[3],l=content.children[1].children[4];c.addEventListener("click",(t=>{t.preventDefault(),"homepage"!==n&&(n="homepage",content.innerHTML="",e(),o())})),d.addEventListener("click",(e=>{e.preventDefault(),"menu"!==n&&(n="menu",content.innerHTML="",t(),o())})),a.addEventListener("click",(e=>{e.preventDefault()})),l.addEventListener("click",(e=>{e.preventDefault()}))}content.children[1].children[3],content.children[1].children[4],c.addEventListener("click",(t=>{t.preventDefault(),"homepage"!==n&&(n="homepage",content.innerHTML="",e(),o())})),d.addEventListener("click",(e=>{e.preventDefault(),"menu"!==n&&(n="menu",content.innerHTML="",t(),o())}))})();