<template>
  <section class="home-discover">
    <div class="container">
      <ClientOnly>
        <swiper-container
          ref="slideDiscoverRef"
          class="home-island_mb__slider"
          :init="false"
        >
          <swiper-slide class="swiper-slide">
            <div class="el__col">
              <div class="el__item">
                <div class="el__item--thumb">
                  <div class="dnfix__thumb -contain">
                    <NuxtImg src="/images/home-discover-img-2.png" alt="" />
                  </div>
                </div>
                <div class="el__item--meta">
                  <h3 class="el__item--title">Breeding</h3>
                </div>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide class="swiper-slide">
            <div class="el__col">
              <div class="el__item">
                <div class="el__item--thumb">
                  <div class="dnfix__thumb -contain">
                    <NuxtImg src="/images/home-discover-img-3.png" alt="" />
                  </div>
                </div>
                <div class="el__item--meta">
                  <h3 class="el__item--title">FORGE</h3>
                </div>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide class="swiper-slide">
            <div class="el__col">
              <div class="el__item">
                <div class="el__item--thumb">
                  <div class="dnfix__thumb -contain">
                    <NuxtImg src="/images/home-discover-img-1.png" alt="" />
                  </div>
                </div>
                <div class="el__item--meta">
                  <h3 class="el__item--title">ADVENTURE</h3>
                </div>
              </div>
            </div>
          </swiper-slide>
        </swiper-container>
      </ClientOnly>

      <div class="home-discover--paper wow fadeInUp">
        <h2 class="home-discover--title">
          PLAY TO DISCOVER <br />THE NEW REVOLUTION
        </h2>
        <div class="home-discover--excerpt">
          Treasure hunter is an old but new game with special features, owned
          and operated by the player. These are also the things that determine
          your growth in the game.
        </div>
        <ul class="home-discover--list row gx-2">
          <li class="col"><a href="#">Marketplace</a></li>
          <li class="col"><a href="#">facebook</a></li>
          <li class="col"><a href="#">discord </a></li>
        </ul>
        <div class="text-center">
          <a href="" class="btn--playnow">Play now</a>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
const slideDiscoverRef = ref(null);
useSwiper(slideDiscoverRef, {
  slidesPerView: 2.5,
  centeredSlides: true,
  loop: true,
  freeMode: false,
  spaceBetween: 30,
});
</script>

<style scoped>

.home-discover {
  position: relative;
  padding: 100px 0 60px;
  background: radial-gradient(
      87.34% 87.34% at 48.41% -10.18%,
      rgba(75, 51, 37, 0.4) 0%,
      rgba(0, 0, 0, 0) 100%
    ),
    #1e100f;
}
.home-discover:before {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  width: 224px;
  height: 464px;
  background: url(assets/img/stone-mb.png) no-repeat center;
  background-size: contain;
}
.home-discover--paper {
  width: 100%;
  max-width: 385px;
  margin: auto;
  padding: 20px 30px 20px;
  background: url(assets/img/home-discover-paper.png) no-repeat center;
  background-size: 100% 100%;
  text-align: center;
  z-index: 10;
}
.home-discover--title {
  font-family: "Bungee", cursive;
  font-size: 20px;
  line-height: 34px;
  color: #ffdc4d;
  text-shadow: -2px 0 0px #1d1a1a, 0 2px 0px #1d1a1a, 2px 0 0px #1d1a1a,
    0 -2px 0px #1d1a1a;
  margin-bottom: 15px;
}
.home-discover--excerpt {
  font-weight: bold;
  font-size: 14px;
  line-height: 28px;
  color: #1e100f;
  margin-bottom: 15px;
}
.home-discover--list {
  text-transform: uppercase;
  font-family: "Bungee", cursive;
}
.home-discover--list li {
  margin-bottom: 5px;
}
.home-discover--list a {
  display: block;
  padding: 10px 5px;
  font-size: 12px;
  line-height: 14px;
  color: #ffffff;
  background: url(assets/img/home-discover-btn.png) no-repeat center;
  background-size: 100% 100%;
  transition: all 0.5s;
}
.home-discover--list a:hover {
  transform: translateY(-2px);
}
.home-discover__slider {
  max-width: 580px;
  margin: 0 auto 50px;
}
.home-discover .el__item {
  display: flex;
  flex-direction: column;
  justify-content: end;
  min-height: 263px;
}
.home-discover .el__item--thumb {
  margin-bottom: 10px;
}
.home-discover .el__item--thumb .dnfix__thumb {
  padding-top: 94%;
}
.home-discover .el__item--title {
  font-family: Bungee;
  font-size: 18px;
  line-height: 42px;
  text-align: center;
  color: #ffdc4d;
}
.home-discover .el__item--thumb {
  transition: all 0.5s;
}
.home-discover .slick-slide.slick-current .el__item--thumb,
.home-discover .slick-slide.slick-active .el__item--thumb,
.home-discover .swiper-slide-active .el__col {
  position: relative;
  top: -20px;
  transform: scale(1.25);
  transition: all 1s;
}
.btn--playnow {
  display: inline-block;
  width: 220px;
  height: 80px;
  margin: 0 -25px;
  background: url(assets/img/button-sm.png) no-repeat center;
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
.btn--playnow:hover {
  transform: translateY(-2px);
}
</style>
