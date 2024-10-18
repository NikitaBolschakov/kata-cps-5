/* slider swiper */
const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

   // If we need pagination
   pagination: {
    el: '.swiper-pagination',
  },
  
  slidesPerView: 1.25,
});

/* buttons */
const readMoreBtn = document.querySelector('.button_type_read-more');
const containerEl = document.querySelector('.brands__grid');

readMoreBtn.addEventListener('click', function() {
  if (!containerEl.classList.contains('brands__grid--show')) {
    containerEl.classList.add('brands__grid--show');
    readMoreBtn.textContent = 'Скрыть';
    readMoreBtn.style.backgroundImage = "url('./images/expand-top.svg')";
  } else {
    containerEl.classList.remove('brands__grid--show');
    readMoreBtn.textContent = 'Показать все';
    readMoreBtn.style.backgroundImage = "url('./images/expand.svg')";
  }
});

