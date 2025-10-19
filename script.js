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

const box = document.getElementById('swiper-section')
const changeButton = document.getElementById("watch")

changeButton.addEventListener('click', () =>{
  box.classList.toggle('show-all');

  if(box.classList.contains('show-all')){
    changeButton.textContent ='Скрыть';
    Image.src = './img/arrow.svg'
  } else {
    changeButton.textContent = 'Показать все';
    Image.src = './img/arrow.svg'
  }

})