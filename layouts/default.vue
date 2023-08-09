<template>
  <div class="custom-bg-img">
    <Nav />

    <slot />

    <Footer />
  </div>
</template>

<script lang="ts">
</script>

<style scoped>
.custom-bg-img {
  background-image: url("../assets/img/red-gradient.png"),
    url("../assets/img/green-gradient.png"),
    url("../assets/img/yellow-gradient.png");
  background-repeat: no-repeat;
  background-position: top left, top, top right;
}
</style>
