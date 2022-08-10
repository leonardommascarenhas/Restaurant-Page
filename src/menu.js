export default function createMenu(append) {
  let menuContainer = document.createElement("div");
  let menu = document.createElement("div");
  menu.classList.add("menu");
  let menuItem1 = document.createElement("div");
  menuItem1.classList.add("menu-item");
  menuItem1.innerHTML = "Teste";
  let menuItem2 = document.createElement("div");
  menuItem2.classList.add("menu-item");
  menuItem2.innerHTML = "Teste";
  let menuItem3 = document.createElement("div");
  menuItem3.classList.add("menu-item");
  menuItem3.innerHTML = "Teste";
  let menuItem4 = document.createElement("div");
  menuItem4.classList.add("menu-item");
  menuItem4.innerHTML = "Teste";
  let menuItem5 = document.createElement("div");
  menuItem5.classList.add("menu-item");
  menuItem5.innerHTML = "Teste";
  let menuItem6 = document.createElement("div");
  menuItem6.classList.add("menu-item");
  menuItem6.innerHTML = "Teste";
  let menuItem7 = document.createElement("div");
  menuItem7.classList.add("menu-item");
  menuItem7.innerHTML = "Teste";
  let menuItem8 = document.createElement("div");
  menuItem8.classList.add("menu-item");
  menuItem8.innerHTML = "Teste";
  let menuItem9 = document.createElement("div");
  menuItem9.classList.add("menu-item");
  menuItem9.innerHTML = "Teste";
  let menuItem10 = document.createElement("div");
  menuItem10.classList.add("menu-item");
  menuItem10.innerHTML = "Teste";
  menuContainer.append(
    menu,
    menuItem1,
    menuItem2,
    menuItem3,
    menuItem4,
    menuItem5,
    menuItem6,
    menuItem7,
    menuItem8,
    menuItem9,
    menuItem10
  );
  append.appendChild(menuContainer);
}
