<template>
  <section id="testimonials" class="testimonials-section">
    <div class="testimonials-container">
      <!-- SECTION HEADING -->
      <div class="section-intro" data-aos="fade-up">
        <h2 class="section-label">
          <span class="label-line"></span>
          This is the Testimonials section
        </h2>

        <span class="element-label heading-label"> This is an H3 </span>

        <h3 class="section-title">
          Little moments,
          <em>lovely memories.</em>
        </h3>

        <span class="element-label description-label">
          This is a Paragraph
        </span>

        <p class="section-description">
          The best moments are the ones we share. Here's a little inspiration
          from people who love gathering outdoors.
        </p>
      </div>

      <!-- TESTIMONIAL CARDS -->
      <div class="testimonials-grid">
        <!-- TESTIMONIAL 1 -->
        <article class="testimonial-card" data-aos="fade-up" data-aos-delay="0">
          <div class="card-top">
            <span class="quote-mark" aria-hidden="true">“</span>
            <span class="card-number">01 / 03</span>
          </div>

          <span class="element-label review-label"> This is a Paragraph </span>

          <p class="testimonial-text">
            Our weekend picnic felt so much more special with this beautiful
            table setup. It was the perfect way to slow down, enjoy good food,
            and spend quality time together.
          </p>

          <div class="card-divider"></div>

          <div class="customer-info">
            <div class="customer-avatar">
              <span class="element-label image-label"> This is an Image </span>

              <img
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=160&h=160&q=85"
                alt="Placeholder portrait of Alex Morgan"
                class="customer-photo"
                loading="lazy"
              />
            </div>

            <div class="customer-details">
              <span class="element-label name-label"> This is an H4 </span>

              <h4>Alex Morgan</h4>
              <span>OUTDOOR ENTHUSIAST</span>
            </div>

            <span class="customer-stars" aria-label="5 out of 5 stars">
              ★★★★★
            </span>
          </div>
        </article>

        <!-- TESTIMONIAL 2 -->
        <article
          class="testimonial-card"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <div class="card-top">
            <span class="quote-mark" aria-hidden="true">“</span>
            <span class="card-number">02 / 03</span>
          </div>

          <span class="element-label review-label"> This is a Paragraph </span>

          <p class="testimonial-text">
            I love how a simple picnic can bring everyone together. The setup
            made our afternoon feel cozy, welcoming, and full of little moments
            worth remembering.
          </p>

          <div class="card-divider"></div>

          <div class="customer-info">
            <div class="customer-avatar">
              <span class="element-label image-label"> This is an Image </span>

              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=160&h=160&q=85"
                alt="Placeholder portrait of Jamie Taylor"
                class="customer-photo"
                loading="lazy"
              />
            </div>

            <div class="customer-details">
              <span class="element-label name-label"> This is an H4 </span>

              <h4>Jamie Taylor</h4>
              <span>WEEKEND EXPLORER</span>
            </div>

            <span class="customer-stars" aria-label="5 out of 5 stars">
              ★★★★★
            </span>
          </div>
        </article>

        <!-- TESTIMONIAL 3 -->
        <article
          class="testimonial-card"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <div class="card-top">
            <span class="quote-mark" aria-hidden="true">“</span>
            <span class="card-number">03 / 03</span>
          </div>

          <span class="element-label review-label"> This is a Paragraph </span>

          <p class="testimonial-text">
            From the thoughtful details to the relaxed atmosphere, everything
            felt just right. It's amazing how an ordinary day outdoors can
            become such a lovely memory.
          </p>

          <div class="card-divider"></div>

          <div class="customer-info">
            <div class="customer-avatar">
              <span class="element-label image-label"> This is an Image </span>

              <img
                src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=160&h=160&q=85"
                alt="Placeholder portrait of Casey Williams"
                class="customer-photo"
                loading="lazy"
              />
            </div>

            <div class="customer-details">
              <span class="element-label name-label"> This is an H4 </span>

              <h4>Casey Williams</h4>
              <span>PICNIC LOVER</span>
            </div>

            <span class="customer-stars" aria-label="5 out of 5 stars">
              ★★★★★
            </span>
          </div>
        </article>
      </div>

      <!-- BOTTOM DECORATION -->
      <div class="testimonials-footer" data-aos="fade-up">
        <span class="footer-line"></span>
        <span>MADE FOR THE MOMENTS THAT MATTER</span>
        <span class="footer-line"></span>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* =====================================
   TESTIMONIALS SECTION
