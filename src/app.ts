// 1. Smooth Scroll for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const targetElement = document.querySelector(this.getAttribute('href'));
    
    // Scroll to the target element with smooth behavior
    targetElement?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  });
});

// 2. Sticky Navigation Bar on Scroll
const navbar = document.querySelector('header');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) { // Adjust 50px to where you want the navbar to stick
    navbar?.classList.add('sticky');
  } else {
    navbar?.classList.remove('sticky');
  }
});

// 3. Check if Element is in the Viewport
function isInViewport(element: Element): boolean {
  const rect = element.getBoundingClientRect();
  return rect.top >= 0 &&
         rect.left >= 0 &&
         rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
         rect.right <= (window.innerWidth || document.documentElement.clientWidth);
}

// 4. Fade-In Elements on Scroll
const fadeInElements = document.querySelectorAll('.fade-in');

window.addEventListener('scroll', () => {
  fadeInElements.forEach(element => {
    if (isInViewport(element)) {
      element.classList.add('visible');
    }
  });
});

// 5. Show "Back to Top" Button
const backToTopButton = document.getElementById('backToTopBtn');

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) { // Show the button after scrolling down 300px
    backToTopButton?.classList.add('visible');
  } else {
    backToTopButton?.classList.remove('visible');
  }
});

// 6. Scroll to Top When Back-to-Top Button is Clicked
backToTopButton?.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
});
