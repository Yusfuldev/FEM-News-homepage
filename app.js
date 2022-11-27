const burger = document.querySelector(".burger");
const menuClose = document.querySelector(".menu-close");
const menu = document.querySelector(".nav-menu");

function openMenu(e) {
  menu.classList.add("show");
  document.body.style.backgroundColor = "rgba(0,0,0,.4)";
  console.log("clicked");
}
function closeMenu(e) {
  menu.classList.remove("show");
  document.body.style.backgroundColor = "hsl(36, 100%, 99%)";
  console.log("click");
}
document.body.addEventListener("click", (e) => {
  if (e.target !== menu.children && e.target !== menu && e.target !== burger) {
    closeMenu();
  }
});
burger.addEventListener("click", openMenu);
menuClose.addEventListener("click", closeMenu);
