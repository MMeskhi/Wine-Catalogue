//Preload no transitions
document.body.classList.remove("preload");

//Header
const hamburger = document.querySelector(".hamburger");

hamburger.addEventListener("click", function () {
  this.classList.toggle("active");
});
