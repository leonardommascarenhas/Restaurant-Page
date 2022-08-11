import createContent from "./home.js";
import createMenu from "./menu.js";
import createContacts from "./contacts.js";

let content = document.getElementById("content");
let header = document.createElement("header");
let contentContainer = document.createElement("main");
let footer = document.createElement("footer");
contentContainer.classList.add("content-container");
header.innerHTML = `<h1>Renaptom's</h1><nav><button class="home">Home</button> <button class="menu">Menu</button> <button class="contacts">Contacts</button></nav>`;
footer.innerHTML = `Copyright © 2022 leonardommascarenhas`;
content.appendChild(header);
content.appendChild(contentContainer);
content.appendChild(footer);

function showContent(e) {
  if (e.target.classList.contains("home")) {
    createContent(contentContainer);
  }
  if (e.target.classList.contains("menu")) {
    createMenu(contentContainer);
  }
  if (e.target.classList.contains("contacts")) {
    createContacts(contentContainer);
  }
}
createContent(contentContainer);
document.addEventListener("click", showContent);
