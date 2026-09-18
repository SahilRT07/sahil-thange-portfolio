/* ==========================================================================
   projects.js
   Project data lives here as a plain array — edit this file to add, remove
   or update a project. Nothing else in the site needs to change.

   To add a project: copy an existing object below, edit the fields, and
   save. The site re-renders it automatically on next load.

   FIELD REFERENCE
   ----------------
   image:   Path to a real screenshot, e.g. "assets/images/projects/
            expense-tracker.png". Leave as `null` until you have one — the
            card will show a plain, clearly-labelled "screenshot coming
            soon" placeholder instead of a fake or decorative mockup.

   status:  One of "completed", "in-progress", "planned". Drives the status
            pill shown on the card. Use "planned" + `upcoming: true` for
            projects that don't exist yet (see Mini E-Commerce below).

   github / live: Set to a real URL once one exists. Leave as `null` to
            show an honest "Not available yet" state instead of a fake or
            broken link — never put a placeholder string directly in a
            href, since that becomes a real (broken) link once deployed.
   ========================================================================== */

const projects = [
  {
    title: "Expense Tracker",
    category: "Web application",
    status: "completed",
    description:
      "A web app for logging day-to-day spending — add transactions, sort them into categories, and see where the money is actually going, on a layout that holds up on a phone.",
    features: [
      "Add, edit and remove transactions",
      "Group spending into categories",
      "Responsive layout for mobile and desktop use",
    ],
    technologies: ["HTML", "CSS", "JavaScript"],
    image: "assets/projects/expense_tracker.png", 
    github: "https://github.com/SahilRT07/Expense-Tracker.git", 
    live: "https://expense-tracker-ofme.vercel.app/",
    caseStudy: {
      problem:
        "Tracking everyday expenses by hand or in a generic spreadsheet is easy to fall behind on — there's no quick way to see category totals or add a transaction in a few taps.",
      approach:
        "Built as a focused single-purpose app: a form to add a transaction, a list that groups and totals by category, and a layout that works one-handed on mobile.",
      features:
        "Transaction entry with category and amount, category-level totals, and a responsive interface that adapts from desktop down to small phone screens.",
      technology:
        "Built with HTML, CSS and JavaScript, with the interface structured for straightforward future changes.",
      challenges:
        "Keeping the category totals in sync with the transaction list in real time without adding unnecessary complexity to the code.",
      result:
        "A working expense tracker that handles the core loop — add, categorize, review — cleanly on any screen size.",
    },
  },
  {
    title: "MediScan AI",
    category: "Applied AI interface",
    status: "completed",
    description:
      "An interface for reviewing scan-related image inputs and presenting AI-generated observations for informational purposes. It does not provide a diagnosis or replace professional medical advice.",
    features: [
    "Medicine search with suggestions",
    "Medicine price comparison",
    "Nearby pharmacy discovery",
    "Distance-based pharmacy sorting",
    "Pharmacy contact options",
    "Responsive search and results interface"
  ],

      technologies: [
    "HTML",
    "CSS",
    "JavaScript",
    "FastAPI",
    "Python",
    "Bright Data"
  ],
    image: "assets/projects/mediscan_ai.png", // e.g. "assets/images/projects/mediscan-ai.png"
    github: "https://github.com/SahilRT07/sahil-thange-portfolio.git",
    live: "https://smart-medicine-finder-wney-1ubmf70os-nexus-coder1.vercel.app/",
    caseStudy: {
    problem:
      "Finding the right medicine, comparing prices and locating a nearby pharmacy can require checking multiple sources, making the process slower and less convenient.",

    approach:
      "Built a smart medicine-finder interface that brings medicine search, price comparison and nearby pharmacy discovery into one place, with a simple workflow from searching for a medicine to finding where it may be available.",

    features:
      "Medicine search with suggestions, medicine price comparison, nearby pharmacy discovery, distance-based pharmacy sorting, pharmacy contact options and availability-focused results.",

    technology:
      "Built with HTML, CSS and JavaScript for the frontend, with a FastAPI backend and Python-based processing. Bright Data Scraper Studio was used for medicine data collection.",

    challenges:
      "Working with a large medicine dataset while keeping search results useful and easy to understand, and designing the interface so users can quickly move from medicine search to price and pharmacy information.",

    result:
      "A working medicine discovery platform that combines medicine search, price comparison and local pharmacy information into a single user-friendly experience."
  }
},
  {
    title: "E-Bike Management Application",
    category: "Dashboard application",
    status: "completed",
    description:
       "A management application for handling E-Bike showroom records, customer information, sales and billing workflows through a centralized dashboard.",

    features: [
      "E-Bike inventory management",
    "Customer and sales record management",
    "Billing workflow",
    "Dashboard overview",
    "Organized showroom management",
    "Responsive user interface"
    ],
    technologies: [
    "React",
    "JavaScript",
    "CSS",
    "Electron",
    "SQLite"
  ],
    image: "assets/projects/image.png", // e.g. "assets/images/projects/ebike-management.png"
    github: "https://github.com/SahilRT07/e-bike-showroom-billing-management-system.git",
    live: "https://e-bike-showroom-billing-management.vercel.app/#/login",
    caseStudy: {
  problem:
    "Managing E-Bike showroom records manually can make it difficult to track vehicles, customer details, billing information and day-to-day showroom operations efficiently.",

  approach:
    "Built a dashboard-focused management application that brings important showroom information into one place and keeps common management and billing actions close to the data they affect.",

  features:
    "Dashboard overview, E-Bike inventory management, customer and sales records, billing workflow, and organized management screens for day-to-day showroom operations.",

  technology:
    "Built with React, JavaScript, CSS, Electron and SQLite for desktop-based data management.",

  challenges:
    "Designing a data-dense management interface that remains clear and easy to use while connecting multiple workflows such as inventory, customers and billing.",

  result:
    "A functional E-Bike showroom management application that provides a centralized dashboard and organized workflows for managing showroom operations and billing."
},
  },
   {
    title: "DISCOVA",
    category: "AI Product Discovery Platform",
    status: "in-progress",

    description:
      "An AI-powered product discovery platform that helps users find, understand and compare products based on their requirements, budget, features and preferences.",

    features: [
      "AI-powered natural-language product discovery",
      "Product recommendations and ranking",
      "Product comparison",
      "Image-based product search",
      "Wishlist and saved searches",
      "Recommendation history",
      "Product details and retailer offers"
    ],

    technologies: [
      "React",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Prisma",
      "OpenAI API"
    ],

    image: "assets/projects/DISCOVA.png",

    github:
      "https://github.com/SahilRT07/discova-ai-product-discovery.git",

    live:
      "https://discova-ai-product-discovery-client.vercel.app/",

    featured: true,

    caseStudy: {
      problem:
        "Online shopping gives users thousands of products to choose from, but finding the right product based on budget, features, use case and personal preferences can be time-consuming and confusing.",

      approach:
        "Designed DISCOVA as an AI-powered product discovery platform that understands natural-language requirements, searches structured product data, ranks relevant products and helps users compare their options.",

      features:
        "AI-powered product discovery, natural-language search, product recommendations, image-based search, product comparison, wishlist, saved searches, recommendation history, product details and provider-backed product data.",

      technology:
        "Built with React, TypeScript, Vite and Tailwind CSS on the frontend, with Node.js, Express.js, PostgreSQL and Prisma powering the backend. OpenAI is used for AI-assisted discovery and comparison.",

      challenges:
        "Connecting product discovery with reliable real-world product data, preventing duplicate or incorrect product matching, designing the architecture for multiple product providers and keeping AI-generated recommendations grounded in available product information.",

      result:
        "Built a modern product discovery platform that brings AI-assisted search, structured product data and product comparison into one experience, helping users move from a natural-language requirement to relevant products."
    }
  },
  // {
  //   title: "Mini E-Commerce Website",
  //   category: "Web application",
  //   status: "planned",
  //   description:
  //     "A small e-commerce build — product listing, cart and checkout flow — planned as a way to practice and strengthen my React and backend fundamentals. Not started yet.",
  //   features: [],
  //   technologies: ["React", "Node.js"],
  //   image: null,
  //   github: null,
  //   live: null,
  //   upcoming: true,
  //   caseStudy: null,
  // },
];

