---
layout: default
title: School News
permalink: /news/
subtitle: Updates, announcements, and stories from our community
---

<!-- News Header -->
<section class="page-header-simple">
  <div class="container">
    <span class="hero-badge page-badge">Stay Informed</span>
    <h1 class="page-header-title">School News & Announcements</h1>
    <p class="page-header-subtitle">
      Stay up to date with the latest news, events, and stories from Henry Coaster Memorial School
      and the Marten Falls First Nation community.
    </p>
  </div>
</section>

<!-- News Content -->
<section class="news-archive-section main-area">
  <div class="container">

    <!-- Category Filters -->
    <div class="news-filters">
      <button class="filter-btn active" data-filter="all">All News</button>
      <button class="filter-btn" data-filter="land-based">Land-Based</button>
      <button class="filter-btn" data-filter="culture">Culture</button>
      <button class="filter-btn" data-filter="academic">Academic</button>
      <button class="filter-btn" data-filter="events">Events</button>
    </div>

    <!-- News Grid -->
    <div class="news-archive-grid">
      {% assign sorted_posts = site.posts | sort: "date" | reverse %}
      {% for post in sorted_posts %}
      <article class="news-card-vertical" data-category="{{ post.category | default: 'news' | downcase }}">
        {% if post.image %}
        <div class="news-card-image-wrapper">
          <img src="{{ post.image | relative_url }}" alt="{{ post.title }}" class="news-card-image-full">
        </div>
        {% else %}
        <div class="news-card-image-wrapper">
          <div class="news-card-placeholder">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
              <polyline points="14 2 14 8 20 8"></polyline>
              <line x1="16" y1="13" x2="8" y2="13"></line>
              <line x1="16" y1="17" x2="8" y2="17"></line>
              <polyline points="10 9 9 9 8 9"></polyline>
            </svg>
          </div>
        </div>
        {% endif %}

        <div class="news-card-body">
          <span class="news-category {{ post.category | default: 'news' | downcase }}">
            {{ post.category | default: "News" }}
          </span>
          <h3 class="news-card-title">
            <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
          </h3>
          <p class="news-card-excerpt">
            {{ post.excerpt | strip_html | truncate: 120 }}
          </p>
          <div class="news-card-meta">
            <span class="news-date">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                <line x1="16" y1="2" x2="16" y2="6"></line>
                <line x1="8" y1="2" x2="8" y2="6"></line>
                <line x1="3" y1="10" x2="21" y2="10"></line>
              </svg>
              {{ post.date | date: "%B %d, %Y" }}
            </span>
            <span class="news-author">{{ post.author | default: "Staff" }}</span>
          </div>
        </div>
      </article>
      {% endfor %}

      {% if site.posts.size == 0 %}
      <!-- Placeholder posts when no real posts exist -->
      <article class="news-card-vertical" data-category="land-based">
        <div class="news-card-image-wrapper">
          <img src="{{ '/assets/images/carousel/slide-2.jpg' | relative_url }}" alt="School Garden" class="news-card-image-full">
        </div>
        <div class="news-card-body">
          <span class="news-category land-based">Land-Based Skills</span>
          <h3 class="news-card-title">
            <a href="#">Harvest Moon: School Garden Project Update</a>
          </h3>
          <p class="news-card-excerpt">
            Our Grade 6 students successfully harvested over 50lbs of local root vegetables this week...
          </p>
          <div class="news-card-meta">
            <span class="news-date">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                <line x1="16" y1="2" x2="16" y2="6"></line>
                <line x1="8" y1="2" x2="8" y2="6"></line>
                <line x1="3" y1="10" x2="21" y2="10"></line>
              </svg>
              October 12, 2025
            </span>
            <span class="news-author">Staff Writer</span>
          </div>
        </div>
      </article>

      <article class="news-card-vertical" data-category="culture">
        <div class="news-card-image-wrapper">
          <img src="{{ '/assets/images/carousel/slide-3.jpg' | relative_url }}" alt="Language Program" class="news-card-image-full">
        </div>
        <div class="news-card-body">
          <span class="news-category culture">Culture</span>
          <h3 class="news-card-title">
            <a href="#">Oji-Cree Language Revitalization Initiative</a>
          </h3>
          <p class="news-card-excerpt">
            This month, we are launching our new immersion modules for K-3 students...
          </p>
          <div class="news-card-meta">
            <span class="news-date">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                <line x1="16" y1="2" x2="16" y2="6"></line>
                <line x1="8" y1="2" x2="8" y2="6"></line>
                <line x1="3" y1="10" x2="21" y2="10"></line>
              </svg>
              October 8, 2025
            </span>
            <span class="news-author">Elder Council</span>
          </div>
        </div>
      </article>

      <article class="news-card-vertical" data-category="academic">
        <div class="news-card-image-wrapper">
          <img src="{{ '/assets/images/carousel/slide-4.jpg' | relative_url }}" alt="Awards Ceremony" class="news-card-image-full">
        </div>
        <div class="news-card-body">
          <span class="news-category academic">Academic</span>
          <h3 class="news-card-title">
            <a href="#">Celebrating Excellence: Merit Awards Ceremony</a>
          </h3>
          <p class="news-card-excerpt">
            Congratulations to our first-term award recipients! Your dedication inspires us all...
          </p>
          <div class="news-card-meta">
            <span class="news-date">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                <line x1="16" y1="2" x2="16" y2="6"></line>
                <line x1="8" y1="2" x2="8" y2="6"></line>
                <line x1="3" y1="10" x2="21" y2="10"></line>
              </svg>
              September 29, 2025
            </span>
            <span class="news-author">Principal's Office</span>
          </div>
        </div>
      </article>

      <article class="news-card-vertical" data-category="events">
        <div class="news-card-image-wrapper">
          <img src="{{ '/assets/images/carousel/slide-1.jpg' | relative_url }}" alt="Community Feast" class="news-card-image-full">
        </div>
        <div class="news-card-body">
          <span class="news-category events">Events</span>
          <h3 class="news-card-title">
            <a href="#">Annual Community Feast Coming Up</a>
          </h3>
          <p class="news-card-excerpt">
            Join us for our annual fall community feast celebrating the harvest season...
          </p>
          <div class="news-card-meta">
            <span class="news-date">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                <line x1="16" y1="2" x2="16" y2="6"></line>
                <line x1="8" y1="2" x2="8" y2="6"></line>
                <line x1="3" y1="10" x2="21" y2="10"></line>
              </svg>
              September 15, 2025
            </span>
            <span class="news-author">Community Relations</span>
          </div>
        </div>
      </article>

      <article class="news-card-vertical" data-category="land-based">
        <div class="news-card-image-wrapper">
          <img src="{{ '/assets/images/carousel/slide-5.jpg' | relative_url }}" alt="Land-Based Learning" class="news-card-image-full">
        </div>
        <div class="news-card-body">
          <span class="news-category land-based">Land-Based Skills</span>
          <h3 class="news-card-title">
            <a href="#">Fall Land-Based Learning Program Begins</a>
          </h3>
          <p class="news-card-excerpt">
            Students head out on the land for our annual fall harvesting and traditional skills program...
          </p>
          <div class="news-card-meta">
            <span class="news-date">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                <line x1="16" y1="2" x2="16" y2="6"></line>
                <line x1="8" y1="2" x2="8" y2="6"></line>
                <line x1="3" y1="10" x2="21" y2="10"></line>
              </svg>
              September 5, 2025
            </span>
            <span class="news-author">Land-Based Program</span>
          </div>
        </div>
      </article>

      <article class="news-card-vertical" data-category="culture">
        <div class="news-card-image-wrapper">
          <img src="{{ '/assets/images/carousel/slide-2.jpg' | relative_url }}" alt="Traditional Drumming" class="news-card-image-full">
        </div>
        <div class="news-card-body">
          <span class="news-category culture">Culture</span>
          <h3 class="news-card-title">
            <a href="#">Traditional Drumming Sessions Resume</a>
          </h3>
          <p class="news-card-excerpt">
            Weekly drumming sessions with Elder Orville are back for the new school year...
          </p>
          <div class="news-card-meta">
            <span class="news-date">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                <line x1="16" y1="2" x2="16" y2="6"></line>
                <line x1="8" y1="2" x2="8" y2="6"></line>
                <line x1="3" y1="10" x2="21" y2="10"></line>
              </svg>
              September 3, 2025
            </span>
            <span class="news-author">Cultural Programs</span>
          </div>
        </div>
      </article>
      {% endif %}
    </div>

    <!-- Pagination -->
    <div class="pagination">
      <span class="pagination-info">Showing all news articles</span>
    </div>

  </div>
</section>

<!-- Newsletter Signup -->
<section class="newsletter-section">
  <div class="container">
    <div class="newsletter-card">
      <div class="newsletter-content">
        <h2>Stay Updated</h2>
        <p>Subscribe to receive school news and announcements directly to your inbox.</p>
      </div>
      <form class="newsletter-form-inline" action="https://formspree.io/f/your-form-id" method="POST">
        <input type="email" name="email" placeholder="Enter your email" required>
        <button type="submit" class="btn btn-primary">Subscribe</button>
      </form>
    </div>
  </div>
</section>
