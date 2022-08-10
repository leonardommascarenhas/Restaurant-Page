export default function createContent(append) {
  let homeContainer = document.createElement("div");
  homeContainer.classList.add("homeContainer");
  let teste = document.createElement("p");
  let teste2 = document.createElement("p");
  let img = document.createElement("img");
  teste.innerHTML = "Welcome to Renaptom's Wine Bar";
  teste2.innerHTML = "Made with passion since 2022";
  img.src = "../dist/img/Home.jpg";
  img.classList.add("home-img");
  append.innerHTML = "";
  homeContainer.append(teste, teste2, img);
  append.appendChild(homeContainer);
}
