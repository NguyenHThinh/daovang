<template>
  <section class="home-smithy">
    <div class="container">
      <div class="sc__header text-center mb-3">
        <h2 class="sc__header--title wow fadeInLeft">{{ $t("smithy.title") }}</h2>
        <div class="sc__header--excerpt wow fadeInRight">{{ $t("smithy.diverseCharacter") }}</div>
      </div>

      <div class="el__thumb">
        <NuxtImg src="/images/pages/home-smithy-img.png" alt="" />
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup></script>

<style scoped>
@media (max-width: 767px) {
  .home-smithy {
    position: relative;
    padding: 80px 0 0px;
  }
  .home-smithy:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url(assets/img/pages/home-smithy-bg.png) no-repeat;
    background-size: cover;
    opacity: 0.4;
    pointer-events: none;
    z-index: -1;
  }
  .home-smithy .el__thumb {
    text-align: center;
  }
}
</style>
