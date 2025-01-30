<template>
  <section id="home-map" class="home-island_mb">
    <div class="container">
      <header class="sc__header text-center">
        <h2 class="sc__header--title wow fadeInLeft">MAP of civilizations</h2>
        <div class="sc__header--excerpt wow fadeInRight">
          <p>
            "History" is always considered an unending novel, the followers
            always try to perfect and turn back the first pages to connect and
            explore reality. In recent years, when science and technology have
            merged into the rhythm of daily life, a topic that is always
            interested and frequently mentioned by the community is the origin
            of mankind, human ancestors and early civilization. Since when was
            it formed? Did we really evolve according to Darwinism or is there
            some other reason?
          </p>
          <p>
            Mr.Vincent, a citizen of the Northern Hemisphere who loves
            adventure, always wants to explore new lands and is skeptical about
            the origins of humanity, once happened to see the news in his
            hometown about civilization, excavated thousands of years ago
            prompted him to put aside all current affairs and begin his own
            exploration of ancient civilizations.
          </p>
        </div>
      </header>
      <div class="home-island_mb__box wow fadeInUp">
        <CommonSlideMap />
        <div class="text-center">
          <a href="#" class="btn__khampha">Discover now</a>
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
