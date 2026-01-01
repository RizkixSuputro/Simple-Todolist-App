<script>
import { Icon } from "@iconify/vue";
export default {
  name: "benefits",
  components: {
    Icon,
  },
  data() {
    return {
      benefits: [
        {
          id: 1,
          title: "Easy to Use",
          description:
            "A simple and intuitive interface that lets you manage tasks without any learning curve.",
          icon: "fluent-color:checkmark-circle-32",
        },
        {
          id: 2,
          title: "Data Saved Automatically",
          description:
            "Your tasks are stored safely in the browser using local storage, so nothing gets lost.",
          icon: "fluent-color:data-pie-24",
        },
        {
          id: 3,
          title: "Lightweight & Fast",
          description:
            "A minimal to-do app that loads quickly and runs smoothly on your browser.",
          icon: "mdi:rocket-launch-outline",
        },
      ],
    };
  },
};
</script>

<template>
  <div>
    <div id="features" class="mt-3">
      <h1
        class="font-poppins text-center text-3xl"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
      >
        Application Benefits
      </h1>

      <div
        class="card-container flex max-sm:flex-col mt-10 gap-3 p-20 max-sm:p-10 w-full"
      >
        <!-- card content -->
        <div
          class="card text-center space-y-5 p-10 rounded-xl"
          v-for="(benefit, index) in benefits"
          :key="benefit.id"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          :data-aos-delay="index * 200"
        >
          <div class="card-icon text-5xl text-center flex justify-center">
            <Icon :icon="benefit.icon" />
          </div>
          <div class="card-content">
            <h3 class="text-lg font-semibold">{{ benefit.title }}</h3>
            <p>{{ benefit.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
