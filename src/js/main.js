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

//Sliders
const swiper1 = new Swiper(".hero .mySwiper", {
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  speed: 500,
  scrollbar: {
    el: ".hero .swiper-scrollbar",
    draggable: true,
  },
});

const swiper2 = new Swiper(".wines-cont .mySwiper", {
  slidesPerView: 3,
  spaceBetween: 32,
  speed: 500,
  centeredSlides: true,
  roundLengths: true,
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
