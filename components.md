# GadgetCartels.in — Component Architecture

## Global

### Header

Props/data:

- logo
- navigation
- cart count

Includes:

- desktop navigation
- search button
- cart button
- mobile menu button

### Footer

Columns:

- Shop
- Company
- Help

Also:

- logo
- description
- social links
- app promotional block
- copyright

### Button

Variants:

- primary
- secondary
- icon
- compact

### IconButton

For:

- search
- cart
- arrows
- carousel controls
- close

---

## Homepage

### HeroSection

Contains:

- eyebrow
- headline
- supporting copy
- CTAs
- hero products
- decorative background
- promotion badge
- satisfaction mini-card

### CategoryStrip

Contains:

- intro block
- CategoryCard list

### CategoryCard

Props:

- title
- subtitle
- image
- accent
- href

### TrustStrip

Contains:

- TrustItem list

### TrustItem

Props:

- icon
- title
- description

### DealsSection

Contains:

- section intro
- DealCard carousel

### DealCard

Props:

- product
- image
- current price
- old price
- discount
- accent
- featured state

### BenefitsSection

Contains:

- section intro
- BenefitCard list

### BenefitCard

Props:

- metric
- title
- description
- accent
- icon

### Testimonial

Props:

- quote
- customer
- rating

### NewsletterCTA

Contains:

- heading
- copy
- email field
- submit button
- decorative artwork

---

## Shop

### ProductGrid

Data-driven product list.

### ProductCard

Props:

- name
- category
- image
- price
- old price
- discount
- badge
- href

### ProductFilter

Filters:

- category
- price
- availability
- sort

---

## Product Detail

### ProductGallery

### ProductInfo

### PriceBlock

### ProductHighlights

### DeliveryInfo

### RelatedProducts

---

## Interaction Components

### MobileMenu

Full-screen or large overlay.

### CarouselControls

Previous / next.

### NewsletterForm

Email validation.

### SearchOverlay

Search interaction.

---

## Styling Rule

Components should use shared design tokens rather than local random colors.

Keep visual decisions centralized where practical.
