<script>
import { ref } from "vue";

const isOpen = ref(false);

export default {
  name: "navbar",
  methods: {
    // function to open and close navbar links in mobile
    toggleMenu() {
      isOpen.value = !isOpen.value;
    },
    // function to scroll to id if navbar links was clicked
    scrollTo(id) {
      const el = document.getElementById(id);

      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    },
  },
  data() {
    return {
      isOpen,
    };
  },
};
</script>

<template>
  <nav class="p-3 text-black backdrop-blur-sm fixed top-0 w-full bg-white z-10">
    <div
      id="navbar-content"
      class="flex justify-around max-sm:justify-between items-center w-full"
    >
      <h1 id="logo" class="text-xl font-bold">
        Porter<span class="text-blue-500">Todo</span>
      </h1>

      <div id="navbar-links" class="max-sm:hidden">
        <ul class="flex gap-3 text-sm">
          <li class="inline-block mr-4 transition-all hover:text-gray-500">
            <a @click.prevent="scrollTo('home')" href="#">Home</a>
          </li>
          <li class="inline-block mr-4 transition-all hover:text-gray-500">
            <a @click.prevent="scrollTo('features')" href="#">Features</a>
          </li>
          <li class="inline-block mr-4 transition-all hover:text-gray-500">
            <a @click.prevent="scrollTo('benefits')" href="#">Benefits</a>
          </li>
          <li class="inline-block mr-4 transition-all hover:text-gray-500">
            <a @click.prevent="scrollTo('contact')" href="#">Contact</a>
          </li>
        </ul>
      </div>

      <!-- Mobile Menu -->
      <div class="mobile-menu md:hidden max-sm:block">
        <button
          @click="toggleMenu"
          id="menu-button"
          class="text-2xl cursor-pointer hover:text-gray-500"
        >
          &#9776;
        </button>
      </div>
    </div>
  </nav>

  <!-- Mobile menu -->
  <div
    v-if="isOpen"
    id="navbar-links-mobile"
    class="fixed top-12 w-full bg-white z-10"
  >
    <ul
      class="flex flex-col gap-3 text-md p-3 bg-gray-400 shadow-md md:hidden w-full"
    >
      <li class="inline-block mr-4 transition-all hover:text-gray-500">
        <a @click.prevent="scrollTo('home')" href="#">Home</a>
      </li>
      <li class="inline-block mr-4 transition-all hover:text-gray-500">
        <a @click.prevent="scrollTo('features')" href="#">Features</a>
      </li>
      <li class="inline-block mr-4 transition-all hover:text-gray-500">
        <a @click.prevent="scrollTo('benefits')" href="#">Benefits</a>
      </li>
      <li class="inline-block mr-4 transition-all hover:text-gray-500">
        <a @click.prevent="scrollTo('contact')" href="#">Contact</a>
      </li>
    </ul>
  </div>
</template>
