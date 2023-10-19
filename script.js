// Mobile menu
document.addEventListener('DOMContentLoaded', () => {

    const mobileMenu = document.querySelector('.mobile__menu');
    const hamburger = document.querySelector('.ph-dots-nine');
    const closeHamburger = document.querySelector('.ph-x');

    hamburger.addEventListener('click', () => {
        mobileMenu.classList.toggle('active')
    })

    closeHamburger.addEventListener('click', () => {
        mobileMenu.classList.toggle('active')
    })

})