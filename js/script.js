const toggleIcon = document.getElementById('toggleIcon');
const navLinks = document.querySelector('.nav-links');

toggleIcon.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

document.addEventListener('DOMContentLoaded', function () {
  const backToTopButton = document.getElementById('backToTop');

  window.addEventListener('scroll', function () {
    if (window.scrollY > 300) {
      backToTopButton.style.display = 'block';
    } else {
      backToTopButton.style.display = 'none';
    }
  });

  backToTopButton.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});
