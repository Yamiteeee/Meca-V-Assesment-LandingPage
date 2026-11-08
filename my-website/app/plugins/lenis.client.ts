import Lenis from "lenis";

export default defineNuxtPlugin(() => {
  const lenis = new Lenis({
    autoRaf: true,
    smoothWheel: true,
    lerp: 0.1,
  });

  return {
    provide: {
      lenis,
    },
  };
});
