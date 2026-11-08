<template>
  <section id="home" class="hero-section">
    <div class="hero-wrapper">
      <!-- MAIN HERO CONTENT -->
      <div class="hero-container">
        <!-- LEFT CONTENT -->
        <div class="hero-content">
          <div class="hero-copy" data-aos="fade-up">
            <h2 class="section-label">
              <span class="label-line"></span>
              This is the Hero section
            </h2>

            <div class="hero-heading">
              <span class="eyebrow">
                SLOW DAYS · GOOD FOOD · GREAT COMPANY
              </span>

              <span class="element-label"> This is an H1 </span>

              <h1>
                Make room for
                <em>little moments.</em>
              </h1>
            </div>

            <div class="hero-description-group">
              <span class="element-label"> This is a Paragraph </span>

              <p class="hero-description">
                Bring people together with thoughtfully designed picnic
                essentials. Pack your favorites, find your spot, and make every
                outdoor moment special.
              </p>
            </div>

            <div class="hero-actions">
              <span class="element-label"> This is a Button </span>

              <a href="#gallery" class="hero-button">
                Explore Our Collection
                <span aria-hidden="true">↗</span>
              </a>
            </div>

            <div class="hero-note">
              <span class="note-line"></span>
              <span>MADE FOR MOMENTS OUTDOORS</span>
            </div>
          </div>
        </div>

        <!-- RIGHT IMAGE -->
        <div class="hero-visual">
          <img
            src="/images/hero.jpg"
            alt="Family enjoying their portable wooden picnic table set"
            class="hero-image"
            fetchpriority="high"
          />
        </div>
      </div>

      <!-- BOTTOM INFORMATION -->
      <div class="hero-bottom">
        <span>MADE FOR SLOWER DAYS</span>
        <span>FOOD · NATURE · TOGETHERNESS</span>
        <span>01 — 05</span>
      </div>

      <!-- ANIMATED SCROLL INDICATOR -->
      <a
        href="#testimonials"
        class="scroll-indicator"
        aria-label="Scroll down to testimonials"
      >
        <span class="scroll-mouse" aria-hidden="true">
          <span class="scroll-wheel"></span>
        </span>

        <span class="scroll-label">SCROLL TO EXPLORE</span>
      </a>
    </div>
  </section>
</template>

<style scoped>
/* =====================================
   FULL SCREEN HERO
===================================== */

.hero-section {
  --header-height: 90px;
  --hero-top-padding: clamp(24px, 3vw, 48px);
  --hero-bottom-padding: 20px;

  width: 100%;
  min-height: calc(100vh - var(--header-height));
  min-height: calc(100svh - var(--header-height));

  padding: var(--hero-top-padding) 5% var(--hero-bottom-padding);

  background: #202b27;

  display: flex;
  flex-direction: column;
}

.hero-wrapper {
  display: flex;
  flex-direction: column;

  width: 100%;
  max-width: 1600px;

  flex: 1;
  margin: 0 auto;
}

/* =====================================
   MAIN HERO LAYOUT
===================================== */

.hero-container {
  display: flex;
  align-items: center;
  justify-content: space-between;

  gap: clamp(30px, 4vw, 70px);

  width: 100%;
  flex: 1;
  min-height: 0;

  background: transparent;
  border: none;
  border-radius: 0;
  box-shadow: none;
}

/* =====================================
   LEFT CONTENT
===================================== */

.hero-content {
  display: flex;
  align-items: center;

  flex: 0 0 40%;
  min-width: 0;

  padding: 0;
  background: transparent;
}

.hero-copy {
  width: 100%;
  max-width: 520px;
}

/* Section label */
.section-label {
  display: flex;
  align-items: center;
  gap: 10px;

  margin: 0 0 clamp(24px, 3vw, 50px);

  color: #d9ae7d;
  font-family: inherit;
  font-size: 9px;
  font-weight: 700;
  letter-spacing: 1.3px;
  line-height: 1.5;
  text-transform: uppercase;
}

.label-line {
  width: 24px;
  height: 1px;
  flex-shrink: 0;
  background: #d9ae7d;
}

/* Eyebrow */
.eyebrow {
  display: block;
  margin-bottom: 18px;

  color: #e7c18f;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 1.5px;
  line-height: 1.7;
}

