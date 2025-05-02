document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("darkModeBtn");

  btn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
  });
});
