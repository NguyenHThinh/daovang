<template>
  <section class="home-discover">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-5">
          <div class="home-discover--paper wow fadeInUp">
            <h2 class="home-discover--title">
              {{ $t("discover.playToDiscover") }} <br />{{ $t("discover.theNewRevolution") }}
            </h2>
            <div class="home-discover--excerpt">{{ $t("discover.treasureHunter") }}</div>
            <ul class="home-discover--list row g-3">
              <li class="col-4 home-discover--list__item">
                <a href="#">{{ $t("nav.market") }}</a>
              </li>
              <li class="col-4 home-discover--list__item">
                <a href="#">facebook</a>
              </li>
              <li class="col-4 home-discover--list__item">
                <a href="#">discord </a>
              </li>
            </ul>
            <div class="text-center">
              <a href="" class="btn--playnow">{{ $t("common.playNow") }}</a>
            </div>
          </div>
        </div>
        <div class="col-lg-7">
          <div class="row">
            <div class="el__col col-md-4 col-lg-31">
              <div class="el__item">
                <div class="el__item--thumb">
                  <div class="dnfix__thumb -contain">
                    <img src="/images/home-discover-img-1.png" alt="" />
                  </div>
                </div>
                <div class="el__item--meta">
                  <h3 class="el__item--title">{{ $t("discover.adventure") }}</h3>
                </div>
              </div>
            </div>
            <div class="el__col col-md-4 col-lg-38 -large">
              <div class="el__item">
                <div class="el__item--thumb">
                  <div class="dnfix__thumb -contain">
                    <img src="/images/home-discover-img-2.png" alt="" />
                  </div>
                </div>
                <div class="el__item--meta">
                  <h3 class="el__item--title">{{ $t("discover.breeding") }}</h3>
                </div>
              </div>
            </div>
            <div class="el__col col-md-4 col-lg-31">
              <div class="el__item">
                <div class="el__item--thumb">
                  <div class="dnfix__thumb -contain">
                    <img src="/images/home-discover-img-3.png" alt="" />
                  </div>
                </div>
                <div class="el__item--meta">
                  <h3 class="el__item--title">{{ $t("discover.forge") }}</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup></script>

<style scoped>
@media (min-width: 992px) and (max-width: 1200px) {
  .home-discover--list {
    justify-content: center;
  }
  .home-discover--list__item {
    width: 50%;
  }
}
</style>
