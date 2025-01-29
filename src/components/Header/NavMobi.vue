<template>
  <header class="header_mb">
    <div class="header__wrap">
      <div class="header__menu__btn menu__mobile">
        <img src="/assets/img/ic_menu.png" width="30" height="24" alt="" />
      </div>
      <h1 class="logo">
        <NuxtLink href="/">
          <NuxtImg
            width="154"
            height="45"
            src="/images/logo-mb.png"
            alt="Logo"
          />
        </NuxtLink>
      </h1>
    </div>
  </header>
</template>

<script lang="ts" setup>
import { NuxtLink } from "#components";
</script>

<style scoped>
header.header_mb {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 11;
  -webkit-animation: showLogo 1s ease-in-out forwards;
  -moz-animation: showLogo 1s ease-in-out forwards;
  animation: showLogo 1s ease-in-out forwards;
}
@keyframes showLogo {
  0% {
    opacity: 0;
    top: -10px;
  }
  33% {
    opacity: 0;
    top: -10px;
  }
  100% {
    opacity: 1;
    top: 0;
  }
}
header.header_mb .header__wrap {
  width: 100%;
  display: flex;
  justify-content: center;
  background: url(assets/img/menu-bg-mb.png) no-repeat center;
  background-size: 100% 100%;
  background-position: top;
}
header.header_mb .logo {
  margin-top: 10px;
  margin-bottom: 0;
  padding-bottom: 12px;
}
header.header_mb img {
  max-height: 45px;
}
.header__menu__btn {
  position: absolute;
  top: 15px;
  left: 15px;
  cursor: pointer;
}
</style>
