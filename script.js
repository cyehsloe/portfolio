const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector(".main-nav");

if (menuButton && nav) {
  menuButton.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("is-open");
    menuButton.setAttribute("aria-expanded", String(isOpen));
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("is-open");
      menuButton.setAttribute("aria-expanded", "false");
    });
  });
}

// Keep the plus/minus marker in project details in sync with the open state.
document.querySelectorAll(".project-details").forEach((details) => {
  details.addEventListener("toggle", () => {
    const marker = details.querySelector("summary span");
    if (marker) marker.textContent = details.open ? "−" : "＋";
  });
});


// Subtle scroll-in animation. Content remains visible if IntersectionObserver is unavailable.
(() => {
  const items = document.querySelectorAll(
    'section, .project, .project-card, .achievement, .experience-item'
  );
  if (!('IntersectionObserver' in window) || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  items.forEach((item) => item.setAttribute('data-reveal', ''));
  document.documentElement.classList.add('reveal-ready');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  items.forEach((item) => observer.observe(item));
})();
