# Newsletter Upload Guide

This guide explains how to upload newsletters so they appear on the correct classroom pages.

## Quick Steps

1. **Save your newsletter file** in the correct classroom folder under `/assets/newsletters/`
2. **Edit the classroom file** in `/_classrooms/` to add the newsletter entry
3. **Commit and push** your changes

---

## Supported File Types

Newsletters can be uploaded in any of these formats:
- **PDF** (.pdf) - Best for multi-page newsletters
- **PNG** (.png) - Good for single-page image newsletters
- **JPG/JPEG** (.jpg, .jpeg) - Good for single-page image newsletters

---

## Step 1: Save the Newsletter File

Each classroom has its own folder. Save your file in the correct location:

| Classroom | Folder Path |
|-----------|-------------|
| Kindergarten | `/assets/newsletters/kindergarten/` |
| Grade 1/2 A | `/assets/newsletters/grade-1-2-a/` |
| Grade 1/2 B | `/assets/newsletters/grade-1-2-b/` |
| Grade 3/4 | `/assets/newsletters/grade-3-4/` |
| Grade 5/6 | `/assets/newsletters/grade-5-6/` |
| Grade 7/8 | `/assets/newsletters/grade-7-8/` |

### Naming Convention

Use this format: `YYYY-MM-newsletter.ext`

**Examples:**
- `2025-01-newsletter.pdf` (January 2025, PDF)
- `2025-02-newsletter.png` (February 2025, PNG)
- `2025-03-newsletter.jpg` (March 2025, JPG)

**Full path examples:**
- `/assets/newsletters/kindergarten/2025-01-newsletter.pdf`
- `/assets/newsletters/grade-3-4/2025-02-newsletter.png`
- `/assets/newsletters/grade-7-8/2025-01-newsletter.jpg`

---

## Step 2: Edit the Classroom File

Open the corresponding classroom file in `/_classrooms/`:

| Classroom | File to edit |
|-----------|--------------|
| Kindergarten | `_classrooms/kindergarten.md` |
| Grade 1/2 A | `_classrooms/grade-1-2-a.md` |
| Grade 1/2 B | `_classrooms/grade-1-2-b.md` |
| Grade 3/4 | `_classrooms/grade-3-4.md` |
| Grade 5/6 | `_classrooms/grade-5-6.md` |
| Grade 7/8 | `_classrooms/grade-7-8.md` |

### Add the Newsletter Entry

Find the `newsletters:` section in the file's front matter (the part between the `---` lines at the top).

**IMPORTANT: Add new newsletters at the TOP of the list.** The first newsletter is automatically displayed as the "Current Newsletter" with a thumbnail preview.

```yaml
newsletters:
  - month: "February 2025"                                      # Required
    title: "Winter Fun & Learning"                              # Optional
    file: /assets/newsletters/kindergarten/2025-02-newsletter.pdf  # Required
    type: pdf                                                   # Required: pdf, png, or jpg
    description: "This month we're learning about..."           # Optional
  - month: "January 2025"
    title: "Welcome Back"
    file: /assets/newsletters/kindergarten/2025-01-newsletter.png
    type: png
```

### Field Reference

| Field | Required | Description |
|-------|----------|-------------|
| `month` | Yes | Display text for the month (e.g., "January 2025") |
| `title` | No | Optional title for the newsletter |
| `file` | Yes | Path to the file (starts with `/assets/newsletters/classroomname/`) |
| `type` | Yes | File type: `pdf`, `png`, or `jpg` |
| `description` | No | Brief description shown with the current newsletter |

---

## Step 3: Commit and Push

After saving your changes:

```bash
git add assets/newsletters/kindergarten/2025-02-newsletter.pdf
git add _classrooms/kindergarten.md
git commit -m "Add February 2025 newsletter for Kindergarten"
git push
```

---

## Complete Example

### 1. Save the file
Save `2025-02-newsletter.png` to `/assets/newsletters/grade-3-4/`

### 2. Edit `_classrooms/grade-3-4.md`

Before:
```yaml
newsletters:
  - month: "January 2025"
    title: "New Year New Learning"
    file: /assets/newsletters/grade-3-4/2025-01-newsletter.pdf
    type: pdf
```

After (add new entry at TOP):
```yaml
newsletters:
  - month: "February 2025"
    title: "Black History Month"
    file: /assets/newsletters/grade-3-4/2025-02-newsletter.png
    type: png
    description: "Celebrating Black History Month and learning about influential figures."
  - month: "January 2025"
    title: "New Year New Learning"
    file: /assets/newsletters/grade-3-4/2025-01-newsletter.pdf
    type: pdf
```

---

## How It Works

- **Current Newsletter**: The first (top) entry in the list is shown prominently with:
  - A thumbnail preview (for images) or document icon (for PDFs)
  - Download and View buttons

- **Previous Newsletters**: All other entries appear in a collapsible "Previous Newsletters" dropdown with download links

- **Automatic Ordering**: Simply add new newsletters at the top of the list. When you add February's newsletter above January's, February automatically becomes the "Current" one.

---

## Troubleshooting

### Newsletter not showing up?
- Check that the file path matches exactly (case-sensitive)
- Verify the file is in the correct classroom folder
- Make sure the `type` field matches the file extension

### Image not displaying as thumbnail?
- Ensure `type` is set to `png` or `jpg` (not `pdf`)
- Check that the file path is correct

### Getting YAML errors?
- Use quotes around text with special characters: `title: "What's New"`
- Use consistent 2-space indentation
- Don't use tabs, only spaces

---

## Tips

- **Keep file sizes small** - Compress images and PDFs before uploading
  - Images: Aim for under 500KB
  - PDFs: Aim for under 2MB
- **Be consistent** - Use the same naming convention for all newsletters
- **Archive wisely** - Keep 6-12 months of newsletters; remove older ones to save space
- **Preview locally** - Run `bundle exec jekyll serve` to test before pushing
