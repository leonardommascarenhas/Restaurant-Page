(()=>{"use strict";function e(e){e.innerHTML="";let t=document.createElement("div");t.classList.add("homeContainer");let n=document.createElement("p"),i=document.createElement("p"),a=document.createElement("p"),c=document.createElement("img");n.innerHTML="Welcome to Renaptom's Bar",i.innerHTML="Made with passion since 2022",a.innerHTML="We are open from Monday to Sunday from 17:00 to 03:00",c.src="../dist/img/Home.jpg",c.classList.add("home-img"),t.append(n,i,c,a),e.appendChild(t)}function t(e,t,n,i){let a=document.createElement("div");a.classList.add("menu-item-container");let c=document.createElement("img"),o=document.createElement("h2"),s=document.createElement("p");c.src=t,c.classList.add("menuImage"),o.innerHTML=n,s.innerHTML=i,a.append(c,o,s),e.appendChild(a)}function n(e,t,n){let i=document.createElement("div");i.classList.add("contact-container");let a=document.createElement("img");a.src=t,a.classList.add("contact-icon");let c=document.createElement("p");c.innerHTML=n,i.append(a,c),e.appendChild(i)}let i=document.getElementById("content"),a=document.createElement("header"),c=document.createElement("main"),o=document.createElement("footer");c.classList.add("content-container"),a.innerHTML='<h1>Renaptom\'s</h1><nav><button class="home">Home</button> <button class="menu">Menu</button> <button class="contacts">Contacts</button></nav>',o.innerHTML="Copyright © 2022 leonardommascarenhas",i.appendChild(a),i.appendChild(c),i.appendChild(o),e(c),document.addEventListener("click",(function(i){i.target.classList.contains("home")&&e(c),i.target.classList.contains("menu")&&function(e){e.innerHTML="";let n=document.createElement("div");n.classList.add("menu-container"),t(n,"../dist/img/menu/whisky.png","Whisky","A delicious whisky with a touch of spice"),t(n,"../dist/img/menu/grapes.png","Wine Keg","A giant keg of wine with a touch of spice"),t(n,"../dist/img/menu/vodka.png","Vodka","A bottle of vodka with a touch of spice"),t(n,"../dist/img/menu/beer.png","Beer","A bottle of beer with a touch of spice"),t(n,"../dist/img/menu/martini.png","Martini","A bottle of martini with a touch of spice"),t(n,"../dist/img/menu/softdrinks.png","Soda","A delicious soda with a touch of spice"),e.appendChild(n)}(c),i.target.classList.contains("contacts")&&function(e){e.innerHTML="";let t=document.createElement("div");t.classList.add("contacts-container"),n(t,"../dist/img/contacts/telephone.png","Phone: +351 923 123 456"),n(t,"../dist/img/contacts/email.png","extremamenteReal@realissimomail.com"),e.appendChild(t)}(c)}))})();