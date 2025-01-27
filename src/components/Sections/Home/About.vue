<template>
  <section id="home-about" class="home-story">
    <div class="videoWrapper">
      <video src="/images/home-about-pc.mp4" loop muted autoplay></video>
    </div>
    <a
      @click="handleShowModal"
      class="home-story--paper wow fadeInRight"
    ></a>
  </section>
  <div
      class="modal modalpaper wow fade"
      :class="[isShowModal ? 'show' : '']"
      id="homeaboutModal"
    >
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <button
            type="button"
            class="btn-close"
            @click="handleCloseModal"
          ></button>
          <div class="modal-body">
            <div class="-wrap">
              <div class="popup__title">VINCENT STORY</div>
              <div class="popup__excerpt">
                Vincent from his hometown to prepare for his journey. While
                preparing for the expedition, he accidentally found an old chest
                covered with dust in the warehouse. In that chest there is an old
                compass, a necklace with a stone and a piece of paper…. Oh so this
                is an ancient map of Anasazi from several millennia ago, Vincent
                said. Vincent decided to go alone to the area being excavated by
                archaeologists - the Chaco ravine. There, the stone he once found
                in the warehouse emits a source of energy waves that interact with
                the waves emitted in the ravine, unintentionally warping space and
                time, bringing Vincent back to the Anasazi era and the story of
                Transfer your journey is started.
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