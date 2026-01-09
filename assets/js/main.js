/**
 * Henry Coaster Memorial School - Main JavaScript
 * Handles carousel, mobile navigation, and interactive elements
 */

// Wait for DOM to be ready
document.addEventListener('DOMContentLoaded', function() {
  
  // ==========================================
  // MOBILE MENU TOGGLE
  // ==========================================
  
  const menuToggle = document.getElementById('menuToggle');
  const navList = document.getElementById('navList');
  
  if (menuToggle && navList) {
    menuToggle.addEventListener('click', function() {
      navList.classList.toggle('active');
      
      // Animate hamburger to X
      const spans = menuToggle.querySelectorAll('span');
      if (navList.classList.contains('active')) {
        spans[0].style.transform = 'rotate(45deg) translate(8px, 8px)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'rotate(-45deg) translate(8px, -8px)';
      } else {
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
      }
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
      if (!menuToggle.contains(event.target) && !navList.contains(event.target)) {
        navList.classList.remove('active');
        const spans = menuToggle.querySelectorAll('span');
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
      }
    });
  }
  
  
  // ==========================================
  // PHOTO CAROUSEL
  // ==========================================
  
  const carousel = document.querySelector('.carousel-track');
  
  if (carousel) {
    const slides = carousel.querySelectorAll('.carousel-slide');
    const dotsContainer = carousel.parentElement.querySelector('.carousel-controls');
    
    if (slides.length > 0) {
      let currentSlide = 0;
      const slideInterval = 5000; // 5 seconds per slide
      
      // Create dots
      if (dotsContainer) {
        slides.forEach((_, index) => {
          const dot = document.createElement('button');
          dot.classList.add('carousel-dot');
          dot.setAttribute('aria-label', `Go to slide ${index + 1}`);
          if (index === 0) dot.classList.add('active');
          
          dot.addEventListener('click', () => {
            goToSlide(index);
          });
          
          dotsContainer.appendChild(dot);
        });
      }
      
      // Function to show specific slide
      function goToSlide(n) {
        slides[currentSlide].classList.remove('active');
        
        if (dotsContainer) {
          const dots = dotsContainer.querySelectorAll('.carousel-dot');
          dots[currentSlide].classList.remove('active');
        }
        
        currentSlide = n;
        
        if (currentSlide >= slides.length) {
          currentSlide = 0;
        }
        if (currentSlide < 0) {
          currentSlide = slides.length - 1;
        }
        
        slides[currentSlide].classList.add('active');
        
        if (dotsContainer) {
          const dots = dotsContainer.querySelectorAll('.carousel-dot');
          dots[currentSlide].classList.add('active');
        }
      }
      
      // Auto-advance slides
      function nextSlide() {
        goToSlide(currentSlide + 1);
      }
      
      // Start auto-rotation
      let autoSlide = setInterval(nextSlide, slideInterval);
      
      // Pause on hover
      carousel.parentElement.addEventListener('mouseenter', () => {
        clearInterval(autoSlide);
      });
      
      carousel.parentElement.addEventListener('mouseleave', () => {
        autoSlide = setInterval(nextSlide, slideInterval);
      });
      
      // Initialize first slide
      slides[0].classList.add('active');
    }
  }
  
  
  // ==========================================
  // SMOOTH SCROLL FOR ANCHOR LINKS
  // ==========================================
  
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href !== '#') {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    });
  });
  
  
  // ==========================================
  // LAZY LOADING IMAGES
  // ==========================================
  
  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          if (img.dataset.src) {
            img.src = img.dataset.src;
            img.removeAttribute('data-src');
            observer.unobserve(img);
          }
        }
      });
    });
    
    document.querySelectorAll('img[data-src]').forEach(img => {
      imageObserver.observe(img);
    });
  }
  
  
  // ==========================================
  // ACCESSIBLE KEYBOARD NAVIGATION
  // ==========================================
  
  // Trap focus in mobile menu when open
  if (menuToggle && navList) {
    navList.addEventListener('keydown', function(e) {
      if (e.key === 'Escape' && navList.classList.contains('active')) {
        navList.classList.remove('active');
        menuToggle.focus();
      }
    });
  }
  
  
  // ==========================================
  // ADD ANIMATION ON SCROLL
  // ==========================================
  
  const observeElements = document.querySelectorAll('.news-card, .classroom-card, .schedule-day');
  
  if ('IntersectionObserver' in window && observeElements.length > 0) {
    const scrollObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '0';
          entry.target.style.transform = 'translateY(20px)';
          
          setTimeout(() => {
            entry.target.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
          }, 100);
          
          scrollObserver.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1
    });
    
    observeElements.forEach(el => scrollObserver.observe(el));
  }
  
  
  // ==========================================
  // PRINT STYLES HELPER
  // ==========================================
  
  // Add print button functionality if present
  const printButtons = document.querySelectorAll('[data-print]');
  printButtons.forEach(button => {
    button.addEventListener('click', () => {
      window.print();
    });
  });
  
});


// ==========================================
// UTILITY FUNCTIONS
// ==========================================

// Format date helper
function formatDate(dateString) {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(dateString).toLocaleDateString('en-CA', options);
}

// Debounce helper for performance
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}
