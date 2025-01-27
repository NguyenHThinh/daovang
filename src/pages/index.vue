<template>
  <NuxtLayout name="base-layout">
    <!-- <div class="containerz">
      <canvas id="pixie"></canvas>
    </div> -->

    <SectionsHomeWellcome />

    <SectionsHomeAbout />

    <SectionsHomeJourney />

    <SectionsHomeMap />

    <SectionsHomeDiscover />

    <SectionsHomeMarketplace />

    <SectionsHomeSmithy />

    <SectionsHomeCollection />

    <ModalsSupportChatBox />
  </NuxtLayout>
</template>

<script lang="ts" setup>
useHead({
  title: "Home | Treasure Hunter",
});
</script>
