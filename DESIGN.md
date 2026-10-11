---
name: Keshgir Gnaneshwar Portfolio
description: Precision cybernetic portfolio with deep obsidian surfaces, electric cyan highlights, and cobalt blue controls
colors:
  primary: "#22d3ee"
  primary-hover: "#38bdf8"
  action: "#2563eb"
  action-hover: "#3b82f6"
  accent-indigo: "#6366f1"
  status-success: "#10b981"
  neutral-bg: "#050816"
  neutral-surface: "#0b0f17"
  neutral-surface-elevated: "#111726"
  neutral-border: "rgba(255, 255, 255, 0.08)"
  neutral-border-hover: "rgba(34, 211, 238, 0.35)"
  text-primary: "#ffffff"
  text-secondary: "#94a3b8"
  text-muted: "#64748b"
typography:
  display:
    fontFamily: "Inter, system-ui, -apple-system, sans-serif"
    fontSize: "clamp(2.5rem, 6vw, 4.5rem)"
    fontWeight: 900
    lineHeight: 1
    letterSpacing: "-0.03em"
  headline:
    fontFamily: "Inter, system-ui, -apple-system, sans-serif"
    fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)"
    fontWeight: 800
    lineHeight: 1.15
    letterSpacing: "-0.02em"
  title:
    fontFamily: "Inter, system-ui, -apple-system, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 700
    lineHeight: 1.3
    letterSpacing: "-0.01em"
  body:
    fontFamily: "Inter, system-ui, -apple-system, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 400
    lineHeight: 1.65
    letterSpacing: "normal"
  label:
    fontFamily: "JetBrains Mono, Fira Code, monospace"
    fontSize: "0.75rem"
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "0.15em"
rounded:
  sm: "6px"
  md: "10px"
  lg: "14px"
  xl: "16px"
  "2xl": "20px"
  full: "9999px"
spacing:
  xs: "4px"
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "32px"
  "2xl": "48px"
components:
  button-primary:
    backgroundColor: "{colors.action}"
    textColor: "{colors.text-primary}"
    rounded: "{rounded.xl}"
    padding: "14px 24px"
  button-primary-hover:
    backgroundColor: "{colors.action-hover}"
  button-secondary:
    backgroundColor: "rgba(255, 255, 255, 0.05)"
    textColor: "{colors.text-primary}"
    rounded: "{rounded.xl}"
    padding: "14px 24px"
  card-container:
    backgroundColor: "{colors.neutral-surface}"
    rounded: "{rounded.2xl}"
    padding: "24px"
  chip-mono:
    backgroundColor: "{colors.neutral-surface-elevated}"
    textColor: "{colors.text-secondary}"
    rounded: "{rounded.sm}"
    padding: "4px 10px"
---

# Design System: Keshgir Gnaneshwar Portfolio

## Overview

**Creative North Star: "The Obsidian Terminal"**

"The Obsidian Terminal" evokes a mission-critical computational workbench—quiet, dark, deeply engineered, and illuminated by precise electronic telemetry signals. Rather than loud showmanship or excessive ornamentation, the system relies on deep obsidian black depth (`#050816`), razor-sharp typography, and tactical bursts of vibrant cyan (`#22d3ee`) and electric blue (`#2563eb`).

Surfaces feel monolithic, grounded, and physical. Cards and containers reject unstable 3D rotations or playful perspective wobbles; instead, they maintain rock-solid planar integrity while responding with disciplined micro-interactions: illuminated border gradients on hover, hairline dividers, ambient spotlight tracking, and animated status pulses.

**Key Characteristics:**
- Deep obsidian backdrop with low-noise radial ambient lighting and technical vector grids.
- High-contrast hierarchy: bright white headings paired with technical monospace labels and muted slate body copy.
- Controlled cyan luminescence acting strictly as targeted focal signals.
- Solid, non-tilting planar surfaces with subtle glassmorphic backdrop-blur overlays.

## Colors

The palette balances dark space with precise technical signal colors.

### Primary
- **Signal Cyan** (`#22d3ee` / `#38bdf8`): Reserved for active status indicators, key value highlights, tech badges, and section headers. Never used for massive flooded background areas.

