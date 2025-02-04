<template>
  <section id="home-map" class="home-island_mb">
    <div class="container">
      <header class="sc__header text-center">
        <h2 class="sc__header--title wow fadeInLeft">{{ $t("homeMap.mapOfCivilization") }}</h2>
        <div class="sc__header--excerpt wow fadeInRight">
          <p>{{ $t("homeMap.homeMapHistory") }}</p>
          <p>{{ $t("homeMap.homeMapVincent") }}</p>
        </div>
      </header>
      <div class="home-island_mb__box wow fadeInUp">
        <CommonSlideMap />
        <div class="text-center">
          <a href="#" class="btn__khampha">{{ $t("common.discoverNow") }}</a>
        </div>
      </div>
      <div class="home-island--treasure"></div>
    </div>
  </section>
</template>

<script lang="ts" setup></script>

<style scoped>
/*
======================================
[ Home Journey ]
======================================
*/
.home-island_mb {
  position: relative;
  background: url(assets/img/home-island-bg.png) no-repeat center;
  background-size: 100% 100%;
  padding: 80px 0 40px;
  margin-top: -60px;
}
.home-island_mb .sc__header--excerpt {
  padding: 0 10px;
}
.home-island_mb .sc__header {
  margin-bottom: 15px;
}
.home-island_mb--treasure {
  position: absolute;
  top: -3%;
  left: -5.5%;
  width: 33.5%;
  height: 8%;
  background: url(assets/img/home-island-treasure.png) no-repeat center;
  background-size: contain;
  pointer-events: none;
}
.home-island_mb__box {
  position: relative;
  z-index: 10;
  max-width: 390px;
  margin: 0 auto;
}

/**/
.btn__khampha {
  display: inline-block;
  width: 220px;
  height: 80px;
  margin: 0 -25px;
  background: url(assets/img/button.png) no-repeat center;
  background-size: contain;
  z-index: 10;
  transition: all 0.5s;
  font-family: Poppins;
  font-weight: bold;
  font-size: 18px;
  color: #321615;
  line-height: 74px;
  letter-spacing: -1px;
  text-align: center;
  text-shadow: 0px 4px 4px rgb(0 0 0 / 25%);
  text-transform: uppercase;
  -webkit-text-stroke: 1px #e16e25;
  -webkit-text-fill-color: #321615;
}
.btn__khampha:hover {
  transform: translateY(-2px);
}
</style>
