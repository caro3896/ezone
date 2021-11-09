"use strict";

export function rangeInput() {
  const gameplay = document.querySelector("#gameplay");
  const sleep = document.querySelector("#sleep");

  gameplay.addEventListener("input", () => {
    console.log("gameplay hours", gameplay.value);
    const gameHours = document.querySelector("#game_hours");
    gameHours.textContent = gameplay.value;
  });

  sleep.addEventListener("input", () => {
    console.log("sleep hours", sleep.value);
    const sleepHours = document.querySelector("#sleep_hours");
    sleepHours.textContent = sleep.value;
  });
}

export function gameTagInput() {
  console.log("hello");
  const gamerTag = document.querySelector("#name");

  gamerTag.addEventListener("input", () => {
    console.log(gamerTag.value);
    document.querySelector("#user").textContent = `Alright, ${gamerTag.value}`;
  });
}

export function yesOrNo() {
  console.log("Yes or no");

  const yesGames = document.querySelector("#yes_game");
  const noGames = document.querySelector("#no_game");

  yesGames.addEventListener("input", () => {
    document.querySelector("#these_games").style.display = "block";
  });

  noGames.addEventListener("input", () => {
    document.querySelector("#these_games").style.display = "none";
  });

  const yesArea = document.querySelector("#yes_area");
  const noArea = document.querySelector("#no_area");

  yesArea.addEventListener("input", () => {
    document.querySelector("#these_areas").style.display = "block";
  });

  noArea.addEventListener("input", () => {
    document.querySelector("#these_areas").style.display = "none";
  });
}
