// Price Tab

const tabs = document.querySelector('.tabs')
const btns = document.querySelectorAll('.tabs__btn')
const boxes = document.querySelectorAll('.tabs__box')

tabs.addEventListener('click', e => {
   if (e.target.classList.contains('tabs__btn') && !e.target.classList.contains('tabs__btn--active')) {
      btns.forEach((el, i) => {
         el.classList.remove('tabs__btn--active')
         boxes[i].classList.remove('tabs__box--active')
      })
      e.target.classList.add('tabs__btn--active')
      let indexBtn = [...btns].indexOf(e.target)
      boxes[indexBtn].classList.add('tabs__box--active')
   }
})

const swiper = new Swiper('.reviews-slider', {
   centeredSlides: true,
   slidesPerGroup: 1,
   initialSlide: 1,
   speed: 500,
   // spaceBetween: 50,
   // Navigation arrows
   navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
   },
   breakpoints: {
      320: {
         centeredSlides: true,
         slidesPerView: 1,
      },
      500: {
         centeredSlides: true,
         slidesPerView: 2,
      },
      992: {
         slidesPerView: 3,
      },
   }
});