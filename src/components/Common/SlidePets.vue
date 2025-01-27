<template>
  <div class="slide__container">
    <ClientOnly>
      <swiper-container ref="slidePetsRef" class="home-collection__slider" :init="false">
        <swiper-slide v-for="pet in COLLECTION_PETS_DATA" :key="pet.id">
          <div class="el__item">
            <div class="el__item--thumb">
              <div class="dnfix__thumb -contain">
                <NuxtImg :src="pet.img" alt=""  />
              </div>
            </div>
          </div>
        </swiper-slide>
      </swiper-container>
    </ClientOnly>
    <div class="control__slider">
      <div class="pets-button-prev">
        <NuxtImg loading="lazy" src="/images/slide-next.png" alt="prev-btn" />
      </div>
      <div class="pets-button-next">
        <NuxtImg loading="lazy" src="/images/slide-next.png" alt="next-btn" />
      </div>
    </div>
    <div class="pets-pagination"></div>
  </div>
</template>

<script lang="ts" setup>
const COLLECTION_PETS_DATA = [
  {
    id: 1,
    img: "/images/home-collection-pet-1.png",
  },
  {
    id: 2,
    img: "/images/home-collection-pet-2.png",
  },
  {
    id: 3,
    img: "/images/home-collection-pet-3.png",
  },
  {
    id: 4,
    img: "/images/home-collection-pet-4.png",
  },
  {
    id: 5,
    img: "/images/home-collection-pet-5.png",
  },
  {
    id: 6,
    img: "/images/home-collection-pet-6.png",
  },
  {
    id: 7,
    img: "/images/home-collection-pet-7.png",
  },
  {
    id: 8,
    img: "/images/home-collection-pet-8.png",
  },
  {
    id: 9,
    img: "/images/home-collection-pet-9.png",
  },
  {
    id: 10,
    img: "/images/home-collection-pet-10.png",
  },
  {
    id: 11,
    img: "/images/home-collection-pet-11.png",
  },
  {
    id: 12,
    img: "/images/home-collection-pet-12.png",
  },
  {
    id: 13,
    img: "/images/home-collection-pet-13.png",
  }
];

const slidePetsRef = ref(null);
useSwiper(slidePetsRef, {
  slidesPerView: 1,
  loop: true,
  navigation: {
    nextEl: ".pets-button-next",
    prevEl: ".pets-button-prev",
  },
  pagination: {
    el: ".pets-pagination",
    clickable: true,
    bulletClass: "dot pets-pagination-bullet",
    bulletActiveClass: "pets-pagination-bullet-active",
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
  z-index: 1;
}
.pets-button-prev {
  width: max-content;
}
.pets-button-next {
  width: max-content;
  transform: rotate(180deg);
}
.pets-pagination {
  width: max-content;
  margin: 0 auto;
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 20px;
}
.pets-pagination .dot.pets-pagination-bullet {
  cursor: pointer;
  display: block;
  width: 16px;
  height: 4px;
  outline: none;
  background-color: #533836;
  border-radius: 100px;
  transition: all 0.3s ease-in-out; 
}
.pets-pagination .dot.pets-pagination-bullet:hover {
  background-color: #FFDC4D;
}

.pets-pagination .dot.pets-pagination-bullet.pets-pagination-bullet-active {
  background-color: #FFDC4D;
}
</style>