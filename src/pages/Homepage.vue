<script setup lang="ts">
import HomeFooter from "../components/layout/HomeFooter.vue";
import HomeHeader from "../components/layout/HomeHeader.vue";
import HomeNavbar from "../components/layout/HomeNavbar.vue";
import PortfolioCards from "../components/layout/PortfolioCards.vue";
import FAQ from "../components/layout/FAQ.vue";
import Services from "../components/layout/Services.vue";
import { ref, provide } from "vue";

// Create refs for each section
const homeHeader = ref<HTMLElement | null>(null);
const services = ref<HTMLElement | null>(null);
const portfolioCards = ref<HTMLElement | null>(null);
const faq = ref<HTMLElement | null>(null);
const homeFooter = ref<HTMLElement | null>(null);

// Provide refs to child components (e.g., Navbar)
provide("sectionRefs", {
  homeHeader,
  services,
  portfolioCards,
  faq,
  homeFooter,
});
</script>

<template>
  <div class="dark">
    <HomeNavbar />
    <section ref="homeHeader">
      <HomeHeader />
    </section>
    <section ref="services">
      <Services />
    </section>
    <section ref="portfolioCards">
      <PortfolioCards />
    </section>
    <section ref="faq">
      <FAQ />
    </section>
    <section ref="homeFooter">
      <HomeFooter />
    </section>
  </div>
</template>

<style></style>
