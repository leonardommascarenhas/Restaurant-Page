export default function createContent(append) {
  let teste = document.createElement("p");
  let teste2 = document.createElement("p");
  let img = document.createElement("img");
  teste.innerHTML = "Welcome to Leleko's BBQ";
  teste2.innerHTML = "Made with passion since 2022";
  img.src = "../dist/img/Home.jpg";
  img.classList.add("home-img");
  append.appendChild(teste);
  append.appendChild(teste2);
  append.appendChild(img);
}
