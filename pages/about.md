---
layout: default
title: About Us
permalink: /about/
hero_image: /assets/images/carousel/slide-1.jpg
hero_badge: Marten Falls First Nation
subtitle: Where our students walk in the footsteps of their ancestors to achieve their dreams
---

<!-- About Hero Section -->
<section class="page-hero" style="background-image: url('{{ '/assets/images/carousel/slide-1.jpg' | relative_url }}');">
  <div class="page-hero-overlay"></div>
  <div class="container">
    <div class="page-hero-content">
      <span class="hero-badge">Marten Falls First Nation</span>
      <h1 class="page-hero-title">About Our School</h1>
      <p class="page-hero-subtitle">{{ site.motto }}</p>
    </div>
  </div>
  <div class="hero-wave">
    <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
      <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="#F5F7F8"/>
    </svg>
  </div>
</section>

<!-- Mission Statement Section -->
<section class="mission-section">
  <div class="container">
    <div class="mission-card">
      <div class="mission-icon">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
          <path d="M2 17l10 5 10-5"></path>
          <path d="M2 12l10 5 10-5"></path>
        </svg>
      </div>
      <h2 class="mission-title">Our Mission</h2>
      <p class="mission-text">
        To provide a nurturing educational environment that honors Oji-Cree culture and language
        while preparing students for success in both traditional and contemporary worlds. We believe
        every child deserves an education that reflects their heritage and equips them with the
        knowledge and skills to lead their community into the future.
      </p>
    </div>
  </div>
</section>

<!-- Who We Are Section -->
<section class="about-section main-area">
  <div class="container">
    <div class="about-grid">
      <!-- Left Column: History -->
      <div class="about-content">
        <h2 class="section-title">Who We Are</h2>

        <p>
          Henry Coaster Memorial School serves the children of Marten Falls First Nation,
          a remote Oji-Cree community located along the Albany River in Northern Ontario.
          Named in honor of a respected community Elder, our school has been the heart of
          educational excellence in our community since 1985.
        </p>

        <p>
          As the only school serving our community, we take pride in our unique position
          as both an educational institution and a cultural center. Our K-8 program
          blends Ontario curriculum standards with traditional Oji-Cree knowledge, creating
          a learning experience that is both academically rigorous and culturally meaningful.
        </p>

        <p>
          Our dedicated team of educators includes both certified teachers and community
          Elders who work together to deliver instruction in English and Oji-Cree. This
          collaborative approach ensures that our students develop strong academic skills
          while maintaining deep connections to their language, culture, and land.
        </p>

        <h3>Our Community</h3>
        <p>
          Marten Falls First Nation (Ogoki Post) is accessible only by air or winter road,
          making our community unique and close-knit. This remoteness shapes our educational
          approach, emphasizing land-based learning and traditional skills alongside modern
          academics. Our students learn from the land that has sustained our people for
          generations.
        </p>
      </div>

      <!-- Right Column: Key Facts -->
      <div class="about-sidebar">
        <div class="facts-card">
          <h3 class="facts-title">Key Facts</h3>
          <ul class="facts-list">
            <li>
              <span class="fact-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                  <line x1="16" y1="2" x2="16" y2="6"></line>
                  <line x1="8" y1="2" x2="8" y2="6"></line>
                  <line x1="3" y1="10" x2="21" y2="10"></line>
                </svg>
              </span>
              <div>
                <strong>Established</strong>
                <span>{{ site.school.established | default: "1985" }}</span>
              </div>
            </li>
            <li>
              <span class="fact-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </span>
              <div>
                <strong>Students</strong>
                <span>~{{ site.school.students | default: "85" }} students</span>
              </div>
            </li>
            <li>
              <span class="fact-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
                  <path d="M2 17l10 5 10-5"></path>
                  <path d="M2 12l10 5 10-5"></path>
                </svg>
              </span>
              <div>
                <strong>Grades</strong>
                <span>Kindergarten to Grade 8</span>
              </div>
            </li>
            <li>
              <span class="fact-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon>
                </svg>
              </span>
              <div>
                <strong>Location</strong>
                <span>Marten Falls First Nation, ON</span>
              </div>
            </li>
            <li>
              <span class="fact-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                </svg>
              </span>
              <div>
                <strong>Languages</strong>
                <span>English & Oji-Cree</span>
              </div>
            </li>
            <li>
              <span class="fact-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path>
                  <line x1="7" y1="7" x2="7.01" y2="7"></line>
                </svg>
              </span>
              <div>
                <strong>Staff</strong>
                <span>~{{ site.school.staff | default: "25" }} educators & support staff</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Our Programs Section -->
