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
