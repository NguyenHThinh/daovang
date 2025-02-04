<template>
  <NuxtLayout name="base-layout">
    <section class="about-content">
      <div class="container">
        <div class="sc__header text-center">
          <h2 class="sc__header--title wow fadeInLeft">{{ $t("about.weAreTreasureHunter") }}</h2>
          <div class="sc__header--excerpt wow fadeInRight">{{ $t("about.descAboutUs") }}</div>
        </div>

        <!-- <a href="#about-ourteam" class="about-content--nextpage js-click-smooth"></a> -->

      </div>
    </section>
  </NuxtLayout>
</template>

<script lang="ts" setup>
useHead({
  title: "About | Treasure Hunter",
});
</script>