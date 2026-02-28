const routes = {
  "/": `
    <section class="section section--big">
      <h2>Home</h2>
      <p>Home content goes here.</p>
    </section>

    <section class="section">
      <h2>About</h2>
      <p>Some info about me.</p>
    </section>

    <section class="section">
      <h2>Skills</h2>
      <p>HTML • CSS • JS • FIGMA</p>
    </section>
  `,

  "/projects": `
    <section class="section">
      <h2>Projects</h2>
      <p>Project content here.</p>
    </section>
  `,

  "/contact": `
    <section class="section">
      <h2>Contact</h2>
      <p>Contact info here.</p>
    </section>
  `,
};

const app = document.getElementById("app");

function getPath() {
  const hash = window.location.hash || "#/";
  return hash.replace("#", "") || "/";
}

function router() {
  const path = getPath();

  app.innerHTML =
    routes[path] ||
    `
      <section class="section">
        <h2>404 - Not Found</h2>
      </section>
    `;

  app.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
}

window.addEventListener("hashchange", router);

// first load
router();
