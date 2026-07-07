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
    id: "com.xufagroup.eight_neighbors",
    name: "Eight Neighbors Gems",
    tagline: "Tap groups of matching shapes to clear them.",
    category: "Game",
    platforms: ["android", "ios"],
    logo: "https://play-lh.googleusercontent.com/dHbB3Vk8ABIPr0ZQIXZ8HZJxi-xbv7Oj2WB6L6OVc1WWObO6d82SUtsOkVr7Ob-3QXnWikjCYo1IOa5CV26D=w240-h480-rw",
    description:
      "Eight Neighbors is a fun and relaxing puzzle game where you tap groups of matching shapes to clear them from the board. Shapes connect in all 8 directions — including diagonals — so think before you tap!",
    youtube: "PLRRrYDmRAnFI",
    screenshots: [
      "assets/screenshots/space-blaster-1.svg",
      "assets/screenshots/space-blaster-2.svg",
      "assets/screenshots/space-blaster-3.svg"
    ],
    googlePlay: "https://play.google.com/store/apps/details?id=com.xufagroup.eight_neighbors",
    appStore: "",
    featured: false
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
    googlePlay: "",
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
    googlePlay: "",
    appStore: "",
    featured: false
  },
  {
    id: "com.xufagroup.ai_travel_planner",
    name: "AI Travel Planner",
    tagline: "Plan your next adventure with AI.",
    category: "Application",
    platforms: ["android", "ios"],
    logo: "https://play-lh.googleusercontent.com/Ytp7s7mbPxAwA2WseQQ9wyHyQk9QAktKocWzxkhP8oUGQAM_mCpxfJ9r5ikEFw8nVgtUtm54FvdoYska2hMq0g=w240-h480-rw",
    description:
      "Our application revolutionizes travel planning and exploration with the power of artificial intelligence (AI). Forget generic travel guides - TravelGen learns your preferences and curates personalized recommendations for destinations, attractions, restaurants, and hidden gems worldwide. Our intelligent algorithms will analyze millions of data points, including user reviews, social media trends, and local insights, to craft a unique itinerary tailored to your interests.",
    youtube: "",
    screenshots: [
      'https://play-lh.googleusercontent.com/ekQz_atDio_W4sl5HFQ5jcbIBc3THoQZsJf_S-oc4V0o65_P-3H8ALCrdsAG_sKRFVvkNqJw0Aud9pp_ZsYp=w2560-h1440-rw',
      'https://play-lh.googleusercontent.com/XHWuJBbFJb9Pkqvn3Tx2_4ohrNoGHnNVk21QoHCQvLVbk_mK1Y7flxl3Z64Iyiq-p0ZYuRws22jkc7UsA9PVMcw=w2560-h1440-rw',
      'https://play-lh.googleusercontent.com/yFw05QKCCSDIvrIE7APgh2KYBiwGBIoEMB9aovgiGSAhec1Lhz4GF_h2HRVEvfoi4qMIm34P4wWY1RMYBk_t=w2560-h1440-rw',
      'https://play-lh.googleusercontent.com/GVh7NA0ZkpAy1Mjgdseq4ZSomt0jNkb2NGwzCoMjHgrwSYydlVaZ2Klgln7Zk3OvEENXW4r7lVAArRsxL-mtLQ=w2560-h1440-rw',
      'https://play-lh.googleusercontent.com/UreyHmrZr89IVtdl56sXvY0F_VJr7xptewf5nfCHqcuHwDf-uVWQ9ZO85S293lEB3QpaEi_rI-lNKusBT-sIZA=w2560-h1440-rw',
      'https://play-lh.googleusercontent.com/fbWErm59xzn6rEcdiudXbrY1oEQ4_9n9hpk1XBrNBkTxxleCs1wMgHYwdxsAEDzhQ7YMgftJ1YwyIUb6p0_ii7Q=w2560-h1440-rw'
    ],
    googlePlay: "https://play.google.com/store/apps/details?id=com.xufagroup.ai_travel_planner",
    appStore: "",
    featured: false
  }
];

// Expose the catalog to the pages (works without any build step).
window.APPS = APPS;
