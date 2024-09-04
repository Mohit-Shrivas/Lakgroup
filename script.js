// Carousel Slider Logic
document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.slide');
    const prev = document.querySelector('.prev');
    const next = document.querySelector('.next');
    let currentIndex = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.style.display = 'none';
            if (i === index) {
                slide.style.display = 'block';
            }
        });
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        showSlide(currentIndex);
    }

    next.addEventListener('click', nextSlide);
    prev.addEventListener('click', prevSlide);

    // Show the first slide initially
    showSlide(currentIndex);

    // Auto-slide functionality (optional)
    setInterval(nextSlide, 5000); // Change slide every 5 seconds
});
