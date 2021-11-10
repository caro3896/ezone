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
    // Laver array på checkede checkboxes
    const arrayGames = [];
    const gameCheckboxes = document.querySelectorAll("input[name=game][type=checkbox]:checked");

    for (let i = 0; i < gameCheckboxes.length; i++) {
      arrayGames.push(gameCheckboxes[i].value);
    }

    const arrayImproveGames = [];
    const gameImproveCheckboxes = document.querySelectorAll("input[name=game_improve][type=checkbox]:checked");

    for (let i = 0; i < gameImproveCheckboxes.length; i++) {
      arrayImproveGames.push(gameImproveCheckboxes[i].value);
    }

    const arrayAreas = [];
    const areasCheckboxes = document.querySelectorAll("input[name=area_improve][type=checkbox]:checked");

    for (let i = 0; i < areasCheckboxes.length; i++) {
      arrayAreas.push(areasCheckboxes[i].value);
    }

    const data = {
      name: form.elements.name.value,
      age: form.elements.age.value,
      gamertag: form.elements.tag.value,
      email: form.elements.email.value,
      password: form.elements.password.value,
      games: arrayGames,
      games_improve: arrayImproveGames,
      areas: arrayAreas,
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
