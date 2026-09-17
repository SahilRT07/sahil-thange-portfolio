# Sahil Thange — Portfolio

A personal freelance developer portfolio built with plain HTML, CSS and JavaScript. No build step, no framework, no backend — edit the files and deploy.

## Overview

Sections: navigation, hero, value strip, about, skills (current vs. learning), services, featured projects with expandable case studies, process, why-work-with-me, and a contact section with a validated (not-yet-connected) form. Supports light/dark mode with a persisted preference, is responsive from 320px up, and respects `prefers-reduced-motion`.

## Features

- Sticky navigation with active-section highlighting and an accessible mobile menu that closes on selection
- Dark/light theme toggle, saved in `localStorage`, with correct contrast in both modes
- Project data driven from a single JavaScript array (`js/projects.js`) — no HTML editing needed to add or update a project
- Each project card shows a status pill (**Completed** / **In progress** / **Planned**), and shows an honest "Not available yet" state instead of a fake link when GitHub/Live URLs aren't set
- Real screenshots are supported via `assets/images/projects/`; until one is added, a plain "Screenshot coming soon" placeholder is shown — never a decorative mockup pretending to be a real interface
- Expandable case studies (Problem / Approach / Features / Technology / Challenges / Result) for projects that have one
- Contact form with client-side validation, error states, and an honest "ready to send, not yet connected" state (see [Contact form configuration](#contact-form-configuration))
- Semantic HTML, visible focus states, alt text, and reduced-motion support throughout
- SEO basics: meta description, Open Graph + Twitter tags, JSON-LD, `robots.txt`, `sitemap.xml`

## Technologies

HTML5, CSS3 (custom properties, no framework), vanilla JavaScript (ES6+). Fonts loaded from Google Fonts (Space Grotesk, Inter, IBM Plex Mono).

## Folder structure

```
portfolio/
├── index.html
├── css/
│   ├── style.css        # design tokens, base styles, all components
│   └── responsive.css   # breakpoint overrides
├── js/
│   ├── projects.js      # project data + rendering
│   └── main.js          # nav, theme, scroll reveal, contact form
├── assets/
│   ├── images/
│   │   ├── og-cover.png       # social share image
│   │   └── projects/          # drop real project screenshots here
│   ├── icons/                 # reserved for future icon assets
│   └── favicon/
│       └── favicon.svg
├── robots.txt
├── sitemap.xml
├── README.md
└── PROMPT.md             # the brief this project was built from
```

## Local setup

No build tools required.

1. **Open directly** — double-click `index.html`.
2. **Local server (recommended)** — from the project folder:
   ```bash
   python3 -m http.server 8000
   ```
   then visit `http://localhost:8000`.

## Customize personal information

All personal links live directly in `index.html`, marked with clear placeholders:

- `YOUR_EMAIL` — in the hero, contact section and footer
- `YOUR_GITHUB_URL` — hero, contact section, footer, and JSON-LD `sameAs`
- `YOUR_LINKEDIN_URL` — same locations as above
- `YOUR_LIVE_URL` — `<meta property="og:url">`, `<link rel="canonical">`, JSON-LD `url`, `robots.txt`, `sitemap.xml`

Search the project for `YOUR_` to find every occurrence. Replace each with your real value — there's no config file to keep in sync, what you see in the HTML is what renders.

## Add or update a project

Open `js/projects.js` and edit the `projects` array. Each project looks like this:

```javascript
{
  title: "Project Name",
  category: "Web application",
  status: "completed",       // "completed" | "in-progress" | "planned"
  description: "One or two honest sentences on what it does.",
  features: ["Feature one", "Feature two"],
  technologies: ["HTML", "CSS", "JavaScript"],
  image: null,                 // or "assets/images/projects/your-project.png"
  github: null,                 // or a real GitHub URL
  live: null,                   // or a real live-demo URL
  caseStudy: {                  // omit or set to null to skip the case study
    problem: "...",
    approach: "...",
    features: "...",
    technology: "...",
    challenges: "...",
    result: "...",
  },
}
```

Leave `github` / `live` as `null` until a real URL exists — the card shows an honest "Not available yet" label instead of a dead or fake link. Never paste a placeholder string into these fields; it would become a real, broken link once deployed.

To mark a project as upcoming (like Mini E-Commerce), set `status: "planned"` and `upcoming: true`, and leave `github`/`live` as `null`.

## Replace a placeholder screenshot with a real one

1. Export or capture a screenshot of the project (1200px wide or so works well).
2. Save it into `assets/images/projects/`, e.g. `assets/images/projects/expense-tracker.png`.
3. In `js/projects.js`, set that project's `image` field to the path, e.g. `"assets/images/projects/expense-tracker.png"`.

The placeholder illustration is replaced automatically — no other changes needed. Images are lazy-loaded automatically.

## Contact form configuration

The form validates on the client and, until a delivery service is connected, shows an honest status message ("Your message is ready to send…") rather than claiming it was sent. To make it actually deliver email:

1. Sign up for a form-delivery service — [Formspree](https://formspree.io), [Web3Forms](https://web3forms.com) and [Getform](https://getform.io) all have a free tier that accepts a plain `fetch` POST with `FormData`.
2. Get your endpoint URL (and API key/access key if the service requires one in the form data).
3. Open `js/main.js`, find the line:
   ```javascript
   const FORM_ENDPOINT = "";
   ```
   and set it to your endpoint URL.
4. If your service needs an extra hidden field (like Web3Forms' `access_key`), add it as a hidden `<input>` inside `<form id="contactForm">` in `index.html`.

Once `FORM_ENDPOINT` is set, submitting the form does a real `fetch` POST and shows a genuine success or error message — nothing is faked either way.

## Deployment (GitHub + Vercel)

1. Push this folder to a GitHub repository.
2. In Vercel, "Add New Project" → import that repository.
3. Framework preset: **Other** (static site, no build command needed). Leave the build command empty and the output directory as the project root.
4. Deploy. Vercel gives you a URL immediately.

To update the live site later:

```
Edit code → git commit → git push → Vercel redeploys automatically
```

The same URL updates in place. All asset paths in this project are relative, so it works the same locally and on Vercel.

## Credits

- Fonts: Space Grotesk, Inter, IBM Plex Mono via Google Fonts.
- Icons: hand-drawn inline SVG (no icon library dependency).
- `assets/images/og-cover.png` is a generated social-share card, not a project screenshot.
