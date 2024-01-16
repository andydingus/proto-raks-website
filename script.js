const hamburger = document.querySelector('.hamburger');
const mobileNav = document.querySelector('.mobile-nav');

hamburger.addEventListener('click', () => {
    console.log('Clicked hamburger!');
    mobileNav.style.display = 'flex';
})