<template>
  <div
    class="bg-[#1E3448] mt-[155px] p-6 text-center flex flex-col items-center justify-center custom-bg-images md:h-[299px]"
  >
    <h2 class="font-bold text-[43px] md:text-[40px] text-white">
      Revolutionizing Link Optimization
    </h2>

    <NuxtLink to="/input/signup"
      ><button class="btn mt-8 animate-pulse">Get Started</button>
    </NuxtLink>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    return {};
  },
});
</script>

<style scoped>
.custom-bg-images {
  background-image: url("../assets/img/call-to-action-left.svg"),
    url("../assets/img/call-to-action-right.svg");
  background-repeat: no-repeat, no-repeat;
  background-position: top left, right bottom;
}
</style>
