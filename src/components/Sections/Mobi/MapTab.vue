<template>
  <section
    class="maps-header"
    :style="{ backgroundImage: `url(${mapDetail.image})` }"
  >
    <div class="container">
      <ul class="nav nav-tabs el__tabs" id="mapTab" role="tablist">
        <li
          class="nav-item"
          role="presentation"
          v-for="tab in mapdata"
          :key="tab.id"
        >
          <button
            class="nav-link"
            :class="{ active: tab.id === mapDetail.id }"
            type="button"
            role="tab"
            @click="changeTab(tab)"
          >
            <span>{{ tab.name }}</span>
          </button>
        </li>
      </ul>

      <a
        href="#maps-detail"
        class="home-wellcome--nextpage js-click-smooth"
      ></a>

      <div class="el__item--meta text-center">
        <h1 class="el__item--title">MYSTERIOUS INTELLIGENCE TREASURES</h1>
        <div class="el__item--sub">
          {{ mapDetail.title }}
        </div>
      </div>
    </div>

  </section>
</template>

<script lang="ts" setup>
import type { MapData } from "~/types";
defineProps({
  mapdata: {
    type: Array as PropType<MapData[]>,
    required: true,
  },
  mapDetail: {
    type: Object as PropType<MapData>,
    required: true,
  },
});

const emit = defineEmits(["update:mapDetail"]);

const changeTab = (tab: MapData) => {
  emit("update:mapDetail", tab);
};
</script>

<style scoped>
.maps-header {
  position: relative;
  margin-top: 40px;
  padding: 50px 0 100px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  transition: all 0.5s;
}
.maps-header:after {
  content: "";
  position: absolute;
  width: 100%;
  height: 16%;
  left: 0px;
  bottom: 0;
  background: linear-gradient(180deg, rgba(46, 24, 20, 0) 0%, #281514 100%);
}
.maps-header .home-wellcome--nameplate {
  position: absolute;
  bottom: 0;
  width: 16.2%;
  height: 42.7%;
  right: 7.2%;
  background: url(assets/img/home-wellcome-table.png) no-repeat center;
  background-size: contain;
  z-index: 10;
}
.maps-header .el__tabs {
  flex-wrap: wrap;
  gap: 5px;
  border: 0;
  justify-content: center;
  /* padding: 15px 0 25px; */
  margin-bottom: 100px;
  height: auto;
  /* height: 80px; */
  /* overflow: auto; */
  margin-left: var(--bs-gutter-x, -0.75rem);
  margin-right: var(--bs-gutter-x, -0.75rem);
}
.maps-header .el__tabs::-webkit-scrollbar {
  display: none;
}
.maps-header .nav-tabs .nav-link {
  position: relative;
  border: 0;
  font-family: Bungee;
  color: #e6dcd2;
  text-shadow: 1px 1px 2px #4e4e4e, 1px 1px 2px #4e4e4e, 1px 1px 2px #4e4e4e,
    1px 1px 2px #4e4e4e, 1px 1px 2px #4e4e4e;
  min-width: 130px;
  padding: 12px 8px;
  margin: 0 6px;
  background-color: transparent;
}
.maps-header .nav-tabs .nav-link span {
  position: relative;
}
.maps-header .nav-tabs .nav-link::before {
  content: "";
  background-image: url(assets/img/pages/maps-nav-btn2.png);
  background-repeat: no-repeat;
  background-size: 100% 100%;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transition: all 0.3s;
}
.maps-header .nav-tabs .nav-link.active {
  color: #fff;
}
.maps-header .nav-tabs .nav-item.show .nav-link::before,
.maps-header .nav-tabs .nav-link.active::before {
  background-image: url(assets/img/pages/maps-nav-btn-hover2.png);
  top: -16px;
  left: -20px;
  width: 171px;
  height: 88px;
}
</style>
