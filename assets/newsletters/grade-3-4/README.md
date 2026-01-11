# Grade 3/4 Newsletter Upload Guide

## Folder Location
`/assets/newsletters/grade-3-4/`

## File Naming Convention
```
YYYY-MM-newsletter.ext
```

**Examples:**
- `2025-01-newsletter.pdf`
- `2025-02-newsletter.png`
- `2025-03-newsletter.jpg`

## Supported File Types
- **PDF** (.pdf) - Best for multi-page newsletters
- **PNG** (.png) - Single-page image newsletters
- **JPG** (.jpg) - Single-page image newsletters

## How to Add a Newsletter

### Step 1: Save your file here
Save your newsletter file to this folder using the naming convention above.

### Step 2: Edit the classroom file
Open `/_classrooms/grade-3-4.md` and add a new entry at the **TOP** of the `newsletters:` list:

```yaml
newsletters:
  - month: "February 2025"                                    # Required
    title: "Exploring New Topics"                             # Optional
    file: /assets/newsletters/grade-3-4/2025-02-newsletter.pdf   # Required
    type: pdf                                                 # Required: pdf, png, or jpg
    description: "This month we're diving into..."            # Optional
  # ... existing newsletters below
```

### Step 3: Commit and push
```bash
git add assets/newsletters/grade-3-4/2025-02-newsletter.pdf
git add _classrooms/grade-3-4.md
git commit -m "Add February 2025 newsletter for Grade 3/4"
git push
```

## Important Notes
- **Add new newsletters at the TOP** of the list - the first entry is displayed as "Current"
- The `type` field must match your file extension (pdf, png, or jpg)
- Keep file sizes under 2MB for PDFs, under 500KB for images
- The thumbnail preview shows in the interactive classroom's Newsletter panel

## Teacher
- Mr. Gabe

## Special Note for Grade 3/4
This classroom uses the **interactive pixel-art layout**. The newsletter appears when clicking the clipboard/newsletter hotspot in the classroom scene. The thumbnail preview displays in the RPG-style modal panel.
