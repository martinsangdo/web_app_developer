/* Shared helpers used by both the home and detail pages. */

/* Deterministically pick a pleasant gradient from a string (app id/name). */
function gradientFor(str) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  const h1 = Math.abs(hash) % 360;
  const h2 = (h1 + 40) % 360;
  return `linear-gradient(135deg, hsl(${h1} 70% 55%), hsl(${h2} 70% 42%))`;
}

/* First one or two initials of an app name, e.g. "Space Blaster" -> "SB". */
function initialsFor(name) {
  const words = String(name).trim().split(/\s+/).filter(Boolean);
  if (words.length === 0) return "?";
  if (words.length === 1) return words[0].slice(0, 2).toUpperCase();
  return (words[0][0] + words[1][0]).toUpperCase();
}

/*
 * Build a placeholder logo element (colored tile + initials) for apps that
 * don't have a logo image yet.
 */
function placeholderLogo(app, className) {
  const el = document.createElement("div");
  el.className = className || "";
  el.classList.add("logo-placeholder");
  el.style.background = gradientFor(app.id || app.name);
  el.textContent = initialsFor(app.name);
  el.setAttribute("aria-hidden", "true");
  return el;
}

/*
 * Build a logo node: an <img> if a real path is given (falling back to the
 * placeholder if the image fails to load), otherwise the placeholder.
 */
function logoNode(app, className) {
  if (!app.logo) return placeholderLogo(app, className);
  const img = document.createElement("img");
  img.src = app.logo;
  img.alt = app.name + " logo";
  img.loading = "lazy";
  if (className) img.className = className;
  img.classList.add("logo-img");
  img.addEventListener("error", () => {
    img.replaceWith(placeholderLogo(app, className));
  });
  return img;
}

/* Normalize a YouTube ID or full URL into just the 11-char video ID. */
function youtubeId(value) {
  if (!value) return "";
  const v = String(value).trim();
  // Already looks like a bare ID.
  if (/^[a-zA-Z0-9_-]{11}$/.test(v)) return v;
  const patterns = [
    /[?&]v=([a-zA-Z0-9_-]{11})/, // watch?v=ID
    /youtu\.be\/([a-zA-Z0-9_-]{11})/, // youtu.be/ID
    /embed\/([a-zA-Z0-9_-]{11})/, // embed/ID
    /shorts\/([a-zA-Z0-9_-]{11})/ // shorts/ID
  ];
  for (const p of patterns) {
    const m = v.match(p);
    if (m) return m[1];
  }
  return "";
}

/* Small helper to build an element with attributes and children. */
function el(tag, attrs, children) {
  const node = document.createElement(tag);
  if (attrs) {
    for (const [k, val] of Object.entries(attrs)) {
      if (k === "class") node.className = val;
      else if (k === "text") node.textContent = val;
      else if (k === "html") node.innerHTML = val;
      else if (val !== null && val !== undefined) node.setAttribute(k, val);
    }
  }
  if (children) {
    for (const c of [].concat(children)) {
      if (c) node.appendChild(typeof c === "string" ? document.createTextNode(c) : c);
    }
  }
  return node;
}

/* Read a query-string parameter. */
function queryParam(name) {
  return new URLSearchParams(window.location.search).get(name);
}

window.AppUtil = {
  gradientFor,
  initialsFor,
  placeholderLogo,
  logoNode,
  youtubeId,
  el,
  queryParam
};
