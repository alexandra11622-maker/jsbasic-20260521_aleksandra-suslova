function initCarousel() {
    const inner = document.querySelector('.carousel__inner');
    const arrowRight = document.querySelector('.carousel__arrow_right');
    const arrowLeft = document.querySelector('.carousel__arrow_left');

    let currentSlide = 0;
    const slidesCount = 4;

    // Получаем реальную ширину первого слайда
    const slideWidth = document.querySelector('.carousel__slide').offsetWidth;

    function updateArrows() {
        arrowLeft.style.display = currentSlide === 0 ? 'none' : '';
        arrowRight.style.display = currentSlide === slidesCount - 1 ? 'none' : '';
    }

    arrowRight.addEventListener('click', () => {
        if (currentSlide < slidesCount - 1) {
            currentSlide++;
            inner.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
            updateArrows();
        }
    });

    arrowLeft.addEventListener('click', () => {
        if (currentSlide > 0) {
            currentSlide--;
            inner.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
            updateArrows();
        }
    });

    // Инициализация
    updateArrows();
}

initCarousel();