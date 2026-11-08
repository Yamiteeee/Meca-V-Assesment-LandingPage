<script setup lang="ts">
import { ref } from "vue";

const isMenuOpen = ref(false);

const closeMenu = () => {
  isMenuOpen.value = false;
};

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};
</script>

<template>
  <header class="site-header">
    <!-- Assessment section label -->
    <div class="header-label-bar">
      <div class="header-label-inner">
        <h2 class="assessment-label">
          <span class="label-line"></span>
          This is the Header section
        </h2>
      </div>
    </div>

    <div class="header-inner">
      <!-- Brand -->
      <div class="brand-wrapper">
        <span class="element-label">This is a Logo</span>

        <a href="#home" class="brand" @click="closeMenu">
          <span class="brand-icon" aria-hidden="true">✳</span>

          <span class="brand-text">
            <span class="brand-name">
              WANDER<span class="brand-light">STORY</span>
            </span>
            <small>MADE FOR MOMENTS OUTDOORS</small>
          </span>
        </a>
      </div>

      <!-- Desktop Navigation -->
      <div class="nav-wrapper">
        <span class="element-label">This is a Navigation Menu</span>

        <nav class="desktop-nav" aria-label="Main navigation">
          <a href="#home">Home</a>
          <a href="#testimonials">Reviews</a>
          <a href="#gallery">Our Collection</a>
        </nav>
      </div>

      <!-- Desktop CTA -->
      <div class="cta-wrapper">
        <span class="element-label">This is a Button</span>

        <a href="#gallery" class="header-cta">
          Explore Collection
          <span aria-hidden="true">↗</span>
        </a>
      </div>

      <!-- Mobile Menu Button -->
      <button
        type="button"
        class="menu-toggle"
        :aria-expanded="isMenuOpen"
        :aria-label="isMenuOpen ? 'Close menu' : 'Open menu'"
        aria-controls="mobile-navigation"
        @click="toggleMenu"
      >
        <span :class="{ active: isMenuOpen }"></span>
        <span :class="{ active: isMenuOpen }"></span>
        <span :class="{ active: isMenuOpen }"></span>
      </button>
    </div>

    <!-- Mobile Navigation -->
    <nav
      id="mobile-navigation"
      class="mobile-nav"
      :class="{ open: isMenuOpen }"
      :inert="!isMenuOpen"
      aria-label="Mobile navigation"
    >
      <div class="mobile-nav-inner">
        <span class="mobile-menu-label"> This is a Navigation Menu </span>

        <a href="#home" @click="closeMenu">Home</a>
        <a href="#testimonials" @click="closeMenu">Reviews</a>
        <a href="#gallery" @click="closeMenu">Our Collection</a>

        <span class="mobile-button-label"> This is a Button </span>

        <a href="#gallery" class="mobile-cta" @click="closeMenu">
          Explore Collection
          <span aria-hidden="true">↗</span>
        </a>
      </div>
    </nav>
  </header>
</template>

<style scoped>
/* Header */
.site-header {
  position: relative;
  z-index: 100;
  width: 100%;
  background: #f8f6ef;
}

/* Required Section Label */
.header-label-bar {
  width: 100%;
  padding: 9px 7%;

  background: #f1eee6;
  border-bottom: 1px solid #e8e5dc;
}

.header-label-inner {
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
}

.assessment-label {
  display: flex;
  align-items: center;
  gap: 9px;

  margin: 0;
  color: #a67d55;

  font-family: inherit;
  font-size: 9px;
  font-weight: 600;
  letter-spacing: 1.3px;
  text-transform: uppercase;
}

.label-line {
  width: 20px;
  height: 1px;
  background: #b17b49;
}

/* Main Header */
.header-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 28px;

  width: 86%;
  max-width: 1440px;
  min-height: 94px;
  margin: 0 auto;
}

/* Element Labels */
.element-label {
  display: block;

  margin-bottom: 8px;

  color: #aaa394;
  font-size: 8px;
  font-weight: 500;
  letter-spacing: 0.8px;
}

/* Brand */
.brand-wrapper,
.nav-wrapper,
.cta-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.brand-wrapper {
  flex-shrink: 0;
}

.brand {
  display: inline-flex;
  align-items: center;
  gap: 11px;

  color: #183c2d;
  text-decoration: none;
}

.brand-icon {
  color: #b17b49;
  font-size: 31px;
  line-height: 1;
  transition: transform 0.3s ease;
}

.brand:hover .brand-icon {
  transform: rotate(35deg);
}

.brand-text {
  display: flex;
  flex-direction: column;
  white-space: nowrap;
}

.brand-name {
  font-size: 19px;
  font-weight: 800;
  letter-spacing: 1px;
  line-height: 1.2;
}

.brand-light {
  font-weight: 400;
}

.brand-text small {
  margin-top: 5px;

  color: #8b8c7f;
  font-size: 8px;
  font-weight: 600;
  letter-spacing: 1.5px;
}

/* Desktop Navigation */
.desktop-nav {
  display: flex;
  align-items: center;
  gap: clamp(20px, 2.8vw, 42px);
}

.desktop-nav a {
  position: relative;

  padding: 6px 0;

  color: #525b50;
  font-size: 13px;
  font-weight: 500;
  text-decoration: none;
  white-space: nowrap;

  transition: color 0.3s ease;
}

.desktop-nav a:hover {
  color: #b17b49;
}

.desktop-nav a::after {
  content: "";
  position: absolute;

  bottom: 0;
  left: 0;

  width: 0;
  height: 1px;
  background: #b17b49;

  transition: width 0.3s ease;
}

