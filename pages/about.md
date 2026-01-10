---
layout: default
title: About Us
permalink: /about/
hero_image: /assets/images/carousel/slide-1.jpg
hero_badge: Marten Falls First Nation
subtitle: Where our students walk in the footsteps of their ancestors to achieve their dreams
---

<!-- About Hero Section - Clean design without wave -->
<section class="page-hero-simple">
  <div class="page-hero-bg" style="background-image: url('{{ '/assets/images/carousel/slide-1.jpg' | relative_url }}');"></div>
  <div class="page-hero-overlay"></div>
  <div class="container">
    <div class="page-hero-content">
      <span class="hero-badge">Marten Falls First Nation</span>
      <h1 class="page-hero-title">About Our School</h1>
      <p class="page-hero-subtitle">{{ site.motto }}</p>
    </div>
  </div>
</section>

<!-- Who We Are Section -->
<section class="about-section-main">
  <div class="container">
    <div class="about-grid">
      <!-- Left Column: Main Content -->
      <div class="about-content">
        <h2 class="section-title">Who We Are</h2>

        <p>
          Henry Coaster Memorial School (HCMS) is a Kindergarten to Grade 8 elementary school located in Marten Falls First Nation (MFFN), a remote, fly-in community in northwestern Ontario. With a mission to nurture resilient, confident, and community minded Anishnaabe youth, HCMS offers a culturally rich curriculum that celebrates Oji-Cree language, traditions, and values. Our aim is to help students build a strong connection to their heritage while preparing for future success.
        </p>

        <p>
          Founded with a commitment to education, rooted in community and cultural identity, HCMS has been a hub of the community since it opened over twenty years ago. The school is focused on empowering its students through greater community engagement, increased literacy and math achievement, special education and tutoring supports, and land based learning and sharing traditional knowledge.
        </p>

        <h3>Our Curriculum</h3>
        <p>Throughout their time at HCMS, students are educated in core subjects, including:</p>

        <div class="curriculum-grid">
          <div class="curriculum-item">
            <span class="curriculum-icon">📚</span>
            <span>Language Arts</span>
          </div>
          <div class="curriculum-item">
            <span class="curriculum-icon">🔢</span>
            <span>Math</span>
          </div>
          <div class="curriculum-item">
            <span class="curriculum-icon">🎨</span>
            <span>Art and Creative Expression</span>
          </div>
          <div class="curriculum-item">
            <span class="curriculum-icon">💬</span>
            <span>Oji-Cree Language</span>
          </div>
          <div class="curriculum-item">
            <span class="curriculum-icon">🌲</span>
            <span>Land-based Learning</span>
          </div>
          <div class="curriculum-item">
            <span class="curriculum-icon">⚽</span>
            <span>Physical Education</span>
          </div>
          <div class="curriculum-item">
            <span class="curriculum-icon">🔬</span>
            <span>Science</span>
          </div>
          <div class="curriculum-item">
            <span class="curriculum-icon">🌍</span>
            <span>Social Studies</span>
          </div>
        </div>

        <h3>After-School Programs</h3>
        <p>
          HCMS also provides opportunities for students to engage in after-school activities that promote their social, emotional and physical well-being. These programs, including seasonal sports, cultural and land-based activities, help students develop traditional life skills and foster their sense of belonging and connection.
        </p>

        <p>
          With a commitment to creating a supportive and engaging learning environment, HCMS strives to empower students to become future leaders who are proud of their culture and prepared for their journey into the world.
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
                <span>Over 20 years ago</span>
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
                <strong>Community</strong>
                <span>Fly-in, remote community</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Our Values Section -->
<section class="values-section-alt">
  <div class="container">
    <div class="section-header text-center">
      <h2 class="section-title-center">Our Values</h2>
      <p class="section-subtitle">Guided by the Seven Grandfather Teachings</p>
    </div>

    <div class="values-grid">
      <div class="value-card">
        <h4>Zaagi'idiwin</h4>
        <p>Love - We create a nurturing environment where every child feels valued and supported.</p>
      </div>

      <div class="value-card">
        <h4>Mnaadendimowin</h4>
        <p>Respect - We honor our Elders, our traditions, and each other in all that we do.</p>
      </div>

      <div class="value-card">
        <h4>Aakwa'ode'ewin</h4>
        <p>Bravery - We encourage students to face challenges with courage and determination.</p>
      </div>

      <div class="value-card">
        <h4>Gwekwaadziwin</h4>
        <p>Honesty - We teach the importance of truthfulness in words and actions.</p>
      </div>

      <div class="value-card">
        <h4>Nbwaakaawin</h4>
        <p>Wisdom - We seek knowledge from both traditional teachings and modern education.</p>
      </div>

      <div class="value-card">
        <h4>Dbaadendiziwin</h4>
        <p>Humility - We learn to walk gently on the earth and recognize our place in creation.</p>
      </div>

      <div class="value-card">
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
