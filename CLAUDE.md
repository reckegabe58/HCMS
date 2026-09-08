# Henry Coaster Memorial School Website

## What This Project Is

This is the website for **Henry Coaster Memorial School (HCMS)**, a K-8 school in Marten Falls First Nation, a remote fly-in community in northwestern Ontario. The site is built with **Jekyll** (static site generator) and hosted at **henrycoastermemorialschool.ca**.

I Gabe built this site and am contracted to maintain and update it throughout the school year under an ongoing support agreement with the school's Education Director. You (Claude Code) are working alongside me in this repo to make changes, fix issues, and keep the site current. This is a long-running relationship — we'll be using this repo and this setup all year, not just for one task.

## Your Role

Think of yourself as my development partner on this specific project, not a one-off task executor. Across the year you'll be helping with:

- **Routine content updates** — news posts, calendar/event updates, staff listings, document uploads, classroom page refreshes
- **Classroom page rebuilds** — several classroom pages need full content overhauls when teachers change (see "Known Work" below)
- **Bug fixes** — see "Known Issues" below for a running list
- **Technical maintenance** — dependency updates, performance, accessibility, SEO
- **New features** — as requested, scoped as separate work from routine maintenance

When I start a new session and reference "the audit," "the classroom rebuild," or similar shorthand, check this file and the `/docs` folder (if present) for context before asking me to re-explain from scratch.

## Site Structure

- **Home** (`/`) — carousel, intro, year-end report link, video, "This week at school," about blurb
- **About** (`/about/`, `/programs/`, `/leadership/`, `/partnerships/`) — school info, programs offered, staff bios, partner organizations
- **Identity** (`/identity/`) — Oji-Cree language and culture, land, seasons, history, values
- **Classrooms** (`/classrooms/` + one page per class: kindergarten, grade-1-2-a, grade-1-2-b, grade-3-4, grade-5-6, grade-7-8, native-language)
- **Calendar** (`/calendar/`) — embedded Google Calendar, upcoming events
- **Careers** (`/careers/`) — job postings, how to apply
- **Contact** (`/contact/`) — embedded Google Form, map, contact info

## Known Issues (from initial audit — check status before assuming these are unfixed)

1. Calendar page: "Download Full Calendar (PDF)" and "Add to Your Calendar" buttons link to `#` (dead)
2. Calendar page: "Upcoming Events" section is stuck on "Loading upcoming events..." — likely a broken/incomplete script
3. Kindergarten page: "Today's Schedule" widget shows contradictory info ("Monday" + "Enjoy your weekend!") — logic bug
4. Homepage says school established "1985," About page says "over 20 years ago" — inconsistent, needs one source of truth
5. Classroom pages are inconsistent in structure — some have a schedule widget, photo gallery, and multiple newsletters; others (e.g. Grade 7/8) have none of these
6. Newsletter files are a mix of PDF and PNG — should standardize on PDF for accessibility and print quality
7. Leadership page has no staff photos
8. Most inner pages share an identical meta description — should be unique per page for SEO
9. Classroom photos have messy filenames (raw phone/WhatsApp exports with spaces) and are likely unoptimized/oversized
10. Sitemap.xml, robots.txt, and a custom 404 page — need to confirm these exist in the repo

## Known Upcoming Work

**Classroom page rehauls (high priority, early in the school year):** All classroom pages *except Kindergarten* have new teachers this year — Grade 1/2 Class A, Grade 1/2 Class B, Grade 3/4, Grade 5/6, Grade 7/8, and Native Language. Each of these needs a full content refresh, not just a tweak:
- New teacher name(s), bio, and welcome letter
- New teacher photos
- Updated classroom philosophy/approach text if it was written in the old teacher's voice
- Updated contact emails
- Fresh classroom photo gallery (remove old teacher's photos)
- New newsletter section, starting clean for this school year
- While rebuilding each page, also apply the consistency fixes from the known issues above (schedule widget, photo gallery, PDF newsletters) so all classroom pages follow the same template

## Working Conventions

- **Don't push directly to `main`** without checking with me first, unless it's a small content fix (typo, broken link). For anything structural (new templates, bug fixes touching shared layouts, dependency updates), open a branch/PR so I can review before it goes live.
- **Confirm the deploy process** before making changes — check whether this repo auto-deploys on push (e.g. via GitHub Pages or Netlify) so we're both clear on what "pushing to main" actually does.
- **Content tone:** warm, community-centered, culturally respectful. This is a First Nations school — content around Oji-Cree language, culture, and land-based learning should reflect what's already on the Identity page, not generic corporate language.
- **Images:** rename uploaded photos to descriptive slugs (e.g. `grade-3-4-classroom-activity-1.jpg`, not `WhatsApp Image...`), and compress before committing. Always include descriptive alt text.
- **Newsletters:** PDF only, named consistently (e.g. `2026-09-newsletter.pdf` matching the existing pattern in `/assets/newsletters/[classroom]/`).
- **Test locally before pushing:** run `bundle exec jekyll serve` and check the page renders correctly, especially on mobile widths, before committing.

## Who to Ask

- **Content/decisions:** Gabe (that's me, the person you're working with in this chat)
- **School-side approval or new content:** Education Director, Susanna Baxter — routed through me, not directly
- **Technical/hosting questions I can't answer:** flag them clearly so I can follow up with the domain/hosting provider

## Quick Start for a New Session

If you (Claude Code) are starting fresh and haven't seen this repo before:
1. Read this file fully.
2. Run `bundle exec jekyll serve` to confirm the site builds and browse it locally.
3. Check `git log` for recent activity to see what's already been worked on.
4. Ask me what we're tackling today rather than assuming — I'll usually reference either "the audit," a specific classroom, or a specific page.
