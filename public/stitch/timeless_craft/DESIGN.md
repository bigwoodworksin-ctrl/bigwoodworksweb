---
name: Timeless Craft
colors:
  surface: '#fbf9f1'
  surface-dim: '#dcdad2'
  surface-bright: '#fbf9f1'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f5f4ec'
  surface-container: '#f0eee6'
  surface-container-high: '#eae8e0'
  surface-container-highest: '#e4e3db'
  on-surface: '#1b1c17'
  on-surface-variant: '#504442'
  inverse-surface: '#30312c'
  inverse-on-surface: '#f3f1e9'
  outline: '#827472'
  outline-variant: '#d3c3c0'
  surface-tint: '#745853'
  primary: '#271310'
  on-primary: '#ffffff'
  primary-container: '#3e2723'
  on-primary-container: '#ae8d87'
  inverse-primary: '#e3beb8'
  secondary: '#6f5a52'
  on-secondary: '#ffffff'
  secondary-container: '#fadcd2'
  on-secondary-container: '#766057'
  tertiary: '#231600'
  on-tertiary: '#ffffff'
  tertiary-container: '#3d2a00'
  on-tertiary-container: '#b38f4a'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffdad4'
  primary-fixed-dim: '#e3beb8'
  on-primary-fixed: '#2b1613'
  on-primary-fixed-variant: '#5b403c'
  secondary-fixed: '#fadcd2'
  secondary-fixed-dim: '#ddc1b7'
  on-secondary-fixed: '#271812'
  on-secondary-fixed-variant: '#56423b'
  tertiary-fixed: '#ffdea5'
  tertiary-fixed-dim: '#e9c176'
  on-tertiary-fixed: '#261900'
  on-tertiary-fixed-variant: '#5d4201'
  background: '#fbf9f1'
  on-background: '#1b1c17'
  surface-variant: '#e4e3db'
typography:
  display-lg:
    fontFamily: Playfair Display
    fontSize: 64px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Playfair Display
    fontSize: 48px
    fontWeight: '600'
    lineHeight: '1.2'
  headline-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '500'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: '1'
    letterSpacing: 0.05em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1280px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 64px
  section-gap: 120px
---

## Brand & Style
The design system is built on a foundation of "Quiet Dignity." It balances the artisanal warmth of woodworking with the professional rigor required for a B2B manufacturing partner. The aesthetic is **Modern Organic**, blending high-end editorial layouts with tactile, material-inspired elements.

The visual narrative focuses on heritage and longevity. It avoids the sterile coldness of typical enterprise SaaS, opting instead for a "Digital Atelier" feel. This is achieved through generous whitespace, high-contrast serif typography, and a deliberate use of layered, natural textures that evoke the physical touch of premium walnut and oak.

## Colors
The palette is rooted in the natural world, using high-chroma earthy tones to establish authority and warmth.

- **Primary (Deep Walnut):** Used for all primary text, heavy structural borders, and high-emphasis icons. It provides the "weight" of the brand.
- **Secondary (Warm Wood):** Applied to secondary actions, dividers, and decorative accents that require a softer touch than the primary brown.
- **Accent (Subtle Gold):** Reserved for primary Call-to-Action (CTA) elements, status indicators of high value, and premium tier highlights.
- **Background (Soft Cream):** The canvas for the entire system. This off-white base reduces eye strain and provides a sophisticated, paper-like quality.

**Texture Integration:** Use a low-opacity (2-4%) wood grain SVG pattern on large background sections to break up flat planes of color without sacrificing legibility.

## Typography
The typographic scale emphasizes a hierarchy between "Editorial Expression" (Headlines) and "Functional Precision" (Body). 

**Playfair Display** is used for headings to convey the handcrafted, bespoke nature of the product. It should be typeset with slightly tighter letter-spacing in larger sizes to maintain a premium look.

**Inter** provides the utilitarian contrast necessary for B2B transactions, pricing tables, and technical specifications. All labels and navigational elements use Inter in SemiBold or Bold to ensure clear orientation.

## Layout & Spacing
The layout follows a **Fixed-Fluid Hybrid** model. Content is centered within a 1280px maximum container on desktop to maintain readability, while background elements bleed to the edge of the screen.

- **Rhythm:** A strict 8px grid governs all micro-spacing. 
- **White Space:** Use significant vertical padding (`section-gap`) between content blocks to allow the products to "breathe," mirroring the respectful atmosphere of a memorial gallery.
- **Desktop:** 12-column grid with 24px gutters.
- **Mobile:** Single column with 16px side margins; headlines scale down to prevent awkward wrapping.

## Elevation & Depth
This design system uses **Tonal Layering** combined with **Ambient Shadows** to create a sense of physical presence.

- **Surface Tiers:** The main background is Soft Cream. Cards and modals use a pure white (#FFFFFF) to pop forward.
- **Shadows:** Shadows are highly diffused and slightly tinted with the Primary Walnut color (e.g., `rgba(62, 39, 35, 0.08)`). This avoids the "dirty" look of grey shadows on cream backgrounds.
- **Interaction:** Upon hover, elevated elements (like product cards) should increase their shadow spread and lift slightly (2px Y-axis offset) to simulate a tactile response.

## Shapes
The shape language is defined by **Softened Rectangles**. 

The `0.5rem` (8px) base radius provides a modern, professional structure while removing the "harshness" of sharp corners. This choice reflects the sanded, finished edges of high-quality woodwork. Large components like hero image containers or featured cards should utilize the `rounded-xl` (24px) setting to emphasize the premium feel.

## Components
Consistent component styling reinforces the B2B professional standards:

- **Buttons:** Primary buttons use the Subtle Gold background with Deep Walnut text for maximum contrast. They feature a subtle inner-glow to mimic a metallic finish. Secondary buttons use a Deep Walnut outline.
- **Input Fields:** Use a 1px border of Warm Wood (#A1887F). On focus, the border thickens to 2px in Deep Walnut. Backgrounds stay pure white.
- **Cards:** Product cards use a thin, 1px Soft Wood border and a very soft ambient shadow. Images within cards should have a subtle 5% darken overlay to help white text pop if placed over them.
- **Chips/Badges:** Used for wood type (e.g., "Solid Oak", "Premium Walnut"). These use a Soft Cream background with a Deep Walnut border to look like small physical tags.
- **Grids:** Product catalogs must use a strictly aligned grid with consistent aspect ratios for photography (typically 4:5 or 1:1) to maintain an orderly, professional appearance.