### Secondary
- **Cobalt Action Blue** (`#2563eb` / `#3b82f6`): The primary workhorse for interactive call-to-actions, buttons ("View My Work", "Let's Connect"), and prominent navigation triggers.

### Tertiary
- **Atmospheric Indigo** (`#6366f1` / `#8b5cf6`): Subtle ambient backlights, gradient transitions, and secondary glowing shadows.
- **Pulse Emerald** (`#10b981`): Functional live indicator for "Available" connection statuses and verified credential markers.

### Neutral
- **Deep Obsidian Base** (`#050816` / `#06080d`): Main viewport canvas, absorbing peripheral visual noise.
- **Card Surface** (`#0b0f17`): Primary content container background with 90% opacity backdrop blur.
- **Elevated Surface** (`#111726`): Inner badges, code blocks, and tertiary containers.
- **Hairline Border** (`rgba(255, 255, 255, 0.08)`): Subtle structural separation.
- **Text White** (`#ffffff`): Main display headings and hero titles.
- **Text Slate** (`#94a3b8` / `#64748b`): Readable body descriptions and metadata.

### Named Rules
**The Ten Percent Signal Rule.** Signal cyan (`#22d3ee`) must occupy no more than 10% of any given viewport. Its rarity gives it high visual priority; overuse dilutes technical impact.

**The Functional Color Rule.** Emerald green is strictly reserved for verified statuses and real-time availability. It is never used for decorative aesthetic accents.

## Typography

**Display Font:** Inter (fallback: system-ui, -apple-system, sans-serif)
**Body Font:** Inter (fallback: system-ui, sans-serif)
**Label/Mono Font:** JetBrains Mono (fallback: Fira Code, monospace)

**Character:** A high-precision dual-typeface pairing combining the modern, clean clarity of Inter for human communication with the rigid, mechanical discipline of JetBrains Mono for system metrics, category tags, and timestamps.

### Hierarchy
- **Display** (Black 900, clamp(2.5rem, 6vw, 4.5rem), line-height 0.95): Hero introductions and name titles. Tightly tracked (`-0.03em`).
- **Headline** (ExtraBold 800, clamp(1.75rem, 3.5vw, 2.5rem), line-height 1.15): Section headings and major feature titles.
- **Title** (Bold 700, 1.25rem, line-height 1.3): Project card titles, credential headings, and modal banners.
- **Body** (Regular 400, 0.9375rem / 15px, line-height 1.65): Descriptive paragraphs, summary bios, and project architecture details. Max line length capped at 65ch.
- **Label** (SemiBold 600, 0.75rem / 12px, letter-spacing 0.15em, uppercase): Section badges, category labels, credential identifiers (`CERT_01`), and status chips.

### Named Rules
**The Monospace Discipline Rule.** All metadata, technical tags, categories, credential IDs, and status indicators must be rendered in JetBrains Mono with uppercase tracking.

## Layout

The spatial model operates on a responsive 12-column grid within a max-width container of 1280px (`max-w-7xl`). Sections are delineated by subtle hairline dividers (`border-slate-800/60`) and generous vertical padding (80px to 96px).

- **Grid Systems:**
  - Hero: 2-column asymmetric split (left: copy and quick capabilities; right: anchored portrait with circular orbital glow).
  - Projects: 1-column on mobile, 2-column on tablet, 3-column / 4-card responsive layout on desktop.
  - Certifications: 2-column balanced grid with dual-column status summaries.
  - Contact: 5-column info sidebar paired with 7-column communication terminal form.
- **Rhythm:** Spacing follows a 4px modular scale (`4px`, `8px`, `12px`, `16px`, `24px`, `32px`, `48px`, `64px`).

## Elevation & Depth

Surfaces rely on tonal layering, subtle hairline borders, and atmospheric radial lighting rather than deep drop shadows.

- **Planar Stability:** Cards and containers are flat at rest with no 3D rotation, tilting, or perspective transformations.
- **Layering Model:**
  - Base: Solid Obsidian (`#050816`)
  - Middle: Translucent Cards (`rgba(11, 15, 23, 0.90)` + `backdrop-filter: blur(16px)`)
  - Elevated: Badges and Inner Controls (`rgba(17, 23, 38, 0.85)`)
