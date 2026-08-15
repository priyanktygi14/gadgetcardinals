# GURIDESIGN SYSTEM SPECIFICATION
## The Master Architectural & Visual Design Standard for THE GADGET CARDINALS

---

## 1. Executive Design Manifesto & Brand Philosophy
**The Gadget Cardinals** represents the intersection of ultra-premium Apple industrial aesthetic and high-octane Cyberpunk Neo-Brutalism. The design language must evoke the feeling of entering an exclusive, high-tech, master-grade underground vault for 1:1 first-copy Apple hardware.

### Core Visual Tenets:
1. **Unapologetic Contrast**: Deep pitch-black OLED surfaces (`#050505`, `#080808`, `#0E0E10`) electrified with high-luminance neon accents (Volt Yellow `#DFFF00`, Electric Purple `#6D28FF`, Bright Cyan `#20D9E8`, Hot Pink `#FF2FA8`, Blazing Orange `#FF7A00`).
2. **Industrial Neo-Brutalism + HUD Precision**: Bold angular structures, technical monospace metadata brackets `[ FIRST COPY ]`, laser-sharp border accents (`#1F1F24`, `#27272A`), hazard diagonal warning stripes, and technical wireframe corner markers (`tech-corner-tl`, `tech-corner-br`).
3. **Flawless Visual Hierarchy**: Immediate scannability where editorial display headlines dominate, product cutouts appear hyper-real and three-dimensional, prices stand out in high-contrast monospace tabular fonts, and primary CTAs command instant action.
4. **100% Fluid & Consistent Responsiveness**: Seamless scaling from compact mobile screens (320px) to ultra-wide displays (1600px+) with zero horizontal overflow, thumb-friendly touch targets (min 44px), and adaptive typography.

---

## 2. Master Typography System & Font Matrix

### A. Font Families & Roles
| Role | Font Family | Fallbacks | Primary Purpose & Usage |
| :--- | :--- | :--- | :--- |
| **Editorial Display / Headings** | `"Anton"`, `"Bebas Neue"` | Impact, sans-serif | Page titles, Hero headlines, Section titles, Card headers, Starburst badges. Always uppercase with tight letter-spacing. |
| **Secondary Display / Subheadings** | `"Bebas Neue"`, `"Oswald"` | Anton, sans-serif | Category labels, badge callouts, navigation items, testimonial quote accents. |
| **Body & UI Text** | `"Inter"`, `"Plus Jakarta Sans"` | system-ui, sans-serif | Paragraphs, descriptions, button text, form inputs, navigation links, helper text. High legibility at all scales. |
| **Technical HUD & Monospace** | `"Space Grotesk"` | 'Courier New', monospace | Prices, SKU tags, category metadata tags, specifications table, timestamps, HUD coordinates. |

### B. Typographic Scale & Hierarchy Rules
| Element | Font Family | Size (Mobile <640px) | Size (Tablet 640-1023px) | Size (Desktop 1024px+) | Line Height | Letter Spacing | Case / Transform |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Hero Mega Headline** | Display (`Anton`) | 3.25rem (52px) | 5rem (80px) | 7rem - 7.6rem (112-122px) | `0.88` | `-0.02em` | UPPERCASE |
| **Section H2 (Deals, Benefits)** | Display (`Anton`) | 2.25rem (36px) | 3rem (48px) | 3.75rem - 4.5rem (60-72px) | `0.9` | `-0.01em` | UPPERCASE |
| **Page H1 (Catalog, Cart, etc.)** | Display (`Anton`) | 2.5rem (40px) | 3.75rem (60px) | 4.5rem (72px) | `0.92` | `-0.01em` | UPPERCASE |
| **Card Title (Products, Decks)** | Display (`Anton`) | 1rem (16px) | 1.125rem (18px) | 1.25rem (20px) | `1.1` | `0` | UPPERCASE |
| **Eyebrows / Metadata Tags** | Mono (`Space Grotesk`) | 0.6875rem (11px) | 0.75rem (12px) | 0.75rem (12px) | `1.2` | `0.15em` | UPPERCASE / Bracketed |
| **Price Display (Hero/Deals)** | Mono (`Space Grotesk`) | 1.25rem (20px) | 1.5rem (24px) | 1.75rem - 2rem (28-32px) | `1.0` | `-0.02em` | Tabular Bold Numbers |
| **Body Large (Intro text)** | Sans (`Inter`) | 0.9375rem (15px) | 1rem (16px) | 1.125rem (18px) | `1.6` | `0` | Sentence case |
| **Body Regular (Descriptions)** | Sans (`Inter`) | 0.8125rem (13px) | 0.875rem (14px) | 0.875rem (14px) | `1.55` | `0` | Sentence case |
| **UI Small / Captions** | Sans (`Inter`) | 0.6875rem (11px) | 0.75rem (12px) | 0.75rem (12px) | `1.4` | `0.02em` | Normal / Uppercase |

