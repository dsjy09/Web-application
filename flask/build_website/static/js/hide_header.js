const header = document.getElementById('header');

let prevScrollPos = window.pageYOffset;

// Add event listener for scrolling
window.addEventListener('scroll', function() {
const currentScrollPos = window.pageYOffset;

// Determine scroll direction
if (prevScrollPos > currentScrollPos) {
    // Scroll up - show the header
    header.classList.remove('hide-header');
} else {
    // Scroll down - hide the header
    header.classList.add('hide-header');
}

prevScrollPos = currentScrollPos;
});