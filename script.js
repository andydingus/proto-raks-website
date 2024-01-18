const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.nav-bar');
const main = document.querySelector('main');
const navLinks = document.querySelectorAll('.nav-link');
const facebookLogo = document.getElementById('facebook');
const mailLogo = document.getElementById('mail');

const navSlide = () => {
    // Toggle nav event
    hamburger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
        document.body.classList.toggle('nav-active');
        // Animate the links
        navLinks.forEach((link, index) => {
            // Index / 7 allows for a delay for the links to 'pop in'
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 10 + 0.3}s`;
                console.log(index / 7);
            }
        });
        // Burger animation
        hamburger.classList.toggle('toggle');
    });
}

navSlide();