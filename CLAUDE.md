# CLAUDE.md — DigitalIQ Website Rules

## Always Do First
- Invoke the `frontend-design` skill before writing any frontend code.
- Always serve the project on `http://localhost:2000` using `node serve.mjs`.
- Before making UI decisions, read:
  - `@STRUCTURE.md`
  - `@UI UX MASTER SHEET.md`
- Pull all page content strictly from the `/content/` directory.
- Always check the `/brand_assets/` folder before designing.
- The DigitalIQ logo will be provided inside `/brand_assets/` and must be used from there.

---

## Project Execution Order
1. Read `@STRUCTURE.md` for sitemap and page hierarchy.
2. Read `@UI UX MASTER SHEET.md` for all visual, interaction, and experience rules.
3. Read the relevant markdown content files inside `/content/`.
4. Build the UI according to those files only.
5. Serve locally and validate visually.

---

## Source of Truth
Use these as the only sources of truth:
- `@STRUCTURE.md`
- `@UI UX MASTER SHEET.md`
- `/content/`
- `/brand_assets/`

Do not invent:
- extra pages
- extra sections not supported by content
- extra services
- new claims or messaging
- alternative brand styling outside the approved system

---

## Operating Modes

### Mode 1 — Execution
Build the website exactly from the approved structure, content, and UI/UX rules.

### Mode 2 — Refinement
If refining, adjust only:
- spacing
- layout
- hierarchy
- component polish
- responsiveness
- motion quality
- interaction quality

Do not redesign the structure unless explicitly asked.

---

## Local Server Rules
- Always work from localhost.
- Never validate UI from a `file:///` URL.
- Start the dev server with `node serve.mjs`.
- If the server is already running, do not start a second instance.

---

## Screenshot Review Workflow
After every major static UI change:

1. Take a screenshot from localhost.
2. Review the screenshot carefully.
3. Validate:
   - spacing
   - alignment
   - typography hierarchy
   - surface depth
   - component polish
   - overall visual quality
   - responsiveness if relevant
4. If the screenshot is not correct, refine it before continuing.
5. Only continue building once the current static UI is visually correct.

Important:
- Use screenshots for validating **static UI only**
- Do **not** use screenshot review for animation validation
- Animations should be checked separately through live browser review, not static screenshots

Do at least 2 internal correction passes when needed before considering a page acceptable.

---

## Brand Assets
- Always inspect `/brand_assets/` before designing.
- If logos, icons, palettes, or imagery exist there, use them.
- Do not replace real brand assets with placeholders if assets are available.
- The DigitalIQ logo should be taken from `/brand_assets/`.

---

## Content Rules
- Pull content strictly from the markdown files in `/content/`.
- Do not hallucinate copy.
- Do not rewrite approved messaging unless explicitly asked.
- Do not compress content into walls of text.
- Use the UI to structure and elevate the content without changing its meaning.

---

## Technical Stack
- Build the website using **Next.js + React + Tailwind CSS**
- Use **Framer Motion** for refined motion, intro animation, and premium interaction behavior where appropriate
- Use a component-based architecture suitable for a scalable production website
- Do not build this as a plain static HTML-only site unless explicitly asked

## Technical Guardrails
- Keep the implementation production-minded
- Use clean structure and reusable components
- Use CSS variables / design tokens where appropriate
- Keep interactions performant and refined
- Do not use generic default styling
- Do not use `transition-all`

---

## Technical Guardrails
- Keep the implementation production-minded.
- Use clean structure and reusable logic.
- Use CSS variables / design tokens where appropriate.
- Keep interactions performant and refined.
- Do not use generic default styling.
- Do not use `transition-all`.

---

## Hard Rules
- Never invent a page not defined in `@STRUCTURE.md`
- Never ignore the `@UI UX MASTER SHEET.md`
- Never ignore `/brand_assets/`
- Never invent copy outside `/content/`
- Never make Home feel generic
- Never make Services feel like a basic service grid
- Never make Start Now feel like a normal contact page
- Never stop at the first acceptable version if the UI still feels generic

---

## Final Standard
The website must feel:
- premium
- modern
- custom-built
- visually refined
- commercially serious

It must not feel:
- templated
- generic
- AI-generated
- like a basic agency website