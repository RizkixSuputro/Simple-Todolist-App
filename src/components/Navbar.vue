<script>
import { ref } from "vue";

const isOpen = ref(false);

export default {
  name: "navbar",
  methods: {
    toggleMenu() {
      isOpen.value = !isOpen.value;
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
  <nav class="p-3 text-black backdrop-blur-sm">
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
            <a href="/">Home</a>
          </li>
          <li class="inline-block mr-4 transition-all hover:text-gray-500">
            <a href="#">Features</a>
          </li>
          <li class="inline-block mr-4 transition-all hover:text-gray-500">
            <a href="#">Benefits</a>
          </li>
          <li class="inline-block mr-4 transition-all hover:text-gray-500">
            <a href="#">Contact</a>
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
  <div v-if="isOpen" id="navbar-links-mobile">
    <ul
      class="flex flex-col gap-3 text-md p-3 bg-gray-400 shadow-md md:hidden w-full"
    >
      <li class="inline-block mr-4 transition-all hover:text-gray-500">
        <a href="/">Home</a>
      </li>
      <li class="inline-block mr-4 transition-all hover:text-gray-500">
        <a href="#">Features</a>
      </li>
      <li class="inline-block mr-4 transition-all hover:text-gray-500">
        <a href="#">Benefits</a>
      </li>
      <li class="inline-block mr-4 transition-all hover:text-gray-500">
        <a href="#">Contact</a>
      </li>
    </ul>
  </div>
</template>
