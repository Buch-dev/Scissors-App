<template>
    <div>
      <ul class="border grid grid-cols-2 gap-x-8 gap-y-16">
        <li v-for="item in feature" :key="item.icon">
          <img :src="requireImage(item.icon)" alt="Feature Image" />
          <h2 class="text-4xl mt-10">{{ item.title }}</h2>
          <p class="text-base mt-5">{{ item.text }}</p>
        </li>
      </ul>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from "vue";
  import Feature from ".nuxt/types/feature";
  
  export default defineComponent({
    data() {
      return {
        feature: [
          {
            icon: require("@/assets/img/url-shortening.png"),
            title: "URL Shortening",
            text: "Scissor allows you to shorten URLs of your business, events. Shorten your URL at scale, URL redirects.",
          },
          {
            icon: require("@/assets/img/custom-urls.png"),
            title: "Custom URLs",
            text: "With Scissor, you can create custom URLs, with the length you want! A solution for socials and businesses.",
          },
          {
            icon: require("@/assets/img/qr-codes.png"),
            title: "QR Codes",
            text: "Generate QR codes to your business, events. Bring your audience and customers to your doorstep with this scan and go solution.",
          },
          {
            icon: require("@/assets/img/data-analytics.png"),
            title: "Data Analytics",
            text: "Receive data on the usage of either your shortened URL, custom URLs or generated QR codes. Embedded to monitor progress.",
          },
        ],
      };
    },
    methods: {
      requireImage(imagePath: string) {
        return require(`@/assets/img/${imagePath}`);
      },
    },
  });
  </script>
  
  <style scoped></style>
  