const overlay = document.getElementById("overlay");

menuToggle.addEventListener("click", () => {
  sideNav.classList.toggle("open");
  overlay.classList.toggle("show");
});

overlay.addEventListener("click", () => {
  sideNav.classList.remove("open");
  overlay.classList.remove("show");
});
