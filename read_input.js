"use strict";

export function rangeInput(){
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