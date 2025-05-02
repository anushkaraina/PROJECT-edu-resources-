document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("darkModeBtn");
  if (btn) {
    btn.addEventListener("click", () => {
      document.body.classList.toggle("dark-mode");
    });
  }

  const form = document.getElementById("suggestForm");
  const responseMsg = document.getElementById("responseMsg");

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const siteName = document.getElementById("siteName").value.trim();
      const siteURL = document.getElementById("siteURL").value.trim();

      if (siteName && siteURL) {
        // Here you would send data to backend, for now just show success
        responseMsg.textContent = `Thank you! "${siteName}" has been submitted for review.`;
        form.reset();
      } else {
        responseMsg.textContent = "Please fill in all fields.";
        responseMsg.style.color = "red";
      }
    });
  }
});
