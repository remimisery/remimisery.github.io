
document.addEventListener("DOMContentLoaded", function () {
    const basePath = window.location.pathname.includes("pages") ? "../" : "";

    const header = `
    <header>
        <h1>Rémi Misery</h1>
        <nav>
            <ul>
                <li><a href="${basePath}index.html" class="button">Accueil</a></li>
                <li><a href="${basePath}pages/cv.html" class="button">CV</a></li>
                <li><a href="${basePath}pages/projets.html" class="button">Projets</a></li>
                <li><a href="${basePath}pages/experience.html" class="button">Expérience</a></li>
                <li><a href="${basePath}pages/contact.html" class="button">Contact</a></li>
            <li><a href="${basePath}pages/apropos.html" class="button">À propos</a></li>
</ul>
        </nav>
    </header>`;
    
    document.body.insertAdjacentHTML("afterbegin", header);
});

document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("nav-toggle");
  const menu = document.getElementById("nav-menu");
  if (toggle && menu) {
    toggle.addEventListener("click", () => {
      menu.classList.toggle("show");
    });

    // auto-close menu on link click
    menu.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => menu.classList.remove("show"));
    });
  }
});
