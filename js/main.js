
const swiperTop = new Swiper('.top__swiper', {
    direction: 'horizontal',
    loop: true,
    fadeEffect: {
        crossFade: true // Слайды плавно накладываются друг на друга
    },
    
    // Включаем свободный режим (листание рукой)
    freeMode: {
        enabled: true,
        // sticky: true ,   // Если false, слайд не будет "прилипать" к краю, можно оставить в любом положении
        // momentumRatio: 1, // Скорость инерции
    },

    // Настройки касаний
    grabCursor: true,
    touchEventsTarget: 'container',
    
    // Параметры скорости
    speed: 1000, // Скорость переключения при обычном клике
    
    // Пагинация (если нужна)
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});