<script>
import { Icon } from "@iconify/vue";
export default {
  name: "footer",
  components: {
    Icon,
  },
};
</script>

<template>
  <div id="footer">
    <div class="footer-container bg-black w-full flex justify-center">
      <div class="footer-content p-3">
        <!-- icons media social -->
        <div class="icons p-5 text-blue-500 flex gap-3 items-center">
          <Icon
            icon="mdi:facebook"
            class="cursor-pointer"
            width="30"
            height="30"
          />
          <Icon
            icon="mdi:twitter"
            class="cursor-pointer"
            width="30"
            height="30"
          />
          <Icon
            icon="mdi:instagram"
            class="cursor-pointer"
            width="30"
            height="30"
          />
          <Icon
            icon="mdi:linkedin"
            class="cursor-pointer"
            width="30"
            height="30"
          />
          <Icon
            icon="mdi:github"
            class="cursor-pointer"
            width="30"
            height="30"
          />
        </div>
        <!-- icons media social -->

        <!-- navbar links -->
        <div id="navbar-links" class="text-white">
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
        <!-- navbar links -->
      </div>
    </div>
    <!-- copyright -->
    <div
      class="copyright p-5 pt-3 text-white text-center inset-shadow-xl inset-shadow-indigo-500 bg-blue-400 w-full"
    >
      <p class="text-sm">&copy; 2023 PorterTodo. All rights reserved.</p>
    </div>
    <!-- copyright -->
  </div>
</template>
