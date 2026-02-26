const routes = {
  "/index.html": "<h2>Home</h2>",
  "/projects": "<h2>Mine Prosjekter</h2>",
  "/contact": "<h2>Kontakt Meg</h2>",
};

const app = document.getElementById("app");

function navigateTo(url) {
  history.pushState(null, null, url);
  router();
}

function router() {
  const path = window.location.hash.slice(1) || "/";
  app.innerHTML = routes[path] || "<h2>404</h2>";
}

document.addEventListener("click", (e) => {
  if (e.target.matches("[data-link]")) {
    window.Location.hash = e.target.getAttribute("data-link");
  }
});

window.addEventListener("hashchange", router);
router();