===================================== */

.testimonials-section {
  width: 100%;
  padding: 110px 7% 100px;
  background: #f3f0e8;
  overflow: hidden;
}

.testimonials-container {
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
}

/* =====================================
   SECTION INTRODUCTION
===================================== */

.section-intro {
  max-width: 720px;
  margin: 0 auto 65px;
  text-align: center;
}

.section-label {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 12px;

  margin: 0;

  color: #b17b49;
  font-family: inherit;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 2px;
  line-height: 1.5;
  text-transform: uppercase;
}

.label-line {
  width: 28px;
  height: 1px;
  flex-shrink: 0;
  background: #b17b49;
}

/* =====================================
   ASSESSMENT LABELS
===================================== */

.element-label {
  display: block;

  color: #a5a598;
  font-size: 9px;
  font-weight: 500;
  letter-spacing: 0.5px;
  line-height: 1.5;
}

.heading-label {
  margin-top: 25px;
}

.description-label {
  margin-top: 25px;
}

/* =====================================
   SECTION TITLE
===================================== */

.section-title {
  margin: 12px 0 0;

  color: #1d4635;
  font-family: Georgia, serif;
  font-size: clamp(40px, 4.6vw, 66px);
  font-weight: 400;
  line-height: 1.15;
  letter-spacing: -2px;
}

.section-title em {
  display: block;
  color: #b17b49;
  font-weight: 400;
}

.section-description {
  max-width: 530px;
  margin: 12px auto 0;

  color: #777b70;
  font-size: 14px;
  line-height: 1.9;
}

/* =====================================
   THREE COLUMN GRID
===================================== */

.testimonials-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 22px;
  align-items: stretch;
}

/* =====================================
   TESTIMONIAL CARDS
===================================== */

.testimonial-card {
  display: flex;
  flex-direction: column;

  min-width: 0;
  min-height: 385px;
  padding: clamp(25px, 2.5vw, 38px);

  background: #fdfcf8;
  border: 1px solid #e7e2d8;
  border-radius: 12px;

  transition:
    transform 0.35s ease,
    box-shadow 0.35s ease,
    border-color 0.35s ease;
}

.testimonial-card:hover {
  transform: translateY(-6px);
  border-color: #d4c6b1;
  box-shadow: 0 15px 40px rgba(29, 70, 53, 0.07);
}

/* =====================================
   CARD HEADER
===================================== */

.card-top {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
}

.quote-mark {
  color: #b17b49;
  font-family: Georgia, serif;
  font-size: 72px;
  line-height: 0.9;
}

.card-number {
  color: #a4a397;
  font-size: 10px;
  font-weight: 600;
  letter-spacing: 1px;
}

/* =====================================
   REVIEW TEXT
===================================== */

.review-label {
  margin-top: 18px;
}

.testimonial-text {
  flex: 1;
  margin: 12px 0 30px;

  color: #49584b;
  font-family: Georgia, serif;
  font-size: clamp(15px, 1.25vw, 18px);
  font-style: italic;
  line-height: 1.8;
}

.card-divider {
  width: 100%;
  height: 1px;
  flex-shrink: 0;
  background: #e9e5dc;
}

/* =====================================
   CUSTOMER INFORMATION
===================================== */

.customer-info {
  display: flex;
  align-items: flex-end;
  gap: 12px;

  padding-top: 23px;
}

.customer-avatar {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  flex-shrink: 0;
}

.image-label {
  font-size: 8px;
  white-space: nowrap;
}

.customer-photo {
  display: block;
  width: 48px;
  height: 48px;
  flex-shrink: 0;

  object-fit: cover;
  border-radius: 50%;
  background: #e8e5dc;
}

.customer-details {
  min-width: 0;
  padding-bottom: 3px;
}

.name-label {
  margin-bottom: 6px;
  font-size: 8px;
}

.customer-details h4 {
  margin: 0;

  color: #1d4635;
  font-size: 13px;
  font-weight: 700;
}

