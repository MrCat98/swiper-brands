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

let toggleBtn = document.getElementById('wath-button');
let brandsList = document.querySelector('.swiper-wrapper');

toggleBtn.addEventListener('click', () => {
  brandsList.classList.toggle('show');

  if (brandsList.classList.contains('show')) {
    toggleBtn.textContent = 'Скрыть';
  } else {
    toggleBtn.textContent = 'Показать все';
  }
});