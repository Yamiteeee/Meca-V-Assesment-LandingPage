<script setup lang="ts">
const galleryItems = [
  {
    number: "01",
    category: "THE PRODUCT",
    eyebrow: "THOUGHTFULLY DESIGNED",
    title: "Made with care.",
    highlight: "Made for nature.",
    description:
      "Discover a portable picnic table set designed with natural-inspired materials, thoughtful craftsmanship, and lasting enjoyment in mind. A beautiful way to bring comfort outdoors while embracing a more mindful lifestyle.",
    detail: "NATURAL MATERIALS · MINDFUL DESIGN",
    image: "/images/gallery-1.jpg",
    alt: "Picnic table set highlighting its materials and eco-conscious design",
    imageLabel: "PRODUCT DETAILS",
  },
  {
    number: "02",
    category: "THE CONVENIENCE",
    eyebrow: "PACK LIGHT · GO FAR",
    title: "Pack it up.",
    highlight: "Take it anywhere.",
    description:
      "Great adventures should be easy to prepare for. Our portable picnic table set is designed to be compact and convenient to carry, making it simple for the whole family to pack up and head out for the day.",
    detail: "COMPACT · PORTABLE · CONVENIENT",
    image: "/images/gallery-2.jpg",
    alt: "Family packing their portable picnic table set before leaving home",
    imageLabel: "READY FOR ADVENTURE",
  },
  {
    number: "03",
    category: "RIZAL PARK · MANILA",
    eyebrow: "A DAY IN THE CITY",
    title: "Find your spot.",
    highlight: "Make it special.",
    description:
      "Even in the heart of a busy city, there is always room for a little peace. Enjoy an afternoon at Rizal Park with good food, your favorite people, and a picnic setup that makes gathering feel effortless.",
    detail: "CITY PICNICS · FAMILY MOMENTS",
    image: "/images/gallery-3.jpg",
    alt: "Family using their portable picnic table set at Rizal Park in Manila",
    imageLabel: "RIZAL PARK",
  },
  {
    number: "04",
    category: "BORACAY · AKLAN",
    eyebrow: "SUNSHINE & SEA BREEZE",
    title: "Chase the sun.",
    highlight: "Share the moment.",
    description:
      "Picture warm sand, beautiful ocean views, and a relaxing picnic by the beach. Bring your favorite snacks, gather the family, and enjoy the simple pleasures of a sunny day in Boracay.",
    detail: "BEACH DAYS · BEAUTIFUL MEMORIES",
    image: "/images/gallery-4.jpg",
    alt: "Family enjoying their portable picnic table set on Boracay beach",
    imageLabel: "BORACAY",
  },
  {
    number: "05",
    category: "BAGUIO · BENGUET",
    eyebrow: "COOL AIR · WARM MEMORIES",
    title: "Escape the ordinary.",
    highlight: "Enjoy the little things.",
    description:
      "From refreshing mountain air to peaceful moments surrounded by nature, Baguio is made for slowing down. Set up a cozy family picnic and make every shared meal a memory worth keeping.",
    detail: "MOUNTAIN ESCAPES · COZY GATHERINGS",
    image: "/images/gallery-5.jpg",
    alt: "Family using their portable picnic table set in the scenic surroundings of Baguio",
    imageLabel: "BAGUIO",
  },
];
</script>

