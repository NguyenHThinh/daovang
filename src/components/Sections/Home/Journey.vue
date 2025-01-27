<template>
  <section class="home-journey">
    <a
      @click="handleShowModal"
      class="home-journey--paper wow fadeInUp"
    ></a>
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
            <div class="popup__title">JOURNEY OF DISCOVERY</div>
            <div class="popup__excerpt">
              Treasure Hunter is a game of treasure seekers, everyone must fight
              to embark on difficult journeys to find the answer for
              themselves.Prepare yourself with the necessary gear to be able to
              start a long journey . Treasure Hunter is a game using advanced
              technology called Blockchain and the in-game rewards equivalent to
              crypto seem to be limitless
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
