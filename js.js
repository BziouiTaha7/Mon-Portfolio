let menuIcon = document.getElementById('menu-icon');
let navbar = document.getElementById('nv');

function clickedNv() {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    // Iterate through each section in the document
    sections.forEach(sec => {
        // Get the current scroll position
        let top = window.scrollY;
        // Calculate the offset, height, and ID of the current section
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        // Check if the current scroll position is within the bounds of the section
        if(top >= offset && top < offset + height) {
            // Iterate through each navigation link
         navLinks.forEach(links => {
            // Remove the 'active' class from all navigation links
     links.classList.remove('active');
     // Add the 'active' class to the navigation link associated with the current section
     document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
});
        };
    });
    //sticky header
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);
//remove toggle icon and navbar when click navbar links (scoll)

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

ScrollReveal({
    reset:true,
    distance:'80px',
    duration:2000,
    delay:200
});

ScrollReveal().reveal('.home-content, .heading',{ origin:'top' });
ScrollReveal().reveal('.home-img, .contact-form, .education-column .title, .skills-column .title' ,{origin:'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img, .education-content .content, .skills-content .progress',{origin:'left' });
ScrollReveal().reveal('.home-content p, .about-content',{origin:'right' });