<template>
  <header class="header">
    <div class="header__wrap">
      <nav class="main__nav text-end">
        <ul class="el__menu">
          <li class="menu-item">
            <NuxtLinkLocale active-class="active" href="/">{{ $t("nav.home") }}</NuxtLinkLocale>
          </li>
          <li class="menu-item">
            <NuxtLinkLocale active-class="active" href="/about">{{ $t("nav.about") }}</NuxtLinkLocale>
          </li>
        </ul>
      </nav>
      <h1 class="logo">
        <NuxtLinkLocale href="/">
          <img width="217" height="63" src="assets/img/logo.png" alt="Logo" />
        </NuxtLinkLocale>
      </h1>
      <nav class="main__nav text-start">
        <ul class="el__menu">
          <li class="menu-item">
            <NuxtLinkLocale active-class="active" href="/maps">{{ $t("nav.maps") }}</NuxtLinkLocale>
          </li>
          <li class="menu-item">
            <NuxtLinkLocale href="/#home-marketplace">{{ $t("nav.market") }}</NuxtLinkLocale>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script lang="ts" setup>
import { NuxtLinkLocale } from '#components';

</script>

<style scoped>
header.header {
  display: none;
}
.main__nav {
  width: 100%;
}
@media (min-width: 768px) {
  .header .logo {
    padding: 0 20px;
  }
  header.header {
    display: block;
  }
}
@media (min-width: 1024px) {
  .header .logo {
    padding: 0 60px;
  }
  .main__nav {
    width: calc(50% - 150px);
  }
}
</style>
