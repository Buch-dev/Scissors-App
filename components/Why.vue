<template>
  <div class="mt-[136px] container p-4 mx-auto flex flex-row gap-24">
    <div class="flex flex-col w-[35%]">
      <div class="flex items-center gap-4">
        <VerticalLine />
        <h1 class="text-[36px] font-bold">
          Why Choose <span class="text-primaryBlue">Scissors</span>
        </h1>
      </div>
      <p class="text-base mt-6">
        Scissors is the hub of everything that has to do with your link
        management. We shorten your URLs, allow you creating custom ones for
        your personal, business, event usage. Our swift QR code creation,
        management and usage tracking with advance analytics for all of these is
        second to none.
      </p>
    </div>
    <FeaturesComp :feature="feature" class="w-[65%]" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Feature from "@/.nuxt/types/feature";

export default defineComponent({
  setup() {
    const feature = ref<Feature[]>([
      {
        icon: "url-shortening.png",
        title: "URL Shortening",
        text: "Scissor allows you to shorten URLs of your business, events. Shorten your URL at scale, URL redirects.",
      },
      {
        icon: "custom-urls.png",
        title: "Customs URL",
        text: "With Scissor, you can create custom URLs, with the length you want! A solution for socials and businesses.",
      },
      {
        icon: "qr-codes.png",
        title: "QR Codes",
        text: "Generate QR codes to your business, events. Bring your audience and customers to your doorstep with this scan and go solution.",
      },
      {
        icon: "data-analytics.png",
        title: "Data Analytics",
        text: "Receive data on the usage of either your shortened URL, custom URLs or generated QR codes. Embedded to monitor progress.",
      },
    ]);
    return { feature };
  },
});
</script>

<style scoped></style>