const STATUS_LABELS = {
  completed: "Completed",
  "in-progress": "In progress",
  planned: "Planned",
};

/* Plain, honest "no screenshot yet" placeholder — deliberately not styled
   to look like a real interface, so it's never mistaken for one. */
function placeholderMedia(title) {
  return `
    <div class="project-placeholder" role="img" aria-label="Screenshot not added yet for ${title}">
      <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true">
        <rect x="3" y="4" width="18" height="15" rx="2"/>
        <circle cx="8.5" cy="9.5" r="1.5"/>
        <path d="M3 16l5-5 4 4 3-3 6 6"/>
      </svg>
      <span>Screenshot coming soon</span>
    </div>`;
}

function statusPill(status) {
  if (!status || !STATUS_LABELS[status]) return "";
  return `<span class="status-pill status-pill--${status}">${STATUS_LABELS[status]}</span>`;
}

/* Renders a real link when a URL exists, or an honest disabled state when
   it doesn't — never a placeholder string used as a live href. */
function actionLink(url, label, isPrimary) {
  if (url) {
    return `<a href="${url}" ${isPrimary ? 'class="is-primary" ' : ""}target="_blank" rel="noopener noreferrer">${label}</a>`;
  }
  return `<span class="is-disabled" aria-disabled="true" title="${label} not available yet">${label} — Not available yet</span>`;
}

