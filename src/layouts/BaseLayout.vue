<template>
  <HeaderNav class="desktop" />
  <HeaderNavMobi class="mobile" />
  <slot></slot>
  <CommonFooter />
</template>

<script lang="ts" setup>
useHead({
  link: [
    {
      rel: "icon",
      type: "image/*",
      href: "favicon.png",
    },
  ],
});
</script>