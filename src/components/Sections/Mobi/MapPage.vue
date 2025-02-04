<template>
  <div class="">
    <SectionsMobiMapTab
      :mapdata="MAPS_DATA_MB"
      :map-detail="currentMap"
      @update:map-detail="changeMap"
    />
    <SectionsMobiMapDetail :map-detail="currentMap" />
  </div>
</template>

<script lang="ts" setup>
import type { MapData } from "~/types";
const {t} = useI18n();

const MAPS_DATA_MB: MapData[] = [
  {
    id: '1',
    title: t("maps.mayaMapTitle"),
    name: t("maps.maya"),
    detailTitle: t("maps.mayaTitle"),
    detail: t("maps.mayaMapDesc"),
    map: "/images/pages/maps-img-1.png",
    image: "/images/pages/maps-header-1.png",
  },
  {
    id: '2',
    title: t("maps.anasaziMapTitle"),
    name: t("maps.anasazi"),
    detailTitle: t("maps.anasaziTitle"),
    detail: t("maps.anasaziMapDesc"),
    map: "/images/pages/maps-img-4.png",
    image: "/images/pages/maps-header-4.png",
  },
  {
    id: '3',
    title: t("maps.indusMapTitle"),
    name: t("maps.indus"),
    detailTitle: t("maps.indusTitle"),
    detail: t("maps.indusMapDesc"),
    image: "/images/pages/maps-header-2.png",
    map: "/images/pages/maps-img-2.png",
  },
  {
    id: '4',
    title: t("maps.vikingMapTitle"),
    name: t("maps.viking"),
    detailTitle: t("maps.vikingTitle"),
    detail: t("maps.vikingMapDesc"),
    image: "/images/pages/maps-header-3.png",
    map: "/images/pages/maps-img-3.png",
  },
  {
    id: '5',
    title: t("maps.egyptMapTitle"),
    name: t("maps.egypt"),
    detailTitle: t("maps.egyptTitle"),
    detail: t("maps.egyptMapDesc"),
    image: "/images/pages/maps-header-5.png",
    map: "/images/pages/maps-img-5.png",
  },
  {
    id: '6',
    title: t("maps.greekMapTitle"),
    name: t("maps.greek"),
    detailTitle: t("maps.greekTitle"),
    detail: t("maps.greekMapDesc"),
    image: "/images/pages/maps-header-6.png",
    map: "/images/pages/maps-img-6.png",
  },
  {
    id: '7',
    title: t("maps.atlantisMapTitle"),
    name: t("maps.atlantis"),
    detailTitle: t("maps.atlantisTitle"),
    detail: t("maps.atlantisMapDesc"),
    image: "/images/pages/maps-header-7.png",
    map: "/images/pages/maps-img-7.png",
  },
  {
    id: '8',
    title: t("maps.asgardMapTitle"),
    name: t("maps.asgard"),
    detailTitle: t("maps.asgardTitle"),
    detail: t("maps.asgardMapDesc"),
    image: "/images/pages/maps-header-8.png",
    map: "/images/pages/maps-img-8.png",
  }
];
const currentMap = ref(MAPS_DATA_MB[0]);

// methods
const changeMap = (map: MapData) => {
  currentMap.value = map;
};
</script>
