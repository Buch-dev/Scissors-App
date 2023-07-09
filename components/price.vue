<template>
  <div class="container p-4 mx-auto mt-44">
    <h1 class="text-4xl flex font-bold items-center justify-center">
      <VerticalLine class="mr-4" /> A <span class="text-primaryBlue mx-2">price perfect</span> for
      your needs.
    </h1>
    <p class="mt-2 text-base text-center">
      From catering for your personal, business, events, social needs, you can
      be <br> rest assured we have you in mind in our pricing.
    </p>
    <PriceCard :pricecard="pricecard" />
    <div class="flex justify-center mt-[172px]">
      <button class="btn-white mr-3">Get Custom Pricing</button>
      <button class="btn">Select Pricing</button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PriceCard from ".nuxt/types/price";

export default defineComponent({
  setup() {
    const pricecard = ref<PriceCard[]>([
      {
        title: "Basic",
        price: "Free",
        description: "Free plan for all users",
        img: "check-circle",
        features: [
          "Unlimited URL Shortening",
          "Basic Link Analytics",
          "Customizable Short Links",
          "Standard Support",
          "Ad-supported",
        ],
      },
      {
        title: "Professional",
        price: "$15/month",
        description: "Ideal for business creators",
        img: "check-circle",
        features: [
          "Enhanced Link Analytics",
          "Custom Branded Domains",
          "Advanced Link Customization",
          "Priority Support",
          "Ad-free Experience",
        ],
      },
      {
        title: "Teams",
        price: "$25/month",
        description: "Share with up to 10 users",
        img: "check-circle",
        features: [
          "Team Collaboration",
          "User Roles and Permissions",
          "Enhanced Security",
          "API Access",
          "Dedicated Account Manager",
        ],
      },
    ]);
    return { pricecard };
  },
});
</script>

<style scoped></style>
