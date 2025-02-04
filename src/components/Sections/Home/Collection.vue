<template>
  <section class="home-collection">
    <div class="container">
      <div class="home-collection__box wow fadeInUp">
        <div class="row home-collection__box__contain">
          <div class="col-6 col--left">
            <CommonSlidePets />
          </div>
          <div class="col-6 col--right">
            <div class="home-collection--title">{{ $t("collection.petCollection") }}</div>
            <div class="home-collection--excerpt">{{ $t("collection.lovelyPets") }}<br />{{ $t("collection.someScary") }}
            </div>
            <div>
              <a href="" class="home-collection--buy">{{ $t("common.buyPet") }}</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.home-collection__box__contain {
  flex-direction: column;
}
.home-collection__box__contain > div {
  width: 100%;
}

@media (min-width: 1200px) {
  .home-collection__box__contain {
    flex-direction: row;
  }
  .home-collection__box__contain > div {
    width: 50%;
  }
}
</style>
