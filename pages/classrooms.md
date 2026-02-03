---
layout: default
title: Our Classrooms
permalink: /classrooms/
subtitle: Meet our dedicated teachers and explore our learning spaces
description: "Meet our dedicated K-8 teachers and explore multi-grade classrooms at Henry Coaster Memorial School. Small class sizes ensure personalized attention and culturally-responsive instruction."
keywords: "small class sizes, multi-grade classrooms, First Nations teachers, bilingual instruction, Oji-Cree education, K-8 classrooms"
---

<!-- Classrooms Header -->
<section class="page-header-simple">
  <div class="container">
    <span class="hero-badge page-badge">K-8 Education</span>
    <h1 class="page-header-title">Our Classrooms</h1>
    <p class="page-header-subtitle">
      Meet our dedicated teachers and discover the learning environments where our students grow,
      learn, and thrive in both academics and traditional knowledge.
    </p>
  </div>
</section>

<!-- Classrooms Grid -->
<section class="classrooms-section main-area">
  <div class="container">

    <div class="classrooms-intro">
      <p>
        At Henry Coaster Memorial School, each classroom is a unique learning community where
        students receive individualized attention and culturally-responsive instruction. Our
        multi-grade classrooms allow for flexible learning and strong peer relationships.
      </p>
    </div>

    <div class="classrooms-grid">
      {% assign sorted_classrooms = site.classrooms | sort: "order" %}
      {% for classroom in sorted_classrooms %}
      <div class="classroom-card" data-color="{{ classroom.color | default: 'blue' }}">
        <div class="classroom-accent classroom-accent-{{ classroom.color | default: 'blue' }}"></div>

        <div class="classroom-content">
          <span class="classroom-grade">{{ classroom.grade }}</span>
          <h3 class="classroom-title">{{ classroom.title }}</h3>

          <div class="classroom-teachers">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
            <span>
              {% for teacher in classroom.teachers %}
                {{ teacher }}{% unless forloop.last %} & {% endunless %}
              {% endfor %}
            </span>
          </div>

          {% if classroom.description %}
          <p class="classroom-description">{{ classroom.description }}</p>
          {% endif %}

          <a href="{{ classroom.url | relative_url }}" class="btn btn-classroom">
            View Classroom
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M5 12h14"></path>
              <path d="m12 5 7 7-7 7"></path>
            </svg>
          </a>
        </div>
      </div>
      {% endfor %}
    </div>

  </div>
</section>

<!-- Info Section -->
<section class="classroom-info-section">
  <div class="container">
    <div class="info-grid">

      <div class="info-card">
        <div class="info-icon">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
            <circle cx="9" cy="7" r="4"></circle>
            <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
            <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
          </svg>
        </div>
        <h3>Small Class Sizes</h3>
        <p>
          Our multi-grade classrooms maintain low student-to-teacher ratios, ensuring
          every child receives personalized attention and support.
        </p>
      </div>

      <div class="info-card">
        <div class="info-icon">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
          </svg>
        </div>
        <h3>Bilingual Instruction</h3>
        <p>
          All classrooms incorporate Oji-Cree language throughout the day, with dedicated
          language instruction and Elder visits.
        </p>
      </div>

      <div class="info-card">
        <div class="info-icon">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
            <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
          </svg>
        </div>
        <h3>Regular Communication</h3>
        <p>
          Each classroom sends home monthly newsletters and maintains open communication
          with families about student progress.
        </p>
      </div>

    </div>
  </div>
</section>

<!-- CTA Section -->
<section class="cta-section">
  <div class="container">
    <div class="cta-card">
      <h2>Questions About Our Classrooms?</h2>
      <p>
        We're happy to tell you more about our educational programs and how we support each
        student's unique learning journey. Contact us to schedule a visit or learn more.
      </p>
      <div class="cta-buttons">
        <a href="{{ '/contact/' | relative_url }}" class="btn btn-primary">Contact Us</a>
        <a href="{{ '/about/' | relative_url }}" class="btn btn-ghost-dark">Learn About Our Programs</a>
      </div>
    </div>
  </div>
</section>