---

## 3. Color Architecture, Glows & Contrast Tokens

### A. Surface Palette (Dark OLED Foundation)
```css
--bg-main:        #050505; /* Pitch Black Body Background */
--surface-dark:   #08080A; /* Secondary background */
--surface-card:   #0B0B0E; /* Primary container / product card */
--surface-light:  #141418; /* Interactive controls / inputs */
--surface-elev:   #1C1C22; /* Hover states / elevated tooltips */
--border-subtle:  #1F1F24; /* Standard structure separators */
--border-active:  #2D2D35; /* Card hover / focus border */
--border-accent:  #DFFF00; /* Neon highlight border */
```

### B. High-Luminance Neon Accents
- **Volt Neon Yellow (`#DFFF00`)**: Primary brand power color. Used for primary CTAs, main headline highlight, key active states, selection rings, and glow effects.
- **Electric Purple (`#6D28FF`)**: Secondary brand signature. Used for featured hero cards, luxury badges, discount callouts, and glow backplates.
- **Bright Cyber Cyan (`#20D9E8`)**: Technical accent. Used for HUD markers, live indicators, and secondary badges.
- **Hot Electric Pink (`#FF2FA8`)**: Special promotion & high-urgency accent. Used for starburst flash tags and metric badges.
- **Blazing Orange (`#FF7A00`)**: Discount badges and special offers.

### C. Text Hierarchy Tokens
- **Headings / High-Emphasis**: `#F5F5F5` (Pure Crisp White) / `#DFFF00` (Volt Accent)
- **Body & Secondary**: `#A1A1AA` (Zinc 400 - High Contrast on Black)
- **Muted / Inactive**: `#71717A` (Zinc 500)
- **Dark Inverted on Neon**: `#050505` (Heavy True Black on Yellow/Cyan/Orange cards)

### D. Box Shadows & Glow Matrix
- Volt Yellow Glow: `box-shadow: 0 0 25px rgba(223, 255, 0, 0.35);`
- Electric Purple Glow: `box-shadow: 0 0 30px rgba(109, 40, 255, 0.45);`
- Card Hover Elevation: `box-shadow: 0 20px 45px -10px rgba(0, 0, 0, 0.9);`

---

## 4. Fluid Responsive Breakpoints & Spatial Rules

### A. Viewport Breakpoints
- **Mobile Compact (`xs`)**: `320px – 479px` (Single column, fluid cards, sticky navigation, compact header)
- **Mobile Wide / Phablet (`sm`)**: `480px – 639px` (2-column grids for categories and deals, full-width drawers)
- **Tablet (`md`)**: `640px – 1023px` (2-3 column grids, expanded hero layout, visible filter bars)
- **Desktop Standard (`lg`)**: `1024px – 1279px` (Full navigation menu, side-by-side hero, 3-column deal cards, 4-column product catalog)
- **Desktop Wide (`xl` & `2xl`)**: `1280px – 1600px+` (Max container width capped at `1600px` centered with uniform padding `px-4 sm:px-6 lg:px-12`)

### B. Spacing Rhythm & Consistency Rules
1. **Container Padding**: Always `px-4 sm:px-6 lg:px-12` across every single section and page for uniform lateral alignment.
2. **Section Vertical Spacing**: `py-10 sm:py-14 lg:py-20` on all standard sections.
3. **Card Corner Radii**: Uniform `rounded-2xl` (16px) or `rounded-3xl` (24px) across all card components.
4. **Touch Targets**: Minimum 44px × 44px clickable area on all buttons, links, and icons.

---

