<template>
  <div>
    <header>
      <nav
        class="flex justify-between items-center mt-4 container p-4 mx-auto"
      >
        <div class="logo">
          <Logo />
        </div>
        <ul class="flex gap-8">
          <li><NuxtLink class="text-primaryBlue" to="#">My URLs</NuxtLink></li>
          <li>
            <NuxtLink class="flex justify-between items-center" to="#"
              >Features <span><DropDownBlack /></span>
            </NuxtLink>
          </li>
          <li><NuxtLink class="" to="#">Pricing</NuxtLink></li>
          <li><NuxtLink class="" to="#">Analytics</NuxtLink></li>
          <li><NuxtLink class="" to="#">FAQs</NuxtLink></li>
        </ul>
        <div class="login flex gap-7 items-center justify-between">
          <NuxtLink to="/input/signup" class="text-primaryBlue">Log in</NuxtLink>
          <button class="btn">Try for free</button>
        </div>
      </nav>
    </header>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
