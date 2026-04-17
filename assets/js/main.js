/* ============================================================
   Portfolio JS — Rémi Misery
   ============================================================ */
document.addEventListener("DOMContentLoaded", () => {
  const isSubpage = window.location.pathname.includes("pages");
  const base = isSubpage ? "../" : "";

  /* ---- inject header ---- */
  const headerHTML = `
  <header>
    <div class="nav-inner">
      <a href="${base}index.html" class="nav-logo">R<span>.</span>Misery</a>
      <nav>
        <ul id="nav-menu">
          <li><a href="${base}index.html">Accueil</a></li>
          <li><a href="${base}pages/cv.html">CV</a></li>
          <li><a href="${base}pages/projets.html">Projets</a></li>
          <li><a href="${base}pages/experience.html">Experience</a></li>
          <li><a href="${base}pages/apropos.html">A propos</a></li>
          <li><a href="${base}pages/bilan.html">Bilan</a></li>
          <li><a href="${base}pages/contact.html">Contact</a></li>
        </ul>
      </nav>
      <button class="burger" id="nav-toggle" aria-label="Menu">
        <span></span><span></span><span></span>
      </button>
    </div>
  </header>`;
  document.body.insertAdjacentHTML("afterbegin", headerHTML);

  /* ---- active link ---- */
  const path = window.location.pathname;
  document.querySelectorAll("nav ul li a").forEach(link => {
    const href = link.getAttribute("href");
    if (path.endsWith(href.replace(/^\.\.\//, "").replace(/^\.\//, ""))) {
      link.classList.add("active");
    }
    if (path.endsWith("index.html") && href.endsWith("index.html")) {
      link.classList.add("active");
    }
    if ((path === "/" || path.endsWith("/")) && href.endsWith("index.html")) {
      link.classList.add("active");
    }
  });

  /* ---- burger toggle ---- */
  const toggle = document.getElementById("nav-toggle");
  const menu = document.getElementById("nav-menu");
  if (toggle && menu) {
    toggle.addEventListener("click", () => {
      menu.classList.toggle("show");
      toggle.classList.toggle("open");
    });
    menu.querySelectorAll("a").forEach(a =>
      a.addEventListener("click", () => {
        menu.classList.remove("show");
        toggle.classList.remove("open");
      })
    );
  }

  /* ---- scroll progress bar ---- */
  const bar = document.getElementById("progress-bar");
  if (bar) {
    window.addEventListener("scroll", () => {
      const h = document.documentElement.scrollHeight - window.innerHeight;
      bar.style.width = h > 0 ? ((window.scrollY / h) * 100) + "%" : "0%";
    }, { passive: true });
  }

  /* ---- hide/show nav on scroll ---- */
  let lastY = 0;
  const header = document.querySelector("header");
  window.addEventListener("scroll", () => {
    const y = window.scrollY;
    if (y > 200 && y > lastY) header.classList.add("hide-nav");
    else header.classList.remove("hide-nav");
    lastY = y;
  }, { passive: true });

  /* ---- reveal on scroll ---- */
  const reveals = document.querySelectorAll(".reveal, .reveal-children");
  if (reveals.length) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add("visible"); io.unobserve(e.target); } });
    }, { threshold: 0.12 });
    reveals.forEach(el => io.observe(el));
  }

  /* ---- loader ---- */
  const loader = document.getElementById("loader");
  if (loader) {
    window.addEventListener("load", () => {
      loader.classList.add("hide");
      setTimeout(() => loader.remove(), 600);
    });
  }
});
