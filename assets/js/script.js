
const backToTop = document.getElementById('backToTop');
window.addEventListener('scroll', () => {
    if (backToTop) {
        backToTop.style.display = window.scrollY > 300 ? 'block' : 'none';
    }
});
