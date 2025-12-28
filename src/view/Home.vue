<script>
import Navbar from "../components/Navbar.vue";
import Hero from "../components/Hero.vue";
import Features from "../components/Features.vue";
import Benefits from "../components/Benefits.vue";
import Contact from "../components/Contact.vue";
import Footer from "../components/Footer.vue";

export default {
  name: "Home",
  components: {
    Navbar,
    Hero,
    Features,
    Benefits,
    Contact,
    Footer,
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

    <!-- Contact Section -->
    <Contact />
    <!-- Contact Section -->

    <!-- footer section -->
    <Footer />
    <!-- footer section -->
  </div>
</template>
