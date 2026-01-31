
const navbar = document.getElementById('navbar');


window.addEventListener('scroll', () => {
    // Check if the user has scrolled more than 50 pixels down
    if (window.scrollY > 50) {
        // If yes, add the 'scrolled' class (changes color)
        navbar.classList.add('scrolled');
    } else {
        // If they scroll back to the top, remove the class (transparent again)
        navbar.classList.remove('scrolled');
    }
});