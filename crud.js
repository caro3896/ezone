import { endpoint, headers } from "./settings.js";

export function get() {
  fetch(endpoint, {
    method: "get",
    headers,
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    });
}

export function post(data) {
  const postData = JSON.stringify(data);
  fetch(endpoint, {
    method: "post",
    headers,
    body: postData,
  })
    .then((res) => res.json())
    .then((data) => {
      console.log("This member is added to database:");
      console.log(data);
    });
}
