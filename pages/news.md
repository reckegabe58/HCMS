---
layout: default
title: News
permalink: /news/
subtitle: Stories, announcements, and updates from around our school community
description: "Read the latest news, announcements, and event updates from Henry Coaster Memorial School in Marten Falls First Nation."
keywords: "school news, announcements, Marten Falls First Nation, HCMS events"
---

<!-- News Header -->
<section class="page-header-simple">
  <div class="container">
    <span class="hero-badge page-badge">Stay Connected</span>
    <h1 class="page-header-title">News</h1>
    <p class="page-header-subtitle">
      Stories, announcements, and updates from around our school community.
    </p>
  </div>
</section>

<!-- News Grid -->
<section class="news-section main-area">
  <div class="container">
    {% assign all_posts = site.posts %}
    {% if all_posts.size > 0 %}
    <div class="related-posts-grid">
      {% for post in all_posts %}
      <article class="news-card-vertical">
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
            </svg>
          </div>
        </div>
        {% endif %}
        <div class="news-card-body">
          {% if post.category %}
          <span class="news-category {{ post.category | downcase }}">{{ post.category }}</span>
          {% endif %}
          <h3 class="news-card-title">
            <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
          </h3>
          <div class="news-card-meta">
            <span class="news-date">{{ post.date | date: "%B %d, %Y" }}</span>
          </div>
        </div>
      </article>
      {% endfor %}
    </div>
    {% else %}
    <p class="no-posts-message">No news posts yet — check back soon!</p>
    {% endif %}
  </div>
</section>
