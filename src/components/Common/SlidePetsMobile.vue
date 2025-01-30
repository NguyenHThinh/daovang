<template>
  <div class="slide__container">
    <ClientOnly>
      <swiper-container
        ref="slidePetsRef"
        class="home-collection-mb__slider"
        :init="false"
      >
        <swiper-slide v-for="pet in COLLECTION_PETS_DATA" :key="pet.id">
          <div class="el__item">
            <div class="el__item--thumb">
              <div class="dnfix__thumb -contain">
                <NuxtImg :src="pet.img" alt="" />
              </div>
            </div>
          </div>
        </swiper-slide>
      </swiper-container>
    </ClientOnly>
    <div class="pets-mb-pagination"></div>
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
  },
];

const slidePetsRef = ref(null);
useSwiper(slidePetsRef, {
  slidesPerView: 3,
  spaceBetween: 20,
  centeredSlides: true,
  loop: true,
  navigation: {
    nextEl: ".pets-button-next",
    prevEl: ".pets-button-prev",
  },
  pagination: {
    el: ".pets-mb-pagination",
    clickable: true,
    bulletClass: "dot pets-mb-pagination-bullet",
    bulletActiveClass: "pets-mb-pagination-bullet-active",
  },
});
</script>

<style>
.home-collection-mb__slider {
  background: url(assets/img/home-collection-shadow-mb.png) no-repeat center;
  background-size: 100% 100%;
  max-width: 414px;
  margin: 0 auto;
}
.home-collection-mb__slider .slick-dots li button {
  width: 10px;
}

.home-collection-mb .slick-prev {
  left: 0;
}
.home-collection-mb .slick-next {
  right: 0;
}
.home-collection-mb .dnfix__thumb {
  padding-top: 100%;
}
.home-collection-mb .el__item--thumb {
  max-width: 230px;
  margin: auto;
}
.home-collection-mb--buy:hover {
  transform: translateY(-2px);
}
.home-collection-mb .el__item {
  padding: 30px 15px;
}
.home-collection-mb__slider:before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 25%;
  height: 100%;
  margin-left: var(--bs-gutter-x, -0.75rem);
  background: linear-gradient(
    to right,
    #1e100f 0%,
    rgba(196, 196, 196, 0) 87.02%
  );
  z-index: 1;
  pointer-events: none;
}
.home-collection-mb__slider:after {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  width: 25%;
  margin-right: var(--bs-gutter-x, -0.75rem);
  height: 100%;
  background: linear-gradient(
    to left,
    #1e100f 0%,
    rgba(196, 196, 196, 0) 87.02%
  );
  z-index: 1;
  pointer-events: none;
}
.home-collection-mb .el__item--thumb {
  transition: all 0.5s;
}
.home-collection-mb .swiper-slide-active .el__item {
  transform: scale(1.5);
  transition: all .3s linear;
}
/* Pagination slide */
.pets-mb-pagination {
  width: max-content;
  margin: 0 auto;
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 20px;
}
.pets-mb-pagination .dot.pets-mb-pagination-bullet {
  cursor: pointer;
  display: block;
  width: 15px;
  height: 4px;
  outline: none;
  background-color: #533836;
  border-radius: 100px;
  transition: all 0.3s ease-in-out;
}
.pets-mb-pagination .dot.pets-mb-pagination-bullet:hover {
  background-color: #ffdc4d;
}

.pets-mb-pagination
  .dot.pets-mb-pagination-bullet.pets-mb-pagination-bullet-active {
  background-color: #ffdc4d;
}
</style>