<section class="programs-section">
  <div class="container">
    <div class="section-header text-center">
      <h2 class="section-title-center">Our Programs</h2>
      <p class="section-subtitle">A balanced approach to education that honors tradition and embraces the future</p>
    </div>

    <div class="programs-grid">
      <!-- Program Card 1: Oji-Cree Language -->
      <div class="program-card">
        <div class="program-icon sage">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
          </svg>
        </div>
        <h3 class="program-title">Oji-Cree Language</h3>
        <p class="program-description">
          Daily instruction in Oji-Cree language with Elder-led immersion sessions.
          Students develop fluency in their ancestral language through storytelling,
          songs, and conversation.
        </p>
      </div>

      <!-- Program Card 2: Land-Based Learning -->
      <div class="program-card">
        <div class="program-icon green">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
            <path d="M12 6v12"></path>
            <path d="M6 12h12"></path>
          </svg>
        </div>
        <h3 class="program-title">Land-Based Learning</h3>
        <p class="program-description">
          Outdoor education that connects curriculum to the land. Students learn
          traditional harvesting, navigation, survival skills, and environmental
          stewardship from community experts.
        </p>
      </div>

      <!-- Program Card 3: Traditional Knowledge -->
      <div class="program-card">
        <div class="program-icon earth">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="12" r="10"></circle>
            <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
            <path d="M2 12h20"></path>
          </svg>
        </div>
        <h3 class="program-title">Traditional Knowledge</h3>
        <p class="program-description">
          Cultural teachings from Elders including traditional crafts, ceremonies,
          drumming, and the seven grandfather teachings that guide our community's
          values and way of life.
        </p>
      </div>

      <!-- Program Card 4: Academic Excellence -->
      <div class="program-card">
        <div class="program-icon blue">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
            <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
          </svg>
        </div>
        <h3 class="program-title">Academic Excellence</h3>
        <p class="program-description">
          Ontario curriculum delivered through culturally-responsive teaching methods.
          Strong foundations in literacy, numeracy, science, and social studies
          prepare students for secondary education.
        </p>
      </div>

      <!-- Program Card 5: Sports & Activities -->
      <div class="program-card">
        <div class="program-icon red">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="12" r="10"></circle>
            <path d="M12 16v-4"></path>
            <path d="M12 8h.01"></path>
          </svg>
        </div>
        <h3 class="program-title">Sports & Activities</h3>
        <p class="program-description">
          Physical education, traditional games, hockey, basketball, and seasonal
          activities that promote health, teamwork, and community spirit among
          our students.
        </p>
      </div>

      <!-- Program Card 6: Cultural Events -->
      <div class="program-card">
        <div class="program-icon secondary">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
            <circle cx="9" cy="7" r="4"></circle>
            <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
            <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
          </svg>
        </div>
        <h3 class="program-title">Cultural Events</h3>
        <p class="program-description">
          Community feasts, powwows, seasonal celebrations, and cultural gatherings
          that bring families together and strengthen the bond between school
          and community.
        </p>
      </div>
    </div>
  </div>
</section>

<!-- Our Values Section -->
<section class="values-section main-area">
  <div class="container">
    <div class="section-header text-center">
      <h2 class="section-title-center">Our Values</h2>
      <p class="section-subtitle">Guided by the Seven Grandfather Teachings</p>
    </div>

    <div class="values-grid">
      <div class="value-card">
        <span class="value-icon">&#128156;</span>
        <h4>Zaagi'idiwin</h4>
        <p>Love - We create a nurturing environment where every child feels valued and supported.</p>
      </div>

      <div class="value-card">
        <span class="value-icon">&#128591;</span>
        <h4>Mnaadendimowin</h4>
        <p>Respect - We honor our Elders, our traditions, and each other in all that we do.</p>
      </div>

      <div class="value-card">
        <span class="value-icon">&#129504;</span>
        <h4>Aakwa'ode'ewin</h4>
        <p>Bravery - We encourage students to face challenges with courage and determination.</p>
      </div>

      <div class="value-card">
        <span class="value-icon">&#128077;</span>
        <h4>Gwekwaadziwin</h4>
        <p>Honesty - We teach the importance of truthfulness in words and actions.</p>
      </div>

      <div class="value-card">
        <span class="value-icon">&#128218;</span>
        <h4>Nbwaakaawin</h4>
        <p>Wisdom - We seek knowledge from both traditional teachings and modern education.</p>
      </div>

      <div class="value-card">
        <span class="value-icon">&#128588;</span>
        <h4>Dbaadendiziwin</h4>
        <p>Humility - We learn to walk gently on the earth and recognize our place in creation.</p>
      </div>

      <div class="value-card">
        <span class="value-icon">&#129309;</span>
        <h4>Debwewin</h4>
        <p>Truth - We seek authentic understanding and stay true to our cultural identity.</p>
      </div>
    </div>
  </div>
</section>

<!-- Call to Action -->
<section class="cta-section">
  <div class="container">
    <div class="cta-card">
      <h2>Join Our School Community</h2>
      <p>Interested in learning more about Henry Coaster Memorial School? We welcome visitors and partners who share our commitment to Indigenous education.</p>
      <div class="cta-buttons">
        <a href="{{ '/contact/' | relative_url }}" class="btn btn-primary">Contact Us</a>
        <a href="{{ '/classrooms/' | relative_url }}" class="btn btn-ghost-dark">View Classrooms</a>
      </div>
    </div>
  </div>
</section>
