<script>
import Navbar from "../components/Navbar.vue";
import Hero from "../components/Hero.vue";
import Features from "../components/Features.vue";
import Benefits from "../components/Benefits.vue";
export default {
  name: "Home",
  components: {
    Navbar,
    Hero,
    Features,
    Benefits,
  },
};
</script>

<template>
  <div id="home">
    <!-- Navbar Section -->
    <Navbar />

    <!-- Navbar Sextion -->

    <!-- Hero Section -->
    <Hero />
    <!-- Hero Section -->

    <!-- Features Section -->
    <Features />
    <!-- Features Section -->

    <!-- Benefits Section -->
    <Benefits />
    <!-- Benefits Section -->
  </div>
</template>
