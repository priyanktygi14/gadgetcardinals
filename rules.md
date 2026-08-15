# GadgetCartels.in — Implementation Rules

## Rule 1 — Reference First

The supplied reference image is the primary visual authority.

Do not redesign sections just because another layout is easier to code.

## Rule 2 — Do Not Genericize

Never replace the reference's expressive design with:

- generic ecommerce grids
- generic hero sections
- standard Bootstrap-looking cards
- generic Tailwind templates
- default component-library aesthetics

## Rule 3 — Preserve Hierarchy

The following must remain visually dominant:

1. hero headline
2. hero products
3. neon accent blocks
4. category cards
5. deals
6. benefit statistics

## Rule 4 — Reuse Components

Create reusable components for:

- Header
- MobileMenu
- Button
- ProductCard
- CategoryCard
- DealCard
- BenefitCard
- TrustItem
- Testimonial
- Newsletter
- Footer
- IconButton
- DiscountBadge

## Rule 5 — Data Driven

Products, categories, deals and benefits should come from data arrays or structured data.

Do not duplicate card markup manually.

## Rule 6 — No Hardcoded Repetition

Do not repeat:

- product card HTML
- category card HTML
- footer link groups
- navigation items

unless there is a real structural difference.

## Rule 7 — Image Safety

Always define image dimensions or aspect ratios.

Avoid layout shift.

Use responsive images where supported.

## Rule 8 — Accessibility

Every meaningful image needs appropriate alt text.

Interactive controls must have accessible labels.

Do not rely on color alone.

Maintain sufficient contrast.

## Rule 9 — Responsive

Required breakpoints:

- mobile: `< 640px`
- tablet: `640–1023px`
- desktop: `1024–1439px`
- large desktop: `1440px+`

Tune these based on the actual implementation.

## Rule 10 — Mobile Overflow

Never allow accidental horizontal page overflow.

Horizontal carousels are allowed only inside intentionally scrollable containers.

## Rule 11 — Icons

Use one consistent icon system.

Do not mix random icon styles.

## Rule 12 — Product Accuracy

Do not fabricate product specifications.

If exact product data is unavailable, use clearly marked placeholder content.

## Rule 13 — Color Discipline

Do not introduce arbitrary colors.

Use the defined design tokens.

## Rule 14 — Animation Discipline

Animations must support hierarchy.

No:

- excessive parallax
- bouncing everything
- constant spinning
- large cursor effects
- distracting page transitions

## Rule 15 — Performance

Optimize:

- large images
- fonts
- animation
- client-side JavaScript

Prefer CSS transitions for simple effects.

## Rule 16 — Existing Project

Do not delete existing functionality without checking its purpose.

Do not migrate frameworks unless explicitly required.

## Rule 17 — Visual QA

After each major section:

1. render
2. compare with reference
3. identify differences
4. correct spacing/scale/position
5. continue

## Rule 18 — Avoid Premature Abstraction

Do not create a huge design system before the reference has been reproduced.

First achieve visual accuracy, then refactor repeated patterns.

## Rule 19 — Page Consistency

Every page must look like it belongs to the same website.

Use the same:

- header
- typography
- color system
- buttons
- cards
- borders
- footer
- motion language

## Rule 20 — Never Declare Completion Without Testing

Run the application and inspect it at multiple viewport sizes before finalizing.
