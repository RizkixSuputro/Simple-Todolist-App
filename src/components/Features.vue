<script>
import { Icon } from "@iconify/vue";
export default {
  name: "features",
  components: {
    Icon,
  },
  data() {
    return {
      features: [
        {
          id: 1,
          title: "Add & Manage Tasks",
          description:
            "Create, edit, and delete tasks easily to keep your to-do list organized.",
          icon: "fluent-color:clipboard-task-16",
        },
        {
          id: 2,
          title: "Task Priority",
          description:
            "Mark tasks as high, medium, or low priority to stay focused.",
          icon: "flat-color-icons:low-priority",
        },
        {
          id: 3,
          title: "Local Storage",
          description:
            "Your tasks are saved automatically in the browser using local storage.",
          icon: "streamline-plump-color:database-flat",
        },
        {
          id: 4,
          title: "Simple & Fast",
          description:
            "A lightweight to-do app with a clean interface and no unnecessary features.",
          icon: "fluent-color:fast-forward-circle-24",
        },
      ],
    };
  },
};
</script>

<template>
  <div id="features" class="mt-3">
    <h1
      class="font-poppins text-center text-3xl"
      data-aos="fade-up"
      data-aos-duration="1000"
      data-aos-easing="ease-in-out"
    >
      Our Features
    </h1>

    <div
      class="card-container flex max-sm:flex-col mt-10 gap-3 p-20 max-sm:p-10"
    >
      <!-- card content -->
      <div
        class="card text-center space-y-5 shadow-xl p-10 rounded-xl"
        v-for="(feature, index) in features"
        :key="feature.id"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        :data-aos-delay="index * 200"
      >
        <div class="card-icon text-5xl text-center flex justify-center">
          <Icon :icon="feature.icon" />
        </div>
        <div class="card-content">
          <h3 class="text-lg font-semibold">{{ feature.title }}</h3>
          <p>{{ feature.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
