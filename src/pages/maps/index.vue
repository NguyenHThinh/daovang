<template>
  <NuxtLayout name="base-layout">
    <SectionsMapsTabs :mapdata="MAPS_DATA" :map-detail="currentMap" @update:map-detail="changeMap" class="desktop"/>
    
    <SectionsMapsDetail :map-detail="currentMap" class="desktop"/>

    <SectionsMobiMapPage class="mobile" />

  </NuxtLayout>
</template>

<script lang="ts" setup>
import type { MapData } from '~/types';

const MAPS_DATA: MapData[] = [
  {
    id: '1',
    title: "MAYA CIVILIZATION - JOURNEY TO MAYA",
    name: "MAYA",
    map: "/images/pages/maps-img-1.png",
    image: "/images/pages/maps-header-1.png",
    detailTitle: "JOURNEY TO MAYA",
    detail: 'While preparing for the expedition, Vincent accidentally discovered a precious "treasure" preserved in an old chest - an old compass, a necklace with a stone and a piece of paper .... "Oh it\'s an ancient map of Maya from several millennia ago," Vincent said. Vincent decided to go alone to the area being excavated by archaeologists - the Chaco ravine. There, the stone he once found in the warehouse emits a source of energy waves that interact with the waves emitted in the ravine, unintentionally warping space and time, bringing Vincent back to the Maya era and the story of Transfer your journey is started.',
  },
  {
    id: '2',
    title: "ANASAZI CIVILIZATION - ENDLESS MYSTERIES",
    name: "ANASAZI",
    map: "/images/pages/maps-img-4.png",
    image: "/images/pages/maps-header-4.png",
    detailTitle: "ENDLESS MYSTERIES",
    detail: 'This time Vincent uses the map to continue his journey towards the sunrise and reach the Anasazi land. As soon as he landed at the dock, what Vincent saw was a parched land. After conversing with the people, Vincent learns that this is the kingdom of the sun, but the drought has been too long and their queen is in a coma.',
  },
  {
    id: '3',
    title: "INDUS CIVILIZATION - MYSTERY OF INDUS",
    name: "INDUS",
    image: "/images/pages/maps-header-2.png",
    detailTitle: "MYSTERY OF INDUS",
    map: "/images/pages/maps-img-2.png",
    detail: 'The portal opens to lead Vincent to the Indus valley, where Vincent begins to wander in search of more clues from this land. Looking through the mist of the valley, Vincent discovered a village devastated by natural disasters left in ruins. What is the secret in this village?',
  },
  {
    id: '4',
    title: "VIKING CIVILIZATION - A GLORIOUS VIKING ERA",
    name: "VIKING",
    image: "/images/pages/maps-header-3.png",
    detailTitle: "A GLORIOUS VIKING ERA",
    map: "/images/pages/maps-img-3.png",
    detail: 'Vincent continued his journey on a boat that started on the banks of the Nile, while moving, Vincent was caught in a vortex that took Vincent to the Atlantic Ocean, where Vincent encountered the Vikings and was captured. ships, must hand over resources. Vincent was brought back to Scotland, where the Vikings were occupying.',
  },
  {
    id: '5',
    title: "EGYPT CIVILIZATION - CRADLE OF HUMAN CIVILIZATION",
    name: "EGYPT",
    image: "/images/pages/maps-header-5.png",
    map: "/images/pages/maps-img-5.png",
    detailTitle: "CRADLE OF HUMAN CIVILIZATION",
    detail: "While searching for clues about the last piece, Vincent bumped into Marp while he was being chased in the old market. Marp is an honest and intelligent boy. Having witnessed his mother's death because he did not have money for medical treatment, he always had thoughts about social justice in his heart. Legend has it that, in the tombs of the Pharaoh there are many valuable treasures, knowing that Vincent is going to Pharaoh's Land to seek knowledge about humanity, Marp decided to follow him there.",
  },
  {
    id: '6',
    title: "GREEK CIVILIZATION - FINDING ANCIENT GREEK CIVILIZATION",
    name: "GREEK",
    image: "/images/pages/maps-header-6.png",
    map: "/images/pages/maps-img-6.png",
    detailTitle: "FINDING ANCIENT GREEK CIVILIZATION",
    detail: "The small village in Greece is the next point that Vincent stops to find more clues about the puzzle piece in this land. Unintentionally, Vincent met Layla crying. After a long conversation, Layla told Vincent her opposite love story. Layla fell in love with Hercules, so he asked for the arrow of the cupid god Eros. But unfortunately the arrow hit the wrong Zeus – the Supreme God. Layla despairs because Zeus threatens that if she doesn't accept to be his wife, he will bring all the disaster on the Greek people. Vincent decides to help the girl get the love of his life. Layla leads Vincent to find the gods for help.",
  },
  {
    id: '7',
    title: "ATLANTIS CIVILIZATION - THE JOURNEY TO FIND THE LOST CIVILIZATION",
    name: "ATLANTIS",
    image: "/images/pages/maps-header-7.png",
    map: "/images/pages/maps-img-7.png",
    detailTitle: "THE JOURNEY TO FIND THE LOST CIVILIZATION",
    detail: 'Vincent continues his journey on the ship obtained from the battle with the Vikings, thanks to the map, Vincent has reached the mysterious island of Atlantis, where the 4th puzzle piece, the seemingly puzzle piece, is kept. as the hardest to find. Note: Thanks to the energy emitted from the Trident of Neptune (TON), the city of Atlantis was able to float on water and was the most prosperous and advanced city. This city is the domain of Poseidon, Poseidon is the law, the supreme being, anyone who resists is to bring himself to death. There are many slaves who are being forced to build his statue, in order to show the power and authority of Poseidon.',
  },
  {
    id: '8',
    title: "ASGARDIAN CIVILIZATION",
    name: "ASGARD",
    image: "/images/pages/maps-header-8.png",
    map: "/images/pages/maps-img-8.png",
    detailTitle: "ASGARDIAN CIVILIZATION",
    detail: 'Comming soon',
  }
];
useHead({
  title: "Maps | Treasure Hunter",
});

const currentMap = ref(MAPS_DATA[2]);

// methods
const changeMap = (map: MapData) => {
  currentMap.value = map;
};
</script>