function caseStudyMarkup(id, cs) {
  if (!cs) return "";
  return `
    <div class="case-study">
      <button class="case-study__toggle" aria-expanded="false" aria-controls="${id}">
        <span>Read case study</span>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 9l6 6 6-6"/></svg>
      </button>
      <div class="case-study__panel" id="${id}">
        <div class="case-study__panel-inner">
          <div class="case-study__block">
            <h4>Problem</h4><p>${cs.problem}</p>
            <h4>Approach</h4><p>${cs.approach}</p>
            <h4>Features</h4><p>${cs.features}</p>
            <h4>Technology</h4><p>${cs.technology}</p>
            <h4>Challenges</h4><p>${cs.challenges}</p>
            <h4>Result</h4><p>${cs.result}</p>
          </div>
        </div>
      </div>
    </div>`;
}

function renderProjects() {
  const list = document.getElementById("projectList");
  if (!list) return;

  list.innerHTML = projects
    .map((p, i) => {
      const csId = `case-study-${i}`;
      const mediaContent = p.image
        ? `<img src="${p.image}" alt="Screenshot of ${p.title}" loading="lazy">`
        : placeholderMedia(p.title);

      if (p.upcoming) {
        return `
        <article class="project-card project-card--upcoming reveal">
          <div class="project-card__media">${mediaContent}</div>
          <div class="project-card__body">
            ${statusPill(p.status)}
            <p class="project-card__category">${p.category}</p>
            <h3 class="project-card__title">${p.title}</h3>
            <p class="project-card__desc">${p.description}</p>
            ${p.technologies && p.technologies.length ? `<div class="project-card__stack">${p.technologies.map(t => `<span>${t}</span>`).join("")}</div>` : ""}
          </div>
        </article>`;
      }

      const features = p.features && p.features.length
        ? `<ul class="project-card__features">${p.features.map(f => `<li>${f}</li>`).join("")}</ul>`
        : "";
      const stack = p.technologies && p.technologies.length
        ? `<div class="project-card__stack">${p.technologies.map(t => `<span>${t}</span>`).join("")}</div>`
        : "";
      const live = actionLink(p.live, "Live demo", true);
      const github = actionLink(p.github, "GitHub", false);

      return `
      <article class="project-card reveal">
        <div class="project-card__media">${mediaContent}</div>
        <div class="project-card__body">
          ${statusPill(p.status)}
          <p class="project-card__category">${p.category}</p>
          <h3 class="project-card__title">${p.title}</h3>
          <p class="project-card__desc">${p.description}</p>
          ${features}
          ${stack}
          <div class="project-card__actions">${live}${github}</div>
          ${caseStudyMarkup(csId, p.caseStudy)}
        </div>
      </article>`;
    })
    .join("");

  // Case study toggles
  list.querySelectorAll(".case-study__toggle").forEach((btn) => {
    btn.addEventListener("click", () => {
      const panel = document.getElementById(btn.getAttribute("aria-controls"));
      const isOpen = btn.getAttribute("aria-expanded") === "true";
      btn.setAttribute("aria-expanded", String(!isOpen));
      panel.classList.toggle("is-open", !isOpen);
    });
  });

  // Register new .reveal elements with the observer if it exists
  if (window.__registerReveal) window.__registerReveal();
}

document.addEventListener("DOMContentLoaded", renderProjects);
