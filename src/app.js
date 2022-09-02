/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

const randomTitle = () => {
  let titles = [
    "Estoy pensando en programar",
    "Este fin de semana entrego los proyectos",
    "Que divertido ir a clases el viernes",
    "Me canse"
  ];
  return titles[Math.floor(Math.random() * titles.length)];
};

const changeTitle = h1 => {
  let newTitle = randomTitle();
  while (newTitle == h1.innerHTML) {
    newTitle = randomTitle();
  }
  return newTitle;
};

window.onload = function() {
  //write your code here
  let titles = document.querySelectorAll(".title");
  let h1;
  let randomTitleText = randomTitle();
  for (let title of titles) {
    h1 = document.createElement("h1");
    h1.innerHTML = randomTitleText;
    title.innerHTML = "";
    title.appendChild(h1);
  }

  let footer = document.getElementById("footer");
  footer.innerHTML = "";
  let button = document.createElement("button");
  button.innerHTML = "Cambia de título";
  footer.appendChild(button);

  // let interval = setInterval(() => {
  //   let newTitle = changeTitle(h1);
  //   h1.innerHTML = newTitle;
  // }, 1000);

  // button.addEventListener("click", () => {
  //   let newTitle = changeTitle(h1);
  //   h1.innerHTML = newTitle;
  //   clearInterval(interval);
  //   interval = setInterval(() => {
  //     let newTitle = changeTitle(h1);
  //     h1.innerHTML = newTitle;
  //   }, 1000);
  // });
};
