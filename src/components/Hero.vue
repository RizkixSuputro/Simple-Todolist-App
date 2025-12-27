<script>
export default {
  name: "hero",
};
</script>

<template>
  <div class="hero-container mt-3">
    <div
      class="hero-content flex max-sm:flex-col md:flex-row justify-center w-full md:pl-20"
    >
      <div class="header-content max-sm:text-center space-y-6 max-w-xl mt-20">
        <h1
          class="font-poppin font-bold max-sm:text-center mt-10 md:text-4xl max-sm:text-xl"
        >
          Organize Your Tasks <br />
          Efficiently with Porter<span class="text-blue-500">Todo</span>
        </h1>

        <div class="bottom-content space-y-6">
          <h3>
            Porter To-Do helps you record, organize, and complete your tasks
            effortlessly. With a clean interface and essential features, you can
            stay productive without distractions.
          </h3>
          <button
            class="bg-blue-500 text-white p-3 rounded-md font-inter max-sm:text-sm font-semibold hover:bg-blue-600 transition-all"
          >
            <RouterLink to="/todo">Get Started </RouterLink>
          </button>
        </div>
      </div>
      <img
        src="../assets/hero-img/3d-todo-cartoon.png"
        class="md:w-2xl md:h-3xl"
        alt="Todo Notes"
      />
    </div>
  </div>
</template>
