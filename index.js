const btn = document.querySelector(".toggle-btn");
const nav = document.querySelector("nav");

function toggleMenu() {
  nav.classList.toggle("shown");
  const menuShown = nav.classList.contains("shown");

  if (menuShown) {
    btn;
    document.querySelector("button").classList.add("btn-shown");
  } else {
    btn;
    document.querySelector("button").classList.remove("btn-shown");
  }
}
btn.addEventListener("click", toggleMenu);