/* Assessment labels */
.element-label {
  display: block;
  margin-bottom: 9px;

  color: rgba(248, 246, 239, 0.55);
  font-size: 9px;
  letter-spacing: 0.5px;
}

/* Heading */
.hero-copy h1 {
  margin: 0;

  color: #f8f6ef;
  font-family: Georgia, serif;
  font-size: clamp(38px, 3.7vw, 66px);
  font-weight: 400;
  line-height: 1.13;
  letter-spacing: -2px;
}

.hero-copy h1 em {
  display: block;
  margin-top: 5px;

  color: #d9ae7d;
  font-weight: 400;
}

/* Description */
.hero-description-group {
  margin-top: clamp(20px, 2.5vw, 32px);
}

.hero-description {
  max-width: 410px;
  margin: 0;

  color: rgba(248, 246, 239, 0.85);
  font-size: 14px;
  line-height: 1.85;
}

/* =====================================
   CTA
===================================== */

.hero-actions {
  margin-top: clamp(22px, 2.5vw, 32px);
}

.hero-button {
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  gap: 28px;

  min-height: 52px;
  padding: 14px 22px;

  background: #f8f6ef;
  color: #1d4635;

  font-size: 12px;
  font-weight: 700;
  text-decoration: none;
  border-radius: 5px;

  transition:
    background 0.3s ease,
    transform 0.3s ease;
}

.hero-button:hover {
  background: #d9ae7d;
  transform: translateY(-3px);
}

.hero-button span {
  font-size: 17px;
}

/* =====================================
   NOTE
===================================== */

.hero-note {
  display: flex;
  align-items: center;
  gap: 12px;

  margin-top: clamp(25px, 3vw, 50px);

  color: rgba(248, 246, 239, 0.65);
  font-size: 9px;
  font-weight: 600;
  letter-spacing: 1.2px;
}

.note-line {
  width: 28px;
  height: 1px;
  flex-shrink: 0;
  background: #d9ae7d;
}

/* =====================================
   RIGHT IMAGE
===================================== */

.hero-visual {
  flex: 1 1 60%;
  min-width: 0;

  overflow: hidden;
  border-radius: 26px;

  background: #304c40;

  box-shadow: 0 18px 45px rgba(0, 0, 0, 0.2);
}

/*
  Image retains its natural aspect ratio.
  No forced height and no cropping.
*/
.hero-image {
  display: block;

  width: 100%;
  height: auto;

  object-fit: contain;
  object-position: center;
}

/* =====================================
   BOTTOM INFORMATION
===================================== */

.hero-bottom {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;

  padding: 22px 5px 15px;

  color: rgba(248, 246, 239, 0.7);
  font-size: 9px;
  font-weight: 600;
  letter-spacing: 1.3px;
}

/* =====================================
   ANIMATED MOUSE SCROLL INDICATOR
===================================== */

.scroll-indicator {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;

  align-self: center;

  margin-top: 10px;
  padding: 10px 15px 4px;

  color: rgba(248, 246, 239, 0.7);
  text-decoration: none;

  transition: color 0.3s ease;
}

.scroll-indicator:hover {
  color: #d9ae7d;
}

.scroll-indicator:focus-visible {
  outline: 2px solid #d9ae7d;
  outline-offset: 5px;
  border-radius: 6px;
}

/* Mouse outline */
.scroll-mouse {
  position: relative;
  display: block;

  width: 23px;
  height: 36px;

  border: 1.5px solid currentColor;
  border-radius: 15px;
}

/* Animated mouse wheel */
.scroll-wheel {
  position: absolute;
  top: 7px;
  left: 50%;

  width: 3px;
  height: 7px;

  background: currentColor;
  border-radius: 3px;

  transform: translateX(-50%);

  animation: mouse-scroll 1.8s ease-in-out infinite;
}

/* Scroll label */
.scroll-label {
  font-size: 8px;
  font-weight: 600;
  letter-spacing: 2px;
  white-space: nowrap;
}

@keyframes mouse-scroll {
  0% {
    transform: translate(-50%, 0);
    opacity: 0;
  }

  25% {
    opacity: 1;
  }

  75% {
    opacity: 1;
  }

  100% {
    transform: translate(-50%, 12px);
    opacity: 0;
  }
}

