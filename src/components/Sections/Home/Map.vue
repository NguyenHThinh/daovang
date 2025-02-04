<template>
  <section id="home-map" class="home-island">
    <div class="container">
      <header class="sc__header text-center">
        <h2 class="sc__header--title wow fadeInLeft">{{ $t("homeMap.mapOfCivilization") }}</h2>
        <div class="sc__header--excerpt wow fadeInRight">
          <p>{{ $t("homeMap.homeMapHistory") }}</p>
          <p>{{ $t("homeMap.homeMapVincent") }}</p>
        </div>
      </header>
      <div class="home-island__box wow fadeInUp">
        <div class="home-island__map -st1 selected wow fadeInUp">
          <div class="el__tooltip">
            <div class="el__tooltip--name">{{ $t("maps.maya") }}</div>
            <div class="el__tooltip--excerpt">
              {{ $t("maps.mayaTitle") }}
            </div>
            <a href="#" class="el__tooltip--btn">{{ $t("common.discoverNow") }}</a>
          </div>
        </div>
        <div
          class="home-island__map -st2 selected wow fadeInUp"
          data-wow-duration="1s"
        >
          <div class="el__tooltip">
            <div class="el__tooltip--name">{{ $t("maps.anasazi") }}</div>
            <div class="el__tooltip--excerpt">
              {{ $t("maps.anasaziTitle") }}
            </div>
            <a href="#" class="el__tooltip--btn">{{ $t("common.discoverNow") }}</a>
          </div>
        </div>
        <div
          class="home-island__map -st3 active selected wow fadeInUp"
          data-wow-duration="1s"
        >
          <div class="el__tooltip">
            <div class="el__tooltip--name">{{ $t("maps.indus") }}</div>
            <div class="el__tooltip--excerpt">
              {{ $t("maps.indusTitle") }}
            </div>
            <a href="#" class="el__tooltip--btn">{{ $t("common.discoverNow") }}</a>
          </div>
        </div>
        <div
          class="home-island__map -st4 selected wow fadeInUp"
          data-wow-duration="2s"
        >
          <div class="el__tooltip">
            <div class="el__tooltip--name">{{ $t("maps.viking") }}</div>
            <div class="el__tooltip--excerpt">
              {{ $t("maps.vikingTitle") }}
            </div>
            <a href="#" class="el__tooltip--btn">{{ $t("common.discoverNow") }}</a>
          </div>
        </div>
        <div
          class="home-island__map -st5 selected wow fadeInUp"
          data-wow-duration="2s"
        >
          <div class="el__tooltip">
            <div class="el__tooltip--name">{{ $t("maps.egypt") }}</div>
            <div class="el__tooltip--excerpt">
              {{ $t("maps.egyptTitle") }}
            </div>
            <a href="#" class="el__tooltip--btn">{{ $t("common.discoverNow") }}</a>
          </div>
        </div>
        <div
          class="home-island__map -st6 selected wow fadeInUp"
          data-wow-duration="3s"
        >
          <div class="el__tooltip">
            <div class="el__tooltip--name">{{ $t("maps.greek") }}</div>
            <div class="el__tooltip--excerpt">
              {{ $t("maps.greekTitle") }}
            </div>
            <a href="#" class="el__tooltip--btn">{{ $t("common.discoverNow") }}</a>
          </div>
        </div>
        <div
          class="home-island__map -st7 selected wow fadeInUp"
          data-wow-duration="3s"
        >
          <div class="el__tooltip">
            <div class="el__tooltip--name">{{ $t("maps.atlantis") }}</div>
            <div class="el__tooltip--excerpt">
              {{ $t("maps.atlantisTitle") }}
            </div>
            <a href="#" class="el__tooltip--btn">{{ $t("common.discoverNow") }}</a>
          </div>
        </div>
        <div
          class="home-island__map -st8 selected wow fadeInUp"
          data-wow-duration="3s"
        >
          <div class="el__tooltip">
            <div class="el__tooltip--name">{{ $t("maps.asgard") }}</div>
            <div class="el__tooltip--excerpt">
              {{ $t("maps.asgardTitle") }}
            </div>
            <a href="#" class="el__tooltip--btn">{{ $t("common.discoverNow") }}</a>
          </div>
        </div>
      </div>
      <div class="home-island--treasure"></div>
    </div>
  </section>
</template>

<script lang="ts" setup></script>
