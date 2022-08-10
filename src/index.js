import createContent from "./home.js";

let content = document.getElementById("content");
let header = document.createElement("header");
let contentContainer = document.createElement("main");
let footer = document.createElement("footer");
contentContainer.classList.add("content-container");
header.innerHTML = `<h1>Renaptom's</h1><div class="menu-items"><a href ="#">Home</a> <a href ="#">Recipes</a> <a href ="#">Contact</a></div>`;
footer.innerHTML = `Copyright © 2022 leonardommascarenhas`;
content.appendChild(header);
content.appendChild(contentContainer);
content.appendChild(footer);

function showContent(e) {
  if (e.target) {
    createContent(contentContainer);
  }
}
