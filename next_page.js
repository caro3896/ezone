export function start() {
  console.log("ready to click on start button");

  document.querySelector("#join").addEventListener("click", gerenalInfo);
}

function gerenalInfo() {
  console.log("Join butter clicked! General info");
  document.querySelector("#gerenal_info").classList.remove("hide");
  document.querySelector("#next1").addEventListener("click", userInfo);
}

function userInfo() {
  console.log("User info!");
  document.querySelector("#gerenal_info").classList.add("hide");
  document.querySelector("#user_info").classList.remove("hide");
  document.querySelector("#next2").addEventListener("click", personalInfo);
}

function personalInfo() {
  console.log("Personal info!");
  document.querySelector("#user_info").classList.add("hide");
  document.querySelector("#personal_info").classList.remove("hide");
  document.querySelector("#add").addEventListener("click", thankYou);
}

function thankYou() {
  console.log("User signed up!");
  document.querySelector("#personal_info").classList.add("hide");
}
