/* Detail page: render one app based on ?id= in the URL. */
(function () {
  const { el, logoNode, youtubeId, queryParam } = window.AppUtil;
  const apps = window.APPS || [];
  const root = document.getElementById("detail");

  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  const id = queryParam("id");
  const app = apps.find((a) => a.id === id);

  if (!app) {
    document.title = "App not found";
    root.appendChild(
      el("div", { class: "not-found" }, [
        el("h1", { text: "App not found" }),
        el("p", { text: "We couldn't find that app. It may have moved." }),
        el("a", { class: "btn", href: "index.html", text: "Back to all apps" })
      ])
    );
    return;
  }

  document.title = app.name + " — My Studio";

  /* Small transient message shown when tapping an "upcoming" store button. */
  let toastTimer;
  function showToast(message) {
    let toast = document.getElementById("toast");
    if (!toast) {
      toast = el("div", { id: "toast", class: "toast", role: "status", "aria-live": "polite" });
      document.body.appendChild(toast);
    }
    toast.textContent = message;
    toast.classList.add("is-visible");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove("is-visible"), 1800);
  }

  /* ---- Header: logo + name + tagline + platforms + store buttons ---- */
  const platforms = app.platforms || [];
  const platformBadges = [];
  if (platforms.includes("android"))
    platformBadges.push(el("span", { class: "badge badge-android", text: "Android" }));
  if (platforms.includes("ios"))
    platformBadges.push(el("span", { class: "badge badge-ios", text: "iOS" }));

  // Store metadata: icon markup + the label lines for the "live" and
  // "upcoming" (no link yet) states.
  const STORE_META = {
    google: {
      cls: "store-google",
      icon: '<span class="store-icon">▶</span>',
      live: "GET IT ON",
      name: "Google Play"
    },
    apple: {
      cls: "store-apple",
      icon: '<span class="store-icon"></span>',
      live: "Download on the",
      name: "App Store"
    }
  };

  /* Build one store button — a real link if `url` is set, otherwise an
     "Upcoming" button that shows a toast when clicked. */
  function storeButton(kind, url) {
    const m = STORE_META[kind];
    if (url) {
      return el("a", {
        class: "store-btn " + m.cls,
        href: url,
        target: "_blank",
        rel: "noopener",
        html:
          m.icon +
          '<span class="store-text"><small>' + m.live + "</small><strong>" + m.name + "</strong></span>"
      });
    }
    const btn = el("button", {
      class: "store-btn " + m.cls + " store-upcoming",
      type: "button",
      "aria-label": m.name + " — coming soon",
      html:
        m.icon +
        '<span class="store-text"><small>COMING SOON</small><strong>' + m.name + "</strong></span>"
    });
    btn.addEventListener("click", () => showToast("Upcoming…"));
    return btn;
  }

  /* A store button is shown when the app targets that platform (so an
     Android-only app never shows an App Store button). A live link also
     forces the button on, even if the platform wasn't listed. */
  function makeStoreButtons() {
    const arr = [];
    if (platforms.includes("android") || app.googlePlay)
      arr.push(storeButton("google", app.googlePlay));
    if (platforms.includes("ios") || app.appStore)
      arr.push(storeButton("apple", app.appStore));
    return arr;
  }

  const headerStoreButtons = makeStoreButtons();

  const header = el("section", { class: "detail-header" }, [
    el("div", { class: "detail-logo" }, [logoNode(app, "detail-logo-img")]),
    el("div", { class: "detail-heading" }, [
      app.category ? el("span", { class: "detail-category", text: app.category }) : null,
      el("h1", { class: "detail-title", text: app.name }),
      app.tagline ? el("p", { class: "detail-tagline", text: app.tagline }) : null,
      platformBadges.length ? el("div", { class: "detail-platforms" }, platformBadges) : null,
      headerStoreButtons.length ? el("div", { class: "store-buttons" }, headerStoreButtons) : null
    ])
  ]);
  root.appendChild(header);

  /* ---- Description ---- */
  if (app.description) {
    root.appendChild(
      el("section", { class: "detail-section" }, [
        el("h2", { class: "section-title", text: "About" }),
        el("p", { class: "detail-description", text: app.description })
      ])
    );
  }

  /* ---- YouTube video ---- */
  const vid = youtubeId(app.youtube);
  if (vid) {
    root.appendChild(
      el("section", { class: "detail-section" }, [
        el("h2", { class: "section-title", text: "Preview" }),
        el("div", { class: "video-wrap" }, [
          el("iframe", {
            src: "https://www.youtube.com/embed/" + vid,
            title: app.name + " video",
            allow:
              "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
            allowfullscreen: "",
            loading: "lazy",
            frameborder: "0"
          })
        ])
      ])
    );
  }

  /* ---- Screenshots ---- */
  const shots = (app.screenshots || []).filter(Boolean);
  if (shots.length) {
    const gallery = el("div", { class: "screenshot-gallery" });
    const section = el("section", { class: "detail-section" }, [
      el("h2", { class: "section-title", text: "Screenshots" }),
      gallery
    ]);
    let remaining = shots.length;
    shots.forEach((src, i) => {
      const img = el("img", {
        class: "screenshot",
        src: src,
        alt: app.name + " screenshot " + (i + 1),
        loading: "lazy"
      });
      img.addEventListener("error", () => {
        img.remove();
        remaining -= 1;
        // If every screenshot failed to load, drop the whole section.
        if (remaining <= 0) section.remove();
      });
      img.addEventListener("click", () => openLightbox(src, img.alt));
      gallery.appendChild(img);
    });
    root.appendChild(section);
  }

  /* ---- Bottom store call-to-action ---- */
  if (headerStoreButtons.length) {
    // Build a fresh set so the "Upcoming" click handlers are attached
    // (cloneNode would drop the listeners).
    root.appendChild(
      el("section", { class: "detail-section detail-cta" }, [
        el("h2", { class: "section-title", text: "Get " + app.name }),
        el("div", { class: "store-buttons" }, makeStoreButtons())
      ])
    );
  }

  /* ---- Lightbox ---- */
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  const lightboxClose = document.getElementById("lightbox-close");

  function openLightbox(src, alt) {
    lightboxImg.src = src;
    lightboxImg.alt = alt;
    lightbox.hidden = false;
    document.body.style.overflow = "hidden";
  }
  function closeLightbox() {
    lightbox.hidden = true;
    lightboxImg.src = "";
    document.body.style.overflow = "";
  }
  if (lightbox) {
    lightboxClose.addEventListener("click", closeLightbox);
    lightbox.addEventListener("click", (e) => {
      if (e.target === lightbox) closeLightbox();
    });
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && !lightbox.hidden) closeLightbox();
    });
  }
})();
