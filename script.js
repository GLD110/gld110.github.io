document.getElementById("year").textContent = new Date().getFullYear();

const navLinks = Array.from(document.querySelectorAll(".side-links a"));
const sections = Array.from(document.querySelectorAll("main section[id]"));
const navToggleButton = document.querySelector(".mobile-nav-toggle");
const themeToggleButton = document.querySelector(".theme-toggle");
const mobileBreakpoint = window.matchMedia("(max-width: 900px)");
const portfolioSection = document.getElementById("portfolio");
const themedIframes = Array.from(
  document.querySelectorAll(".portfolio-iframe, .stack-iframe, .resume-iframe, .hero-iframe, .about-visual-iframe")
);

function syncThemeToIframes(theme) {
  themedIframes.forEach((frame) => {
    try {
      if (frame.contentWindow) {
        frame.contentWindow.postMessage({ type: "theme-change", theme: theme }, "*");
      }
    } catch {}
  });
}

function applyTheme(theme) {
  const isLight = theme === "light";
  document.documentElement.classList.toggle("theme-light", isLight);
  if (themeToggleButton) {
    themeToggleButton.innerHTML = isLight ? '<i class="fa-solid fa-sun"></i>' : '<i class="fa-solid fa-moon"></i>';
    themeToggleButton.setAttribute("aria-label", isLight ? "Switch to dark mode" : "Switch to light mode");
  }
  syncThemeToIframes(theme);
}

function preferredTheme() {
  try {
    const stored = localStorage.getItem("theme");
    if (stored === "light" || stored === "dark") return stored;
  } catch {}
  return window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
}

applyTheme(preferredTheme());

themedIframes.forEach((frame) => {
  frame.addEventListener("load", () => {
    const theme = document.documentElement.classList.contains("theme-light") ? "light" : "dark";
    syncThemeToIframes(theme);
  });
});

if (themeToggleButton) {
  themeToggleButton.addEventListener("click", () => {
    const isLight = document.documentElement.classList.contains("theme-light");
    const next = isLight ? "dark" : "light";
    applyTheme(next);
    try {
      localStorage.setItem("theme", next);
    } catch {}
  });
}

function setActiveLinkById(sectionId) {
  navLinks.forEach((link) => {
    const isActive = link.getAttribute("href") === `#${sectionId}`;
    link.classList.toggle("active", isActive);
  });
  document.body.classList.toggle("nav-on-hero", sectionId === "hero");
}

const observer = new IntersectionObserver(
  (entries) => {
    const visible = entries
      .filter((entry) => entry.isIntersecting)
      .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

    if (visible?.target?.id) {
      setActiveLinkById(visible.target.id);
    }
  },
  {
    root: null,
    threshold: [0.2, 0.45, 0.7],
    rootMargin: "-20% 0px -20% 0px",
  }
);

sections.forEach((section) => observer.observe(section));

function closeMobileNav() {
  document.body.classList.remove("nav-open");
  if (navToggleButton) {
    navToggleButton.setAttribute("aria-expanded", "false");
    navToggleButton.innerHTML = '<i class="fa-solid fa-bars"></i>';
  }
}

function toggleMobileNav() {
  const open = document.body.classList.toggle("nav-open");
  if (navToggleButton) {
    navToggleButton.setAttribute("aria-expanded", open ? "true" : "false");
    navToggleButton.innerHTML = open
      ? '<i class="fa-solid fa-xmark"></i>'
      : '<i class="fa-solid fa-bars"></i>';
  }
}

if (navToggleButton) {
  navToggleButton.addEventListener("click", toggleMobileNav);
}

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    const targetId = (link.getAttribute("href") || "").replace("#", "");
    if (targetId) {
      setActiveLinkById(targetId);
    }
    if (mobileBreakpoint.matches) {
      closeMobileNav();
    }
  });
});

window.addEventListener("resize", () => {
  if (!mobileBreakpoint.matches) {
    closeMobileNav();
  }
});

let lastPortfolioHandoffAt = 0;

window.addEventListener("message", (event) => {
  const sameOrigin = event.origin === window.location.origin;
  const localFileMessage =
    window.location.protocol === "file:" && (event.origin === "null" || event.origin === "file://");
  if (!sameOrigin && !localFileMessage) return;
  if (!event.data || event.data.type !== "portfolio-gallery-scroll-edge") return;
  if (!portfolioSection) return;

  const now = Date.now();
  if (now - lastPortfolioHandoffAt < 700) return;
  lastPortfolioHandoffAt = now;

  const dir = event.data.direction;
  const currentIndex = sections.findIndex((section) => section.id === "portfolio");
  if (currentIndex < 0) return;

  const targetIndex =
    dir === "next" ? Math.min(currentIndex + 1, sections.length - 1) : Math.max(currentIndex - 1, 0);
  const target = sections[targetIndex];
  if (!target || target.id === "portfolio") return;

  target.scrollIntoView({ behavior: "smooth", block: "start" });
  setActiveLinkById(target.id);
});
