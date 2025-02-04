<template>
  <div>
    <section class="home-journey">
      <a @click="handleShowModal" class="home-journey--paper wow fadeInUp"></a>
    </section>
    <!-- Modal -->
    <div
      class="modal modalpaper wow fade"
      id="homejourneyModal"
      :class="[isShowModal ? 'show' : '']"
    >
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <button
            type="button"
            class="btn-close"
            @click="handleCloseModal"
          ></button>
          <div class="modal-body">
            <div class="wrap">
              <div class="popup__title">{{ $t("journey.journeyOfDiscovery") }}</div>
              <div class="popup__excerpt">{{ $t("journey.journeyOfDiscoveryDetail") }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const isShowModal = ref(false);

const handleShowModal = () => {
  isShowModal.value = true;
};
const handleCloseModal = () => {
  isShowModal.value = false;
};
</script>

<style scoped>
/*
======================================
[ Home Journey ]
======================================
*/
.home-journey {
  position: relative;
  background: url(assets/img/home-journey-bg-mb.jpg) no-repeat center;
  background-size: 100% 100%;
  overflow: hidden;
  padding: 39.6% 0;
}
.home-journey--paper {
  position: absolute;
  top: 11.5%;
  left: 30%;
  width: 50%;
  height: 61%;
  background: url(assets/img/home-journey-paper-mb.png) no-repeat center;
  background-size: contain;
}
</style>
