const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.nav-bar');
const navLinks = document.querySelectorAll('.nav-link');

const navSlide = () => {
    // Toggle nav event
    hamburger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
    })

    // Animate the links
    navLinks.forEach((link, index) => {
        // Index / 7 allows for a delay for the links to 'pop in'
        link.style.animation = `navLinkFade 0.5s ease forwads ${index / 7}s`;
        console.log(index / 7);
    });
}

navSlide();