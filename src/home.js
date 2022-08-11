export default function createContent(append) {
  append.innerHTML = "";
  let homeContainer = document.createElement("div");
  homeContainer.classList.add("homeContainer");
  let paragraph1 = document.createElement("p");
  let paragraph2 = document.createElement("p");
  let paragraph3 = document.createElement("p");
  let img = document.createElement("img");
  paragraph1.innerHTML = "Welcome to Renaptom's Bar";
  paragraph2.innerHTML = "Made with passion since 2022";
  paragraph3.innerHTML = "We are open from Monday to Sunday from 17:00 to 03:00";
  img.src = "../dist/img/Home.jpg";
  img.classList.add("home-img");
  homeContainer.append(paragraph1, paragraph2, img, paragraph3);
  append.appendChild(homeContainer);
}
