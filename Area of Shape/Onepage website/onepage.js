document.addEventListener('DOMContentLoaded', function() {
    const body = document.querySelector('body');

    // Change background color
    document.getElementById('changeColor').addEventListener('click', function() {
        body.style.backgroundColor = getRandomColor();
    });

    // Display message on form submission
    document.getElementById('contactForm').addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Thanks, we will get back to you soon.');
        this.reset();
    });

    // Toggle Light/Dark Mode
    document.getElementById('toggleTheme').addEventListener('click', function() {
        body.classList.toggle('dark-mode');
    });

    // Expand/Collapse Sections
    document.querySelectorAll('.toggle-section').forEach(button => {
        button.addEventListener('click', function() {
            const sectionId = this.getAttribute('data-section');
            const section = document.getElementById(sectionId);
            section.classList.toggle('collapsed');
        });
    });

    // Change Text Size
    document.getElementById('increaseText').addEventListener('click', function() {
        changeTextSize(1);
    });

    document.getElementById('decreaseText').addEventListener('click', function() {
        changeTextSize(-1);
    });

    // Image Gallery Slider
    let currentImage = 0;
    const images = document.querySelectorAll('.gallery img');
    document.getElementById('next').addEventListener('click', function() {
        currentImage = (currentImage + 1) % images.length;
        showImage(currentImage);
    });

    document.getElementById('prev').addEventListener('click', function() {
        currentImage = (currentImage - 1 + images.length) % images.length;
        showImage(currentImage);
    });
    showImage(0); // Initialize gallery with the first image

    // Change Background Image
    document.getElementById('changeBackground').addEventListener('click', function() {
        body.style.backgroundImage = `url(${getRandomBackground()})`;
    });
});

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function changeTextSize(delta) {
    const currentSize = parseFloat(window.getComputedStyle(document.body).fontSize);
    document.body.style.fontSize = `${currentSize + delta}px`;
}

function showImage(index) {
    const images = document.querySelectorAll('.gallery img');
    images.forEach(img => img.style.display = 'none');
    images[index].style.display = 'block';
}

function getRandomBackground() {
    const backgrounds = ['image1.jpg', 'image2.jpg', 'image3.jpg']; // Add your images or paths here
    const randomIndex = Math.floor(Math.random() * backgrounds.length);
    return backgrounds[randomIndex];
}