/* =====================================
   LARGE DESKTOP
===================================== */

@media (min-width: 1600px) {
  .hero-content {
    flex-basis: 40%;
  }

  .hero-copy h1 {
    font-size: clamp(54px, 3.7vw, 70px);
  }

  .hero-description {
    font-size: 15px;
  }
}

/* =====================================
   MEDIUM DESKTOP
===================================== */

@media (min-width: 1101px) and (max-width: 1400px) {
  .hero-container {
    gap: 35px;
  }

  .hero-content {
    flex-basis: 42%;
  }

  .hero-copy h1 {
    font-size: clamp(38px, 3.8vw, 54px);
  }

  .section-label {
    margin-bottom: 28px;
  }

  .hero-note {
    margin-top: 30px;
  }
}

/* =====================================
   SMALL DESKTOP
===================================== */

@media (min-width: 901px) and (max-width: 1100px) {
  .hero-container {
    gap: 25px;
  }

  .hero-content {
    flex-basis: 45%;
  }

  .hero-copy h1 {
    font-size: clamp(34px, 4vw, 44px);
  }

  .hero-description {
    font-size: 13px;
  }

  .section-label {
    margin-bottom: 24px;
  }

  .hero-note {
    margin-top: 25px;
  }

  .hero-visual {
    border-radius: 22px;
  }
}

/* =====================================
   SHORT DESKTOP SCREENS
===================================== */

@media (min-width: 901px) and (max-height: 750px) {
  .hero-section {
    --hero-top-padding: 24px;
    --hero-bottom-padding: 15px;
  }

  .hero-container {
    padding: 10px 0;
  }

  .section-label {
    margin-bottom: 24px;
  }

  .hero-description-group {
    margin-top: 20px;
  }

  .hero-actions {
    margin-top: 20px;
  }

  .hero-note {
    margin-top: 24px;
  }

  .hero-bottom {
    padding: 15px 5px 10px;
  }

  .scroll-indicator {
    gap: 7px;
    margin-top: 0;
  }
}

/* =====================================
   PORTRAIT DESKTOP & TABLETS
===================================== */

@media (max-width: 900px), (min-width: 901px) and (orientation: portrait) {
  .hero-section {
    --header-height: 76px;
    --hero-top-padding: 30px;
    --hero-bottom-padding: 20px;
  }

  .hero-container {
    /* UPDATED: Text first, image below */
    flex-direction: column;
    align-items: stretch;
    justify-content: center;
    gap: 40px;
  }

  .hero-content {
    flex: 0 0 auto;
    width: 100%;
    padding: 0;
  }

  .hero-copy {
    max-width: 680px;
  }

  .hero-copy h1 {
    font-size: clamp(44px, 6vw, 65px);
  }

  .hero-visual {
    flex: 0 0 auto;
    width: 100%;
    border-radius: 24px;
  }

  .hero-image {
    width: 100%;
    height: auto;
  }

  .hero-bottom {
    padding: 24px 4px 15px;
  }

  .scroll-indicator {
    margin-top: 15px;
  }
}

/* =====================================
   MOBILE
===================================== */

@media (max-width: 600px) {
  .hero-section {
    --header-height: 72px;
    --hero-top-padding: 20px;
    --hero-bottom-padding: 20px;
  }

  .hero-container {
    flex-direction: column;
    gap: 32px;
  }

  .hero-content {
    padding: 0;
  }

  .hero-visual {
    border-radius: 18px;
  }

  .section-label {
    margin-bottom: 28px;
    font-size: 8px;
  }

  .eyebrow {
    font-size: 9px;
    letter-spacing: 1px;
  }

  .element-label {
    font-size: 8px;
  }

  .hero-copy h1 {
    font-size: clamp(36px, 10vw, 52px);
    letter-spacing: -1.5px;
  }

  .hero-description-group {
    margin-top: 24px;
  }

  .hero-description {
    font-size: 13px;
    line-height: 1.8;
  }

  .hero-actions {
    margin-top: 24px;
  }

  .hero-button {
    min-height: 50px;
    padding: 14px 18px;
    gap: 20px;
  }

  .hero-note {
    margin-top: 32px;
    font-size: 8px;
  }

  .hero-bottom {
    padding: 24px 0 12px;
    font-size: 8px;
    letter-spacing: 0.7px;
  }

  .hero-bottom span:nth-child(2) {
    display: none;
  }

  .scroll-indicator {
    margin-top: 12px;
    padding-bottom: 0;
  }

  .scroll-mouse {
    width: 21px;
    height: 33px;
  }

  .scroll-label {
    font-size: 7px;
    letter-spacing: 1.5px;
  }
}

