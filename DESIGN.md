---
name: Ezekiel Oladejo
description: Split-stage portfolio of a software engineer, engineering lead, and mentor, set in a dark Night Flight world with a Day Flight light theme.
colors:
  canvas: "#0b0d0e"
  panel: "#121517"
  card: "#15191b"
  raised: "#1b2023"
  rule: "#2a2f33"
  rule-strong: "#3a4146"
  fg: "#f2f2ee"
  body: "#b9c0c4"
  muted: "#8b9398"
  chip-fg: "#d6dbde"
  signal: "#39e07a"
  signal-hover: "#5ef08f"
  signal-soft: "#8ff0b4"
  signal-tint: "rgb(57 224 122 / 0.14)"
  amber: "#f2a33a"
  amber-soft: "#f7c27a"
  amber-tint: "rgb(242 163 58 / 0.16)"
typography:
  display:
    fontFamily: "Montserrat Alternates, Segoe UI, Arial, sans-serif"
    fontSize: "4rem"
    fontWeight: 700
    lineHeight: 1.02
    letterSpacing: "-0.02em"
  display-compact:
    fontFamily: "Montserrat Alternates, Segoe UI, Arial, sans-serif"
    fontSize: "3.25rem"
    fontWeight: 700
    lineHeight: 1.02
    letterSpacing: "-0.02em"
  figure:
    fontFamily: "Montserrat Alternates, Segoe UI, Arial, sans-serif"
    fontSize: "min(2.5rem, 15cqi)"
    fontWeight: 700
    lineHeight: 1
  headline:
    fontFamily: "Montserrat Alternates, Segoe UI, Arial, sans-serif"
    fontSize: "1.75rem"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "-0.01em"
  title:
    fontFamily: "Montserrat Alternates, Segoe UI, Arial, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 700
    lineHeight: 1.4
  tagline:
    fontFamily: "Instrument Sans, Segoe UI, Arial, sans-serif"
    fontSize: "1.5rem"
    fontWeight: 700
    lineHeight: 1.33
  body:
    fontFamily: "Instrument Sans, Segoe UI, Arial, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.625
  label:
    fontFamily: "Instrument Sans, Segoe UI, Arial, sans-serif"
    fontSize: "0.8125rem"
    fontWeight: 600
    letterSpacing: "0.14em"
  meta:
    fontFamily: "Instrument Sans, Segoe UI, Arial, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 600
    lineHeight: 1.43
  tag:
    fontFamily: "Instrument Sans, Segoe UI, Arial, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 700
    letterSpacing: "0.02em"
rounded:
  bullet: "2px"
  focus: "4px"
  metric: "6px"
  button: "10px"
  tile: "14px"
  card: "16px"
  panel: "22px"
  pill: "999px"
spacing:
  chip-gap: "8px"
  card-gap: "20px"
  card-pad: "24px"
  card-pad-wide: "28px"
  testimonial-pad: "32px"
  panel-pad: "44px"
  column-gutter: "80px"
  column-gutter-wide: "96px"
  section-gap: "80px"
components:
  button-primary:
    backgroundColor: "{colors.signal}"
    textColor: "{colors.canvas}"
    rounded: "{rounded.button}"
    padding: "12px 22px"
    height: "44px"
  button-primary-hover:
    backgroundColor: "{colors.signal-hover}"
  button-round:
    backgroundColor: "{colors.card}"
    textColor: "{colors.fg}"
    rounded: "{rounded.pill}"
    size: "44px"
  button-round-hover:
    textColor: "{colors.signal}"
  profile-panel:
    backgroundColor: "{colors.panel}"
    rounded: "{rounded.panel}"
    padding: "44px"
  card:
    backgroundColor: "{colors.card}"
    rounded: "{rounded.card}"
    padding: "24px"
  status-pill:
    backgroundColor: "{colors.signal-tint}"
    textColor: "{colors.signal-soft}"
    typography: "{typography.meta}"
    rounded: "{rounded.pill}"
    padding: "6px 12px"
  role-tile:
    backgroundColor: "{colors.signal-tint}"
    textColor: "{colors.signal}"
    rounded: "{rounded.tile}"
    size: "48px"
  date-chip:
    backgroundColor: "{colors.amber-tint}"
    textColor: "{colors.amber-soft}"
    rounded: "{rounded.pill}"
    padding: "5px 12px"
  metric:
    backgroundColor: "{colors.signal-tint}"
    textColor: "{colors.signal-soft}"
    rounded: "{rounded.metric}"
    padding: "1px 6px"
  chip:
    backgroundColor: "{colors.raised}"
    textColor: "{colors.chip-fg}"
    typography: "{typography.meta}"
    rounded: "{rounded.pill}"
    padding: "4px 12px"
  tag:
    backgroundColor: "{colors.signal-tint}"
    textColor: "{colors.signal-soft}"
    rounded: "{rounded.pill}"
    padding: "2px 10px"
  section-index-link:
    textColor: "{colors.muted}"
    typography: "{typography.label}"
  section-index-link-active:
    textColor: "{colors.signal}"
---

# Design System: Ezekiel Oladejo

## Overview

**Creative North Star: "Night Flight on the Split Stage"**

The page is a cockpit at night, split in two. On the left, the person sits on a matte instrument panel pinned in place: headshot, availability, name, a one-line claim, a short pitch, a section index, and the email action. On the right, the proof scrolls past: outcomes first, then roles, about and stack, shipped work, testimonials, contact. Outcomes come before adjectives; the numbers are set in the display face so they read as headlines, not footnotes.

The scene is a near-black ground with matte, slightly lifted panels and cards edged by a single 1px rule. Two lamps light it. Luminous green is the signal: status, the tagline, the section in view, highlighted metrics, links on hover and the primary action. Amber is the second lamp, rationed to dates, one outcome figure and the testimonial quote marks. Headings are warm off-white; everything read sits in a softer grey. Faint concentric gauge rings are the only ornament. Density is moderate: generous section spacing, short measures, nothing decorative that does not carry information.

The same instruments ship in daylight as Day Flight, a composed light theme selected by a switch in the profile panel; Night Flight is the default. This is the category-standard two-column developer portfolio, executed carefully rather than reinvented, and it deliberately refuses a full-width hero banner over a grid of skill cards.

**Key Characteristics:**
- Two columns on desktop: a sticky, rounded profile panel (5fr) beside a scrolling proof column (7fr).
- Dark by default; a persisted light/dark switch remaps every colour token, never individual components.
- Green signal plus an amber second lamp on a matte near-black ground; no other hues.
- Montserrat Alternates for the name, figures, section headings and card titles; Instrument Sans for everything read.
- Surfaces separate by tone and a 1px rule, not by shadow; faint gauge rings are the only ornament.
- Components in the proof column lay out by container width, not viewport.
- The scroll-tracking section index is the signature interaction.

## Colors

A matte, low-chroma night scene lit by one green signal and one amber lamp. The values below are the Night Flight defaults; Day Flight remaps the same roles (see Theme Mapping).

### Primary
- **Runway Green** (signal): The tagline, the status dot, the active section-index item and its rule, the section-heading marker, the primary button fill, the role-tile icon, square role bullets, two outcome figures (99.99% and 10), hover colour for links, card titles and round buttons, and the focus ring.
- **Runway Green, Lit** (signal-hover): Primary button fill on hover.
- **Soft Runway Green** (signal-soft): Text-weight green on the green tint: status pill text, highlighted metrics, work-card type tags, work-card domain lines, and stack category labels.
- **Green Glow** (signal-tint): Ground behind the status pill, role tile, metrics and type tags. Gauge rings and text selection derive from the same green at lower alpha.

### Secondary
- **Cabin Amber** (amber): The second lamp. The −50% outcome figure and the testimonial quote mark.
- **Soft Cabin Amber** (amber-soft): Text on the amber tint, used for role date chips.
- **Amber Glow** (amber-tint): Ground of the date chips.

### Neutral
- **Night Canvas** (canvas): Page ground, the browser theme colour, primary-button text, and the translucent band behind sticky mobile section headings (90% with an 8px blur).
- **Instrument Panel** (panel): The pinned profile panel.
- **Matte Card** (card): Role, work, testimonial and contact cards, and round button fills.
- **Raised Matte** (raised): Stack chip ground.
- **Hairline Rule** (rule): The 1px edge ring on the panel and cards, rules between outcome and stack rows, chip borders.
- **Strong Rule** (rule-strong): Round button borders, link underlines at rest, the hover edge on linked cards, the scrollbar thumb.
- **Moonlit Off-White** (fg): The name, headings, card titles, outcome lead-ins, the +15% figure, link text.
- **Instrument Grey** (body): Running text: pitch, outcome descriptions, role bullets, about, testimonials.
- **Dim Grey** (muted): Company lines, testimonial roles, inactive index items, footer.
- **Chip Grey** (chip-fg): Stack chip text.

### Theme Mapping: Day Flight
Day Flight is applied by `data-theme="light"` on the root element and redefines every colour variable; components read only variables, so they follow automatically. It is composed for daylight rather than inverted: the green and amber deepen until they hold contrast on a pale ground.

| Role | Night Flight (default) | Day Flight |
|---|---|---|
| canvas | #0b0d0e | #f2f4f3 |
| panel | #121517 | #ffffff |
| card | #15191b | #ffffff |
| raised | #1b2023 | #eef1f0 |
| rule | #2a2f33 | #dde2e0 |
| rule-strong | #3a4146 | #c3cbc8 |
| fg | #f2f2ee | #0f1416 |
| body | #b9c0c4 | #3f4a4f |
| muted | #8b9398 | #5d686e |
| chip-fg | #d6dbde | #2b3438 |
| signal | #39e07a | #13803f |
| signal-hover | #5ef08f | #0f6b34 |
| signal-soft | #8ff0b4 | #11753a |
| signal-tint | rgb(57 224 122 / 0.14) | rgb(19 128 63 / 0.1) |
| amber | #f2a33a | #b86e00 |
| amber-soft | #f7c27a | #8a5200 |
| amber-tint | rgb(242 163 58 / 0.16) | rgb(184 110 0 / 0.12) |

Theme colour meta: #0b0d0e (dark), #f2f4f3 (light). The card-hover shadow's depth drops from 0.45 black alpha to 0.12 ink alpha in Day Flight.

### Named Rules
**The Two Lamps Rule.** Green is the signal and amber is the second lamp; there is no third hue. Green marks identity, state, status and the primary action. Amber is rationed to dates, one outcome figure and quote marks. If a new element wants colour, it is one of those, or it is a neutral.

**The Soft-On-Tint Rule.** Text set on a green or amber tint uses the soft form of that colour (signal-soft, amber-soft), never the full-strength lamp.

**The Remap-Not-Restyle Rule.** Themes change token values, never component rules. A component that hardcodes a hex breaks Day Flight.

## Typography

**Display Font:** Montserrat Alternates (with Segoe UI, Arial, sans-serif), weights 600 and 700
**Body Font:** Instrument Sans (with Segoe UI, Arial, sans-serif), weights 400 to 700

**Character:** Montserrat Alternates gives the name and the numbers a distinctive geometric voice, like instrument lettering; Instrument Sans keeps everything read calm and neutral. Both are pinned by the owner; Instrument Sans is a user-confirmed exception to the overused-font rule.

### Hierarchy
- **Display** (700, 3rem mobile / 3.75rem sm / 3rem lg / 4rem xl, line-height 1.02, -0.02em, off-white): The name only, set in two lines.
- **Display, compact** (700, 3.25rem, line-height 1.02, -0.02em): The name on desktop screens 820px tall or less, where the panel tightens.
- **Figure** (700, min(2.5rem, 15cqi), line-height 1, proportional numerals, no wrap): Outcome figures in the ruled outcomes list, coloured per figure.
- **Headline** (700, 1.75rem, line-height 1.2, -0.01em): Section headings, each led by a 1.5rem × 2px green rule marker that echoes the section index. The contact card heading runs 1.5rem to 1.875rem without the marker.
- **Title** (700, 1.125rem to 1.25rem): Role titles, project names, the Stack subheading, testimonial author names.
- **Tagline** (700, 1.25rem to 1.5rem, Instrument Sans, green): The one-line claim under the name.
- **Body** (400, 1.0625rem to 1.125rem, line-height 1.625): Pitch (capped at 44ch), outcome descriptions with a semibold off-white lead-in, about, role bullets (1.6), testimonials (1.0625rem / 1.65).
- **Meta** (400 to 700, 0.8125rem to 0.875rem): Company lines, testimonial roles, stack labels, chip text, date chips (0.8125rem, tabular numerals, never broken mid-range).
- **Tag** (700, 0.75rem, 0.02em tracking): Work-card type tags only; the smallest step in the ramp.
- **Label** (600, 0.8125rem, 0.14em tracking, uppercase): Section index items only.

### Named Rules
**The Figures-As-Headlines Rule.** Quantified outcomes are set in the display face at headline weight with proportional numerals; the explanation beside them is body text with a semibold off-white lead-in.

**The 65ch Rule.** No paragraph or bullet list runs wider than 65ch, whatever the column width.

## Layout

A centred page container (max 88rem) with 24px side padding, 48px from 768px, 64px from 1280px. From 1024px wide the page becomes two columns, profile and proof, at 5fr / 7fr with an 80px gutter (96px from 1280px). Below 1024px the profile panel stacks above the sections and is not sticky.

On desktop the profile panel is inset 24px from the viewport top and bottom, sticky at that offset, and fills the viewport height (max 56rem), with the email action and social links pushed to its bottom. Its top row (headshot, status pill, theme switch) lays out by container query: from 22rem of panel width all three share one row with the switch pushed right; narrower, the status pill drops to its own line below.

The panel adapts to viewport height in tiers:
- **940px tall or less:** padding tightens to 36px / 40px, and the gaps above the name, index and CTA shrink; index rows tighten.
- **820px tall or less:** padding 32px, the name drops to 3.25rem and the tagline to 1.25rem.
- **The pitch** is hidden at every height for widths 1024–1151px, at 940px tall or less for 1152–1279px, and at 779px tall or less for 1280–1365px. It condenses the About paragraph, so it is dropped only where it cannot fit.
- **Sticky stops** at 680px tall or less, and at 720px tall or less for widths under 1280px; the panel then scrolls with the page.

Sections are separated by 80px (Experience sits 48px under the outcomes on desktop so the latest role card reaches the first viewport). Cards in a list stack 20px apart. Inside the proof column, components lay out by container width: role cards, work cards and stack rows change layout at 36rem of container; outcome rows keep a 10rem figure column and collapse to one column below 30rem. Every interactive target is at least 44px.

On mobile and tablet, section headings become sticky at the top of the viewport on a translucent canvas band so the visitor always knows where they are.

## Elevation & Depth

Flat and tonal. Depth comes from stepping up in lightness (canvas, then panel, then card, then raised chips) and from a 1px rule drawn as an edge ring (`box-shadow: 0 0 0 1px` rule), never from a resting drop shadow. The one true shadow is a response to state.

### Shadow Vocabulary
- **Edge ring** (`box-shadow: 0 0 0 1px var(--color-rule)`): Every card and the profile panel at rest.
- **Card hover** (`box-shadow: 0 0 0 1px var(--color-rule-strong), 0 18px 40px rgb(0 0 0 / 0.45)`; Day Flight uses `rgb(15 20 22 / 0.12)`): Linked work cards on hover, 250ms.
- **Headshot halo** (`box-shadow: 0 0 0 2px var(--color-panel), 0 0 0 4px var(--color-signal)`): The headshot only; a green ring separated by a panel-coloured gap.

