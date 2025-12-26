<script>
export default {
  name: "navbar",
};
</script>

<template>
  <nav class="bg-gray-800 p-4 text-white">
    <div id="navbar-content" class="flex justify-around items-center">
      <h1 id="logo" class="text-xl font-bold">
        Porter<span class="text-blue-500">Todo</span>
      </h1>

      <div id="navbar-links">
        <ul class="flex gap-3">
          <li class="inline-block mr-4 transition-all hover:text-gray-500">
            <a href="/">Home</a>
          </li>
          <li class="inline-block mr-4 transition-all hover:text-gray-500">
            <a href="#">About</a>
          </li>
          <li class="inline-block mr-4 transition-all hover:text-gray-500">
            <a href="#">Benefits</a>
          </li>
          <li class="inline-block mr-4 transition-all hover:text-gray-500">
            <a href="#">Contact Us</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
