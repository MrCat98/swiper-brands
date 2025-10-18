const mySwiper = new Swiper('.swiper', {
        slidesPerView: "auto",
        loop:true,
        spaceBetween: 16,
      breakpoints: {
        320: {
          slidesPerView:1.5,
          spaceBetween:16,
        },
        768:{
            slidesPerView:6,
            spaceBetween:24,
            
        }
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      }
    });
