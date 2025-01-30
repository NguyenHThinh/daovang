<template>
  <section class="maps-content" id="maps-detail">
    <div class="container">
      <div class="tab-content" id="mapTabContent">
        <div
          class="tab-pane fade show active"
        >
          <div class="row">
            <div class="col-md-6">
              <div class="el__item--content">
                <div class="el__item--title">{{ mapDetail.detailTitle }}</div>
                <div class="el__item--excerpt">{{ mapDetail.detail }}
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="el__item--thumb">
                <NuxtImg
                  :src="mapDetail.map"
                  class="img-fluid"
                  alt=""
                />
              </div>
              <div class="text-center">
                <a href="" class="btn--playnow-mb">Play now</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import type { MapData } from '~/types';
defineProps({
    mapDetail: {
        type: Object as PropType<MapData>,
        required: true
    }
})
</script>

<style scoped>
.maps-header .el__item--title{font-family:Bungee;font-size:24px;line-height:28px;color:#FFDC4D;text-shadow:1px 1px 2px #1D1A1A,1px 1px 2px #1D1A1A,1px 1px 2px #1D1A1A,1px 1px 2px #1D1A1A,1px 1px 2px #1D1A1A;margin-bottom:15px;}
.maps-header .el__item--sub{font-family:Bungee;font-size:16px;line-height:19px;color:#FFFAE9;text-shadow:1px 1px 2px #1D1A1A,1px 1px 2px #1D1A1A,1px 1px 2px #1D1A1A,1px 1px 2px #1D1A1A,1px 1px 2px #1D1A1A;}
.maps-content{padding:50px 0 80px;}
.maps-content .el__item--title{font-family:Bungee;font-size:20px;line-height:24px;color:#FFDC4D;text-shadow:1px 1px 2px #1D1A1A,1px 1px 2px #1D1A1A,1px 1px 2px #1D1A1A,1px 1px 2px #1D1A1A,1px 1px 2px #1D1A1A;margin-bottom:20px;}
.maps-content .el__item--excerpt{font-family:Nunito;font-weight:600;font-size:16px;line-height:32px;color:#FFFFFF;margin-bottom:40px;}
.maps-content .el__item--thumb{text-align:center; width: 80%; margin: 0 auto;}
.maps-content .el__item--content {
    padding-right: 0;
}
.btn--playnow-mb {
  display: inline-block;
  width: 220px;
  height: 80px;
  margin: 0 -25px;
  background: url(assets/img/button-sm.png) no-repeat center;
  background-size: contain;
  z-index: 10;
  transition: all 0.5s;
  font-family: Poppins;
  font-weight: bold;
  font-size: 18px;
  color: #321615;
  line-height: 74px;
  letter-spacing: -1px;
  text-align: center;
  text-shadow: 0px 4px 4px rgb(0 0 0 / 25%);
  text-transform: uppercase;
  -webkit-text-stroke: 1px #e16e25;
  -webkit-text-fill-color: #321615;
}
.btn--playnow-mb:hover {
  transform: translateY(-2px);
}
</style>