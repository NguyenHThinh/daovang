<template>
  <section class="home-wellcome">
    <div class="home-wellcome--zzz">
      <div class="home-wellcome--hero wow fadeInLeft"></div>
      <div class="home-wellcome--owl wow fadeInRight"></div>
      <div class="home-wellcome--peg wow fadeInLeft"></div>

      <div class="home-wellcome--fire -top--left fadeInUp"></div>
      <div class="home-wellcome--fire -bottom--left fadeInUp"></div>
      <div class="home-wellcome--fire -top--right fadeInUp"></div>
      <div class="home-wellcome--fire -bottom--right fadeInUp"></div>

      <div class="home-wellcome--door-backup"></div>
    </div>

    <div class="el__logo">
      <img src="assets/img/home-wellcome-logo.png" alt="" />
      <p>{{ $t("openYourOwnEra") }}</p>
    </div>

    <a href="#" class="home-wellcome--play">{{ $t("common.playNow") }}</a>

    <a href="#home-about" class="home-wellcome--nextpage js-click-smooth"></a>

    <div class="home-wellcome--nameplate fadeInRight">
      <a href="#" class="home-wellcome--appstore"></a>
      <a href="#" class="home-wellcome--googleplay"></a>
    </div>
  </section>
</template>

<script lang="ts" setup></script>