.desktop-nav a:hover::after,
.desktop-nav a:focus-visible::after {
  width: 100%;
}

/* Desktop CTA */
.header-cta {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 20px;

  padding: 14px 20px;

  background: #1d4635;
  color: #fff;

  font-size: 12px;
  font-weight: 600;
  text-decoration: none;
  white-space: nowrap;
  border-radius: 3px;

  transition:
    background 0.3s ease,
    transform 0.3s ease;
}

.header-cta:hover {
  background: #b17b49;
  transform: translateY(-2px);
}

.header-cta span {
  font-size: 16px;
}

/* Hamburger */
.menu-toggle {
  display: none;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 5px;
  flex-shrink: 0;

  width: 44px;
  height: 44px;
  padding: 10px;

  background: transparent;
  border: 1px solid #deddd4;
  border-radius: 3px;
  cursor: pointer;
}

.menu-toggle span {
  display: block;

  width: 20px;
  height: 2px;

  background: #1d4635;

  transition:
    transform 0.3s ease,
    opacity 0.3s ease;
}

.menu-toggle span:first-child.active {
  transform: translateY(7px) rotate(45deg);
}

.menu-toggle span:nth-child(2).active {
  opacity: 0;
}

.menu-toggle span:last-child.active {
  transform: translateY(-7px) rotate(-45deg);
}

/* Mobile Navigation */
.mobile-nav {
  display: none;
}

/* Large Desktop */
@media (min-width: 1600px) {
  .header-label-bar {
    padding-left: max(7%, calc((100% - 1440px) / 2));
    padding-right: max(7%, calc((100% - 1440px) / 2));
  }

  .header-inner {
    width: 86%;
  }
}

/* Smaller Desktop */
@media (min-width: 1001px) and (max-width: 1200px) {
  .header-inner {
    width: 90%;
    gap: 18px;
  }

  .desktop-nav {
    gap: 20px;
  }

  .brand-name {
    font-size: 16px;
  }

  .brand-text small {
    font-size: 7px;
    letter-spacing: 1px;
  }

  .header-cta {
    gap: 12px;
    padding: 12px 15px;
  }
}

/* Portrait Desktop, Tablets and Mobile */
@media (max-width: 1000px), (min-width: 1001px) and (orientation: portrait) {
  .header-label-bar {
    padding: 8px 6%;
  }

  .header-inner {
    width: 88%;
    min-height: 82px;
  }

  .nav-wrapper,
  .cta-wrapper {
    display: none;
  }

  .menu-toggle {
    display: flex;
  }

  .mobile-nav {
    display: grid;
    grid-template-rows: 0fr;

    width: 88%;
    max-width: 1440px;
    margin: 0 auto;

    visibility: hidden;
    opacity: 0;

    transition:
      grid-template-rows 0.35s ease,
      opacity 0.3s ease,
      visibility 0.3s ease;
  }

  .mobile-nav.open {
    grid-template-rows: 1fr;
    visibility: visible;
    opacity: 1;
  }

  .mobile-nav-inner {
    display: flex;
    flex-direction: column;

    min-height: 0;
    overflow: hidden;
  }

  .mobile-menu-label,
  .mobile-button-label {
    color: #aaa394;
    font-size: 9px;
    letter-spacing: 1px;
  }

  .mobile-menu-label {
    padding: 20px 0 8px;
  }

  .mobile-nav-inner > a:not(.mobile-cta) {
    display: block;
    padding: 17px 5px;

    color: #244535;
    font-size: 14px;
    font-weight: 500;
    text-decoration: none;

    border-bottom: 1px solid #e8e5dc;

    transition: color 0.3s ease;
  }

  .mobile-nav-inner > a:not(.mobile-cta):hover {
    color: #b17b49;
  }

  .mobile-button-label {
    margin-top: 20px;
  }

  .mobile-cta {
    display: flex;
    align-items: center;
    justify-content: space-between;

    margin: 8px 0 24px;
    padding: 15px 18px;

    background: #1d4635;
    color: #fff;

    font-size: 13px;
    font-weight: 600;
    text-decoration: none;
    border-radius: 3px;

    transition: background 0.3s ease;
  }

  .mobile-cta:hover {
    background: #b17b49;
  }
}

/* Mobile */
@media (max-width: 600px) {
  .header-label-bar {
    padding: 8px 5%;
  }

  .assessment-label {
    font-size: 8px;
  }

  .header-inner {
    width: 90%;
    min-height: 76px;
  }

  .brand-icon {
    font-size: 26px;
  }

  .brand-name {
    font-size: 16px;
  }

  .brand-text small {
    font-size: 7px;
    letter-spacing: 1px;
  }

  .element-label {
    font-size: 7px;
    margin-bottom: 6px;
  }

  .menu-toggle {
    width: 42px;
    height: 42px;
  }

  .mobile-nav {
    width: 90%;
  }
}

/* Very Small Mobile */
@media (max-width: 380px) {
  .brand {
    gap: 7px;
  }

  .brand-icon {
    font-size: 22px;
  }

  .brand-name {
    font-size: 14px;
  }

  .brand-text small {
    font-size: 6px;
  }
}

/* Accessibility */
@media (prefers-reduced-motion: reduce) {
  .brand-icon,
  .desktop-nav a,
  .desktop-nav a::after,
  .header-cta,
  .menu-toggle span,
  .mobile-nav {
    transition: none;
  }
}
</style>
