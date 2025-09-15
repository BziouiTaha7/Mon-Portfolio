let menuIcon = document.getElementById('menu-icon');
let navbar = document.getElementById('nv');

function clickedNv() {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
}

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
  // Iterate through each section
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if (top >= offset && top < offset + height) {
      navLinks.forEach(links => {
        links.classList.remove('active');
        document
          .querySelector('header nav a[href*=' + id + ']')
          .classList.add('active');
      });
    }
  });

  // sticky header
  let header = document.querySelector('header');
  header.classList.toggle('sticky', window.scrollY > 100);
};

// 👉 إغلاق navbar ملي كندير click على link
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
  });
});

// ScrollReveal
ScrollReveal({
  reset: true,
  distance: '80px',
  duration: 2000,
  delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal(
  '.home-img, .contact-form, .education-column .title, .skills-column .title',
  { origin: 'bottom' }
);
ScrollReveal().reveal(
  '.home-content h1, .about-img, .education-content .content, .skills-content .progress',
  { origin: 'left' }
);
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });
