---
version: 1
slug: "index-html"
primary_target: "index.html"
related_targets: []
---

## Scope

`index.html`, the whole single-page portfolio. Visitor mode: Persuade (the visitor decides whether to get in touch).

## Audience and job

Hiring managers, recruiters, consulting clients, mentees, and peers deciding in one short visit whether Ezekiel is credible and worth contacting. Primary action: email. Secondary: LinkedIn, GitHub, Medium, full resume.

## Constraints

- Pinned by the user: Montserrat Alternates (display) and Instrument Sans (body).
- User rejected: too flashy, template-looking, too minimal, losing the proof, and metaphor-driven concepts.
- Testimonials stay an autoplaying carousel (6s, pauses on hover and keyboard focus, off under reduced motion), prev/next only, no pause button: user decision.
- Keep all gtag click events, content, and links. Static GitHub Pages; Tailwind compiled via `npm run build:css`.
- Colour round (user request: more colour and pizzazz, experience cards redesigned): the user picked Night Flight from five rendered colour directions (Cobalt Stage, Danfo, Build Instructions, Night Flight, The Drawing Set); critique reference .impeccable/mocks/decision/color-night-flight.png.
- Copy: "Engineering lead who still ships." and the short pitch are approved proposed copy; everything else is existing copy.

## Direction contract

THESIS: A split-stage portfolio: Ezekiel's profile and the contact action stay pinned while the proof scrolls beside it, outcomes before adjectives. It refuses the category default of a full-width hero banner over a grid of skill cards.

OWN-WORLD: Night Flight on the Split Stage. A dark scene (#0b0d0e ground), a matte raised panel and cards (#121517 / #15191b) edged in a 1px #2a2f33 rule, luminous green (#39e07a) for status, the tagline, the active section, links and the primary action, amber (#f2a33a) as the secondary highlight for date chips and one outcome figure, off-white (#f2f2ee) for headings. Faint gauge rings are the only decoration. Montserrat Alternates for the name, outcome figures, section headings and card titles; Instrument Sans for everything read. Experience roles are cards with an icon tile, title, company line and a date chip in the header, and metrics highlighted in green.

STORY: In one glance the visitor knows who he is, that he leads and still ships, and that he is available. Scrolling proves it: outcomes, experience, about and stack, work, testimonials, contact (experience follows outcomes so the latest role card lands in the first viewport). "Email me" is always one click away.

FIRST VIEWPORT: Desktop two columns. Left (sticky, a rounded matte panel inset from the viewport edge): availability pill with a small headshot, name at 64px in two lines, green tagline, two-line pitch, a section index whose rule extends for the section in view, and "Email me" plus LinkedIn, GitHub, Medium pinned to the bottom. Right: a ruled "Selected outcomes" list (99.99% uptime, over 50% server cost cut, +15% driver utilization, 10 people led) then the latest role card. Mobile stacks the profile above the sections, with sticky section labels.

FORM: The category standard (canon path, user said the concepts were too conceptual), executed as "Split Stage", option 1 of 3 on the layout round; seed key cc2f8cb4. Signature interaction: the scroll-tracking section index. Craft bar: the best two-column developer portfolios.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance
