<script>
import { Icon } from "@iconify/vue";
export default {
  name: "contact",
  components: {
    Icon,
  },
};
</script>

<template>
  <div id="contact">
    <div class="contact-container">
      <div class="contact-content">
        <!-- image content -->
        <div class="image-container">
          <div class="img-content w-full flex items-center justify-center">
            <h1
              class="font-poppins max-sm:text-xl md:text-4xl text-white font-semibold z-100"
            >
              Get in Touch
            </h1>
          </div>
        </div>
        <!-- image-content -->

        <div
          class="card-container flex max-sm:flex-col max-sm:p-10 justify-center gap-5 items-center text-center p-30 relative -mt-36 max-sm:-mt-16 z-20"
        >
          <!-- card information -->
          <div class="card shadow-xl p-10 bg-white space-y-3">
            <div
              class="card-icon text-5xl text-center flex justify-center text-black"
            >
              <Icon icon="fxemoji:contact" width="52" height="52" />
            </div>
            <div class="card-content space-y-3">
              <h3 class="text-lg font-semibold">Contact Information</h3>
              <p>
                You can reach me through the contact details below. Whether you
                have a question, feedback, or just want to say hello, feel free
                to get in touch anytime.
              </p>
              <button
                class="bg-blue-500 text-white p-3 rounded-md font-inter max-sm:text-sm font-semibold hover:bg-blue-600 transition-all"
              >
                +62 xxx xxx xxx
              </button>
            </div>
          </div>
          <!-- card information -->

          <div class="card shadow-xl p-10 bg-white space-y-3">
            <div
              class="card-icon text-5xl text-center flex justify-center text-black"
            >
              <Icon icon="icon-park:message-emoji" width="52" height="52" />
            </div>
            <div class="card-content space-y-3">
              <h3 class="text-lg font-semibold">Let’s Talk</h3>
              <p>
                Have an idea, a project in mind, or want to talk about this
                application? I’m always open to meaningful conversations and new
                opportunities.
              </p>
              <button
                class="bg-blue-500 text-white p-3 rounded-md font-inter max-sm:text-sm font-semibold hover:bg-blue-600 transition-all"
              >
                Click Here
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.img-content {
  position: relative;
  background-image: url(../assets/contact-img/2746.jpg);
  background-size: cover;
  background-position: center;
  height: 200px;
}
.img-content::before {
  content: "";
  position: absolute;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 1;
}
</style>
