const routes = {
  "/cv": `
    <section class="section">
      <h2>CV</h2>
      <p>Legg inn CV her (tekst, punkter, erfaring, utdanning, osv).</p>

      <h2 style="margin-top: 24px;">Open Application</h2>
      <p>Legg inn en åpen søknad her.</p>
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
    title: "Project 1",
    desc: "info about my project .",
    img: "./image/project1.png",
    github: "https://github.com/USERNAME/REPO1",
  },
  {
    title: "Project 2",
    desc: "info about my project .",
    img: "./image/project2.png",
    github: "https://github.com/USERNAME/REPO2",
  },
  {
    title: "Project 3",
    desc: "info about my project.",
    img: "./image/project3.png",
    github: "https://github.com/USERNAME/REPO3",
  },
];

let currentIndex = 0;

function renderCarousel() {
  const img = document.getElementById("carouselImg");
  const title = document.getElementById("carouselTitle");
  const desc = document.getElementById("carouselDesc");
  const github = document.getElementById("carouselGithub");

  if (!img || !title || !desc || !github) return;

  const p = featuredProjects[currentIndex];

  img.src = p.img;
  img.alt = p.title;

  title.textContent = p.title;
  desc.textContent = p.desc;

  github.href = p.github;
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