/* =====================================
   SMALL MOBILE
===================================== */

@media (max-width: 380px) {
  .hero-copy h1 {
    font-size: clamp(33px, 9.5vw, 40px);
  }

  .hero-description {
    font-size: 12px;
  }

  .hero-bottom {
    font-size: 7px;
  }
}

/* =====================================
   REDUCED MOTION
===================================== */

@media (prefers-reduced-motion: reduce) {
  .hero-button,
  .scroll-indicator {
    transition: none;
  }

  .scroll-wheel {
    animation: none;
    opacity: 1;
  }
}
</style>

<style scoped>
/* =====================================
   FULL SCREEN HERO
===================================== */

.hero-section {
  --header-height: 90px;
  --hero-top-padding: clamp(24px, 3vw, 48px);
  --hero-bottom-padding: 20px;

  width: 100%;
  min-height: calc(100vh - var(--header-height));
  min-height: calc(100svh - var(--header-height));

  padding: var(--hero-top-padding) 5% var(--hero-bottom-padding);

  background: #202b27;

  display: flex;
  flex-direction: column;
}

.hero-wrapper {
  display: flex;
  flex-direction: column;

  width: 100%;
  max-width: 1600px;

  flex: 1;
  margin: 0 auto;
}

/* =====================================
   MAIN HERO LAYOUT
===================================== */

.hero-container {
  display: flex;
  align-items: center;
  justify-content: space-between;

  gap: clamp(30px, 4vw, 70px);

  width: 100%;
  flex: 1;
  min-height: 0;

  background: transparent;
  border: none;
  border-radius: 0;
  box-shadow: none;
}

/* =====================================
   LEFT CONTENT
===================================== */

.hero-content {
  display: flex;
  align-items: center;

  flex: 0 0 40%;
  min-width: 0;

  padding: 0;
  background: transparent;
}

.hero-copy {
  width: 100%;
  max-width: 520px;
}

/* Section label */
.section-label {
  display: flex;
  align-items: center;
  gap: 10px;

  margin: 0 0 clamp(24px, 3vw, 50px);

  color: #d9ae7d;
  font-family: inherit;
  font-size: 9px;
  font-weight: 700;
  letter-spacing: 1.3px;
  line-height: 1.5;
  text-transform: uppercase;
}

.label-line {
  width: 24px;
  height: 1px;
  flex-shrink: 0;
  background: #d9ae7d;
}

/* Eyebrow */
.eyebrow {
  display: block;
  margin-bottom: 18px;

  color: #e7c18f;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 1.5px;
  line-height: 1.7;
}

/* Assessment labels */
.element-label {
  display: block;
  margin-bottom: 9px;

  color: rgba(248, 246, 239, 0.55);
  font-size: 9px;
  letter-spacing: 0.5px;
}

/* Heading */
.hero-copy h1 {
  margin: 0;

  color: #f8f6ef;
  font-family: Georgia, serif;
  font-size: clamp(38px, 3.7vw, 66px);
  font-weight: 400;
  line-height: 1.13;
  letter-spacing: -2px;
}

.hero-copy h1 em {
  display: block;
  margin-top: 5px;

  color: #d9ae7d;
  font-weight: 400;
}

/* Description */
.hero-description-group {
  margin-top: clamp(20px, 2.5vw, 32px);
}

.hero-description {
  max-width: 410px;
  margin: 0;

  color: rgba(248, 246, 239, 0.85);
  font-size: 14px;
  line-height: 1.85;
}

/* =====================================
   CTA
===================================== */

.hero-actions {
  margin-top: clamp(22px, 2.5vw, 32px);
}

