---
layout: default
title: Contact Us
permalink: /contact/
subtitle: We'd love to hear from you
---

<!-- Contact Header -->
<section class="page-header-simple">
  <div class="container">
    <span class="hero-badge page-badge">Get In Touch</span>
    <h1 class="page-header-title">Contact Us</h1>
    <p class="page-header-subtitle">We'd love to hear from you. Reach out with questions, feedback, or to schedule a visit.</p>
  </div>
</section>

<!-- Contact Content -->
<section class="contact-section main-area">
  <div class="container">
    <div class="contact-grid">

      <!-- Contact Form -->
      <div class="contact-form-wrapper">
        <h2 class="form-title">Send Us a Message</h2>
        <p class="form-intro">Fill out the form below and we'll get back to you as soon as possible.</p>

        <form class="contact-form" action="https://formspree.io/f/your-form-id" method="POST">
          <div class="form-row">
            <div class="form-group">
              <label for="name">Full Name <span class="required">*</span></label>
              <input type="text" id="name" name="name" required placeholder="Your name">
            </div>
            <div class="form-group">
              <label for="email">Email Address <span class="required">*</span></label>
              <input type="email" id="email" name="email" required placeholder="your.email@example.com">
            </div>
          </div>

          <div class="form-row">
            <div class="form-group">
              <label for="phone">Phone Number</label>
              <input type="tel" id="phone" name="phone" placeholder="(807) 000-0000">
            </div>
            <div class="form-group">
              <label for="subject">Subject <span class="required">*</span></label>
              <select id="subject" name="subject" required>
                <option value="">Select a subject...</option>
                <option value="general">General Inquiry</option>
                <option value="enrollment">Student Enrollment</option>
                <option value="staff">Staff/Employment</option>
                <option value="programs">Programs & Activities</option>
                <option value="volunteer">Volunteering</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>

          <div class="form-group">
            <label for="message">Message <span class="required">*</span></label>
            <textarea id="message" name="message" rows="6" required placeholder="How can we help you?"></textarea>
          </div>

          <button type="submit" class="btn btn-accent btn-submit">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="m22 2-7 20-4-9-9-4Z"></path>
              <path d="M22 2 11 13"></path>
            </svg>
            Send Message
          </button>
        </form>

        <!-- Form Instructions -->
        <div class="form-note">
          <p><strong>Note:</strong> For urgent matters, please call us directly at {{ site.location.phone | default: "(807) 349-2532" }}.</p>
        </div>
      </div>

      <!-- Contact Info Sidebar -->
      <div class="contact-sidebar">

        <!-- Contact Info Card -->
        <div class="contact-info-card">
          <h3>Contact Information</h3>

          <div class="contact-item">
            <div class="contact-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
            </div>
            <div class="contact-details">
              <strong>Physical Address</strong>
              <p>{{ site.location.physical_address | default: "123 School Road, Ogoki Post, ON" }}</p>
            </div>
          </div>

          <div class="contact-item">
            <div class="contact-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
            </div>
            <div class="contact-details">
              <strong>Mailing Address</strong>
              <p>{{ site.location.mailing_address | default: "PO Box 10, Marten Falls First Nation, ON P0T 2L0" }}</p>
            </div>
          </div>

          <div class="contact-item">
            <div class="contact-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
            </div>
            <div class="contact-details">
              <strong>Phone</strong>
              <p><a href="tel:{{ site.location.phone | remove: '(' | remove: ')' | remove: ' ' | remove: '-' }}">{{ site.location.phone | default: "(807) 349-2532" }}</a></p>
            </div>
          </div>

          <div class="contact-item">
            <div class="contact-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
              </svg>
            </div>
            <div class="contact-details">
              <strong>Fax</strong>
              <p>{{ site.location.fax | default: "(807) 349-2533" }}</p>
            </div>
          </div>

          <div class="contact-item">
            <div class="contact-icon email-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="4"></circle>
                <path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94"></path>
              </svg>
            </div>
            <div class="contact-details">
              <strong>Email</strong>
              <p><a href="mailto:{{ site.email }}">{{ site.email }}</a></p>
            </div>
          </div>
        </div>

        <!-- Office Hours Card -->
        <div class="hours-card">
          <h3>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="12" cy="12" r="10"></circle>
              <polyline points="12 6 12 12 16 14"></polyline>
            </svg>
            Office Hours
          </h3>
          <ul class="hours-list">
            <li>
              <span>Monday - Friday</span>
              <span>8:30 AM - 4:00 PM</span>
            </li>
            <li>
              <span>Saturday - Sunday</span>
              <span>Closed</span>
            </li>
          </ul>
          <p class="hours-note">
            <strong>Note:</strong> Office closed on statutory holidays and during school breaks.
          </p>
        </div>

        <!-- Social Connect Card -->
        <div class="social-card">
          <h3>Connect With Us</h3>
          <p>Follow us on social media for updates, photos, and community news.</p>
          <div class="social-links">
            <a href="{{ site.social.facebook | default: '#' }}" class="social-link facebook" aria-label="Facebook">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
              Facebook
            </a>
            <a href="{{ site.social.youtube | default: '#' }}" class="social-link youtube" aria-label="YouTube">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
              YouTube
            </a>
            <a href="{{ site.social.instagram | default: '#' }}" class="social-link instagram" aria-label="Instagram">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
              </svg>
              Instagram
            </a>
          </div>
        </div>

      </div>

    </div>
  </div>
</section>

<!-- Map Section -->
<section class="map-section">
  <div class="container">
    <div class="map-wrapper">
      <h2>Find Us</h2>
      <p>Henry Coaster Memorial School is located in the heart of Marten Falls First Nation. As a fly-in community, we are accessible by air year-round and by winter road during the colder months.</p>

      <div class="map-placeholder">
        <!-- Replace this with an actual map embed or image -->
        <div class="map-image">
          <img src="{{ '/assets/images/carousel/slide-5.jpg' | relative_url }}" alt="Aerial view of Marten Falls area">
          <div class="map-overlay">
            <div class="map-pin">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3" fill="white"></circle>
              </svg>
            </div>
            <span class="map-label">Henry Coaster Memorial School<br>Marten Falls First Nation</span>
          </div>
        </div>
      </div>

      <p class="map-note">
        <strong>Getting Here:</strong> Marten Falls is accessible via charter flights from Thunder Bay or Nakina.
        During winter months (typically December to March), a winter road provides ground access.
        Please contact the school office for visitor arrangements.
      </p>
    </div>
  </div>
</section>
