const body = document.body;
const button = document.querySelector(".btn");

button.addEventListener("click", (event) => {
    body.classList.toggle("is-shown");
});