.hero-button {
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  gap: 28px;

  min-height: 52px;
  padding: 14px 22px;

  background: #f8f6ef;
  color: #1d4635;

  font-size: 12px;
  font-weight: 700;
  text-decoration: none;
  border-radius: 5px;

  transition:
    background 0.3s ease,
    transform 0.3s ease;
}

.hero-button:hover {
  background: #d9ae7d;
  transform: translateY(-3px);
}

.hero-button span {
  font-size: 17px;
}

/* =====================================
   NOTE
===================================== */

.hero-note {
  display: flex;
  align-items: center;
  gap: 12px;

  margin-top: clamp(25px, 3vw, 50px);

  color: rgba(248, 246, 239, 0.65);
  font-size: 9px;
  font-weight: 600;
  letter-spacing: 1.2px;
}

.note-line {
  width: 28px;
  height: 1px;
  flex-shrink: 0;
  background: #d9ae7d;
}

/* =====================================
   RIGHT IMAGE
===================================== */

.hero-visual {
  flex: 1 1 60%;
  min-width: 0;

  overflow: hidden;
  border-radius: 26px;

  background: #304c40;

  box-shadow: 0 18px 45px rgba(0, 0, 0, 0.2);
}

/*
  Image retains its natural aspect ratio.
  No forced height and no cropping.
*/
.hero-image {
  display: block;

  width: 100%;
  height: auto;

  object-fit: contain;
  object-position: center;
}

/* =====================================
   BOTTOM INFORMATION
===================================== */

.hero-bottom {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;

  padding: 22px 5px 15px;

  color: rgba(248, 246, 239, 0.7);
  font-size: 9px;
  font-weight: 600;
  letter-spacing: 1.3px;
}

/* =====================================
   ANIMATED MOUSE SCROLL INDICATOR
===================================== */

.scroll-indicator {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;

  align-self: center;

  margin-top: 10px;
  padding: 10px 15px 4px;

  color: rgba(248, 246, 239, 0.7);
  text-decoration: none;

  transition: color 0.3s ease;
}

.scroll-indicator:hover {
  color: #d9ae7d;
}

.scroll-indicator:focus-visible {
  outline: 2px solid #d9ae7d;
  outline-offset: 5px;
  border-radius: 6px;
}

/* Mouse outline */
.scroll-mouse {
  position: relative;
  display: block;

  width: 23px;
  height: 36px;

  border: 1.5px solid currentColor;
  border-radius: 15px;
}

/* Animated mouse wheel */
.scroll-wheel {
  position: absolute;
  top: 7px;
  left: 50%;

  width: 3px;
  height: 7px;

  background: currentColor;
  border-radius: 3px;

  transform: translateX(-50%);

  animation: mouse-scroll 1.8s ease-in-out infinite;
}

/* Scroll label */
.scroll-label {
  font-size: 8px;
  font-weight: 600;
  letter-spacing: 2px;
  white-space: nowrap;
}

@keyframes mouse-scroll {
  0% {
    transform: translate(-50%, 0);
    opacity: 0;
  }

  25% {
    opacity: 1;
  }

  75% {
    opacity: 1;
  }

  100% {
    transform: translate(-50%, 12px);
    opacity: 0;
  }
}

/* =====================================
   LARGE DESKTOP
===================================== */

@media (min-width: 1600px) {
  .hero-content {
    flex-basis: 40%;
  }

  .hero-copy h1 {
    font-size: clamp(54px, 3.7vw, 70px);
  }

  .hero-description {
    font-size: 15px;
  }
}

/* =====================================
   MEDIUM DESKTOP
===================================== */

@media (min-width: 1101px) and (max-width: 1400px) {
  .hero-container {
    gap: 35px;
  }

  .hero-content {
    flex-basis: 42%;
  }

  .hero-copy h1 {
    font-size: clamp(38px, 3.8vw, 54px);
  }

  .section-label {
    margin-bottom: 28px;
  }

  .hero-note {
    margin-top: 30px;
  }
}

/* =====================================
   SMALL DESKTOP
===================================== */

