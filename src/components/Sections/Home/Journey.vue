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
