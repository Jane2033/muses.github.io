const menuBtn = document.querySelector(".btn-menu");
const closeBtn = document.querySelector("#close");
const overlay = document.querySelector("#overlay");
const offcanva = document.querySelector("#offcanva");

menuBtn.addEventListener("click", () => {
  offcanva.classList.toggle("open");
});

closeBtn.addEventListener("click", () => {
  offcanva.classList.remove("open");
});

overlay.addEventListener("click", () => {
  offcanva.classList.remove("open");
});

