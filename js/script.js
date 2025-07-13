const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');
const mobileMenuLinks = mobileMenu.getElementsByTagName('a');
const menuIcon = mobileMenuButton.querySelector('.menu-icon');

mobileMenuButton.addEventListener('click', () => {
  mobileMenu.classList.toggle('active');
  menuIcon.classList.toggle('active');

  // Toggle between hamburger and close icons
  if (menuIcon.classList.contains('active')) {
    menuIcon.classList.remove('fa-bars');
    menuIcon.classList.add('fa-times');
  } else {
    menuIcon.classList.remove('fa-times');
    menuIcon.classList.add('fa-bars');
  }
});

// Close mobile menu when a link is clicked
Array.from(mobileMenuLinks).forEach((link) => {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('active');
    menuIcon.classList.remove('active');
    menuIcon.classList.remove('fa-times');
    menuIcon.classList.add('fa-bars');
  });
});

// Close mobile menu when clicking outside
document.addEventListener('click', (event) => {
  if (!mobileMenuButton.contains(event.target) && !mobileMenu.contains(event.target)) {
    mobileMenu.classList.remove('active');
    menuIcon.classList.remove('active');
    menuIcon.classList.remove('fa-times');
    menuIcon.classList.add('fa-bars');
  }
});

// Initialize Swiper for testimonials
const testimonialsSwiper = new Swiper('.testimonials-swiper', {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  navigation: {
    nextEl: '#testimonial-next',
    prevEl: '#testimonial-prev',
  },
  breakpoints: {
    768: {
      spaceBetween: 30,
    },
    1024: {
      spaceBetween: 50,
    },
  },
});
