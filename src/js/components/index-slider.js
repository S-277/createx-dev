import Swiper, {
  Navigation, Thumbs, Pagination, Autoplay
} from 'swiper';

Swiper.use([Navigation, Thumbs, Pagination, Autoplay]);


// index slider


const heroSlider = new Swiper('.hero-slider', {
  slidesPerView: '1',
  speed: 1500,
  loop: true,
  autoplay: {
    delay: 2500,
  },
  pagination: {
    el: '.hero__pagination',
    type: 'bullets',
    clickable: true,
  },
  navigation: {
    nextEl: '.hero__next',
    prevEl: '.hero__prev',
  },
});

const portSlider = document.querySelector('.portfolio-section__items');
const relatedSlider = document.querySelector('.related-projects__items');


if (portSlider) {
  const portfolioSlider = new Swiper(portSlider, {
    slidesPerView: 1,
    spaceBetween: 30,
    breakpoints: {
      576: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 3,
      }
    },
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
    slidesPerView: 1,
    breakpoints: {
      576: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 3,
      }
    },
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

const workImages = document.querySelector('.work-images-slider');

if (workImages) {
  const workSlider = new Swiper('.work-images-nav', {
    spaceBetween: 20,
    slidesPerView: 3,
    freeMode: true,
    watchSlidesProgress: true,
    breakpoints: {
      576: {
        slidesPerView: 6,
      },
      768: {
        slidesPerView: 10,
      }
    },
  });
  const workSlidesNav = new Swiper(workImages, {
    spaceBetween: 20,
    slidesPerView: 1,
    navigation: {
      nextEl: ".work-images__next",
      prevEl: ".work-images__prev",
    },
    thumbs: {
      swiper: workSlider,
    },
  });
};


const historySlider = document.querySelector('.history-slider');

if (historySlider) {

  const HistoryThisSlider = new Swiper(historySlider, {
    spaceBetween: 20,
    slidesPerView: 1,
    navigation: {
      nextEl: ".history__next",
      prevEl: ".history__prev",
    }
  });

  HistoryThisSlider.on('slideChange', function () {
    historyBtns.forEach(el => {
      el.classList.remove('history-nav__btn--active');
    });

    document.querySelector(`.history-nav__btn[data-index="${HistoryThisSlider.realIndex}"]`).classList.add('history-nav__btn--active');
  });

  const historyBtns = document.querySelectorAll('.history-nav__btn');

  historyBtns.forEach((el, idx) => {
    el.setAttribute('data-index', idx);

    el.addEventListener('click', (e) => {
      const index = e.currentTarget.dataset.index;

      historyBtns.forEach(el => {
        el.classList.remove('history-nav__btn--active');
      });

      e.currentTarget.classList.add('history-nav__btn--active');

      HistoryThisSlider.slideTo(index);
    });
  });
};

