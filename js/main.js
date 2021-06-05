
/* ====== AUTO WINDOW WIDTH RESIZE ======== */
function widthResize() {
  const projectWidth = document.querySelector('.project-container');
  var currentWidth = window.innerWidth;

  projectWidth.style.width = currentWidth;
  console.log(currentWidth);

}

window.addEventListener('resize', widthResize);

/* ====== HAMBURGER TOGGLE ======== */

const menu = document.querySelector('.hamburger-menu');
const header = document.querySelector('.header-bg');

menu.addEventListener('click', () => {
  const nav = document.querySelector('.nav');
  nav.classList.toggle('show');
  console.log('show');
})
function scrollActive() {
  const scrollY = window.pageYOffset;
  let currentS = scrollY + 1;

  if(scrollY >= 200) {
    console.log(scrollY + "changing" + currentS);
    setTimeout(() => {
      console.log('display block');
      header.style.display = 'block';
    }, 500);
    console.log('display none')
    header.style.display = 'none';
  }
  
}
window.addEventListener('scroll', scrollActive);

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 5,
  spaceBetween: 30,
  loop: true,
  freeMode: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 2,
      spaceBetween: 30
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 3,
      spaceBetween: 40
    }
  }
});