<template>
  <section id="gallery" class="gallery-section">
    <div class="gallery-container">
      <!-- SECTION INTRODUCTION -->
      <div class="section-intro" data-aos="fade-up">
        <div class="section-label">
          <span class="label-line"></span>
          <span>This is the Gallery section</span>
          <span class="label-line"></span>
        </div>

        <span class="element-label">This is an H2</span>

        <h2>
          One little table.
          <em>Endless possibilities.</em>
        </h2>

        <span class="element-label description-label">
          This is a Paragraph
        </span>

        <p>
          Thoughtfully designed for the moments that matter. Discover how our
          portable picnic table set makes every journey a little more memorable.
        </p>

        <div class="intro-divider">
          <span></span>
          <span>EXPLORE THE COLLECTION</span>
          <span></span>
        </div>
      </div>

      <!-- FIVE GALLERY ROWS -->
      <div class="gallery-list">
        <article
          v-for="(item, index) in galleryItems"
          :key="item.number"
          class="gallery-row"
          :class="{ 'gallery-row-reverse': index % 2 !== 0 }"
        >
          <!-- IMAGE -->
          <div
            class="gallery-image"
            :data-aos="index % 2 === 0 ? 'fade-right' : 'fade-left'"
          >
            <img
              :src="item.image"
              :alt="item.alt"
              loading="lazy"
              decoding="async"
            />

            <div class="image-overlay"></div>

            <div class="image-top">
              <span class="image-type-label"> This is an Image </span>

              <span class="image-counter"> {{ item.number }} / 05 </span>
            </div>

            <div class="image-bottom">
              <span class="image-location">
                <span class="location-dot"></span>
                {{ item.imageLabel }}
              </span>

              <span class="image-arrow" aria-hidden="true"> ↗ </span>
            </div>
          </div>

          <!-- TEXT CONTENT -->
          <div
            class="gallery-text"
            :data-aos="index % 2 === 0 ? 'fade-left' : 'fade-right'"
          >
            <div class="text-content">
              <div class="text-top">
                <span class="item-index">
                  {{ item.number }}
                </span>

                <span class="item-category">
                  {{ item.category }}
                </span>
              </div>

              <div class="text-main">
                <span class="item-eyebrow">
                  <span class="eyebrow-dot"></span>
                  {{ item.eyebrow }}
                </span>

                <span class="element-label"> This is an H3 </span>

                <h3>
                  {{ item.title }}
                  <em>{{ item.highlight }}</em>
                </h3>

                <span class="element-label paragraph-label">
                  This is a Paragraph
                </span>

                <p>
                  {{ item.description }}
                </p>
              </div>

              <div class="text-bottom">
                <span class="decorative-line"></span>
                <span class="item-footer">
                  {{ item.detail }}
                </span>
              </div>
            </div>
          </div>
        </article>
      </div>

      <!-- GALLERY CLOSING -->
      <div class="gallery-closing" data-aos="fade-up">
        <span class="closing-eyebrow">
          GOOD FOOD · FRESH AIR · GREAT COMPANY
        </span>

        <span class="element-label closing-element-label"> This is an H3 </span>

        <h3>
          Your next favorite memory
          <em>starts outdoors.</em>
        </h3>

        <p>
          Wherever life takes you, bring a little comfort, a little joy, and the
          people who matter most.
        </p>

        <span class="element-label closing-button-label">
          This is a Button
        </span>

        <a href="#home" class="gallery-button">
          Back to Top
          <span aria-hidden="true">↗</span>
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* =====================================
   GALLERY SECTION
===================================== */

.gallery-section {
  width: 100%;
  padding: clamp(75px, 8vw, 130px) 5% 100px;
  background: #f8f6ef;
  overflow: hidden;
}

.gallery-container {
  width: 100%;
  max-width: 1600px;
  margin: 0 auto;
}

/* =====================================
   SECTION INTRODUCTION
===================================== */

.section-intro {
  max-width: 800px;
  margin: 0 auto clamp(55px, 7vw, 100px);
  text-align: center;
}

.section-label {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 14px;

  color: #b17b49;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 1.8px;
  line-height: 1.5;
  text-transform: uppercase;
}

.label-line {
  width: 28px;
  height: 1px;
  flex-shrink: 0;
  background: #b17b49;
}

.element-label {
  display: block;
  margin-top: 20px;

  color: #a5a598;
  font-size: 9px;
  font-weight: 500;
  letter-spacing: 0.5px;
}

.section-intro h2 {
  margin: 12px 0 0;

  color: #1d4635;
  font-family: Georgia, serif;
  font-size: clamp(40px, 5vw, 76px);
  font-weight: 400;
  line-height: 1.12;
  letter-spacing: -2.5px;
}

.section-intro h2 em {
  display: block;
  color: #b17b49;
  font-weight: 400;
}

.description-label {
  margin-top: 26px;
}

.section-intro p {
  max-width: 550px;
  margin: 12px auto 0;

  color: #737a70;
  font-size: 14px;
  line-height: 1.9;
}

.intro-divider {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;

  margin-top: 45px;

  color: #a08e78;
  font-size: 9px;
  font-weight: 700;
  letter-spacing: 2px;
}

.intro-divider span:first-child,
.intro-divider span:last-child {
  width: 45px;
  height: 1px;
  background: #d8cbbb;
}

/* =====================================
   GALLERY LIST
===================================== */

