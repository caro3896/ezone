// import "./style.css";
/* 
document.querySelector("#app").innerHTML = `
  <h1>Hello Vite!</h1>
  <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
`; */

import { get, post } from "./crud.js";
import { start } from "./next_page.js";
import { rangeInput, gameTagInput, yesOrNo } from "./read_input.js";

get();

start();

rangeInput();

gameTagInput();

yesOrNo();

function showMembers(member) {
  console.log(member);
}

const form = document.querySelector("form");

form.setAttribute("novalidate", true);

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (form.checkValidity()) {
    const data = {
      name: form.elements.name.value,
      age: form.elements.age.value,
      gamertag: form.elements.tag.value,
      email: form.elements.email.value,
      password: form.elements.password.value,
      games: form.elements.game.value, // Mangler at komme ind
      areas: form.elements.area_improve.value, // Mangler at komme ind
      gamehours: form.elements.gameplay.value,
      sleep: form.elements.sleep.value,
      exercise: form.elements.exercise.value,
      health: form.elements.mental_health.value,
    };
    post(data);
  } else {
    form.reportValidity();
  }
});