.customer-details > span:not(.element-label) {
  display: block;
  margin-top: 5px;

  color: #9c9d90;
  font-size: 8px;
  font-weight: 600;
  letter-spacing: 1px;
}

.customer-stars {
  margin-left: auto;
  padding-bottom: 5px;

  color: #c39359;
  font-size: 11px;
  letter-spacing: 1px;
  white-space: nowrap;
}

/* =====================================
   FOOTER DECORATION
===================================== */

.testimonials-footer {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;

  margin-top: 65px;

  color: #a29c8d;
  font-size: 9px;
  font-weight: 600;
  letter-spacing: 2px;
  text-align: center;
}

.footer-line {
  width: 40px;
  height: 1px;
  flex-shrink: 0;
  background: #c9bba7;
}

/* =====================================
   LARGE DESKTOP
===================================== */

@media (min-width: 1600px) {
  .testimonials-section {
    padding-left: max(7%, calc((100% - 1440px) / 2));
    padding-right: max(7%, calc((100% - 1440px) / 2));
  }

  .testimonial-card {
    min-height: 410px;
  }
}

/* =====================================
   SMALLER DESKTOPS
===================================== */

@media (min-width: 901px) and (max-width: 1150px) {
  .testimonials-grid {
    gap: 15px;
  }

  .testimonial-card {
    padding: 24px;
  }

  .customer-info {
    flex-wrap: wrap;
  }

  .customer-stars {
    margin-left: 0;
    width: 100%;
    padding-left: 0;
  }
}

/* =====================================
   TABLETS & PORTRAIT MONITORS
===================================== */

@media (max-width: 900px), (min-width: 901px) and (orientation: portrait) {
  .testimonials-section {
    padding: 85px 5% 75px;
  }

  .section-intro {
    margin-bottom: 50px;
  }

  .testimonials-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 18px;
  }

  .testimonial-card:last-child {
    grid-column: 1 / -1;
  }

  .testimonial-card {
    min-height: 350px;
  }

  .testimonial-text {
    font-size: 16px;
  }
}

/* =====================================
   MOBILE
===================================== */

@media (max-width: 600px) {
  .testimonials-section {
    padding: 75px 5% 65px;
  }

  .section-intro {
    margin-bottom: 42px;
  }

  .section-label {
    font-size: 9px;
    letter-spacing: 1.3px;
  }

  .heading-label {
    margin-top: 20px;
  }

  .section-title {
    font-size: clamp(36px, 9vw, 48px);
    letter-spacing: -1.5px;
  }

  .description-label {
    margin-top: 20px;
  }

  .section-description {
    font-size: 13px;
    line-height: 1.8;
  }

  .testimonials-grid {
    grid-template-columns: 1fr;
    gap: 16px;
  }

  .testimonial-card:last-child {
    grid-column: auto;
  }

  .testimonial-card {
    min-height: 0;
    padding: 28px 25px;
  }

  .quote-mark {
    font-size: 62px;
  }

  .review-label {
    margin-top: 15px;
  }

  .testimonial-text {
    margin: 12px 0 25px;
    font-size: 16px;
  }

  .customer-info {
    flex-wrap: nowrap;
  }

  .customer-stars {
    width: auto;
    margin-left: auto;
    font-size: 10px;
  }

  .testimonials-footer {
    gap: 12px;
    margin-top: 45px;
    font-size: 8px;
    letter-spacing: 1px;
  }

  .footer-line {
    width: 25px;
  }
}

/* =====================================
   SMALL MOBILE
===================================== */

@media (max-width: 380px) {
  .testimonial-card {
    padding: 24px 20px;
  }

  .customer-photo {
    width: 42px;
    height: 42px;
  }

  .customer-details h4 {
    font-size: 12px;
  }

  .customer-stars {
    font-size: 9px;
    letter-spacing: 0;
  }

  .image-label,
  .name-label {
    font-size: 7px;
  }
}

/* =====================================
   REDUCED MOTION
===================================== */

@media (prefers-reduced-motion: reduce) {
  .testimonial-card {
    transition: none;
  }

  .testimonial-card:hover {
    transform: none;
  }
}
</style>
