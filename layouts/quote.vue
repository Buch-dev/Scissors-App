<template>
  <div class="border-transparent border custom-bg-img">
    <Nav />

    <slot />
  </div>

  <Footer />
</template>

<style scoped>
.custom-bg-img {
  background-image: url("../assets/img/rectangle.png"),
    url("../assets/img/unsplash.png");
  background-size: cover, cover;
  background-repeat: no-repeat, no-repeat;
  background-position: top, top right;
}
</style>