### Named Rules
**The Matte Instrument Rule.** Surfaces are matte at rest: tone and a 1px edge separate them. A lifting shadow appears only when a linked card is hovered.

**The Rules-Or-Cards Rule.** Rows of comparable facts (outcomes, stack) sit on 1px rules on the ground. Self-contained objects (a role, a project, a testimonial, the contact card) sit on matte cards. Never both on the same content.

## Shapes

Soft, consistent corners at a small set of sizes: 22px for the profile panel, 16px for cards, 14px for the role icon tile, 10px for the primary button, 6px for inline metric highlights, fully round for pills, chips, tags, avatars and round buttons, and 2px for the square role bullets. The focus ring has a 4px radius. Work-card screenshots are clipped by the card's corner. Rules are 1px.

The gauge ring is the world's one recurring geometry: a 20rem circle with a 1px faint-green border and 2.5rem of green haze inside and out, anchored off the bottom-right corner and clipped by its container.

### Named Rules
**The Gauge Ring Rule.** Gauge rings are the only ornament and appear on exactly three surfaces: the profile panel, testimonial cards and the contact card. Role and work cards stay plain.

## Components

### Buttons
Solid, compact, and lit; the primary action is the brightest object on the panel.
- **Shape:** Gently rounded (10px), minimum 44px tall.
- **Primary:** Green fill with canvas-coloured 700-weight text, 12px 22px padding, a 10px gap to an inline 16px SVG icon (envelope before "Email me", arrow after the contact-card label).
- **Hover / Focus:** Fill brightens to signal-hover over 150ms; focus shows the 2px green ring at 3px offset.
- **Round controls (carousel arrows, theme switch):** 44px circles with a strong-rule border and off-white icon; hover turns border and icon green. Carousel arrows fill with the card colour; the theme switch is transparent on the panel.

### Text Links
Off-white, 600 weight, with a 1px strong-rule underline at 4px offset. On hover the text turns green and the underline takes the text colour. Standalone links carry a 44px minimum target.

### Chips
- **Stack chips:** Raised matte ground, 1px rule border, chip-grey 600-weight 0.875rem text, fully round, 4px 12px padding, 8px apart. Neutral and non-interactive; the green lives on the category label beside them.
- **Status pill:** Green-tint ground, soft-green 600-weight 0.875rem text, 6px 12px padding, with an 8px green dot; used once, for availability.
- **Date chip:** Amber-tint ground, soft-amber 700-weight 0.8125rem tabular text, fully round; sits in a role card header.
- **Type tag:** Green-tint ground, soft-green 700-weight 0.75rem text with 0.02em tracking; one per work card.

### Cards / Containers
- **Corner Style:** 16px (profile panel 22px).
- **Background:** Matte card on the night canvas; the profile panel one step darker.
- **Shadow Strategy:** Edge ring at rest; linked cards take Card hover (see Elevation & Depth).
- **Internal Padding:** 24px default; 28px for role cards at wide container widths; 32px for testimonials; 28px to 40px for the contact card; 28px to 44px for the profile panel.
- **Linked card hover:** Edge strengthens, a soft shadow lifts, and the card title turns green.

### Profile Panel
The pinned stage: 22px corners, the edge ring, a gauge ring off its bottom-right corner. Top row of headshot (56px, green halo), status pill and theme switch; then the name, green tagline, pitch, section index and the CTA row pinned to the bottom. Height tiers and the container-query top row are described in Layout.

### Theme Switch
A 44px round control in the panel's top row showing a sun in Night Flight and a moon in Day Flight; its accessible label names the theme it switches to. The choice persists in localStorage (key `theme`), an inline head script applies it before first paint so there is no flash, and the switch updates the `theme-color` meta. Night Flight is the default when nothing is stored or storage is unavailable.

