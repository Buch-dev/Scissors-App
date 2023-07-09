<template>
  <div class="flex px-8 mt-[68px] items-center justify-center">
    <div
      v-for="(item, index) in pricecard"
      :key="index"
      class="border-[0.4px] border-[#005AE2] items-center p-8 rounded-xl shadow-lg cursor-pointer transition-transform duration-300 transform hover:-translate-y-2 w-[379px] hover:w-[410px] hover:h-[627px] hover:bg-[#1E3448] hover:text-white"
    >
      <h5 class="text-2xl">{{ item.title }}</h5>
      <h2 class="text-[40px] mt-[34px] font-bold">{{ item.price }}</h2>
      <h6 class="mt-2 text-[20px]">{{ item.description }}</h6>
      <div
        v-for="(feature, index) in item.features"
        :key="index"
        class="flex items-center mt-4 text-[14px]"
      >
        <div class="img">
          <img
            :src="`../assets/img/${item.img}.svg`"
            alt=""
            class="mr-[9.33px]"
          />
        </div>
        <p>{{ feature }}</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PriceCard from ".nuxt/types/price";
import { PropType } from "vue";
import { features } from "process";

export default defineComponent({
  props: {
    pricecard: {
      required: true,
      type: Array as PropType<PriceCard[]>,
    },
  },
  setup() {},
});
</script>

<style scoped>
.transition-transform {
  will-change: transform;
}

.hover\:translate-y-2:hover {
  transform: translateY(-2rem);
}
</style>
