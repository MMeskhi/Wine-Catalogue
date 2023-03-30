//Preload no transitions
document.body.classList.remove("preload");

//Header
const menu = document.querySelector(".menu");
const hamburger = document.querySelector(".hamburger");

menu.addEventListener("click", function () {
  hamburger.classList.toggle("active");
});

const sidebar = document.querySelector("aside");

function openSidebar() {
  sidebar.classList.toggle("aside-active");
}

menu.addEventListener("click", openSidebar);

const asideMenu = document.querySelector("aside ul");

window.onscroll = function (event) {
  const scroll = window.pageYOffset;
  if (scroll < 80) {
    menu.style.transform = "translateY(0)";
    asideMenu.style.margin = "157px auto 157px 40px";
  } else if (scroll >= 80 && scroll < 160) {
    menu.style.transform = "translateY(-40px)";
    asideMenu.style.margin = "120px auto 120px 40px";
  }
};

//ON click scroll to that section
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", function () {
  const currentScrollPos =
    window.pageYOffset ||
    document.documentElement.scrollTop ||
    document.body.scrollTop;

  sections.forEach(function (section) {
    const sectionTop = section.offsetTop - 800;
    const sectionBottom = sectionTop + section.offsetHeight;

    if (currentScrollPos >= sectionTop && currentScrollPos < sectionBottom) {
      navLinks.forEach(function (navLink) {
        if (navLink.getAttribute("href") === "#" + section.id) {
          navLink.classList.add("active");
        } else {
          navLink.classList.remove("active");
        }
      });
    }
  });
});

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
  slidesPerView: 2.1,
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
