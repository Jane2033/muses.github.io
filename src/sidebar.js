const menuBtn = document.querySelector(".btn-menu");
const closeBtn = document.querySelector("#close");
const overlay = document.querySelector("#overlay");
const nav = document.querySelector("#nav");

menuBtn.addEventListener("click", () => {
  nav.classList.remove("close");
  nav.classList.toggle("open");
});

closeBtn.addEventListener("click", () => {
  nav.classList.remove("open");
  nav.classList.toggle("close");
});
