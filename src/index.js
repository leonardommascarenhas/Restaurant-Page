import createContent from "./home.js";
import createMenu from "./menu.js";

let content = document.getElementById("content");
let header = document.createElement("header");
let contentContainer = document.createElement("main");
let footer = document.createElement("footer");
contentContainer.classList.add("content-container");
header.innerHTML = `<h1>Renaptom's</h1><div class="menu-items"><button class="home">Home</a> <button class="recipes">Recipes</a> <a href ="#Contact">Contact</a></div>`;
footer.innerHTML = `Copyright © 2022 leonardommascarenhas`;
content.appendChild(header);
content.appendChild(contentContainer);
content.appendChild(footer);

function showContent(e) {
  if (e.target.classList.contains("home")) {
    createContent(contentContainer);
  }
  if (e.target.classList.contains("recipes")) {
    createMenu(contentContainer);
  }
}

document.addEventListener("click", showContent);