.gallery-list {
  display: flex;
  flex-direction: column;
  gap: clamp(25px, 4vw, 55px);
}

/* =====================================
   TWO-COLUMN GALLERY ROW
===================================== */

.gallery-row {
  display: grid;
  grid-template-columns:
    minmax(0, 1fr)
    minmax(0, 1fr);

  gap: clamp(16px, 2vw, 32px);

  /* Prevent image cards from stretching */
  align-items: center;

  width: 100%;
  min-height: 0;
}

/* Alternating layout */
.gallery-row-reverse .gallery-image {
  order: 2;
}

.gallery-row-reverse .gallery-text {
  order: 1;
}

/* =====================================
   IMAGE CARD - NO CROPPING OR BORDERS
===================================== */

.gallery-image {
  position: relative;

  display: block;

  align-self: center;

  width: 100%;
  min-width: 0;
  min-height: 0;
  height: auto;

  overflow: hidden;
  isolation: isolate;

  border-radius: 22px;
  background: transparent;
}

/*
  Images maintain their original aspect ratio.
  No fixed height.
  No cropping.
  No empty gray areas.
*/
.gallery-image img {
  position: relative;
  inset: auto;

  display: block;

  width: 100%;
  height: auto;

  object-fit: contain;
  object-position: center;

  transform: none;
}

/* No zoom so product information stays visible */
.gallery-image:hover img {
  transform: none;
}

/* Subtle overlay for image labels */
.image-overlay {
  position: absolute;
  inset: 0;
  z-index: 1;

  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.14) 0%,
    transparent 25%,
    transparent 65%,
    rgba(0, 0, 0, 0.3) 100%
  );

  pointer-events: none;
}

/* =====================================
   IMAGE TOP LABELS
===================================== */

.image-top {
  position: absolute;
  top: 24px;
  left: 24px;
  right: 24px;
  z-index: 2;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
}

.image-type-label,
.image-counter {
  display: inline-flex;
  align-items: center;

  padding: 9px 13px;

  background: rgba(248, 246, 239, 0.93);
  color: #1d4635;

  border-radius: 6px;

  font-size: 9px;
  font-weight: 700;
  letter-spacing: 1px;
}

.image-counter {
  font-variant-numeric: tabular-nums;
}

/* =====================================
   IMAGE BOTTOM LABELS
===================================== */

.image-bottom {
  position: absolute;
  bottom: 24px;
  left: 24px;
  right: 24px;
  z-index: 2;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 15px;
}

.image-location {
  display: inline-flex;
  align-items: center;
  gap: 9px;

  color: #fff;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 1.5px;
}

.location-dot {
  width: 7px;
  height: 7px;
  flex-shrink: 0;

  border-radius: 50%;
  background: #d9ae7d;
}

.image-arrow {
  display: flex;
  align-items: center;
  justify-content: center;

  width: 38px;
  height: 38px;

  border: 1px solid rgba(255, 255, 255, 0.65);
  border-radius: 50%;

  color: #fff;
  font-size: 19px;

  transition:
    background 0.3s ease,
    color 0.3s ease;
}

.gallery-image:hover .image-arrow {
  background: #f8f6ef;
  color: #1d4635;
}

/* =====================================
   TEXT CARD
===================================== */

.gallery-text {
  display: flex;
  align-items: stretch;

  min-width: 0;
  min-height: 0;

  padding: clamp(30px, 4vw, 65px);

  background: #efede5;
  border: 1px solid #e8e3d8;
  border-radius: 22px;

  transition:
    background 0.3s ease,
    border-color 0.3s ease;
}

.gallery-row:nth-child(even) .gallery-text {
  background: #eaece4;
  border-color: #dfe4d9;
}

.gallery-text:hover {
  background: #e9e7dc;
  border-color: #d7cbbb;
}

.text-content {
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 100%;
  max-width: 510px;
  margin: 0 auto;
}

/* =====================================
   TEXT CARD HEADER
===================================== */

.text-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 15px;
}

.item-index {
  color: #b17b49;
  font-family: Georgia, serif;
  font-size: 35px;
  line-height: 1;
}

.item-category {
  color: #8b9185;
  font-size: 9px;
  font-weight: 700;
  letter-spacing: 1.5px;
  text-align: right;
}

/* =====================================
   MAIN TEXT
===================================== */

.text-main {
  padding: 35px 0;
}

