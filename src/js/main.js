//Preload no transitions
document.body.classList.remove("preload");

//Header
const hamburger = document.querySelector(".hamburger");
const blankActive = document.querySelector(".blank-active");

hamburger.addEventListener("click", function () {
  this.classList.toggle("active");
  blankActive.classList.toggle("blank-deactivate");
});

const sidebar = document.querySelector("aside");

function openSidebar() {
  sidebar.classList.toggle("aside-active");
}

hamburger.addEventListener("click", openSidebar);
