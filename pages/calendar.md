---
layout: default
title: School Calendar
permalink: /calendar/
subtitle: Important dates and upcoming events
---

<!-- Calendar Header -->
<section class="page-header-simple">
  <div class="container">
    <span class="hero-badge page-badge" data-date-school-year>2025-2026 School Year</span>
    <h1 class="page-header-title">School Calendar</h1>
    <p class="page-header-subtitle">Stay informed about important dates, events, and activities throughout the school year.</p>
  </div>
</section>

<!-- Calendar Section -->
<section class="calendar-section main-area">
  <div class="container">

    <!-- Calendar Embed -->
    <div class="calendar-embed">
      <h2 class="section-title">Full School Calendar</h2>
      <p class="calendar-intro">
        View our complete school calendar below. You can click on any event to see more details,
        and use the arrows to navigate between months.
      </p>

      <!-- Google Calendar Embed -->
      <div class="calendar-wrapper">
        <iframe src="https://calendar.google.com/calendar/embed?src=227b700438569c1d622b29457fe9d090f155975f39511456055d92199d369a4f%40group.calendar.google.com&ctz=America%2FToronto" style="border: 0" width="100%" height="600" frameborder="0" scrolling="no"></iframe>
      </div>

      <div class="calendar-actions">
        <a href="#" class="btn btn-primary" download>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
            <polyline points="7 10 12 15 17 10"></polyline>
            <line x1="12" y1="15" x2="12" y2="3"></line>
          </svg>
          Download Full Calendar (PDF)
        </a>
        <a href="#" class="btn btn-outline">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path>
            <polyline points="16 6 12 2 8 6"></polyline>
            <line x1="12" y1="2" x2="12" y2="15"></line>
          </svg>
          Add to Your Calendar
        </a>
      </div>
    </div>

    <!-- Upcoming Events - Auto-loaded from Google Calendar -->
    <div class="upcoming-events">
      <h2 class="section-title">Upcoming Events</h2>

      <div class="events-grid" id="upcomingEventsGrid">
        <!-- Loading state -->
        <div class="events-loading" id="eventsLoading">
          <p>Loading upcoming events...</p>
        </div>
      </div>
    </div>

    <!-- Calendar Events Styles -->
    <style>
      .events-loading, .no-events, .events-error {
        grid-column: 1 / -1;
        text-align: center;
        padding: 2rem;
        color: var(--text-muted, #666);
        font-size: 1rem;
      }
      .events-loading p {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.5rem;
      }
      .events-loading p::before {
        content: '';
        width: 20px;
        height: 20px;
        border: 2px solid var(--accent-green, #4a7c59);
        border-top-color: transparent;
        border-radius: 50%;
        animation: spin 1s linear infinite;
      }
      @keyframes spin {
        to { transform: rotate(360deg); }
      }
      .events-error {
        color: #c4784a;
      }
    </style>

    <!-- Google Calendar API Script -->
    <script>
    (function() {
      const CALENDAR_ID = '227b700438569c1d622b29457fe9d090f155975f39511456055d92199d369a4f@group.calendar.google.com';
      const API_KEY = 'AIzaSyAJ6-AUJH2qFSiD-XIyc0OD6ftCD95GMYA';
      const MAX_EVENTS = 5;

      const months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];

      function formatTime(dateStr) {
        if (!dateStr) return 'All Day Event';
        const date = new Date(dateStr);
        const hours = date.getHours();
        const minutes = date.getMinutes();
        const ampm = hours >= 12 ? 'PM' : 'AM';
        const hour12 = hours % 12 || 12;
        const minStr = minutes.toString().padStart(2, '0');
        return `${hour12}:${minStr} ${ampm}`;
      }

      function isAllDayEvent(event) {
        return event.start.date && !event.start.dateTime;
      }

      function getEventDate(event) {
        if (event.start.dateTime) {
          return new Date(event.start.dateTime);
        }
        return new Date(event.start.date + 'T00:00:00');
      }

      function renderEvent(event) {
        const date = getEventDate(event);
        const month = months[date.getMonth()];
        const day = date.getDate();
        const title = event.summary || 'Untitled Event';
        const description = event.description || '';
        const isAllDay = isAllDayEvent(event);
        const location = event.location || '';

        // Check for special event types
        const titleLower = title.toLowerCase();
        let cardClass = 'event-card';
        let badge = '';

        if (titleLower.includes('no school') || titleLower.includes('pd day') || titleLower.includes('professional development')) {
          cardClass += ' no-school';
          badge = '<span class="event-badge">No School</span>';
        } else if (titleLower.includes('carnival') || titleLower.includes('celebration') || titleLower.includes('festival')) {
          cardClass += ' featured';
        }

        let timeDisplay = '';
        if (isAllDay) {
          timeDisplay = 'All Day Event';
        } else {
          const startTime = formatTime(event.start.dateTime);
          const endTime = event.end.dateTime ? formatTime(event.end.dateTime) : '';
          timeDisplay = endTime ? `${startTime} - ${endTime}` : startTime;
          if (location) {
            timeDisplay += ` - ${location}`;
          }
        }

        return `
          <div class="${cardClass}">
            <div class="event-date-large">
              <span class="event-month">${month}</span>
              <span class="event-day">${day}</span>
            </div>
            <div class="event-info">
              <h3 class="event-title">${title}</h3>
              ${description ? `<p class="event-description">${description.substring(0, 150)}${description.length > 150 ? '...' : ''}</p>` : ''}
              ${badge || `<span class="event-time">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
                ${timeDisplay}
              </span>`}
            </div>
          </div>
        `;
      }

      function loadCalendarEvents() {
        const grid = document.getElementById('upcomingEventsGrid');
        const loading = document.getElementById('eventsLoading');

        const now = new Date().toISOString();
        const url = `https://www.googleapis.com/calendar/v3/calendars/${encodeURIComponent(CALENDAR_ID)}/events?key=${API_KEY}&timeMin=${now}&maxResults=${MAX_EVENTS}&singleEvents=true&orderBy=startTime`;

        fetch(url)
          .then(response => {
            if (!response.ok) {
              return response.json().then(err => {
                throw new Error(err.error?.message || `HTTP ${response.status}`);
              });
            }
            return response.json();
          })
          .then(data => {
            if (loading) loading.remove();

            if (!data.items || data.items.length === 0) {
              grid.innerHTML = '<p class="no-events">No upcoming events scheduled. Check back soon!</p>';
              return;
            }

            grid.innerHTML = data.items.map(renderEvent).join('');
          })
          .catch(error => {
            console.error('Calendar API error:', error);
            if (loading) loading.remove();
            // Show specific error for debugging
            const errorMsg = error.message || 'Unknown error';
            if (errorMsg.includes('API key') || errorMsg.includes('403')) {
              grid.innerHTML = '<p class="events-error">Calendar API not configured. Please ensure the API key is valid and the calendar is public.</p>';
            } else if (errorMsg.includes('404') || errorMsg.includes('notFound')) {
              grid.innerHTML = '<p class="events-error">Calendar not found. Please check the calendar ID.</p>';
            } else {
              grid.innerHTML = '<p class="events-error">Unable to load events: ' + errorMsg + '</p>';
            }
          });
      }

      // Load events when DOM is ready
      if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', loadCalendarEvents);
      } else {
        loadCalendarEvents();
      }
    })();
    </script>

  </div>
</section>
