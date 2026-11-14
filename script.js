
/* =====================================
   JEVANS INTERNATIONAL
   Website JavaScript
===================================== */

document.addEventListener("DOMContentLoaded", () => {

  // 1. MOBILE NAVIGATION
  const toggle = document.querySelector(".menu-toggle");
  const links = document.querySelector(".nav-links");

  if (toggle && links) {

    toggle.addEventListener("click", () => {
      const isOpen = links.classList.toggle("open");

      toggle.setAttribute("aria-expanded", String(isOpen));
      toggle.textContent = isOpen ? "✕" : "☰";
    });

    // Close menu after clicking a navigation link
    links.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        links.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
        toggle.textContent = "☰";
      });
    });

    // Close menu when clicking outside it
    document.addEventListener("click", event => {
      if (
        !toggle.contains(event.target) &&
        !links.contains(event.target)
      ) {
        links.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
        toggle.textContent = "☰";
      }
    });

  }

  // 2. AUTOMATIC COPYRIGHT YEAR
  const year = document.getElementById("year");

  if (year) {
    year.textContent = new Date().getFullYear();
  }

  // 3. SMOOTH SCROLLING
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", event => {

      const targetId = anchor.getAttribute("href");

      if (!targetId || targetId === "#") return;

      const target = document.querySelector(targetId);

      if (target) {
        event.preventDefault();

        target.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }

    });

  });

  // 4. COMPANY INTRODUCTION VIDEO
  const companyVideo = document.querySelector(".company-video video");

  if (companyVideo) {

    companyVideo.addEventListener("error", () => {
      console.warn(
        "Jevans International introduction video could not be loaded."
      );
    });

  }

  // 5. WHATSAPP CONTACT
  const whatsappLinks = document.querySelectorAll(
    'a[href*="wa.me/211920944180"]'
  );

  whatsappLinks.forEach(link => {
    link.setAttribute("target", "_blank");
    link.setAttribute("rel", "noopener noreferrer");
  });

  // 6. WEBSITE READY
  console.log("Jevans International website is ready.");

});
