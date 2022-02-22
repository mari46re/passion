const btn = document.querySelector(".toggle-btn");
const nav = document.querySelector("nav");

function toggleMenu() {
  nav.classList.toggle("shown");
  const menuShown = nav.classList.contains("shown");

  if (menuShown) {
    btn;
    document.querySelector("#logo").classList.add("hide");
    document.querySelector("button").classList.add("btn-shown");
  } else {
    document.querySelector("button").classList.remove("btn-shown");
    document.querySelector("#logo").classList.remove("hide");
    btn;
  }
}
btn.addEventListener("click", toggleMenu);
