(()=>{"use strict";const t=function(){const t=document.getElementById("main");t.textContent="",t.appendChild(function(){const t=document.createElement("div");t.classList.add("home");const e=document.createElement("img");return e.src="images/bed.jpg",e.alt="White bed",t.appendChild(e),t.appendChild(function(t){const e=document.createElement("p");return e.textContent="The new hit craze in \n        restaurants - a place you can go to satisfy that sleepy \n        urge! Sleep sleep sleep sleep!",e}()),t}())};function e(t,e){const n=document.createElement("div");n.classList.add("item");const a=document.createElement("h2");a.textContent=t;const c=document.createElement("p");return c.textContent=e,n.appendChild(a),n.appendChild(c),n}function n(){const n=document.createElement("header");n.classList.add("header");const c=document.createElement("h1");return c.classList.add("restaurant-name"),c.textContent="The Resty Restaurant",n.appendChild(c),n.appendChild(function(){const n=document.createElement("nav"),c=document.createElement("button");c.classList.add("button-nav"),c.textContent="Home",c.addEventListener("click",(e=>{e.target.classList.contains("active")||(a(c),t())}));const d=document.createElement("button");d.classList.add("button-nav"),d.textContent="Menu",d.addEventListener("click",(t=>{t.target.classList.contains("active")||(a(d),function(){const t=document.getElementById("main");t.textContent="",t.appendChild(function(){const t=document.createElement("div");return t.classList.add("menu"),t.appendChild(e("Sleeping Bag","Warm sleeping bag. One pillow.")),t.appendChild(e("Cot","Small, single cot. One pillow.")),t.appendChild(e("Bed","Double bed. Two pillows.")),t}())}())}));const o=document.createElement("button");return o.classList.add("button-nav"),o.textContent="Contact",o.addEventListener("click",(t=>{t.target.classList.contains("active")||(a(o),function(){const t=document.getElementById("main");t.textContent="",t.appendChild(function(){const t=document.createElement("div");t.classList.add("contact");const e=document.createElement("p");e.textContent="Call us at 111-222-3333";const n=document.createElement("p");n.textContent="Find us at The Tents #99, Fort Collins, CO";const a=document.createElement("p");return a.textContent="Email us at ripvanwinkle@resty.com",t.appendChild(e),t.appendChild(n),t.appendChild(a),t}())}())})),n.appendChild(c),n.appendChild(d),n.appendChild(o),n}()),n}function a(t){document.querySelectorAll(".button-nav").forEach((t=>{t!==this&&t.classList.remove("active")})),t.classList.add("active")}!function(){const e=document.getElementById("content");e.appendChild(n()),e.appendChild(function(){const t=document.createElement("main");return t.classList.add("main"),t.setAttribute("id","main"),t}()),e.appendChild(function(){const t=document.createElement("footer");t.classList.add("footer");const e=document.createElement("p");return e.textContent=`© ${(new Date).getFullYear()} Nathan Harding`,t.appendChild(e),t}()),a(document.querySelector(".button-nav")),t()}()})();