### Navigation: Section Index (signature)
A vertical list in the profile panel, desktop only. Each item is an uppercase tracked label preceded by a 4rem rule drawn at half length and half opacity. The item for the section in view (tracked by an IntersectionObserver with a -20% / -60% root margin) gets `aria-current`, turns green, and its rule extends to full length and opacity over 250ms. Hover does the same in off-white. On mobile the index is hidden and sticky section headings take over its job.

### Outcomes List
Ruled rows (a rule above each, a rule below the last), 18px vertical padding, a Figure-style number beside a body description, baseline-aligned. Figure colour carries meaning: 99.99% and 10 in green, −50% in amber, +15% in off-white. Below 30rem of container the figure stacks above its description.

### Experience Role Cards
A header row of a 48px green-tint icon tile with a green SVG icon, the title and company line, and an amber date chip (pushed to the right edge from 36rem of container). Bullets are 7px green squares with 2px corners; quantities inside bullets are highlighted as green metrics (soft-green text on green tint, 6px corners, cloned across line breaks). From 36rem the bullets indent 4rem to align under the title.

### Stack
A ruled definition list under About: each row pairs a green category label (soft green, 600, 0.875rem) with a wrap of neutral chips. From 36rem of container the label takes an 11rem column beside the chips.

### Work Cards
Linked cards, in order Scandium, RAIN Project, Shoptoph, Canvine. A screenshot (176px tall, or a 13rem side column from 36rem of container) above or beside the title, a description, and a footer row holding the soft-green domain with an external-link icon and a green type tag. Delight: on hover the screenshot pans slowly to its right-top corner (object-position over 2400ms), only for hover-capable pointers without reduced motion.

### Testimonial Carousel
One testimonial card per slide carrying a gauge ring and a 28px amber quote mark, the quote in body grey, a 48px round avatar, the author in the display face and the role in muted meta. Prev/next round controls sit right-aligned below. It autoplays every 6s, loops, pauses on pointer hover and while keyboard focus is inside the section; autoplay and slide animation are off under reduced motion. Prev/next only, with no pause button and no pagination dots, by owner decision.

### Contact Card
A matte card with a gauge ring: the "Get in touch" heading, a short paragraph, the primary email button and the social text links.

## Do's and Don'ts

### Do:
- **Do** read every colour through the CSS variables so Night Flight and Day Flight both hold; add a new colour to both theme blocks or not at all.
- **Do** keep green to identity, state, status, metrics and the primary action, and amber to dates, the −50% figure and quote marks.
- **Do** set text on a tint in that colour's soft form (signal-soft, amber-soft).
- **Do** set quantified results in Montserrat Alternates with proportional numerals, and dates in tabular numerals kept on one line.
- **Do** cap running text at 65ch.
- **Do** give every interactive target at least 44px and show the 2px green focus ring at 3px offset.
- **Do** lay out components inside the proof column with container queries so they respond to the column, not the viewport.
- **Do** separate surfaces with tone and a 1px edge ring; reserve the lifting shadow for hovered linked cards.
- **Do** honour reduced motion: no smooth scroll, no transitions, no hover pan, no carousel autoplay.

### Don't:
- **Don't** put a full-width hero banner above the content or turn skills into a grid of cards; the profile panel and ruled lists carry that job.
- **Don't** introduce a third hue or gradients.
- **Don't** add resting drop shadows or hard, offset shadows; depth is tonal.
- **Don't** add ornament beyond the gauge rings, or put rings on role and work cards.
- **Don't** invert the dark theme to make the light one; Day Flight deepens green and amber for contrast on a pale ground.
- **Don't** use Montserrat Alternates for running text, or Instrument Sans for the name and figures.
- **Don't** use icon fonts; icons are inline SVG symbols sized 12px to 28px.
