# Henry Coaster Memorial School Website - Maintenance Guide

This guide explains how to update and maintain the school website. The site is built with Jekyll and hosted on GitHub Pages.

---

## Table of Contents

1. [Quick Reference](#quick-reference)
2. [Updating News Posts](#updating-news-posts)
3. [Managing Classrooms](#managing-classrooms)
4. [Editing Pages](#editing-pages)
5. [Updating Site Configuration](#updating-site-configuration)
6. [Managing Images](#managing-images)
7. [Calendar Integration](#calendar-integration)
8. [After-School Programs](#after-school-programs)
9. [Contact Form Setup](#contact-form-setup)
10. [Troubleshooting](#troubleshooting)

---

## Quick Reference

| Task | File/Location |
|------|---------------|
| Add news post | `_posts/` folder |
| Edit classroom info | `_classrooms/` folder |
| Update school info | `_config.yml` |
| Change homepage | `index.html` |
| Edit navigation | `_layouts/default.html` |
| Add images | `assets/images/` |
| Modify styles | `assets/css/main.css` |
| Update after-school schedule | `_data/after_school.yml` |

---

## Updating News Posts

### Creating a New Post

1. Create a new file in the `_posts/` folder
2. Name it using the format: `YYYY-MM-DD-title-of-post.md`
   - Example: `2025-10-15-fall-harvest-celebration.md`

3. Add front matter at the top:

```yaml
---
layout: post
title: "Your Post Title Here"
date: 2025-10-15
author: Staff Writer
category: Events
image: /assets/images/posts/your-image.jpg
tags:
  - community
  - celebration
---
```

4. Write your content below the front matter using Markdown

### Post Categories

Use one of these categories for consistent filtering:
- `Land-Based` - Outdoor learning, harvesting, traditional skills
- `Culture` - Language, ceremonies, Elder teachings
- `Academic` - Classroom achievements, curriculum updates
- `Events` - School events, celebrations, gatherings

### Adding Images to Posts

1. Upload image to `assets/images/posts/`
2. Reference in front matter: `image: /assets/images/posts/your-image.jpg`
3. In post content: `![Alt text](/assets/images/posts/your-image.jpg)`

---

## Managing Classrooms

### Classroom Files Location

All classroom pages are in `_classrooms/`:
- `kindergarten.md`
- `grade-1-2-a.md`
- `grade-1-2-b.md`
- `grade-3-4.md`
- `grade-5-6.md`
- `grade-7-8.md`

### Updating Classroom Information

Edit the front matter to update:

```yaml
---
layout: classroom
title: Grade 3/4
grade: "3-4"
teachers:
  - Mr. Gabe
  - Ms. New Teacher    # Add additional teachers
color: green           # Options: sage, blue, green, orange, red
order: 4              # Display order on classrooms page
room: Room 102
students: 18
hero_image: /assets/images/carousel/slide-1.jpg
subjects:
  - name: Subject Name
    description: Brief description of the subject.
    icon: book         # See icon options below
---
```

### Subject Icons

Available icons for subjects:
- `book` - Language Arts, Reading
- `calculator` - Mathematics
- `message` - Language studies
- `flask` - Science
- `globe` - Geography, Social Studies
- `tree` - Cultural studies
- `palette` - Art
- `music` - Music
- `users` - Social skills
- `heart` - Health

### Adding a New Classroom

1. Create new file: `_classrooms/new-classroom.md`
2. Copy front matter structure from existing classroom
3. Update all fields
4. Add content below front matter

---

## Editing Pages

### Page Locations

| Page | File |
|------|------|
| Homepage | `index.html` |
| About | `pages/about.md` |
| Contact | `pages/contact.md` |
| Calendar | `pages/calendar.md` |
| Classrooms | `pages/classrooms.md` |
| News | `pages/news.md` |

### Page Front Matter

```yaml
---
layout: default        # or 'page' for hero support
title: Page Title
permalink: /page-url/
subtitle: Optional subtitle text
hero_image: /assets/images/hero.jpg  # Optional hero image
hero_badge: Badge Text               # Optional badge above title
---
```

### Editing Homepage Sections

The homepage (`index.html`) contains these sections:
1. **Hero** - Main banner with school name and tagline
2. **News Cards** - Latest posts (automatically pulls from `_posts/`)
3. **Sidebar Widgets** - Announcements, calendar preview, quick links
4. **Community Section** - Programs and values

To edit static content, find the relevant section and update the HTML/text.

---

## Updating Site Configuration

### Main Settings (`_config.yml`)

```yaml
# Basic Info
title: Henry Coaster Memorial School
tagline: Honouring Our Heritage, Empowering Our Future
motto: Where our students walk in the footsteps...
email: school@example.com

# Location
location:
  physical_address: "123 School Road, Ogoki Post, ON"
  mailing_address: "PO Box 10, Marten Falls First Nation, ON P0T 2L0"
  phone: "(807) 349-2532"
  fax: "(807) 349-2533"

# Social Media
social:
  facebook: https://facebook.com/yourpage
  youtube: https://youtube.com/yourchannel
  instagram: https://instagram.com/yourhandle

# School Stats (displayed on About page)
school_info:
  students: "~80"
  staff: 15
  established: 1970
```

### After Rebuilding

Changes to `_config.yml` require a site rebuild. GitHub Pages does this automatically when you push changes.

---

## Managing Images

### Image Locations

```
assets/images/
├── carousel/          # Hero and banner images
├── posts/            # News post images
├── classrooms/       # Classroom photos
├── gallery/          # Photo gallery images
└── icons/            # Logo and icons
```

### Image Guidelines

- **Hero images**: 1920x1080px recommended, landscape orientation
- **News thumbnails**: 800x600px recommended
- **Classroom photos**: 1200x800px recommended
- **Format**: JPG for photos, PNG for graphics with transparency
- **File size**: Keep under 500KB for fast loading

### Adding New Images

1. Add image file to appropriate folder in `assets/images/`
2. Reference in your content: `/assets/images/folder/filename.jpg`

---

## Calendar Integration

### Setting Up Google Calendar

1. Go to Google Calendar settings
2. Find your calendar's public URL or embed code
3. Edit `pages/calendar.md`
4. Replace the placeholder with your embed:

```html
<iframe
  src="https://calendar.google.com/calendar/embed?src=YOUR_CALENDAR_ID"
  style="border: 0"
  width="100%"
  height="600"
  frameborder="0"
  scrolling="no">
</iframe>
```

### Manual Events

If not using Google Calendar, edit the events section in `pages/calendar.md`:

```html
<article class="event-card">
  <div class="event-date">
    <span class="event-day">15</span>
    <span class="event-month">OCT</span>
  </div>
  <div class="event-details">
    <h3 class="event-title">Event Name</h3>
    <p class="event-time">9:00 AM - 3:00 PM</p>
    <p class="event-description">Event description here.</p>
  </div>
</article>
```

---

## After-School Programs

### Update Schedule (`_data/after_school.yml`)

```yaml
- day: Monday
  programs:
    - name: "Homework Club"
      time: "3:30 - 4:30 PM"
      location: "Library"
    - name: "Basketball"
      time: "4:00 - 5:00 PM"
      location: "Gym"

- day: Tuesday
  programs:
    - name: "Art Club"
      time: "3:30 - 4:30 PM"
      location: "Room 101"
```

The weekly schedule widget automatically uses this data.

---

## Contact Form Setup

### Formspree Integration

1. Create account at [formspree.io](https://formspree.io)
2. Create a new form
3. Copy your form endpoint
4. Update in `pages/contact.md`:

```html
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

5. Also update in homepage newsletter section (`index.html`)

### Form Fields

The contact form collects:
- Name (required)
- Email (required)
- Phone (optional)
- Subject (required)
- Message (required)

---

## Troubleshooting

### Site Not Updating

1. **Wait a few minutes** - GitHub Pages can take 2-5 minutes to rebuild
2. **Check Actions** - Go to repository > Actions tab to see build status
3. **Clear cache** - Try hard refresh (Ctrl+Shift+R)
4. **Check for errors** - Look for red X in Actions tab

### Broken Images

1. Verify file exists in `assets/images/`
2. Check file path is correct (case-sensitive)
3. Ensure path starts with `/assets/images/`

### Layout Issues

1. Check front matter has correct `layout:` value
2. Verify YAML syntax (proper indentation, colons)
3. Check for unclosed HTML tags

### Common YAML Errors

```yaml
# WRONG - missing quotes around special characters
title: Welcome: A Guide

# CORRECT
title: "Welcome: A Guide"

# WRONG - improper indentation
subjects:
- name: Math
description: Numbers

# CORRECT
subjects:
  - name: Math
    description: Numbers
```

---

## File Structure Overview

```
HCMS/
├── _classrooms/           # Individual classroom pages
├── _data/                 # Data files (after_school.yml)
├── _includes/             # Reusable components
│   └── weekly-schedule.html
├── _layouts/              # Page templates
│   ├── default.html       # Main layout with header/footer
│   ├── page.html          # Standard page layout
│   ├── post.html          # Blog post layout
│   └── classroom.html     # Classroom page layout
├── _posts/                # News/blog posts
├── assets/
│   ├── css/main.css       # All styles
│   ├── js/main.js         # JavaScript
│   └── images/            # All images
├── pages/                 # Main site pages
├── _config.yml            # Site configuration
└── index.html             # Homepage
```

---

## Getting Help

For technical issues with the website:
1. Check this documentation first
2. Review the [Jekyll documentation](https://jekyllrb.com/docs/)
3. Contact your web administrator

---

*Last updated: January 2026*
