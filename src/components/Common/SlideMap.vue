<template>
  <div class="slide__container">
    <ClientOnly>
      <swiper-container
        ref="slideMapRef"
        class="home-island_mb__slider"
        :init="false"
      >
        <swiper-slide v-for="map in SLIDE_MAP_DATA" :key="map.id">
          <div class="el__item">
            <div class="el__item--name">{{ map.name }}</div>
            <div class="el__item--excerpt">{{ map.title }}</div>
            <div class="el__item--thumb">
              <img :src="map.img" :alt="map.name" />
            </div>
            <div class="el__item--number">{{ map.id }}</div>
          </div>
        </swiper-slide>
      </swiper-container>
    </ClientOnly>
    <div class="maps-pagination"></div>
  </div>
</template>

<script lang="ts" setup>
const {t} = useI18n();
const SLIDE_MAP_DATA = [
  {
    id: "1",
    name: t("maps.maya"),
    title: t("maps.mayaTitle"),
    img: "images/home-island-map-1.png",
  },
  {
    id: "2",
    name: t("maps.anasazi"),
    title: t("maps.anasaziTitle"),
    img: "images/home-island-map-2.png",
  },
  {
    id: "3",
    name: t("maps.indus"),
    title: t("maps.indusTitle"),
    img: "images/home-island-map-3.png",
  },
  {
    id: "4",
    name: t("maps.viking"),
    title: t("maps.vikingTitle"),
    img: "images/home-island-map-4.png",
  },
  {
    id: "5",
    name: t("maps.egypt"),
    title: t("maps.egyptTitle"),
    img: "images/home-island-map-5.png",
  },
  {
    id: "6",
    name: t("maps.greek"),
    title: t("maps.greekTitle"),
    img: "images/home-island-map-6.png",
  },
  {
    id: "7",
    name: t("maps.atlantis"),
    title: t("maps.atlantisTitle"),
    img: "images/home-island-map-7.png",
  },
  {
    id: "8",
    name: t("maps.asgard"),
    title: t("maps.asgardTitle"),
    img: "images/home-island-map-8.png",
  },
];

const slideMapRef = ref(null);
useSwiper(slideMapRef, {
  slidesPerView: 1,
  loop: true,
  pagination: {
    el: ".maps-pagination",
    clickable: true,
    bulletClass: "dot maps-pagination-bullet",
    bulletActiveClass: "maps-pagination-bullet-active",
  },
});
</script>

<style scoped>
.home-island_mb__slider {
  padding: 30px 0 10px;
  margin: 0px 20px;
}
.home-island_mb__slider::before {
  content: "";
  position: absolute;
  top: -6%;
  left: -15%;
  width: calc(100% + 30%);
  height: calc(100% + 20%);
  background: url(assets/img/home-island-map-mb.png) no-repeat center;
  background-size: 100% 100%;
}
.home-island_mb .el__item {
  padding: 0px 30px 30px;
  text-align: center;
}
.home-island_mb .el__item--thumb img {
  display: block;
  margin: auto;
  max-height: 150px;
}
.home-island_mb .el__item--name {
  font-family: "Bungee", cursive;
  font-size: 20px;
  line-height: 42px;
  color: #ffdc4d;
  text-shadow: -2px 0 0px #1d1a1a, 0 2px 0px #1d1a1a, 2px 0 0px #1d1a1a,
    0 -2px 0px #1d1a1a;
  margin-bottom: 0;
}
.home-island_mb .el__item--excerpt {
  margin-bottom: 5px;
}
.home-island_mb .el__item--number {
  width: 40px;
  height: 40px;
  background: url(assets/img/home-island-number.png) no-repeat center;
  background-size: contain;
  margin: auto;
  line-height: 40px;
  font-size: 13px;
  color: #8b0059;
}
.home-island .slick-dots {
  bottom: -20px;
}
.home-island .slick-dots li button {
  width: 20px;
  background-color: #8b706f;
}
</style>

<style>
/* slide */
.slide__container {
  position: relative;
}
.maps-pagination {
  width: max-content;
  margin: 0 auto;
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 20px;
}
.maps-pagination .dot.maps-pagination-bullet {
  cursor: pointer;
  display: block;
  width: 20px;
  height: 4px;
  outline: none;
  background-color: #533836;
  border-radius: 100px;
  transition: all 0.3s ease-in-out;
}
.maps-pagination .dot.maps-pagination-bullet:hover {
  background-color: #ffdc4d;
}

.maps-pagination .dot.maps-pagination-bullet.maps-pagination-bullet-active {
  background-color: #ffdc4d;
}
</style>
