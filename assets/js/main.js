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
  const mainNav = document.getElementById('mainNav');
  const navList = document.getElementById('navList');

  if (menuToggle && mainNav) {
    menuToggle.addEventListener('click', function() {
      mainNav.classList.toggle('active');

      // Animate hamburger to X
      const spans = menuToggle.querySelectorAll('span');
      if (mainNav.classList.contains('active')) {
        spans[0].style.transform = 'rotate(45deg) translate(6px, 6px)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'rotate(-45deg) translate(6px, -6px)';
      } else {
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
        // Close all dropdowns when menu closes
        document.querySelectorAll('.nav-dropdown').forEach(dd => dd.classList.remove('active'));
      }
    });

    // Handle dropdown toggles on mobile
    const dropdownToggles = document.querySelectorAll('.nav-dropdown-toggle');
    dropdownToggles.forEach(toggle => {
      toggle.addEventListener('click', function(e) {
        // Only handle on mobile (when menu toggle is visible)
        if (window.getComputedStyle(menuToggle).display !== 'none') {
          e.preventDefault();
          const parent = this.parentElement;

          // Close other dropdowns
          document.querySelectorAll('.nav-dropdown').forEach(dd => {
            if (dd !== parent) dd.classList.remove('active');
          });

          // Toggle this dropdown
          parent.classList.toggle('active');
        }
      });
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
      if (!menuToggle.contains(event.target) && !mainNav.contains(event.target)) {
        mainNav.classList.remove('active');
        const spans = menuToggle.querySelectorAll('span');
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
        // Close all dropdowns
        document.querySelectorAll('.nav-dropdown').forEach(dd => dd.classList.remove('active'));
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
  if (menuToggle && mainNav) {
    mainNav.addEventListener('keydown', function(e) {
      if (e.key === 'Escape' && mainNav.classList.contains('active')) {
        mainNav.classList.remove('active');
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


// ==========================================
// PDF THUMBNAIL RENDERING
// ==========================================

function renderPdfThumbnails() {
  if (typeof pdfjsLib === 'undefined') {
    // PDF.js not loaded yet, retry after a short delay
    setTimeout(renderPdfThumbnails, 100);
    return;
  }

  // Set worker source
  pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';

  // Find all PDF thumbnail containers
  const containers = document.querySelectorAll('.pdf-thumbnail-container');
  containers.forEach(container => {
    const pdfUrl = container.dataset.pdfUrl;
    const canvas = container.querySelector('.pdf-canvas');

    if (!pdfUrl || !canvas) return;

    // Load the PDF
    pdfjsLib.getDocument(pdfUrl).promise.then(pdf => {
      // Get first page
      return pdf.getPage(1);
    }).then(page => {
      // Set scale for good quality thumbnail
      const viewport = page.getViewport({ scale: 1.5 });
      const context = canvas.getContext('2d');

      canvas.height = viewport.height;
      canvas.width = viewport.width;

      // Render the page
      const renderContext = {
        canvasContext: context,
        viewport: viewport
      };

      return page.render(renderContext).promise;
    }).then(() => {
      // Mark as loaded to hide the loading indicator
      container.classList.add('loaded');

      // Add click handler to open PDF
      container.addEventListener('click', () => {
        window.open(pdfUrl, '_blank');
      });
    }).catch(err => {
      console.warn('Could not render PDF thumbnail:', err);
      // Show fallback on error - update text
      const fallback = container.querySelector('.pdf-fallback span');
      if (fallback) {
        fallback.textContent = 'PDF';
      }
      container.addEventListener('click', () => {
        window.open(pdfUrl, '_blank');
      });
    });
  });
}

// Run PDF thumbnail rendering when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', renderPdfThumbnails);
} else {
  renderPdfThumbnails();
}
