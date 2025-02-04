<template>
  <section id="home-marketplace" class="home-character">
    <div class="container">
      <div class="sc__header text-center">
        <h2 class="sc__header--title wow fadeInLeft">{{ $t("marketplace.charactersSystem") }}</h2>
        <div class="sc__header--excerpt wow fadeInRight">{{ $t("marketplace.diverseCharacter") }}</div>
      </div>

      <CommonSlideCharacters />
    </div>
  </section>
</template>

<script lang="ts" setup></script>

<style scoped>
@media (max-width: 767px) {
  .home-character {
    background-position: 12% 0;
  }
}
</style>