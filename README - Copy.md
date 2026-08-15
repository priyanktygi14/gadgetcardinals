# GadgetCartels.in — Antigravity Design Pack

This package contains the project instructions for recreating the supplied GadgetCartels.in reference design.

## Files

- `00-MASTER-PROMPT.md` — give this to Antigravity as the main implementation instruction.
- `design.md` — visual system.
- `rules.md` — implementation constraints.
- `pages.md` — page architecture.
- `components.md` — reusable component plan.
- `content.md` — copy/content direction.
- `assets.md` — required asset plan.
- `animations.md` — motion rules.
- `tech-stack.md` — technical direction.
- `visual-qa.md` — final visual comparison checklist.

## Recommended Antigravity Workflow

### Step 1

Add the supplied homepage reference image to the Antigravity workspace.

Do not rename or modify the image unless necessary.

### Step 2

Put this entire `.md` pack in the project root.

### Step 3

Give Antigravity the instructions in `00-MASTER-PROMPT.md`.

### Step 4

Tell Antigravity to inspect the existing project before changing anything.

### Step 5

Build only the homepage first.

### Step 6

Run the website and compare it against the reference.

### Step 7

Fix visual differences before creating the other pages.

### Step 8

Build Shop, Collections, Product Detail, About, Contact, Cart and Search using the same system.

### Step 9

Run the `visual-qa.md` checklist.

## Important

The screenshot is a visual reference. It should NOT be inserted as one giant image to fake the website.

The implementation should be made from real HTML/components/CSS and real product assets.

## Asset Recommendation

Add real product cutouts to:

```text
public/assets/products/
```

and decorative graphics to:

```text
public/assets/decorative/
```

The closer the product assets are to the reference composition, the closer the final result will look.
