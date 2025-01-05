<script setup lang="ts">
import HomeFooter from "../components/layout/HomeFooter.vue";
import HomeHeader from "../components/layout/HomeHeader.vue";
import HomeNavbar from "../components/layout/HomeNavbar.vue";
import PortfolioCards from "../components/layout/PortfolioCards.vue";
import FAQ from "../components/layout/FAQ.vue";
import Services from "../components/layout/Services.vue";
</script>

<template>
  <div class="dark">
    <HomeNavbar />
    <HomeHeader />
    <Services />
    <PortfolioCards />
    <FAQ />
    <HomeFooter />
  </div>
</template>

<style></style>
