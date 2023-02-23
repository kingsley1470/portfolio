const hamburger = document.getElementsByClassName("hamburger")[0]
const mobileNavs = document.getElementsByClassName("nav-links")[0]




hamburger.addEventListener("click", () => {
  mobileNavs.classList.toggle("active")
})

const body = document.querySelector("body");
const toggleButton = document.querySelector("#toggle-mode");

function toggleDarkMode() {
  if (body.classList.contains("light-mode")) {
    body.classList.replace("light-mode", "dark-mode");
    localStorage.setItem("mode", "dark");
  } else {
    body.classList.replace("dark-mode", "light-mode");
    localStorage.setItem("mode", "light");
  }
}

// Check if the user has selected a mode before
const currentMode = localStorage.getItem("mode");
if (currentMode === "dark") {
  body.classList.replace("light-mode", "dark-mode");
}

toggleButton.addEventListener("click", toggleDarkMode);




