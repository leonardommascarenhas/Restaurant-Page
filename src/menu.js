export default function createMenu(append) {
  append.innerHTML = "";
  let menuContainer = document.createElement("div");
  menuContainer.classList.add("menu-container");
  createMenuItem(menuContainer, "../docs/img/menu/whisky.png", "Whisky", "A delicious whisky with a touch of spice");
  createMenuItem(menuContainer, "../docs/img/menu/grapes.png", "Wine Keg", "A giant keg of wine with a touch of spice");
  createMenuItem(menuContainer, "../docs/img/menu/vodka.png", "Vodka", "A bottle of vodka with a touch of spice");
  createMenuItem(menuContainer, "../docs/img/menu/beer.png", "Beer", "A bottle of beer with a touch of spice");
  createMenuItem(menuContainer, "../docs/img/menu/martini.png", "Martini", "A bottle of martini with a touch of spice");
  createMenuItem(menuContainer, "../docs/img/menu/softdrinks.png", "Soda", "A delicious soda with a touch of spice");
  append.appendChild(menuContainer);
}

function createMenuItem(append, image, title, description) {
  let menuItemContainer = document.createElement("div");
  menuItemContainer.classList.add("menu-item-container");
  let menuImage = document.createElement("img");
  let menuTitle = document.createElement("h2");
  let menuDescription = document.createElement("p");
  menuImage.src = image;
  menuImage.classList.add("menuImage");
  menuTitle.innerHTML = title;
  menuDescription.innerHTML = description;
  menuItemContainer.append(menuImage, menuTitle, menuDescription);
  append.appendChild(menuItemContainer);
}
