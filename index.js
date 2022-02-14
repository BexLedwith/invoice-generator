const themeToggle = document.getElementById("toggle");
const body = document.getElementById("body");

// toggle dark mode
themeToggle.addEventListener("click", function () {
  body.classList.contains("dark")
    ? body.classList.remove("dark")
    : body.classList.add("dark");
});
