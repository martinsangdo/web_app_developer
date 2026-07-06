/*
 * ============================================================================
 *  APP CATALOG  —  edit this file to add / change / remove your apps
 * ============================================================================
 *
 *  To add a new app, copy one block below and change the fields.
 *  Only `id` and `name` are strictly required; everything else is optional
 *  and the page will gracefully hide anything you leave out.
 *
 *  FIELDS
 *  ------
 *  id          Unique short slug (letters, numbers, dashes). Used in the URL:
 *              app.html?id=YOUR-ID   ->  keep it stable once published.
 *  name        Display name of the app.
 *  tagline     One short line shown under the name.
 *  category    Free text, e.g. "Game", "Productivity". Used for the filter.
 *  platforms   Array: any of "android", "ios".
 *  logo        Path to a square logo image (e.g. "assets/logos/my-app.png").
 *              Leave "" to auto-generate a colored tile with the initials.
 *  description Longer paragraph shown on the detail page.
 *  youtube     A YouTube video ID (the part after "v=") OR a full URL.
 *              e.g. "dQw4w9WgXcQ". Leave "" to hide the video.
 *  screenshots Array of image paths (e.g. "assets/screenshots/my-app-1.png").
 *  googlePlay  Full Google Play store URL.
 *  appStore    Full Apple App Store URL.
 *              For BOTH store links: a button is shown for every platform in
 *              `platforms`. If you leave the matching link "", the button
 *              shows a "Coming soon" style and taps show an "Upcoming…" note
 *              instead of opening a store. (So list "ios" in `platforms` even
 *              before the App Store link is ready, to advertise it as coming.)
 *  featured    true to highlight it near the top of the home page.
 *
 *  Drop your image files into  assets/logos/  and  assets/screenshots/.
 * ============================================================================
 */

const APPS = [
  {
    id: "space-blaster",
    name: "Space Blaster",
    tagline: "Fast-paced arcade shooter for the whole galaxy.",
    category: "Game",
    platforms: ["android", "ios"],
    logo: "assets/logos/space-blaster.svg",
    description:
      "Blast through waves of asteroids and alien fleets in this retro-inspired arcade shooter. Upgrade your ship, unlock new weapons, and climb the global leaderboards. Easy to pick up, hard to put down.",
    youtube: "aqz-KE-bpKQ",
    screenshots: [
      "assets/screenshots/space-blaster-1.svg",
      "assets/screenshots/space-blaster-2.svg",
      "assets/screenshots/space-blaster-3.svg"
    ],
    googlePlay: "https://play.google.com/store/apps",
    appStore: "https://www.apple.com/app-store/",
    featured: true
  },
  {
    id: "focus-flow",
    name: "Focus Flow",
    tagline: "A calm, beautiful pomodoro timer.",
    category: "Productivity",
    platforms: ["android", "ios"],
    logo: "assets/logos/focus-flow.svg",
    description:
      "Stay in the zone with Focus Flow, a distraction-free pomodoro timer with ambient sounds, streak tracking, and gentle reminders. Designed to help you build a deep-work habit that actually sticks.",
    youtube: "",
    screenshots: [
      "assets/screenshots/focus-flow-1.svg",
      "assets/screenshots/focus-flow-2.svg"
    ],
    googlePlay: "https://play.google.com/store/apps",
    appStore: "",
    featured: true
  },
  {
    id: "puzzle-quest",
    name: "Puzzle Quest",
    tagline: "100+ hand-crafted brain teasers.",
    category: "Game",
    platforms: ["android"],
    logo: "",
    description:
      "Sharpen your mind with over a hundred hand-crafted puzzles spanning logic, pattern-matching, and spatial reasoning. New puzzle packs added every month.",
    youtube: "",
    screenshots: [],
    googlePlay: "https://play.google.com/store/apps",
    appStore: "",
    featured: false
  },
  {
    id: "recipe-box",
    name: "Recipe Box",
    tagline: "Your kitchen, organized.",
    category: "Lifestyle",
    platforms: ["ios"],
    logo: "",
    description:
      "Save recipes from anywhere, build weekly meal plans, and generate a smart shopping list in one tap. Recipe Box keeps your favorite meals right at your fingertips.",
    youtube: "",
    screenshots: [],
    googlePlay: "",
    appStore: "https://www.apple.com/app-store/",
    featured: false
  }
];

// Expose the catalog to the pages (works without any build step).
window.APPS = APPS;
