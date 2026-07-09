(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const l of e)if(l.type==="childList")for(const o of l.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function a(e){const l={};return e.integrity&&(l.integrity=e.integrity),e.referrerPolicy&&(l.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?l.credentials="include":e.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function s(e){if(e.ep)return;e.ep=!0;const l=a(e);fetch(e.href,l)}})();function w(i,n,a){const s=document.querySelector(".time");s.textContent=i+"-"+n+"-"+a}function C(i,n,a,s,e){for(let l=0;l<JSON.parse(localStorage.getItem("habitList")).length;l++){const o=JSON.parse(localStorage.getItem("habitList"))[l];e(i,o.id,o.name,o.description);const r=n+"-"+a;localStorage.getItem(r)||localStorage.setItem(r,JSON.stringify({}));const c=JSON.parse(localStorage.getItem(r));c[s]&&c[s].indexOf(o.id)!=-1&&document.getElementById(o.id).querySelector(".habit__btn").classList.add("active")}}function F(i,n){const a=document.querySelectorAll(".habit");for(let s=0;s<a.length;s++){const e=a[s].id,l=i+"-"+n,o=JSON.parse(localStorage.getItem(l)),c=document.getElementById(e).querySelectorAll(".grid__elem");let t=0;const u=setInterval(()=>{var d;t<c.length?((d=o[t])!=null&&d.includes(e)&&c[t-1].classList.add("_active"),t++):clearInterval(u)},10)}}document.getElementById("contextMenu");function M(i){i.addEventListener("contextmenu",n=>{n.preventDefault();const a=n.target.closest(".habit");a&&a&&(document.querySelectorAll(".context-menu.active").forEach(o=>{o!==a.querySelector(".context-menu")&&o.classList.remove("active")}),a.querySelector(".context-menu").classList.toggle("active"),a.querySelector(".habit__settings").classList.toggle("_active"))}),document.addEventListener("click",n=>{n.target.closest(".context-menu.active")||document.querySelectorAll(".context-menu.active").forEach(a=>{a.classList.remove("active")})})}document.getElementById("myElement");let T=i=>i.classList.toggle("active");function P(i,n,a,s,e){i.addEventListener("click",l=>{const o=l.target.closest(".habit__btn");if(o){if(o){let r=n(o),c=a+"-"+s;localStorage.getItem(c)||localStorage.setItem(c,"{}");let t=JSON.parse(localStorage.getItem(c));if(localStorage.getItem(c),t[e]||(t[e]=[],localStorage.setItem(c,JSON.stringify(t))),t[e].includes(r)){let m=t[e].indexOf(r);t[e].splice(m,1),localStorage.setItem(c,JSON.stringify(t)),t[e][0]===void 0&&(delete t[e],localStorage.setItem(c,JSON.stringify(t)),console.log("Дата удалена"),localStorage.getItem(c).length==2&&localStorage.removeItem(c))}else t[e].push(r),localStorage.setItem(c,JSON.stringify(t));document.getElementById(r).querySelectorAll(".grid__elem")[e-1].classList.toggle("_active")}T(o)}})}function $(i,n){n.forEach(a=>{for(let e=0;e<i;e++)a.insertAdjacentHTML("beforeend",`<div class="grid__elem" data-i="${e+1}"></div>`);let s=31-i;for(let e=0;e<s;e++)a.insertAdjacentHTML("beforeend",`<div class="grid__elem _disabled" data-i="${i+e+1}"></div>`)})}const j=document.querySelector(".create-habit-btn"),K=document.getElementById("create-habit-reset"),G=document.getElementById("create-habit-create"),Y=document.getElementById("close-habit-reset"),R=document.getElementById("close-habit-submit"),_=document.getElementById("close-habit-dialog-one"),I=document.getElementById("close-habit-dialog-two"),b=document.getElementById("habit-name"),y=document.getElementById("habit-description");function z(i,n,a,s,e){function l(){b.value="",y.value=""}function o(t){t.classList.add("active")}function r(t){t.classList.remove("active")}function c(){for(let t=0;t<i.length;t++)if(i[t].id!==t)return console.log(i[t].id),e(),t}j.addEventListener("click",()=>o(_)),K.addEventListener("click",function(t){b.value.trim()!==""||y.value.trim()!==""?(t.preventDefault(),o(I)):r(_)}),G.addEventListener("click",function(t){if(t.preventDefault(),b.value.trim()=="")console.log("You need to fill in the name field");else{r(_);const u=a.getTime();let m={id:c(),name:b.value,description:y.value,createdAt:u};i.push(m),s(n,m.id,b.value,y.value),localStorage.setItem("habitList",JSON.stringify(i)),console.log(`A habit named "${b.value}" has been created`),l()}}),Y.addEventListener("click",function(t){r(I)}),R.addEventListener("click",function(t){t.preventDefault(),r(I),r(_),l()})}const E=document.getElementById("delete-habit-dialog"),B=document.getElementById("delete-habit-reset"),N=document.getElementById("delete-habit-submit");function Q(i,n,a,s){let e=null,l=null;function o(){const u=[];for(let d=0;d<localStorage.length;d++){const m=localStorage.key(d);/^\d{4}-\d{1,2}$/.test(m)&&u.push(m)}return u}function r(u){o().forEach(m=>{const g=JSON.parse(localStorage.getItem(m)),h={};for(const A in g){const x=g[A].filter(J=>J!==u);x.length>0&&(h[A]=x)}Object.keys(h).length>0?localStorage.setItem(m,JSON.stringify(h)):localStorage.removeItem(m)})}function c(u){let d=a.find(h=>h.id===u),m=a.indexOf(d);a.splice(m,1),document.getElementById(d.id).remove()}function t(){localStorage.setItem("habitList",JSON.stringify(a)),n()}i.addEventListener("click",u=>{const d=u.target.closest(".context-menu__delete-btn");if(d&&d){let m=s(d);e&&B.removeEventListener("click",e),l&&N.removeEventListener("click",l),E.classList.add("active"),e=function(g){g.preventDefault(),E.classList.remove("active")},l=function(g){g.preventDefault(),n(),c(m),E.classList.remove("active"),o(),r(m),t()},B.addEventListener("click",e),N.addEventListener("click",l)}})}const U=document.querySelector(".main"),p=U.firstElementChild,V=document.getElementById("theme-switch"),L=document.querySelector(".wrapper");V.addEventListener("click",()=>{L.getAttribute("data-theme")==="dark"?(L.removeAttribute("data-theme"),localStorage.setItem("theme","light")):(L.setAttribute("data-theme","dark"),localStorage.setItem("theme","dark"))});document.addEventListener("DOMContentLoaded",()=>{const i=localStorage.getItem("theme"),n=document.querySelector(".wrapper");i==="dark"?n.setAttribute("data-theme","dark"):(n.removeAttribute("data-theme"),localStorage.setItem("theme","light"))});let k=JSON.parse(localStorage.getItem("habitList")),S=new Date;const f=S.getFullYear(),v=S.getMonth()+1,O=S.getDate(),W=new Date(f,v,0).getDate();function H(){k=JSON.parse(localStorage.getItem("habitList"))}function q(i){return i.closest(".habit").id}function D(i,n,a,s){i.insertAdjacentHTML("beforeend",`<div id="${n}" class="habit">
      <div class="habit__header">
        <div class="habit__info">
          <div class="habit__name">${a}</div>
          <div class="habit__description">${s}</div>
        </div>
        <button class="habit__btn btn">
          <svg class="btn__mark">
            <use href="./src/assets/sprites/sprite.svg#second-mark"></use>
          </svg>
          <svg class="btn__mark">
            <use href="./src/assets/sprites/sprite.svg#one-mark"></use>
          </svg>
        </button>
        <div class="context-menu">
          <button class="context-menu__delete-btn btn">
            <svg class="btn__mark">
              <use href="./src/assets/sprites/sprite.svg#trash"></use>
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
                    <input type="color" name="habit-color" id="habit-color" class="">
                    <input type="text" name="background-main" class="item__input">
                  </div>
                </li>
                <li class="grid__item item background-sub">
                  <span class="item__name">background (sub)</span>
                  <div class="item__value">
                    <div class="item__palette"></div>
                    <input type="text" name="background-sub" class="item__input">
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
    </div>`)}w(f,v,O);function X(i,n,a,s,e){return new Promise(l=>{C(i,n,a,s,e),requestAnimationFrame(()=>{requestAnimationFrame(()=>{l()})})})}X(p,f,v,O,D).then(()=>{F(f,v)});M(p);P(p,q,f,v,O);z(k,p,S,D,H);Q(p,H,k,q);const Z=document.querySelectorAll(".habit__grid");$(W,Z);