- **Shadow Vocabulary:**
  - **Glow Ambient** (`0 0 25px -5px rgba(59, 130, 246, 0.25)`): Primary hover spotlight on interactive action buttons.
  - **Card Rest** (`0 10px 30px -10px rgba(0, 0, 0, 0.5)`): Grounds cards onto the dark background.
  - **Card Hover** (`0 20px 40px -15px rgba(0, 0, 0, 0.7)`): Subtle depth rise on hover state without spatial skew.

### Named Rules
**The Zero-Tilt Invariant.** Cards must remain planar and level under cursor motion. Motion is expressed through border glow transitions, background spotlight gradients, and thumbnail scales, never geometric distortion.

## Shapes

- **Radius Hierarchy:**
  - `sm` (6px): Code badges and tech tag chips.
  - `md` (10px): Small action buttons and status pills.
  - `xl` (16px): Primary buttons and form input fields.
  - `2xl` (20px): Project cards, certification panels, and contact containers.
  - `full` (9999px): Spotlight navbar pill, live status dots, and profile photo frame.
- **Borders:** 1px hairline strokes (`border-white/[0.08]` or `border-slate-800`). Hover states activate glowing animated gradient wrappers (`group-hover:from-blue-500/60 group-hover:via-cyan-400/50`).

## Components

### Buttons
- **Shape:** Rounded pill/box (`16px` / `rounded-xl`).
- **Primary Action ("View My Work", "Send Message"):** Cobalt Blue background (`#2563eb`), white bold text, `14px 24px` padding, hover transition to `#3b82f6` with soft glow shadow (`0 0 20px rgba(37,99,235,0.3)`).
- **Secondary / Ghost ("Explore More", "Close"):** Translucent background (`rgba(255, 255, 255, 0.05)`), hairline border (`border-white/10`), text white, hover shift to `border-cyan-400/30`.

### Project Cards
- **Shape:** Solid 20px rounded card (`rounded-2xl`).
- **Background:** High-density dark glass (`#0b0f17` at 90% opacity with 16px backdrop-blur).
- **Header:** 200px aspect-ratio thumbnail with subtle 1.05x image zoom on card hover, top-left numeric badge (`01`, `02`), and top-right cyan hover arrow.
- **Content:** Monospace category label, bold title, 3-line clamped description, and flex-wrap tech chips.
- **Actions:** Dual bottom triggers: "Overview" (opens detail modal) and "Code" (external GitHub link).

### Chips & Badges
- **Shape:** 6px rounded monospace pill (`rounded-md`).
- **Style:** Dark elevated base (`#06080d`), hairline border (`border-zinc-800`), muted text (`#d4d4d8`).
- **Hover State:** Border illuminates with `border-cyan-400/30` and text shifts to `text-cyan-300`.

### Navigation
- **Shape:** Floating capsule navbar (`rounded-full`).
- **Surface:** Ultra-thin glass (`rgba(255, 255, 255, 0.05)` + `backdrop-filter: blur(20px)` + `border-white/10`).
- **Links:** Muted text transitioning to crisp white on hover with active cyan accent indicator dot.

### Inputs & Terminal Fields
- **Shape:** 14px rounded rectangle (`rounded-xl`).
- **Style:** Deep obsidian fill (`#06080d`), border stroke (`border-slate-800`), light slate text.
- **Focus:** 1px electric blue border (`border-blue-500/60`) and 2px focus ring (`ring-2 ring-blue-500/10`).

## Do's and Don'ts

### Do:
- **Do** maintain stable, planar cards with zero 3D tilt or rotation when hovering.
- **Do** restrict signal cyan (`#22d3ee`) to targeted focal highlights and key metadata.
- **Do** format technical categories, credentials, and tags in JetBrains Mono with uppercase tracking.
- **Do** ensure all external links have accessible labels and open securely in new tabs (`rel="noreferrer"`).
- **Do** preserve fast static single-page performance without introducing heavyweight database dependencies.

### Don't:
- **Don't** apply 3D transform perspectives (`rotateX`, `rotateY`, `perspective`) to content cards.
- **Don't** flood broad background panels with saturated cyan or blue gradients.
- **Don't** use decorative generic stock photos; use real project captures and diagrams.
- **Don't** use low-contrast text that violates WCAG AA standards against obsidian backgrounds.
- **Don't** hide critical portfolio navigation or project links behind multi-click carousels.

