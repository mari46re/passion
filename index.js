const btn = document.querySelector(".toggle-btn"); // lavet en const btn
const nav = document.querySelector("nav"); //lavet en const nav

function toggleMenu() {
  //lavet en funktion der hedder togglemenu
  nav.classList.toggle("shown"); // toggler mellem shown og ikke shoen
  const menuShown = nav.classList.contains("shown"); //lavet en const menushown

  if (menuShown) {
    // lavet en if sætning
    btn;
    document.querySelector("#logo").classList.add("hide"); //når menushown får id'et logo class hide på
    document.querySelector("button").classList.add("btn-shown"); //når menushown vises btn-shown på button
  } else {
    // lavet en else sætning
    document.querySelector("button").classList.remove("btn-shown"); // når menushown ikke er vist fjernes btn-shown
    document.querySelector("#logo").classList.remove("hide"); // når menushown ikke er vist fjernes hide på id'et logo
    btn;
  }
}
btn.addEventListener("click", toggleMenu);
