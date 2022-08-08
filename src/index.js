import createContent from "./home.js";

let content = document.getElementById("content");
let menu = document.createElement("nav");
let contentContainer = document.createElement("div");
menu.innerHTML = `<a href ="#">Home</a> <a href ="#">Recipes</a> <a href ="#">Contact</a>`;
let mainImg = document.createElement("img");
mainImg.src = "../dist/img/main-img.jpg";

createContent(contentContainer);
content.appendChild(menu);
content.appendChild(contentContainer);
content.appendChild(mainImg);
