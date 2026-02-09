// src/dashboard/dashboard.js

// Hash route -> view file
const routes = {
  dashboard: "./dashboard/dashboard.html",
  forms: "./forms/forms.html",
  tables: "./tables/tables.html",
};

// Read route from hash
function getRouteFromHash() {
  const raw = (location.hash || "#dashboard").replace("#", "").trim();
  return routes[raw] ? raw : "dashboard";
}

// Load the view into #view
async function loadRoute(routeName) {
  console.log("Loading route:", routeName);

  const host = document.getElementById("view");
  const file = routes[routeName];

  if (!host) {
    console.error('Container with id="view" not found.');
    return;
  }

  console.log("Fetching view file:", file);

  // IMPORTANT: prevent cached HTML when developing
  const res = await fetch(file, { cache: "no-store" });

  if (!res.ok) {
    host.innerHTML = `<div class="alert alert-danger mb-0">
      Could not load <b>${file}</b> (HTTP ${res.status})
    </div>`;
    console.error("Fetch failed:", res.status, res.statusText);
    return;
  }

  host.innerHTML = await res.text();
  console.log("View injected into #view");

  // Sidebar active state
  document.querySelectorAll("#sidebarNav .nav-link").forEach((a) => {
    a.classList.toggle("active", a.dataset.page === routeName);
  });
}

// Boot router
document.addEventListener("DOMContentLoaded", () => {
  console.log("dashboard.js loaded");

  loadRoute(getRouteFromHash());

  window.addEventListener("hashchange", () => {
    loadRoute(getRouteFromHash());
  });

  document.getElementById("sidebarNav")?.addEventListener("click", (e) => {
    const link = e.target.closest("a[data-page]");
    if (!link) {
      return;
    }

    e.preventDefault();
    location.hash = link.dataset.page;
  });
});
