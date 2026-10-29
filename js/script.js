"use strict";

document.documentElement.classList.add("js");

const navigation = [
  { href: "index.html", label: "Home" },
  { href: "how-it-works.html", label: "How It Works" },
  { href: "plans.html", label: "Plans & Pricing" },
  { href: "impact.html", label: "Our Impact" },
  { href: "about.html", label: "About Us" }
];

const currentPage =
  window.location.pathname.split("/").pop() || "index.html";

const header = document.getElementById("site-header");
const footer = document.getElementById("site-footer");

if (header) {
  const links = navigation.map(({ href, label }) => {
    const current = href === currentPage
      ? ' aria-current="page"'
      : "";

    return `<a href="${href}"${current}>${label}</a>`;
  }).join("");

  header.innerHTML = `
    <nav class="container navbar" aria-label="Main navigation">
      <a class="brand" href="index.html" aria-label="CircularTech home">
        CircularTech<span class="brand-dot">.</span>
      </a>

      <button
        class="menu-toggle"
        type="button"
        aria-expanded="false"
        aria-controls="main-navigation">
        Menu
      </button>

      <div class="nav-links" id="main-navigation">
        ${links}
      </div>
    </nav>
  `;
}

if (footer) {
  footer.innerHTML = `
    <div class="container">
      <div class="footer-top">
        <a class="brand" href="index.html">CircularTech.</a>

        <nav class="footer-links" aria-label="Footer navigation">
          <a href="plans.html">Plans</a>
          <a href="about.html">About & credits</a>
        </nav>
      </div>

      <p>Sustainable device subscriptions · A student project concept.</p>
      <p>
        Adapted by Malav Joshi from the original SCSC website
        by Parin Shah and team, used with permission.
      </p>
    </div>
  `;
}

const menuButton = document.querySelector(".menu-toggle");
const menu = document.getElementById("main-navigation");

function closeMenu() {
  if (!menuButton || !menu) return;

  menu.classList.remove("is-open");
  menuButton.setAttribute("aria-expanded", "false");
  menuButton.textContent = "Menu";
}

if (menuButton && menu) {
  menuButton.addEventListener("click", () => {
    const isOpen = menu.classList.toggle("is-open");

    menuButton.setAttribute("aria-expanded", String(isOpen));
    menuButton.textContent = isOpen ? "Close" : "Menu";
  });

  menu.addEventListener("click", (event) => {
    if (event.target.closest("a")) {
      closeMenu();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (
      event.key === "Escape" &&
      menuButton.getAttribute("aria-expanded") === "true"
    ) {
      closeMenu();
      menuButton.focus();
    }
  });

  document.addEventListener("click", (event) => {
    if (!header.contains(event.target)) {
      closeMenu();
    }
  });

  window.matchMedia("(min-width: 851px)")
    .addEventListener("change", closeMenu);
}

const contactForm = document.getElementById("contact-form");
const formStatus = document.getElementById("form-status");

if (contactForm && formStatus) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const nameInput = document.getElementById("name");
    const messageInput = document.getElementById("message");

    nameInput.setCustomValidity(
      nameInput.value.trim() ? "" : "Please enter your name."
    );

    messageInput.setCustomValidity(
      messageInput.value.trim() ? "" : "Please enter a message."
    );

    if (!contactForm.reportValidity()) {
      return;
    }

    formStatus.textContent =
      "Demo complete. Your entries passed validation. " +
      "No message was sent or saved.";

    contactForm.reset();
  });

  contactForm.addEventListener("input", (event) => {
    if (typeof event.target.setCustomValidity === "function") {
      event.target.setCustomValidity("");
    }

    formStatus.textContent = "";
  });
}