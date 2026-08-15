# GadgetCartels.in — Technical Direction

## Primary Goal

Build a fast, responsive, maintainable ecommerce frontend while preserving the visual reference extremely closely.

## Framework

Use the framework already present in the repository.

Do not migrate frameworks solely for the redesign.

If starting from an empty project, prefer:

- Next.js
- TypeScript
- Tailwind CSS

## Styling

Use:

- Tailwind CSS where already configured
- CSS variables/design tokens for global colors
- CSS modules or component styles where complex visual composition benefits from them

## Icons

Use a single icon library already installed in the project.

If none exists, use a consistent lightweight SVG icon approach.

## Images

Use responsive image handling supported by the existing framework.

Prioritize:

- WebP
- AVIF
- optimized JPG/PNG where necessary

## Data

Keep product/category/deal content data-driven.

Example conceptual structure:

```ts
type Product = {
  id: string
  slug: string
  name: string
  category: string
  image: string
  price: number
  oldPrice?: number
  discount?: number
}
```

Do not hardcode repeated product cards into JSX.

## SEO

Every page should have:

- unique title
- meta description
- canonical URL where appropriate
- Open Graph metadata
- descriptive headings

Product pages should include structured product metadata once real product data is connected.

## Accessibility

Support:

- keyboard navigation
- visible focus states
- semantic HTML
- alt text
- accessible form labels
- reduced motion

## Performance

Avoid:

- unnecessary client components
- oversized JavaScript
- giant unoptimized images
- excessive animation libraries

## Validation

Before final delivery:

```text
npm install
npm run dev
npm run build
```

Use the repository's actual scripts if they differ.

Check:

- console errors
- build errors
- broken images
- broken routes
- responsive layout
- interaction states
