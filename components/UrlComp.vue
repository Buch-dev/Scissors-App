<template>
  <div
    class="flex h-[523px] border mt-[112px] bg-[#1E3448] items-center justify-center custom-bg-images"
  >
    <div class="url-form bg-white pt-11 px-11 pb-14 rounded-xl">
      <transition
        enter-active-class="duration-500 ease-out"
        leave-active-class="duration-500 ease-in"
      >
        <form action="" @submit.prevent class="grid grid-cols-1 gap-6">
          <input
            type="text"
            name="url"
            id="url"
            placeholder="Place URL here..."
            class="w-full px-4 py-3 text-[12px] text-primaryBlue placeholder:text-primaryBlue rounded-xl border border-gray-400 focus:outline-none focus:border-primaryBlue transition-all duration-500 ease-in-out"
          />
          <div class="flex gap-4 items-center justify-between relative">
            <select
              name=""
              id=""
              placeholder="Choose Domain"
              class="text-primaryBlue text-sm placeholder:text-primaryBlue rounded-xl border border-gray-400 focus:outline-none focus:border-primaryBlue transition-all duration-500 ease-in-out bg-white px-4 py-3 appearance-none leading-5 focus:ring-0 focus:ring-primaryBlue w-[202px]"
            >
              <option disabled selected value="" class="text-primaryBlue">
                Choose Domain
              </option>
              <option value="1" class="text-primaryBlue">Option 1</option>
              <option value="2" class="text-primaryBlue">Option 2</option>
              <option value="3" class="text-primaryBlue">Option 3</option>
            </select>
            <input
              type="text"
              name="alias"
              id="alias"
              placeholder="Type Alias here"
              class="text-primaryBlue text-sm placeholder:text-primaryBlue rounded-xl border border-gray-400 focus:outline-none focus:border-primaryBlue transition-all duration-500 ease-in-out bg-white px-4 py-3 appearance-none leading-5 focus:ring-0 focus:ring-primaryBlue w-[178px]"
            />
            <img
              src="../assets/img/dropdown-blue.svg"
              alt=""
              class="absolute left-[170px]"
            />
          </div>
          <button class="btn text-sm flex items-center justify-center">
            Trim URL <img src="../assets/img/magic wand.svg" alt="magic" />
          </button>
        </form>
      </transition>
      <p class="mt-[22px] text-sm text-primaryBlue">
        By clicking TrimURL, I agree to the
        <b>
          Terms of Service, <br />
          Privacy Policy
        </b>
        and Use of Cookies.
      </p>
    </div>
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
    background-image: url('../assets/img/shortener-left.svg'), url('../assets/img/shortener-right.svg');
    background-repeat: no-repeat, no-repeat;
    background-position: top left, right bottom;
}
</style>
