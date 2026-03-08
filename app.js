const routes = {
  "/cv": `
    <section class="section docs-section">
      <h2>Documents</h2>

      <div class="docs-stair">
        <article class="doc-card doc-card--one">
          <h3>CV / Resume</h3>
          <p>Updated PDF version of my CV.</p>
          <a
            class="btn left btn-small"
            href="./Documents/cv-steffen.pdf"
            target="_blank"
            rel="noreferrer"
          >
            Open
          </a>
        </article>

        <article class="doc-card doc-card--two">
          <h3>Open Application</h3>
          <p>A short introduction to who I am and what I want to build.</p>
          <a
            class="btn center btn-small"
            href="./Documents/open-application.pdf"
            target="_blank"
            rel="noreferrer"
          >
            Open
          </a>
        </article>

        <article class="doc-card doc-card--three">
          <h3>Project Reflection</h3>
          <p>Notes on the featured projects and how I would improve them.</p>
          <a
            class="btn right btn-small"
            href="./docs/reflection.pdf"
            target="_blank"
            rel="noreferrer"
          >
            Open
          </a>
        </article>
      </div>
    </section>
  `,
};

const app = document.getElementById("app");

function getPath() {
  const hash = window.location.hash || "#";
  if (hash.startsWith("#/")) return hash.slice(1);
  return "";
}

function router() {
  const path = getPath();

  if (routes[path]) {
    app.innerHTML = routes[path];
    app.scrollIntoView({ behavior: "smooth", block: "start" });
  } else {
    app.innerHTML = "";
  }
}

window.addEventListener("hashchange", router);
router();

document.addEventListener("click", (e) => {
  const link = e.target.closest("[data-scroll]");
  if (!link) return;

  const href = link.getAttribute("href");
  if (!href || !href.startsWith("#")) return;

  const targetId = href.slice(1);
  const target = document.getElementById(targetId);
  if (!target) return;

  e.preventDefault();
  target.scrollIntoView({ behavior: "smooth", block: "start" });
});

const featuredProjects = [
  {
    title: "Science Museum Semester Project 1",
    desc: "A museum website created for a customer as a school project.",
    img: "./image/Skjermbilde 2026-02-28 123938.jpg",
    live: "https://nd-nitro.github.io/semester-project-1-/",
    github: "https://github.com/ND-Nitro/semester-project-1-",
  },
  {
    title: "Rainydays",
    desc: "An online store project built with HTML and CSS.",
    img: "./image/Rainydays.jpg",
    live: "https://nd-nitro.github.io/html.css-steffen/",
    github: "https://github.com/ND-Nitro/html.css-steffen",
  },
  {
    title: "Semester JavaScript Project",
    desc: "A JavaScript-based semester project focused on dynamic functionality.",
    img: "./image/Skjermbilde 2026-03-05 202812.jpg",
    live: "https://nd-nitro.github.io/semester-javascript/",
    github: "https://github.com/ND-Nitro/semester-javascript",
  },
];

let currentIndex = 0;

function renderCarousel() {
  const img = document.getElementById("carouselImg");
  const title = document.getElementById("carouselTitle");
  const desc = document.getElementById("carouselDesc");
  const github = document.getElementById("carouselGithub");
  const live = document.getElementById("carouselLive");

  if (!img || !title || !desc || !github || !live) return;

  const p = featuredProjects[currentIndex];

  img.src = p.img;
  img.alt = p.title;
  title.textContent = p.title;
  desc.textContent = p.desc;
  github.href = p.github || "#";
  live.href = p.live || "#";
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % featuredProjects.length;
  renderCarousel();
}

function prevSlide() {
  currentIndex =
    (currentIndex - 1 + featuredProjects.length) % featuredProjects.length;
  renderCarousel();
}

document.addEventListener("click", (e) => {
  const btn = e.target.closest("[data-action]");
  if (!btn) return;

  if (btn.dataset.action === "next") nextSlide();
  if (btn.dataset.action === "prev") prevSlide();

  if (btn.dataset.action === "watchVideo") {
    alert("Watch video clicked (adding a link later.).");
  }
});

renderCarousel();
