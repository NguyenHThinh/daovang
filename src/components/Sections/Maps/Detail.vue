<template>
  <section class="maps-content" id="maps-detail">
      <div class="container">
        <div class="tab-content" id="mapTabContent">
          <div
            class="tab-pane fade show active"
            id="mapTab1"
            role="tabpanel"
            aria-labelledby="mapTab1-tab"
          >
            <div class="row">
              <div class="col-md-6">
                <div class="el__item--content">
                  <div class="el__item--title">{{ mapDetail.detailTitle }}</div>
                  <div class="el__item--excerpt">
                    {{ mapDetail.detail }}
                  </div>
                  <div class="text-start">
                    <a href="" class="btn--playnow">{{ $t("common.playNow") }}</a>
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