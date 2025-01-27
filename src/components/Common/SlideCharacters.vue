<template>
  <div class="slide__container wow fadeInUp">
    <ClientOnly>
      <swiper-container
        ref="slideCharactersRef"
        :init="false"
        class="home-character__slider"
      >
        <swiper-slide v-for="character in CHARACTERS_DATA" :key="character.id">
          <div class="el__item">
            <a href="#">
              <div class="dnfix__thumb -contain">
                <NuxtImg loading="lazy" :src="character.img" alt="" />
              </div>
            </a>
          </div>
        </swiper-slide>
      </swiper-container>
    </ClientOnly>
    <div class="control__slider">
      <div class="character-button-prev">
        <NuxtImg loading="lazy" src="/images/slide-next.png" alt="prev-btn" />
      </div>
      <div class="character-button-next">
        <NuxtImg loading="lazy" src="/images/slide-next.png" alt="next-btn" />
      </div>
    </div>
    <div class="character-pagination"></div>
  </div>
</template>

<script lang="ts" setup>
const CHARACTERS_DATA = [
  {
    id: 1,
    img: "/images/home-character-1.png",
  },
  {
    id: 2,
    img: "/images/home-character-2.png",
  },
  {
    id: 3,
    img: "/images/home-character-3.png",
  },
  {
    id: 4,
    img: "/images/home-character-4.png",
  },
  {
    id: 5,
    img: "/images/home-character-5.png",
  },
  {
    id: 6,
    img: "/images/home-character-6.png",
  },
  {
    id: 7,
    img: "/images/home-character-7.png",
  },
  {
    id: 8,
    img: "/images/home-character-8.png",
  },
];

const slideCharactersRef = ref(null);
useSwiper(slideCharactersRef, {
  slidesPerView: 4,
  spaceBetween: 10,
  loop: true,
  navigation: {
    nextEl: ".character-button-next",
    prevEl: ".character-button-prev",
  },
  pagination: {
    el: ".character-pagination",
    clickable: true,
    bulletClass: "dot character-pagination-bullet",
    bulletActiveClass: "character-pagination-bullet-active",
  },
  breakpoints: {
    0: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 4,
    },
  },
});
</script>

<style>
.slide__container {
  position: relative;
}
.control__slider {
  width: 100%;
  position: absolute;
  top: 50%;
  display: flex;
  justify-content: space-between;
  transform: translateY(-50%);
}
.character-button-prev {
  width: max-content;
  transform: translateX(-100%);
}
.character-button-next {
  width: max-content;
  transform: translateX(100%) rotate(180deg);
}
.character-pagination {
  width: max-content;
  margin: 0 auto;
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 20px;
}
.character-pagination .dot.character-pagination-bullet {
  cursor: pointer;
  display: block;
  width: 24px;
  height: 4px;
  outline: none;
  background-color: #533836;
  border-radius: 100px;
  transition: all 0.3s ease-in-out; 
}
.character-pagination .dot.character-pagination-bullet:hover {
  background-color: #FFDC4D;
}

.character-pagination .dot.character-pagination-bullet.character-pagination-bullet-active {
  background-color: #FFDC4D;
}
</style>
