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

    <div class="home-wellcome--nameplate fadeInRight">
      <a href="#" class="home-wellcome--appstore"></a>
      <a href="#" class="home-wellcome--googleplay"></a>
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
