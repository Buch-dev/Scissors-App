<template>
  <div>
    <header>
      <!-- Desktop Navigation Bar -->
      <nav
        class="hidden md:flex justify-between items-center container p-4 mx-auto"
      >
        <div class="logo">
          <Logo />
        </div>
        <ul class="flex gap-8">
          <li><NuxtLink class="text-primaryBlue" to="#">My URLs</NuxtLink></li>
          <li>
            <NuxtLink class="flex justify-between items-center" to="#"
              >Features <span><DropDownBlack /></span
            ></NuxtLink>
          </li>
          <li><NuxtLink class="" to="#">Pricing</NuxtLink></li>
          <li><NuxtLink class="" to="#">Analytics</NuxtLink></li>
          <li><NuxtLink class="" to="#">FAQs</NuxtLink></li>
        </ul>
        <div class="login flex gap-7 items-center justify-between">
          <NuxtLink to="/input/login" class="text-primaryBlue"
            >Log in</NuxtLink
          >
          <button class="btn">Try for free</button>
        </div>
      </nav>

      <!-- Mobile Navigation Bar -->
      <nav
        class="md:hidden flex justify-between items-center container p-4 mx-auto"
      >
        <div class="logo">
          <Logo />
        </div>
        <button
          @click="toggleMobileMenu"
          class="block md:hidden text-primaryBlue text-2xl"
        >
          <!-- Hamburger icon or any other mobile menu icon -->
          ☰
        </button>
      </nav>
      <div v-if="showMobileMenu" class="md:hidden">
        <ul class="flex flex-col text-center gap-4">
          <li><NuxtLink class="text-primaryBlue" to="#">My URLs</NuxtLink></li>
          <li><NuxtLink class="" to="#">Features</NuxtLink></li>
          <li>
            <NuxtLink class="" to="#" @click="goToSection">Pricing</NuxtLink>
          </li>
          <li><NuxtLink class="" to="#">Analytics</NuxtLink></li>
          <li><NuxtLink class="" to="#">FAQs</NuxtLink></li>
          <li>
            <NuxtLink to="/input/login" class="text-primaryBlue"
              >Log in</NuxtLink
            >
          </li>
          <li><button class="btn">Try for free</button></li>
        </ul>
      </div>
    </header>
  </div>
</template>

<script lang="ts">
// import { emit } from "process";
import { defineComponent } from "vue";

export default defineComponent({
  methods: {
    goToSection() {
      this.$emit("go-to-section");
    },
  },
  setup() {
    const showMobileMenu = ref(false);

    const toggleMobileMenu = () => {
      showMobileMenu.value = !showMobileMenu.value;
    };

    return { showMobileMenu, toggleMobileMenu };
  },
});
</script>

<style scoped>
/* Your existing styles here... */

/* Additional styles for mobile navigation */
.md\\:hidden {
  display: none;
}

/* Styles for the mobile menu with transitions */
.mobile-menu {
  display: flex;
  flex-direction: column;
  gap: 4px;
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s ease-out;
}

/* Show the mobile menu when it's active */
.mobile-menu.show {
  max-height: 400px; /* Adjust the value based on your needs */
}
</style>
