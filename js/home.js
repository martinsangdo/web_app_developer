/* Home page: render the grid of apps with a category filter. */
(function () {
  const { el, logoNode } = window.AppUtil;
  const apps = (window.APPS || []).slice();

  const grid = document.getElementById("app-grid");
  const filtersEl = document.getElementById("filters");
  const countEl = document.getElementById("app-count");
  const emptyEl = document.getElementById("empty-state");

  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Featured apps first, then keep the original order.
  apps.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));

  // Build the list of categories for the filter bar.
  const categories = ["All"].concat(
    Array.from(new Set(apps.map((a) => a.category).filter(Boolean))).sort()
  );

  let activeCategory = "All";

  function platformBadges(app) {
    const list = app.platforms || [];
    const badges = [];
    if (list.includes("android")) badges.push(el("span", { class: "badge badge-android", text: "Android" }));
    if (list.includes("ios")) badges.push(el("span", { class: "badge badge-ios", text: "iOS" }));
    return el("div", { class: "card-platforms" }, badges);
  }

  function card(app) {
    const link = el("a", {
      class: "app-card",
      href: "app.html?id=" + encodeURIComponent(app.id),
      "aria-label": app.name
    });

    const media = el("div", { class: "card-media" }, [logoNode(app, "card-logo")]);
    if (app.featured) media.appendChild(el("span", { class: "featured-tag", text: "Featured" }));

    const body = el("div", { class: "card-body" }, [
      el("h2", { class: "card-title", text: app.name }),
      app.tagline ? el("p", { class: "card-tagline", text: app.tagline }) : null,
      platformBadges(app)
    ]);

    link.appendChild(media);
    link.appendChild(body);
    return link;
  }

  function render() {
    grid.innerHTML = "";
    const visible = apps.filter(
      (a) => activeCategory === "All" || a.category === activeCategory
    );

    visible.forEach((app) => grid.appendChild(card(app)));

    emptyEl.hidden = visible.length !== 0;
    countEl.textContent =
      visible.length + (visible.length === 1 ? " app" : " apps");
  }

  function renderFilters() {
    categories.forEach((cat) => {
      const btn = el("button", {
        class: "filter" + (cat === activeCategory ? " is-active" : ""),
        type: "button",
        role: "tab",
        text: cat
      });
      btn.addEventListener("click", () => {
        activeCategory = cat;
        filtersEl.querySelectorAll(".filter").forEach((b) => b.classList.remove("is-active"));
        btn.classList.add("is-active");
        render();
      });
      filtersEl.appendChild(btn);
    });
  }

  // Only show the filter bar if there's more than one category.
  if (categories.length > 2) renderFilters();
  render();
})();
