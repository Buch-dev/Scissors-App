<template>
  <div class="custom-bg-images">
    <div class="container p-4 mx-auto">
      <div class="flex flex-col-reverse container px-4 pt-[103px] mx-auto md:flex-row md:justify-between">
        <div class="logo mt-10 md:mr-72 md:w-[25%]">
          <img src="../assets/img/footer-logo.png" alt="footer logo" class="mx-auto md:m-0" />
          <div class="icons flex gap-8 mt-10 justify-evenly md:justify-normal">
            <img
              src="../assets/img/twitter.svg"
              alt="twitter"
              class="duration-300 hover:animate-bounce cursor-pointer"
            />
            <img
              src="../assets/img/instagram.svg"
              alt="instagram"
              class="duration-300 hover:animate-bounce cursor-pointer"
            />
            <img
              src="../assets/img/linkedin.svg"
              alt="linkdelin"
              class="duration-300 hover:animate-bounce cursor-pointer"
            />
            <img
              src="../assets/img/facebook.svg"
              alt="facebook"
              class="duration-300 hover:animate-bounce cursor-pointer"
            />
          </div>
        </div>

        <div class="grid gap-5 md:grid-cols-4 md:w-[75%]">
          <div v-for="(item, index) in footer" :key="index" class="text-center md:text-left">
            <b class="text-base">{{ item.head }}</b>
            <p
              v-for="(body, index) in item.body"
              :key="index"
              class="text-base"
            >
              {{ body }}
            </p>
          </div>
        </div>
      </div>
      <p class="mt-[23px] text-sm mb-10 text-center md:text-right">
        Term of Service | Security | Scissor 2023
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

interface footer {
  head: string;
  body: string[];
}

export default defineComponent({
  setup() {
    const footer = ref<footer[]>([
      {
        head: "Why Scissor ?",
        body: ["Scissor 101", "Integrations & API", "Pricing"],
      },
      {
        head: "Solutions",
        body: [
          "Social Media",
          "Digital Marketing",
          "Customer Service For Developers",
        ],
      },
      {
        head: "Products",
        body: ["Link Management", "QR Codes", "Link-in-bio"],
      },
      {
        head: "Company",
        body: [
          "About Scissor",
          "Careers",
          "Partners",
          "Press",
          "Contact",
          "Reviews",
        ],
      },
      {
        head: "Resources",
        body: [
          "Blog",
          "Resource Library",
          "Developers App",
          "Connectors",
          "Support",
          "Trust Center",
          "Browser Extension",
          "Mobile App",
        ],
      },
      {
        head: "Features",
        body: [
          "Branded Links",
          "Mobile Links",
          "Campaign Management &",
          "Analytics",
          "QR Code generation",
        ],
      },
      {
        head: "Legal",
        body: [
          "Privacy Policy",
          "Cookie Policy",
          "Terms of Service",
          "Acceptable Use Policy",
          "Code of Conduct",
        ],
      },
    ]);

    return { footer };
  },
});
</script>

<style scoped>
.stagger-enter-active {
  transition-delay: 0.1s;
}

.stagger-leave-active {
  transition-delay: 0.1s;
}

.stagger-enter,
.stagger-leave-to {
  opacity: 0;
  transform: translateY(20px);
}

.custom-bg-images {
  background-image: url("../assets/img/footer-left.png"),
    url("../assets/img/footer-right.svg");
  background-repeat: no-repeat, no-repeat;
  background-position: bottom left, right bottom;
}
</style>
