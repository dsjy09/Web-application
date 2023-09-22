// Get the navbar element
const navbar = document.getElementById('mySidebar');

// Get the offset position of the navbar
const sticky = navbar.offsetTop;

// Add event listener for scrolling
window.addEventListener('scroll', function() {
// Add or remove 'sticky' class based on the scroll position
if (window.pageYOffset >= sticky) {
    navbar.classList.add('sticky');
} else {
    navbar.classList.remove('sticky');
}
});