.item-eyebrow {
  display: inline-flex;
  align-items: center;
  gap: 10px;

  color: #a8794d;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 1.5px;
}

.eyebrow-dot {
  width: 6px;
  height: 6px;
  flex-shrink: 0;

  background: #b17b49;
  border-radius: 50%;
}

.text-main .element-label {
  margin-top: 20px;
}

.text-content h3 {
  margin: 12px 0 0;

  color: #1d4635;
  font-family: Georgia, serif;
  font-size: clamp(32px, 3.2vw, 52px);
  font-weight: 400;
  line-height: 1.17;
  letter-spacing: -1.5px;
}

.text-content h3 em {
  display: block;
  margin-top: 5px;

  color: #b17b49;
  font-weight: 400;
}

.paragraph-label {
  margin-top: 25px !important;
}

.text-content p {
  max-width: 450px;
  margin: 10px 0 0;

  color: #687166;
  font-size: 14px;
  line-height: 1.9;
}

/* =====================================
   TEXT CARD FOOTER
===================================== */

.text-bottom {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 15px;
}

.decorative-line {
  display: block;
  width: 45px;
  height: 1px;
  background: #b17b49;
}

.item-footer {
  color: #8c8e80;
  font-size: 9px;
  font-weight: 700;
  letter-spacing: 1.4px;
  line-height: 1.5;
}

/* =====================================
   GALLERY CLOSING
===================================== */

.gallery-closing {
  max-width: 800px;
  margin: 0 auto;

  padding: clamp(90px, 10vw, 150px) 20px 20px;

  text-align: center;
}

.closing-eyebrow {
  color: #b17b49;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 2px;
}

.closing-element-label {
  margin-top: 25px;
}

.gallery-closing h3 {
  margin: 12px auto 0;

  color: #1d4635;
  font-family: Georgia, serif;
  font-size: clamp(38px, 4.5vw, 65px);
  font-weight: 400;
  line-height: 1.15;
  letter-spacing: -2px;
}

.gallery-closing h3 em {
  display: block;
  color: #b17b49;
  font-weight: 400;
}

.gallery-closing p {
  max-width: 460px;
  margin: 22px auto 0;

  color: #737a70;
  font-size: 14px;
  line-height: 1.8;
}

.closing-button-label {
  margin-top: 32px;
}

.gallery-button {
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  gap: 35px;

  min-height: 52px;
  margin-top: 12px;
  padding: 15px 25px;

  background: #1d4635;
  color: #fff;

  border-radius: 7px;

  font-size: 12px;
  font-weight: 700;
  text-decoration: none;

  transition:
    background 0.3s ease,
    transform 0.3s ease;
}

.gallery-button:hover {
  background: #b17b49;
  transform: translateY(-3px);
}

.gallery-button span {
  font-size: 18px;
}

/* =====================================
   LARGE DESKTOP
===================================== */

@media (min-width: 1600px) {
  .gallery-text {
    padding: 70px;
  }

  .text-content h3 {
    font-size: 54px;
  }

  .text-content p {
    font-size: 15px;
  }
}

/* =====================================
   MEDIUM DESKTOP
===================================== */

@media (min-width: 1101px) and (max-width: 1400px) {
  .gallery-text {
    padding: 35px;
  }

  .text-main {
    padding: 25px 0;
  }

  .text-content h3 {
    font-size: clamp(32px, 3.2vw, 44px);
  }

  .text-content p {
    font-size: 13px;
    line-height: 1.8;
  }
}

/* =====================================
   SMALL DESKTOP
===================================== */

@media (min-width: 901px) and (max-width: 1100px) {
  .gallery-row {
    gap: 16px;
  }

  .gallery-text {
    padding: 28px;
  }

  .text-main {
    padding: 20px 0;
  }

  .text-content h3 {
    font-size: clamp(29px, 3.1vw, 38px);
  }

  .text-content p {
    font-size: 12px;
    line-height: 1.75;
  }

  .item-index {
    font-size: 30px;
  }

  .item-footer {
    font-size: 8px;
  }
}

/* =====================================
   TABLETS & PORTRAIT MONITORS
===================================== */

