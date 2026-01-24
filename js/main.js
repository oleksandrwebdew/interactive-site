// ===== Бургер =====
const burger = document.getElementById("burger");
const menu = document.getElementById("menu");

burger.addEventListener("click", () => {
  menu.classList.toggle("active");
});

// ===== Слайдер =====
const slides = document.querySelectorAll(".slides img");
let index = 0;

function showSlide(i) {
  slides.forEach(slide => slide.classList.remove("active"));
  slides[i].classList.add("active");
}

document.getElementById("next").onclick = () => {
  index = (index + 1) % slides.length;
  showSlide(index);
};

document.getElementById("prev").onclick = () => {
  index = (index - 1 + slides.length) % slides.length;
  showSlide(index);
};

setInterval(() => {
  index = (index + 1) % slides.length;
  showSlide(index);
}, 5000);

// ===== Модальное окно =====
const modal = document.getElementById("modal");
const openModal = document.getElementById("openModal");
const closeModal = document.getElementById("closeModal");

openModal.onclick = () => {
  modal.style.display = "flex";
  document.body.style.overflow = "hidden";
};

function close() {
  modal.style.display = "none";
  document.body.style.overflow = "";
}

closeModal.onclick = close;

modal.onclick = e => {
  if (e.target === modal) close();
};

document.addEventListener("keydown", e => {
  if (e.key === "Escape") close();
});