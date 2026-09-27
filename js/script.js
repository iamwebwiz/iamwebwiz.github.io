const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// Section index: mark the section currently in view
const indexLinks = Array.from(document.querySelectorAll('.section-index a'));
const indexedSections = indexLinks.map((link) => document.querySelector(link.getAttribute('href')));

function setCurrentSection(id) {
  indexLinks.forEach((link) => {
    if (link.getAttribute('href') === `#${id}`) link.setAttribute('aria-current', 'true');
    else link.removeAttribute('aria-current');
  });
}

if (indexLinks.length && 'IntersectionObserver' in window) {
  const visible = new Map();
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => visible.set(entry.target.id, entry.isIntersecting));
      const current = indexedSections.find((section) => visible.get(section.id));
      if (current) setCurrentSection(current.id);
    },
    { rootMargin: '-20% 0px -60% 0px' }
  );
  indexedSections.forEach((section) => observer.observe(section));
  setCurrentSection(indexedSections[0].id);
}

// Initialize Swiper for testimonials
const testimonialsSwiper = new Swiper('.testimonials-swiper', {
  slidesPerView: 1,
  spaceBetween: 24,
  loop: true,
  speed: prefersReducedMotion ? 0 : 300,
  navigation: {
    nextEl: '#testimonial-next',
    prevEl: '#testimonial-prev',
  },
  autoplay: prefersReducedMotion
    ? false
    : {
        delay: 6000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      },
  a11y: {
    prevSlideMessage: 'Previous testimonial',
    nextSlideMessage: 'Next testimonial',
  },
});

// Hold the carousel still while keyboard focus is inside it
const testimonialsSection = document.getElementById('testimonials');
testimonialsSection.addEventListener('focusin', (event) => {
  if (event.target.matches(':focus-visible') && testimonialsSwiper.autoplay.running) testimonialsSwiper.autoplay.pause();
});
testimonialsSection.addEventListener('focusout', () => {
  if (testimonialsSwiper.autoplay.running) testimonialsSwiper.autoplay.resume();
});

// Light/dark theme switch (the initial theme is applied in <head> before first paint)
const themeToggle = document.getElementById('theme-toggle');
const themeColorMeta = document.querySelector('meta[name="theme-color"]');

function applyTheme(theme) {
  document.documentElement.dataset.theme = theme;
  themeToggle.setAttribute('aria-label', theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme');
  themeColorMeta.setAttribute('content', theme === 'dark' ? '#0b0d0e' : '#f2f4f3');
}

themeToggle.addEventListener('click', () => {
  const next = document.documentElement.dataset.theme === 'light' ? 'dark' : 'light';
  applyTheme(next);
  try {
    localStorage.setItem('theme', next);
  } catch (e) {
    // Storage can be unavailable (private mode); the switch still works for this visit
  }
});

applyTheme(document.documentElement.dataset.theme === 'light' ? 'light' : 'dark');

document.getElementById('copyright-year').textContent = new Date().getFullYear();