@media (max-width: 900px), (min-width: 901px) and (orientation: portrait) {
  .gallery-section {
    padding: 85px 5% 75px;
  }

  .section-intro {
    margin-bottom: 55px;
  }

  .gallery-list {
    gap: 30px;
  }

  .gallery-row {
    grid-template-columns: 1fr;
    min-height: 0;
    gap: 0;
    align-items: stretch;
  }

  /* Image first on smaller screens */
  .gallery-row .gallery-image {
    order: 1;
  }

  .gallery-row .gallery-text {
    order: 2;
  }

  .gallery-image {
    align-self: auto;

    min-height: 0;
    height: auto;
    aspect-ratio: auto;

    border-radius: 20px 20px 0 0;
  }

  .gallery-image img {
    position: relative;
    width: 100%;
    height: auto;
    object-fit: contain;
  }

  .gallery-text {
    min-height: 0;
    padding: 45px;

    border-radius: 0 0 20px 20px;
  }

  .text-content {
    max-width: 100%;
  }

  .text-main {
    padding: 35px 0;
  }

  .text-content h3 {
    font-size: clamp(35px, 5vw, 50px);
  }

  .text-content p {
    max-width: 650px;
    font-size: 14px;
  }

  .gallery-closing {
    padding-top: 90px;
  }
}

/* =====================================
   MOBILE
===================================== */

@media (max-width: 600px) {
  .gallery-section {
    padding: 70px 5% 65px;
  }

  .section-intro {
    margin-bottom: 42px;
  }

  .section-label {
    gap: 9px;
    font-size: 8px;
    letter-spacing: 1px;
  }

  .label-line {
    width: 18px;
  }

  .section-intro h2 {
    margin-top: 12px;
    font-size: clamp(34px, 9vw, 46px);
    letter-spacing: -1.5px;
  }

  .section-intro p {
    font-size: 13px;
    line-height: 1.8;
  }

  .intro-divider {
    gap: 12px;
    margin-top: 35px;
    font-size: 8px;
    letter-spacing: 1px;
  }

  .intro-divider span:first-child,
  .intro-divider span:last-child {
    width: 25px;
  }

  .gallery-list {
    gap: 24px;
  }

  .gallery-image {
    aspect-ratio: auto;
    border-radius: 16px 16px 0 0;
  }

  .gallery-image img {
    width: 100%;
    height: auto;
  }

  .image-top {
    top: 15px;
    left: 15px;
    right: 15px;
  }

  .image-bottom {
    bottom: 15px;
    left: 15px;
    right: 15px;
  }

  .image-type-label,
  .image-counter {
    padding: 8px 10px;
    font-size: 8px;
  }

  .image-location {
    font-size: 9px;
    letter-spacing: 1px;
  }

  .image-arrow {
    width: 32px;
    height: 32px;
    font-size: 16px;
  }

  .gallery-text {
    padding: 30px 25px 35px;
    border-radius: 0 0 16px 16px;
  }

  .item-index {
    font-size: 30px;
  }

  .item-category {
    font-size: 8px;
    letter-spacing: 1px;
  }

  .text-main {
    padding: 28px 0;
  }

  .item-eyebrow {
    font-size: 9px;
    letter-spacing: 1px;
  }

  .text-main .element-label {
    margin-top: 18px;
  }

  .text-content h3 {
    margin-top: 10px;
    font-size: clamp(30px, 8vw, 42px);
    letter-spacing: -1px;
  }

  .paragraph-label {
    margin-top: 20px !important;
  }

  .text-content p {
    font-size: 13px;
    line-height: 1.8;
  }

  .item-footer {
    font-size: 8px;
    letter-spacing: 1px;
  }

  .gallery-closing {
    padding: 80px 0 10px;
  }

  .closing-eyebrow {
    font-size: 9px;
    letter-spacing: 1.2px;
  }

  .gallery-closing h3 {
    font-size: clamp(33px, 8.5vw, 46px);
  }

  .gallery-closing p {
    font-size: 13px;
  }
}

/* =====================================
   SMALL MOBILE
===================================== */

@media (max-width: 380px) {
  .gallery-text {
    padding: 26px 20px 30px;
  }

  .text-content h3 {
    font-size: 29px;
  }

  .image-type-label,
  .image-counter {
    font-size: 7px;
    padding: 7px 8px;
  }

  .item-category {
    font-size: 7px;
  }
}

/* =====================================
   REDUCED MOTION
===================================== */

@media (prefers-reduced-motion: reduce) {
  .image-arrow,
  .gallery-text,
  .gallery-button {
    transition: none;
  }
}
</style>
