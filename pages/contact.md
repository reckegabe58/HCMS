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

        <div class="google-form-container">
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSefNWnNr5PGuMLKCuXkmHDHGd3IfJQLvyYIa7lBL4uYSKetLw/viewform?embedded=true"
            width="100%"
            height="1078"
            frameborder="0"
            marginheight="0"
            marginwidth="0"
            title="Contact Form">
            Loading…
          </iframe>
        </div>

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

      <div class="map-container">
        <iframe
          src="https://www.google.com/maps?q=51.63009108063665,-85.94040653674006&z=14&output=embed"
          width="100%"
          height="450"
          style="border:0; border-radius: 12px;"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          title="Henry Coaster Memorial School - Marten Falls First Nation Location">
        </iframe>
      </div>

      <p class="map-note">
        <strong>Getting Here:</strong> Marten Falls is accessible via North Star Air flights on Monday, Wednesday, Friday, Saturday, and Sunday.
        During winter months (typically December to March), a winter road provides ground access.
      </p>
    </div>
  </div>
</section>
