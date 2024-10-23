/* slider */
window.addEventListener("DOMContentLoaded", () => {

  //передаем breakpoint, класс и настройки свайпера
  const resizibleSwiper = (breakpoint, swiperClass, swiperSettings) => {
    let swiper;

    //подписываемся на изменения ширины экрана
    breakpoint = window.matchMedia(breakpoint);

    const enableSwiper = function (className, settings) {
      swiper = new Swiper(className, settings);
    };

    //если breakpoint.matches = true, т.е. (экран < 768px) - включаем свайпер
    const checker = function () {
      if (breakpoint.matches) {
        return enableSwiper(swiperClass, swiperSettings);
      } else {
        if (swiper !== undefined) swiper.destroy(true, true);
        return; 
      }
    };

    //при изменении ширины экрана вызываем checker
    breakpoint.addEventListener("change", checker);

    //при загрузке сайта вызываем checker
    checker();
  };

  resizibleSwiper("(max-width: 768px)", ".slider-brands", {
    direction: "horizontal",
    loop: true,
    spaceBeween: 0,
    slidesPerView: 1.25,
    pagination: {
      el: ".swiper-pagination",
      clickable: "true",
    },
  });
});

/* buttons */
const readMoreBtn = document.querySelector(".button_type_read-more");
const containerEl = document.querySelector(".brands__grid");

readMoreBtn.addEventListener("click", function () {
  if (!containerEl.classList.contains("brands__grid--show")) {
    containerEl.classList.add("brands__grid--show");
    readMoreBtn.textContent = "Скрыть";
    readMoreBtn.style.backgroundImage = "url('./images/expand-top.svg')";
  } else {
    containerEl.classList.remove("brands__grid--show");
    readMoreBtn.textContent = "Показать все";
    readMoreBtn.style.backgroundImage = "url('./images/expand.svg')";
  }
});
