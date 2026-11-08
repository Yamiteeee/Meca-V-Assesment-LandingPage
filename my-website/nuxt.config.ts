export default defineNuxtConfig({
  compatibilityDate: "2026-11-09",

  devtools: { enabled: true },

  css: ["lenis/dist/lenis.css", "aos/dist/aos.css", "~/assets/css/main.css"],

  app: {
    head: {
      title: "WANDERSTORY | Made for Moments Outdoors",

      meta: [
        {
          name: "description",
          content:
            "Discover thoughtfully designed picnic essentials made for beautiful destinations, slower days, and unforgettable outdoor moments.",
        },
      ],

      link: [
        {
          rel: "icon",
          type: "image/svg+xml",
          href: "/favicon.svg",
        },
      ],
    },
  },
});
