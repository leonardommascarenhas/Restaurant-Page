(()=>{"use strict";function e(e,t,n,i){let a=document.createElement("div");a.classList.add("menu-item-container");let c=document.createElement("img"),o=document.createElement("h2"),s=document.createElement("p");c.src=t,c.classList.add("menuImage"),o.innerHTML=n,s.innerHTML=i,a.append(c,o,s),e.appendChild(a)}let t=document.getElementById("content"),n=document.createElement("header"),i=document.createElement("main"),a=document.createElement("footer");i.classList.add("content-container"),n.innerHTML='<h1>Renaptom\'s</h1><div class="menu-items"><button class="home">Home</a> <button class="recipes">Recipes</a> <a href ="#Contact">Contact</a></div>',a.innerHTML="Copyright © 2022 leonardommascarenhas",t.appendChild(n),t.appendChild(i),t.appendChild(a),document.addEventListener("click",(function(t){t.target.classList.contains("home")&&function(e){let t=document.createElement("div");t.classList.add("homeContainer");let n=document.createElement("p"),i=document.createElement("p"),a=document.createElement("img");n.innerHTML="Welcome to Renaptom's Wine Bar",i.innerHTML="Made with passion since 2022",a.src="../dist/img/Home.jpg",a.classList.add("home-img"),e.innerHTML="",t.append(n,i,a),e.appendChild(t)}(i),t.target.classList.contains("recipes")&&function(t){t.innerHTML="";let n=document.createElement("div");n.classList.add("menu-container"),e(n,"../dist/img/menu/whisky.png","Whisky","A delicious whisky with a touch of spice"),e(n,"../dist/img/menu/grapes.png","Wine Keg","A giant keg of wine with a touch of spice"),e(n,"../dist/img/menu/vodka.png","Vodka","A bottle of vodka with a touch of spice"),e(n,"../dist/img/menu/beer.png","Beer","A bottle of beer with a touch of spice"),e(n,"../dist/img/menu/martini.png","Martini","A bottle of martini with a touch of spice"),e(n,"../dist/img/menu/softdrinks.png","Soda","A delicious soda with a touch of spice"),t.appendChild(n)}(i)}))})();