## 5. Component Consistency & Design Standards

### A. Global Header
- Sticky position with `bg-[#050505]/95 backdrop-blur-md` and fine border `border-b border-[#18181B]`.
- Logo with upper eyebrow `"THE GADGET"` (tracking `0.2em`) and lower display `"CARDINALS"` (hover neon yellow).
- Interactive cart icon with electric purple counter badge and search trigger.
- Neon Yellow Hamburger Menu button with 3 black bars on mobile.

### B. Hero Section
- Left column editorial stack: Eyebrow tag `[ 1:1 FIRST COPY REPLICAS ]` -> Multi-color 4-line H1 -> Supporting paragraph -> Dual CTAs (Shop Now in Volt Yellow + View Collection) -> Satisfaction HUD pill badge.
- Right column visual stage: Angled volt yellow polygonal backplate -> Scalloped purple starburst badge -> 3-layer floating composition (iPhone 14 Pro Max center, AirPods Pro top-left, Apple Watch bottom-right).

### C. Category Strip & Collection Cards
- Uniform heights across all cards (`h-[240px] sm:h-[260px]`).
- Clean top content (Title in `font-display`, Subtitle in uppercase, circular arrow indicator) and bottom product image cutout with subtle zoom on hover.
- First card as high-tech intro deck `"CHOOSE YOUR VIBE"` with `[ FIRST COPY ]` monospace tag.

### D. Crazy Deals Section
- Huge atmospheric watermark `"DEALS"` in the background.
- Left column editorial intro with yellow "EXPLORE DEALS" CTA.
- 3 distinct, harmonious deal cards:
  1. Left: Stealth dark card with yellow starburst tag and instant Add-to-Cart.
  2. Center: Featured electric purple card with orange starburst tag and circular yellow Add-to-Cart.
  3. Right: Electric volt yellow card with black starburst tag and dark Add-to-Cart.

### E. Product Catalog (Shop Page & Search)
- Sticky / top filter bar with active yellow pill indicators and quick sort dropdown.
- High-contrast product cards with category tags, discount starburst tags, 1:1 verification indicators, price comparisons, and instant Add-to-Cart triggers.
- Empty states with dedicated call-to-actions.

### F. Product Detail Page (PDP)
- Dual column architecture: Left gallery stage with large viewport cutout + thumbnail strip; Right specification & purchase deck.
- Pincode delivery estimator with instant feedback.
- 4-column trust guarantee strip (Original Box, 1-Year Warranty, 7-Day Returns, Free Express Shipping).
- Technical specification matrix and product highlights checklist.

### G. Cart Drawer & Dedicated Cart Page
- Real-time quantity increment/decrement with immediate subtotal and total calculations.
- Coupon code validator (`CARTEL10` for 10% off).
- Streamlined 1-page checkout form with UPI and Cash on Delivery options and order confirmation feedback.

### H. Trust Strip, Benefits & Testimonials
- TrustStrip: 4-card metric strip with boxed icons and clean typography.
- BenefitsSection: 4 vibrant colored metric cards (Volt, Purple, Cyan, Pink) with audio soundwave accent lines and plus icons.
- Testimonials: Dark card with giant electric purple quotation badge, star rating, customer review, and prev/next controls.

### I. Newsletter & Global Footer
- Newsletter: Full-bleed neon volt yellow container with hazard stripe accents and direct subscribe input.
- Footer: 4-column layout with brand story, social media pills (Instagram, Twitter, Discord, YouTube) with color-matched neon glows, navigation links, and app preview badges.

---

## 6. Execution & Implementation Roadmap
To achieve 100% perfection across the live codebase:
1. **Refine CSS & Typography Config**: Verify all font families, utility classes, and gradient tokens in `tailwind.config.js` and `src/index.css`.
2. **Enhance Component Consistency**:
   - Standardize DealCard so all cards feature intuitive, accessible Add-to-Cart actions while preserving their unique color personalities.
   - Standardize all buttons with `.btn-magnetic` and smooth hover micro-animations.
   - Refine mobile navigation and responsiveness across all page templates.
3. **Audit Cross-Page Fluidity**: Ensure zero layout shifts, consistent price formatting (`₹XX,XXX`), and consistent padding from 320px to 1600px+.
