/* ==========================================================================
   main.js — navigation, theme, scroll reveal, active section, contact form
   ========================================================================== */

(function () {
  "use strict";

  /* ---------- Footer year ---------- */
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---------- Theme toggle (persisted) ---------- */
  const root = document.documentElement;
  const themeToggle = document.getElementById("themeToggle");
  const THEME_KEY = "st-theme";

  function applyTheme(theme) {
    if (theme === "dark") {
      root.setAttribute("data-theme", "dark");
      themeToggle?.setAttribute("aria-pressed", "true");
      themeToggle?.setAttribute("aria-label", "Switch to light mode");
    } else {
      root.removeAttribute("data-theme");
      themeToggle?.setAttribute("aria-pressed", "false");
      themeToggle?.setAttribute("aria-label", "Switch to dark mode");
    }
  }

  const stored = localStorage.getItem(THEME_KEY);
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  applyTheme(stored || (prefersDark ? "dark" : "light"));

  themeToggle?.addEventListener("click", () => {
    const isDark = root.getAttribute("data-theme") === "dark";
    const next = isDark ? "light" : "dark";
    applyTheme(next);
    localStorage.setItem(THEME_KEY, next);
  });

  /* ---------- Mobile nav ---------- */
  const navToggle = document.getElementById("navToggle");
  const navMenu = document.getElementById("navMenu");

  function closeMenu() {
    navMenu.classList.remove("is-open");
    navToggle.setAttribute("aria-expanded", "false");
    navToggle.setAttribute("aria-label", "Open menu");
  }
  function openMenu() {
    navMenu.classList.add("is-open");
    navToggle.setAttribute("aria-expanded", "true");
    navToggle.setAttribute("aria-label", "Close menu");
  }

  navToggle?.addEventListener("click", () => {
    const isOpen = navMenu.classList.contains("is-open");
    isOpen ? closeMenu() : openMenu();
  });

  navMenu?.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && navMenu.classList.contains("is-open")) {
      closeMenu();
      navToggle.focus();
    }
  });

  /* ---------- Active section indicator ---------- */
  const navLinks = document.querySelectorAll("[data-nav-link]");
  const sections = Array.from(navLinks)
    .map((link) => document.querySelector(link.getAttribute("href")))
    .filter(Boolean);

  const sectionObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const id = entry.target.id;
        const link = document.querySelector(`[data-nav-link][href="#${id}"]`);
        if (!link) return;
        if (entry.isIntersecting) {
          navLinks.forEach((l) => l.classList.remove("is-active"));
          link.classList.add("is-active");
        }
      });
    },
    { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
  );
  sections.forEach((s) => sectionObserver.observe(s));

  /* ---------- Scroll reveal (single subtle pass, respects reduced motion) ---------- */
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  let revealObserver;

  function registerReveal() {
    const targets = document.querySelectorAll(".reveal:not(.is-observed)");
    if (prefersReducedMotion) {
      targets.forEach((t) => t.classList.add("is-visible", "is-observed"));
      return;
    }
    if (!revealObserver) {
      revealObserver = new IntersectionObserver(
        (entries, obs) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible");
              obs.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.12 }
      );
    }
    targets.forEach((t) => {
      t.classList.add("is-observed");
      revealObserver.observe(t);
    });
  }
  window.__registerReveal = registerReveal;

  document.querySelectorAll(
    ".hero__content, .hero__visual, .about__inner, .skills__grid, .service-row, .process-step, .why__item, .contact__inner"
  ).forEach((el) => el.classList.add("reveal"));
  registerReveal();

  /* ---------- Back to top ---------- */
  const backToTop = document.getElementById("backToTop");
  backToTop?.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: prefersReducedMotion ? "auto" : "smooth" });
  });

  /* ---------- Contact form ---------- */
  const form = document.getElementById("contactForm");
  const formStatus = document.getElementById("formStatus");

  // Set this to a real form-delivery endpoint (Formspree, Web3Forms,
  // Getform, etc.) to make the form actually send email. See README.md
  // for setup steps. Until it's set, the form validates locally and is
  // honest that nothing has been sent anywhere.
  const FORM_ENDPOINT = "https://formspree.io/f/xgavwano";

  function setError(field, message) {
    const wrapper = field.closest(".field");
    const errorEl = wrapper.querySelector(".field-error");
    if (message) {
      wrapper.classList.add("has-error");
      errorEl.textContent = message;
    } else {
      wrapper.classList.remove("has-error");
      errorEl.textContent = "";
    }
  }

  function validateField(field) {
    if (field.validity.valueMissing) {
      setError(field, "This field is required.");
      return false;
    }
    if (field.type === "email" && field.validity.typeMismatch) {
      setError(field, "Enter a valid email address.");
      return false;
    }
    setError(field, "");
    return true;
  }

  if (form) {
    const fields = form.querySelectorAll("input, select, textarea");
    fields.forEach((field) => {
      field.addEventListener("blur", () => validateField(field));
    });

    const submitBtn = form.querySelector('button[type="submit"]');

    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      let isValid = true;
      fields.forEach((field) => {
        if (!validateField(field)) isValid = false;
      });

      if (!isValid) {
        formStatus.textContent = "Please fix the highlighted fields.";
        formStatus.className = "contact-form__status is-error";
        return;
      }

      if (!FORM_ENDPOINT) {
        // Honest local-only state: the message is valid and ready, but no
        // delivery service is connected, so nothing has actually been
        // sent. The form is left filled in so it can be copied manually.
        formStatus.textContent =
          "Your message is ready to send. This form isn't connected to a delivery service yet — email me directly using the details on the left in the meantime.";
        formStatus.className = "contact-form__status is-pending";
        return;
      }

      submitBtn.disabled = true;
      submitBtn.textContent = "Sending…";

      try {
        const response = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: {
        Accept: "application/json"
      },
  body: new FormData(form)
});
        if (!response.ok) throw new Error("Delivery failed");

        formStatus.textContent = "Message sent — thanks, I'll get back to you soon.";
        formStatus.className = "contact-form__status is-success";
        form.reset();
      } catch (err) {
        formStatus.textContent =
          "Something went wrong sending that — please email me directly instead.";
        formStatus.className = "contact-form__status is-error";
      } finally {
        submitBtn.disabled = false;
        submitBtn.textContent = "Send message";
      }
    });
  }
})();
