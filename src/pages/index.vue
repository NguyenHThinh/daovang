<template>
  <NuxtLayout name="base-layout">
    <!-- <div class="containerz">
      <canvas id="pixie"></canvas>
    </div> -->

    <SectionsHomeWellcome class="desktop" />

    <SectionsMobiHomeWellcome class="mobile" />

    <SectionsHomeAbout class="desktop" />

    <SectionsMobiHomeAbout class="mobile" />

    <SectionsHomeJourney class="desktop" />

    <SectionsMobiHomeJourney class="mobile" />

    <SectionsHomeMap class="desktop" />

    <SectionsMobiHomeMap class="mobile" />

    <SectionsHomeDiscover class="desktop" />

    <SectionsMobiHomeDiscover class="mobile" />

    <SectionsHomeMarketplace />

    <SectionsHomeSmithy />

    <SectionsHomeCollection class="desktop" />

    <SectionsMobiHomeCollection class="mobile" />

    <ModalsSupportChatBox class="desktop" />
  </NuxtLayout>
</template>

<script lang="ts" setup>
useHead({
  title: "Home | Treasure Hunter",
});
</script>

<style>
.desktop {
  display: none;
}
.mobile {
  display: block;
}
@media (min-width: 768px) {
  .home-wellcome {
    height: 100dvh;
  }
  .desktop {
    display: block;
  }
  .mobile {
    display: none;
  }
}

@media (max-width: 767px) {
  .sc__header {
    max-width: 1045px;
    margin: 0 auto 0;
  }
  .sc__header--title {
    font-family: "Bungee", cursive;
    font-size: 20px;
    line-height: 28px;
    color: #ffdc4d;
    text-shadow: -2px 0 0px #1d1a1a, 0 2px 0px #1d1a1a, 2px 0 0px #1d1a1a,
      0 -2px 0px #1d1a1a;
    margin-bottom: 15px;
  }
  .sc__header--excerpt {
    font-weight: 600;
    font-size: 14px;
    line-height: 28px;
    color: #ffffff;
  }
}
</style>
