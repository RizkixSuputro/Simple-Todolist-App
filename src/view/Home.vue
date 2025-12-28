<script>
import Navbar from "../components/Navbar.vue";
import Hero from "../components/Hero.vue";
import Features from "../components/Features.vue";
export default {
  name: "Home",
  components: {
    Navbar,
    Hero,
    Features,
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
  </div>
</template>
