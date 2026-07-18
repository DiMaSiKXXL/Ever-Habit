(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function a(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=a(e);fetch(e.href,r)}})();function F(t,n,a){const i=document.querySelector(".time");i.textContent=t+"-"+n+"-"+a}function $(t,n,a,i,e){for(let r=0;r<JSON.parse(localStorage.getItem("habitList")).length;r++){const s=JSON.parse(localStorage.getItem("habitList"))[r];e(t,s.id,s.name,s.description);const b=n+"-"+a;localStorage.getItem(b)||localStorage.setItem(b,JSON.stringify({}));const c=JSON.parse(localStorage.getItem(b));c[i]&&c[i].indexOf(s.id)!=-1&&document.getElementById(s.id).querySelector(".habit__btn").classList.add("_active")}}function j(t,n){const a=document.querySelectorAll(".habit");for(let i=0;i<a.length;i++){const e=a[i].id,r=t+"-"+n,s=JSON.parse(localStorage.getItem(r)),c=document.getElementById(e).querySelectorAll(".grid__elem");let l=0;const m=setInterval(()=>{var u;l<c.length?((u=s[l])!=null&&u.includes(e)&&c[l-1].classList.add("_active"),l++):clearInterval(m)},10)}}document.getElementById("contextMenu");function G(t,n){t.addEventListener("contextmenu",a=>{a.preventDefault();const i=a.target.closest(".habit");i&&i&&(document.querySelectorAll(".context-menu.active").forEach(c=>{c!==i.querySelector(".context-menu")&&c.classList.remove("active")}),i.querySelector(".context-menu").classList.toggle("active"),i.querySelector(".habit__settings").classList.toggle("_active"),n(i),i.querySelector(".parameter__category").addEventListener("click",c=>{const l=c.target.closest('input[type="color"]'),m=c.target.closest('input[type="text"]');if(l){let d=function(v){l.addEventListener("input",function(f){const h=f.target.value;v.style[o]=h})};var u=d;const o=l.getAttribute("name");let g;(o=="backgroundColor"||o=="borderColor")&&(g=i.querySelector(".habit__header"),d(g)),o=="background-sub"&&l.addEventListener("input",function(v){g=i.querySelector(".habit__body");const f=v.target.value;g.style.backgroundColor=f,g=i.querySelector(".habit__header").parentNode,g.style.cssText=`
                background-color: ${f};
              `}),(o=="borderWeight"||o=="borderRadius")&&m.addEventListener("input",function(v){g=i.querySelector(".habit__body");const f=v.target.value;g.style[o]=f+"px"})}}))}),document.addEventListener("click",a=>{a.target.closest(".context-menu.active")||document.querySelectorAll(".context-menu.active").forEach(i=>{i.classList.remove("active")})})}document.getElementById("myElement");let K=t=>t.classList.toggle("active");function Y(t,n,a,i,e){t.addEventListener("click",r=>{const s=r.target.closest(".habit__btn");if(s){if(s){let b=n(s),c=a+"-"+i;localStorage.getItem(c)||localStorage.setItem(c,"{}");let l=JSON.parse(localStorage.getItem(c));if(localStorage.getItem(c),l[e]||(l[e]=[],localStorage.setItem(c,JSON.stringify(l))),l[e].includes(b)){let o=l[e].indexOf(b);l[e].splice(o,1),localStorage.setItem(c,JSON.stringify(l)),l[e][0]===void 0&&(delete l[e],localStorage.setItem(c,JSON.stringify(l)),console.log("Дата удалена"),localStorage.getItem(c).length==2&&localStorage.removeItem(c))}else l[e].push(b),localStorage.setItem(c,JSON.stringify(l));document.getElementById(b).querySelectorAll(".grid__elem")[e-1].classList.toggle("_active")}K(s)}})}function R(t){document.querySelectorAll(".habit__grid").forEach(a=>{M(a,t),T(a,t)})}function M(t,n){for(let a=0;a<n;a++)t.insertAdjacentHTML("beforeend",`
        <div
          class="grid__elem"
          data-i="${a+1}"
          ></div>
          `)}function T(t,n){let i=31-n;for(let e=0;e<i;e++)t.insertAdjacentHTML("beforeend",`
        <div
          class="grid__elem _disabled"
          data-i="${n+e+1}"
        ></div>
      `)}const U=document.querySelector(".open-create-habit-btn"),W=document.getElementById("cancel-habit-btn"),z=document.getElementById("submit-habit-btn"),Q=document.getElementById("confirm-cancel-btn"),V=document.getElementById("abort-cancel-btn"),I=document.getElementById("create-habit-modal"),k=document.getElementById("create-habit-confirm-modal"),p=document.getElementById("habit-name"),E=document.getElementById("habit-description");function X(t,n,a,i,e,r){let s;U.addEventListener("click",()=>b(I));function b(o){o.classList.add("active")}c();function c(){W.addEventListener("click",function(o){p.value.trim()!==""||E.value.trim()!==""?(o.preventDefault(),b(k)):l(I)})}function l(o){o.classList.remove("active")}z.addEventListener("click",function(o){if(o.preventDefault(),p.value.trim()=="")console.log("You need to fill in the name field");else{let h=function(q){const N=document.getElementById(s).querySelector(".habit__grid");M(N,q),T(N,q)};var d=h;l(I);const g=a.getTime();let f={id:m(),name:p.value,description:E.value,createdAt:g};t.push(f),i(n,f.id,p.value,E.value),h(r),localStorage.setItem("habitList",JSON.stringify(t)),console.log(`A habit named "${p.value}" has been created`),u()}});function m(){const o=t.map(d=>d.id);for(let d=0;d<t.length;d++)if(!o.includes(d))return e(),console.log(d),s=d,d}function u(){p.value="",E.value=""}Q.addEventListener("click",function(o){l(k)}),V.addEventListener("click",function(o){o.preventDefault(),l(k),l(I),u()})}const O=document.getElementById("delete-habit-modal"),D=document.getElementById("abort-delete-btn"),H=document.getElementById("confirm-delete-btn");function Z(t,n,a,i){let e=null,r=null;t.addEventListener("click",m=>{const u=m.target.closest(".context-menu__delete-btn");o();function o(){if(u&&u){let d=i(u);e&&D.removeEventListener("click",e),r&&H.removeEventListener("click",r),O.classList.add("active"),e=function(g){g.preventDefault(),O.classList.remove("active")},r=function(g){g.preventDefault(),n(),c(d),O.classList.remove("active"),s(),b(d),l(d)},D.addEventListener("click",e),H.addEventListener("click",r)}}});function s(){const m=[];for(let u=0;u<localStorage.length;u++){const o=localStorage.key(u);/^\d{4}-\d{1,2}$/.test(o)&&m.push(o)}return m}function b(m){s().forEach(o=>{const d=JSON.parse(localStorage.getItem(o)),g={};for(const v in d){const f=d[v].filter(h=>h!==m);f.length>0&&(g[v]=f)}Object.keys(g).length>0?localStorage.setItem(o,JSON.stringify(g)):localStorage.removeItem(o)})}function c(m){document.getElementById(m).remove()}function l(m){let o=a.map(d=>d.id).findIndex(d=>d==m);a.splice(o,1),localStorage.setItem("habitList",JSON.stringify(a)),n()}}const ee="/Ever-Habit/",x=`${ee}src/assets/sprites/sprite.svg`;function w(t,n,a,i){t.insertAdjacentHTML("beforeend",`<div id="${n}" class="habit">
      <div class="habit__header">
        <div class="habit__info">
          <div class="habit__name">${a}</div>
          <div class="habit__description">${i}</div>
        </div>
        <button class="habit__btn btn">
          <svg class="btn__mark">
            <use href="${x}#second-mark"></use>
          </svg>
          <svg class="btn__mark">
            <use href="${x}#one-mark"></use>
          </svg>
        </button>
        <div class="context-menu">
          <button class="context-menu__delete-btn btn">
            <svg class="btn__mark">
              <use href="${x}#trash"></use>
            </svg>
          </button>
        </div>
      </div>
      <div class="habit__body">
        <div class="habit__grid grid"></div>
      </div>
      <div class="habit__settings">
        <form class="edit-habit-form">
          <div class="edit-habit-form__parameters parameter">
            <div class="parameter__category category">
              <span class="category__title">General</span>
              <ul class="category__grid grid">
                <li class="grid__item item background-main">
                  <span class="item__name">background (main)</span>
                  <div class="item__value">
                    <input type="color" name="backgroundColor" class="item__palette">
                    <input type="text" name="backgroundColor" class="item__input">
                  </div>
                </li>
                <li class="grid__item item background-sub">
                  <span class="item__name">background (sub)</span>
                  <div class="item__value">
                    <input type="color" name="background-sub" class="item__palette">
                    <input type="text" name="background-sub" class="item__input">
                  </div>
                </li>
                <li class="grid__item item border-color">
                  <span class="item__name">border color</span>
                  <div class="item__value">
                    <input type="color" name="borderColor" class="item__palette">
                    <input type="text" name="borderColor" class="item__input">
                  </div>
                </li>
                <li class="grid__item item border-weight">
                  <span class="item__name">border weight</span>
                  <div class="item__value">
                    <input type="text" name="borderWeight" value="" class="item__input">
                  </div>
                </li>
                <li class="grid__item item border-radius">
                  <span class="item__name">border radius</span>
                  <div class="item__value">
                    <input type="text" name="borderRadius" value="" class="item__input">
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <!-- <div class="edit-habit-dialog__appearance"></div>
          <input type="text" name="habit-name" id="habit-name" placeholder="Habit name" class="edit-habit-dialog__input">
          <input type="text" name="habit-description" id="habit-description" placeholder="Short description" class="edit-habit-dialog__input">
          <div class="edit-habit-dialog__color">
            <label for="habit-color">Color</label>
            <input type="color" name="habit-color" id="habit-color" value="#ff0000" class="">
          </div>
          <div class="edit-habit-dialog__btn-area">
            <button type="reset" id="edit-habit-cancel" class="btn">Cancel</button>
            <button type="submit" id="edit-habit-submit" class="btn">Confirm</button>
          </div> -->
        </form>
      </div>
    </div>`)}function te(){const t=document.getElementById("theme-switch"),n=document.querySelector(".wrapper");t.addEventListener("click",()=>{n.getAttribute("data-theme")==="dark"?(n.removeAttribute("data-theme"),localStorage.setItem("theme","light")):(n.setAttribute("data-theme","dark"),localStorage.setItem("theme","dark"))})}function ie(){document.addEventListener("DOMContentLoaded",()=>{const t=localStorage.getItem("theme"),n=document.querySelector(".wrapper");t==="dark"?n.setAttribute("data-theme","dark"):(n.removeAttribute("data-theme"),localStorage.setItem("theme","light"))})}function A(t){JSON.parse(localStorage.getItem("habitList"))}function C(t){return t.closest(".habit").id}function ne(t,n,a,i,e,r){return new Promise(s=>{r(t,n,a,i,e),requestAnimationFrame(()=>{requestAnimationFrame(()=>{s()})})})}const ae=document.querySelector(".main"),S=ae.firstElementChild;let J=JSON.parse(localStorage.getItem("habitList")),L=new Date;const _=L.getFullYear(),y=L.getMonth()+1,B=L.getDate(),P=new Date(_,y,0).getDate();te();ie();F(_,y,B);A();ne(S,_,y,B,w,$).then(()=>{j(_,y)});G(S,C);Y(S,C,_,y,B);X(J,S,L,w,A,P);Z(S,A,J,C);R(P);