@media (min-width: 901px) and (max-width: 1100px) {
  .hero-container {
    gap: 25px;
  }

  .hero-content {
    flex-basis: 45%;
  }

  .hero-copy h1 {
    font-size: clamp(34px, 4vw, 44px);
  }

  .hero-description {
    font-size: 13px;
  }

  .section-label {
    margin-bottom: 24px;
  }

  .hero-note {
    margin-top: 25px;
  }

  .hero-visual {
    border-radius: 22px;
  }
}

/* =====================================
   SHORT DESKTOP SCREENS
===================================== */

@media (min-width: 901px) and (max-height: 750px) {
  .hero-section {
    --hero-top-padding: 24px;
    --hero-bottom-padding: 15px;
  }

  .hero-container {
    padding: 10px 0;
  }

  .section-label {
    margin-bottom: 24px;
  }

  .hero-description-group {
    margin-top: 20px;
  }

  .hero-actions {
    margin-top: 20px;
  }

  .hero-note {
    margin-top: 24px;
  }

  .hero-bottom {
    padding: 15px 5px 10px;
  }

  .scroll-indicator {
    gap: 7px;
    margin-top: 0;
  }
}

/* =====================================
   PORTRAIT DESKTOP & TABLETS
===================================== */

@media (max-width: 900px), (min-width: 901px) and (orientation: portrait) {
  .hero-section {
    --header-height: 76px;
    --hero-top-padding: 30px;
    --hero-bottom-padding: 20px;
  }

  .hero-container {
    /* UPDATED: Text first, image below */
    flex-direction: column;
    align-items: stretch;
    justify-content: center;
    gap: 40px;
  }

  .hero-content {
    flex: 0 0 auto;
    width: 100%;
    padding: 0;
  }

  .hero-copy {
    max-width: 680px;
  }

  .hero-copy h1 {
    font-size: clamp(44px, 6vw, 65px);
  }

  .hero-visual {
    flex: 0 0 auto;
    width: 100%;
    border-radius: 24px;
  }

  .hero-image {
    width: 100%;
    height: auto;
  }

  .hero-bottom {
    padding: 24px 4px 15px;
  }

  .scroll-indicator {
    margin-top: 15px;
  }
}

/* =====================================
   MOBILE
===================================== */

@media (max-width: 600px) {
  .hero-section {
    --header-height: 72px;
    --hero-top-padding: 20px;
    --hero-bottom-padding: 20px;
  }

  .hero-container {
    flex-direction: column;
    gap: 32px;
  }

  .hero-content {
    padding: 0;
  }

  .hero-visual {
    border-radius: 18px;
  }

  .section-label {
    margin-bottom: 28px;
    font-size: 8px;
  }

  .eyebrow {
    font-size: 9px;
    letter-spacing: 1px;
  }

  .element-label {
    font-size: 8px;
  }

  .hero-copy h1 {
    font-size: clamp(36px, 10vw, 52px);
    letter-spacing: -1.5px;
  }

  .hero-description-group {
    margin-top: 24px;
  }

  .hero-description {
    font-size: 13px;
    line-height: 1.8;
  }

  .hero-actions {
    margin-top: 24px;
  }

  .hero-button {
    min-height: 50px;
    padding: 14px 18px;
    gap: 20px;
  }

  .hero-note {
    margin-top: 32px;
    font-size: 8px;
  }

  .hero-bottom {
    padding: 24px 0 12px;
    font-size: 8px;
    letter-spacing: 0.7px;
  }

  .hero-bottom span:nth-child(2) {
    display: none;
  }

  .scroll-indicator {
    margin-top: 12px;
    padding-bottom: 0;
  }

  .scroll-mouse {
    width: 21px;
    height: 33px;
  }

  .scroll-label {
    font-size: 7px;
    letter-spacing: 1.5px;
  }
}

/* =====================================
   SMALL MOBILE
===================================== */

@media (max-width: 380px) {
  .hero-copy h1 {
    font-size: clamp(33px, 9.5vw, 40px);
  }

  .hero-description {
    font-size: 12px;
  }

  .hero-bottom {
    font-size: 7px;
  }
}

/* =====================================
   REDUCED MOTION
===================================== */

@media (prefers-reduced-motion: reduce) {
  .hero-button,
  .scroll-indicator {
    transition: none;
  }

  .scroll-wheel {
    animation: none;
    opacity: 1;
  }
}
</style>
