export function start() {
  console.log("ready to click on start button");

  document.querySelector("#join").addEventListener("click", gerenalInfo);
  document.querySelectorAll(".close").forEach((close_button) => {
    close_button.addEventListener("click", close);
  });
}

function gerenalInfo() {
  console.log("Join butter clicked! General info");
  document.querySelector("#gerenal_info").classList.remove("hide");
  document.querySelector("#gerenal_info").classList.add("active");

  // Valider before clicking on next
  const form = document.querySelector("form");
  form.setAttribute("novalidate", true);
  document.querySelector("#next1").addEventListener("click", (e) => {
    e.preventDefault();
    if (form.checkValidity()) {
      userInfo();
    } else {
      form.reportValidity();
    }
  });
}

function userInfo() {
  console.log("User info!");
  document.querySelector("#gerenal_info").classList.remove("active");
  document.querySelector("#gerenal_info").classList.add("hide");
  document.querySelector("#user_info").classList.remove("hide");
  document.querySelector("#user_info").classList.add("active");
  document.querySelector("#next2").addEventListener("click", personalInfo);
  document.querySelector("#back1").addEventListener("click", goBack1);
}

function personalInfo() {
  console.log("Personal info!");
  document.querySelector("#user_info").classList.remove("active");
  document.querySelector("#user_info").classList.add("hide");
  document.querySelector("#personal_info").classList.remove("hide");
  document.querySelector("#personal_info").classList.add("active");
  document.querySelector("#add").addEventListener("click", thankYou);
  document.querySelector("#back2").addEventListener("click", goBack2);
}

function thankYou() {
  console.log("User signed up!");
  document.querySelector("#personal_info").classList.remove("active");
  document.querySelector("#personal_info").classList.add("hide");
  document.querySelector("#signed_up").classList.remove("hide");
  document.querySelector("#signed_up").classList.add("active");
  document.querySelector("#home").addEventListener("click", close);
}

function goBack1() {
  document.querySelector("#user_info").classList.remove("active");
  document.querySelector("#user_info").classList.add("hide");
  document.querySelector("#gerenal_info").classList.remove("hide");
  document.querySelector("#gerenal_info").classList.add("active");
}

function goBack2() {
  document.querySelector("#personal_info").classList.remove("active");
  document.querySelector("#personal_info").classList.add("hide");
  document.querySelector("#user_info").classList.remove("hide");
  document.querySelector("#user_info").classList.add("active");
}

function close() {
  console.log("close");
  document.querySelectorAll(".modal").forEach((modal) => {
    console.log("close modal");
    modal.classList.add("hide");
    modal.classList.remove("active");
  });
}
