function myFunction(x) {
    x.classList.toggle("change");
  }

const menuIcon = document.getElementById("menu-icon")
const menuList = document.getElementById("menu-list")

menuIcon.addEventListener("click", () => {
    menuList.classList.toggle("hidden")
} )