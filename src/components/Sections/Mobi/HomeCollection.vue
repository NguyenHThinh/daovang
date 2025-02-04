<template>
  <section class="home-collection-mb">
      <div class="container">
        <div class="home-collection-mb__box wow fadeInUp">
            <div>
              <div class="home-collection-mb--title">{{ $t("collection.petCollection") }}</div>
              <div class="home-collection-mb--excerpt">
                {{ $t("collection.lovelyPets") }}<br />{{ $t("collection.someScary") }}
              </div>
            </div>
              <CommonSlidePetsMobile :pets="COLLECTION_PETS_DATA" />
              <div class="text-center">
                <a href="#" class="home-collection-mb--buy"></a>
              </div>
        </div>
      </div>
    </section>
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

</script>

<style scoped>
.home-collection-mb{padding:50px 0 0;text-align:center;}
.home-collection-mb__box{position:relative;z-index:10; background: none;}

.home-collection-mb--title {
  font-family: "Bungee", cursive;
  font-size: 20px;
  line-height: 34px;
  color: #ffdc4d;
  text-shadow: -2px 0 0px #1d1a1a, 0 2px 0px #1d1a1a, 2px 0 0px #1d1a1a,
    0 -2px 0px #1d1a1a;
  margin-bottom: 10px;
}
.home-collection-mb--excerpt {
  font-weight: bold;
  font-size: 14px;
  line-height: 28px;
  color: #fff;
  margin-bottom: 30px;
}
.home-collection-mb--buy {
  position: relative;
  display: block;
  width: 218px;
  height: 106px;
  margin: auto;
  background: url(assets/img/home-collection--buy-mb.png) no-repeat center;
  background-size: 100% 100%;
  transition: all 0.5s;
}
</style>