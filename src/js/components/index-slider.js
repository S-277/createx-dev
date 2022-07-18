import Swiper, {
  Navigation
} from 'swiper';

Swiper.use([Navigation]);

const portSlider = document.querySelector('.portfolio-section__items');
const relatedSlider = document.querySelector('.related-projects__items');


if (portSlider) {
  const portfolioSlider = new Swiper(portSlider, {
    slidesPerView: '3',
    spaceBetween: 30,
    loop: false,
    on: {
      init: function () {

        const activeSlide = portSlider.querySelector('.swiper-slide-active');

        const nextActiveSlide = activeSlide.nextElementSibling;

        const nextNextActiveSlide = nextActiveSlide.nextElementSibling;

        activeSlide.classList.add('swiper-visible');
        nextActiveSlide.classList.add('swiper-visible');
        nextNextActiveSlide.classList.add('swiper-visible');
      },
    },
    navigation: {
      nextEl: '.portfolio-section__next',
      prevEl: '.portfolio-section__prev',
    },
  });

  document.querySelector('.portfolio-section__prev').addEventListener('click', () => {
    const activeSlide = portSlider.querySelector('.swiper-slide-next');
  
    document.querySelectorAll('.portfolio-section__items .swiper-slide').forEach(el => {
      el.classList.remove('swiper-visible')
    })
  
    if (activeSlide.previousElementSibling) {
      const nextActiveSlide = activeSlide.previousElementSibling;
      activeSlide.classList.add('swiper-visible');
      activeSlide.nextElementSibling.classList.add('swiper-visible');
      nextActiveSlide.classList.add('swiper-visible');
    }
  
  });
  
  document.querySelector('.portfolio-section__next').addEventListener('click', () => {
    const activeSlide = portSlider.querySelector('.swiper-slide-active');
  
    const nextActiveSlide = activeSlide.nextElementSibling;
  
    const nextNextActiveSlide = nextActiveSlide.nextElementSibling;
  
    document.querySelectorAll('.portfolio-section__items .swiper-slide').forEach(el => {
      el.classList.remove('swiper-visible')
    })
  
    activeSlide.classList.add('swiper-visible');
    nextActiveSlide.classList.add('swiper-visible');
    nextNextActiveSlide.classList.add('swiper-visible');
  })
};

if (relatedSlider) {
  const relatedProjSlider = new Swiper(relatedSlider, {
    slidesPerView: '3',
    spaceBetween: 30,
    loop: false,
    on: {
      init: function () {

        const activeSlide = relatedSlider.querySelector('.swiper-slide-active');

        const nextActiveSlide = activeSlide.nextElementSibling;

        const nextNextActiveSlide = nextActiveSlide.nextElementSibling;

        activeSlide.classList.add('swiper-visible');
        nextActiveSlide.classList.add('swiper-visible');
        nextNextActiveSlide.classList.add('swiper-visible');
      },
    },
    navigation: {
      nextEl: '.related-projects__next',
      prevEl: '.related-projects__prev',
    },
  });

  document.querySelector('.related-projects__prev').addEventListener('click', () => {
    const activeSlide = relatedSlider.querySelector('.swiper-slide-next');
  
    document.querySelectorAll('.related-projects__items .swiper-slide').forEach(el => {
      el.classList.remove('swiper-visible')
    })
  
    if (activeSlide.previousElementSibling) {
      const nextActiveSlide = activeSlide.previousElementSibling;
      activeSlide.classList.add('swiper-visible');
      activeSlide.nextElementSibling.classList.add('swiper-visible');
      nextActiveSlide.classList.add('swiper-visible');
    }
  
  });
  
  document.querySelector('.related-projects__next').addEventListener('click', () => {
    const activeSlide = relatedSlider.querySelector('.swiper-slide-active');
  
    const nextActiveSlide = activeSlide.nextElementSibling;
  
    const nextNextActiveSlide = nextActiveSlide.nextElementSibling;
  
    document.querySelectorAll('.related-projects__items .swiper-slide').forEach(el => {
      el.classList.remove('swiper-visible')
    })
  
    activeSlide.classList.add('swiper-visible');
    nextActiveSlide.classList.add('swiper-visible');
    nextNextActiveSlide.classList.add('swiper-visible');
  })
};




// testimonials slider


const testimonialsSlider = document.querySelector('.testimonials__items');

const testimonialsSwiperSlider = new Swiper(testimonialsSlider, {
  slidesPerView: '1',
  spaceBetween: 30,
  loop: true,
  navigation: {
    nextEl: '.testimonials__next',
    prevEl: '.testimonials__prev',
  },
});
