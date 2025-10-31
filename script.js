document.addEventListener('DOMContentLoaded', () => {
    const carouselSlide = document.querySelector('.carousel-slide');
    const carouselImages = document.querySelectorAll('.carousel-slide img');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');

    let counter = 0;
    const size = carouselImages[0].clientWidth; // Width of a single image

    // Set the initial position of the carousel
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

    // Next button functionality
    nextBtn.addEventListener('click', () => {
        if (counter >= carouselImages.length - 1) { // If at last image, loop to first (optional)
            counter = -1; // Set to -1 so incrementing makes it 0 (first image)
        }
        counter++;
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    });

    // Previous button functionality
    prevBtn.addEventListener('click', () => {
        if (counter <= 0) { // If at first image, loop to last (optional)
            counter = carouselImages.length; // Set to total images so decrementing makes it last image
        }
        counter--;
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    });

    Optional: Auto-slide
    setInterval(() => {
        nextBtn.click();
    }, 5000); // Change image every 5 seconds

});