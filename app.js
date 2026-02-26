const routes = {
  "/": "<h2>Home</h2>",
  "/projects": "<h2>Projects</h2>",
  "/contact": "<h2>contact</h2>",
};

const app = document.getElementById("app");

function getPath() {
  const hash = window.location.hash || "#/";
  return hash.replace("#", "") || "/";
}

function router() {
  const path = getPath();
  app.innerHTML = routes[path] || "<h2>404 Not Found</h2>";
}

window.addEventListener("hashchange", router);
router();
