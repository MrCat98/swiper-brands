let swiperInstance;

function initSwiper() {
  if (window.innerWidth < 768 && !swiperInstance) {
    swiperInstance = new Swiper('.swiper', {
      slidesPerView: 1.5,
      spaceBetween: 16,
      loop: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });
  }

  else if (window.innerWidth >= 768 && swiperInstance) {
    swiperInstance.destroy(true, true);
    swiperInstance = null;
  }
}

initSwiper();

window.addEventListener('resize', initSwiper);

const buttonWath = document.getElementById('wath-button');

buttonWath.addEventListener("mouseover", event =>{

  event.target.style.backgroundColor = "#7E7E82;"
  
})