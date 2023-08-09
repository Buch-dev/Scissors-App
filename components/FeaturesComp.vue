<template>
  <div class="">
    <ul class=" grid grid-cols-1 text-center md:text-left md:grid-cols-2 gap-x-7 gap-y-16">
      <li v-for="item in feature" :key="item.icon" class="text-center">
        <img
          :src="`./assets/img/${item.icon}`"
          alt=""
          class="mx-auto md:mx-0"
        />
        <h2 class="text-4xl mt-[40px]">{{ item.title }}</h2>
        <p class="text-base mt-[16px]">{{ item.text }}</p>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Feature from "@/.nuxt/types/feature";
import { PropType } from "vue";

export default defineComponent({
  props: {
    feature: {
      required: true,
      type: Array as PropType<Feature[]>,
    },
  },
  setup() {},
});
</script>

<style scoped></style>
