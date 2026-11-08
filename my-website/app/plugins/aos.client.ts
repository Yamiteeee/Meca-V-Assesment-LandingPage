import AOS from "aos";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.hook("app:mounted", () => {
    AOS.init({
      duration: 800,
      easing: "ease-out",
      once: true,
      offset: 80,
    });
  });

  nuxtApp.hook("page:finish", () => {
    AOS.refreshHard();
  });
});
