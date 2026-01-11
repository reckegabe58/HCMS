# Newsletter Upload Guide

This guide explains how to upload newsletters so they appear on the correct classroom pages.

## Quick Steps

1. **Save your newsletter as a PDF** in `/assets/newsletters/`
2. **Edit the classroom file** in `/_classrooms/` to add the newsletter entry
3. **Commit and push** your changes

---

## Step 1: Save the Newsletter PDF

Save your PDF file to the `/assets/newsletters/` folder using this naming convention:

```
YYYY-MM-classroomname.pdf
```

### Examples:
- `2025-01-kindergarten.pdf` (January 2025, Kindergarten)
- `2025-02-grade-3-4.pdf` (February 2025, Grade 3/4)
- `2025-01-grade-7-8.pdf` (January 2025, Grade 7/8)

### Classroom file names:
| Classroom | File name to use |
|-----------|------------------|
| Kindergarten | `kindergarten` |
| Grade 1/2 A | `grade-1-2-a` |
| Grade 1/2 B | `grade-1-2-b` |
| Grade 3/4 | `grade-3-4` |
| Grade 5/6 | `grade-5-6` |
| Grade 7/8 | `grade-7-8` |

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

**Add new newsletters at the TOP of the list.** The first newsletter is automatically displayed as the "Current Newsletter."

```yaml
newsletters:
  - month: "February 2025"                           # Required: Month/year display text
    title: "Winter Fun & Learning"                   # Optional: Newsletter title
    file: /assets/newsletters/2025-02-kindergarten.pdf  # Required: Path to PDF
    description: "This month we're learning about..."   # Optional: Brief description
  - month: "January 2025"
    title: "Welcome Back"
    file: /assets/newsletters/2025-01-kindergarten.pdf
```

### Field Reference:

| Field | Required | Description |
|-------|----------|-------------|
| `month` | Yes | Display text for the month (e.g., "January 2025") |
| `title` | No | Optional title for the newsletter |
| `file` | Yes | Path to the PDF file (starts with `/assets/newsletters/`) |
| `description` | No | Brief description shown with the current newsletter |

---

## Step 3: Commit and Push

After saving your changes:

```bash
git add assets/newsletters/your-newsletter.pdf
git add _classrooms/classroom-name.md
git commit -m "Add February 2025 newsletter for Kindergarten"
git push
```

---

## Complete Example

### 1. Save the PDF
Save `2025-02-grade-3-4.pdf` to `/assets/newsletters/`

### 2. Edit `_classrooms/grade-3-4.md`

Before:
```yaml
newsletters:
  - month: "January 2025"
    title: "New Year New Learning"
    file: /assets/newsletters/2025-01-grade-3-4.pdf
```

After (add new entry at TOP):
```yaml
newsletters:
  - month: "February 2025"
    title: "Black History Month"
    file: /assets/newsletters/2025-02-grade-3-4.pdf
    description: "This month we're celebrating Black History Month and learning about influential figures in Canadian history."
  - month: "January 2025"
    title: "New Year New Learning"
    file: /assets/newsletters/2025-01-grade-3-4.pdf
```

---

## Troubleshooting

### Newsletter not showing up?
- Check that the file path in `file:` matches exactly (case-sensitive)
- Make sure the PDF is in `/assets/newsletters/`
- Verify the YAML formatting (correct indentation with 2 spaces)

### Getting YAML errors?
- Ensure text with special characters is in quotes: `title: "What's New"`
- Use consistent 2-space indentation
- Don't use tabs, only spaces

### Want to remove an old newsletter?
Simply delete its entry from the `newsletters:` list. You can optionally delete the PDF file too.

---

## Tips

- **Keep file sizes small** - Compress PDFs before uploading (aim for under 2MB)
- **Be consistent** - Use the same naming convention for all newsletters
- **Archive wisely** - Keep 6-12 months of newsletters; remove older ones to save space
- **Preview locally** - Run `bundle exec jekyll serve` to test before pushing
