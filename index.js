const btn = document.getElementById("toggleNav");
const nav = document.querySelector("#nav");

btn.addEventListener("click", () => {
  nav.classList.toggle("active");
});
