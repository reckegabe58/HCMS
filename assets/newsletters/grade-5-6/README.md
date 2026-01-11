# Grade 5/6 Newsletter Upload Guide

## Folder Location
`/assets/newsletters/grade-5-6/`

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
Open `/_classrooms/grade-5-6.md` and add a new entry at the **TOP** of the `newsletters:` list:

```yaml
newsletters:
  - month: "February 2025"                                    # Required
    title: "Growing Independence"                             # Optional
    file: /assets/newsletters/grade-5-6/2025-02-newsletter.pdf   # Required
    type: pdf                                                 # Required: pdf, png, or jpg
    description: "This month we're focusing on..."            # Optional
  # ... existing newsletters below
```

### Step 3: Commit and push
```bash
git add assets/newsletters/grade-5-6/2025-02-newsletter.pdf
git add _classrooms/grade-5-6.md
git commit -m "Add February 2025 newsletter for Grade 5/6"
git push
```

## Important Notes
- **Add new newsletters at the TOP** of the list - the first entry is displayed as "Current"
- The `type` field must match your file extension (pdf, png, or jpg)
- Keep file sizes under 2MB for PDFs, under 500KB for images
- The thumbnail preview only shows for PNG/JPG files; PDFs show a document icon
