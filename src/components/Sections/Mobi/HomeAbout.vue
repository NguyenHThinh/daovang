<template>
  <div class="">
    <section id="home-about" class="home-story">
      <div class="videoWrapper">
        <video src="/images/home-about-pc.mp4" loop muted autoplay></video>
      </div>
      <a @click="handleShowModal" class="home-story--paper wow fadeInRight"></a>
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
              <div class="popup__title">{{ $t("about.vicentStory") }}</div>
              <div class="popup__excerpt">{{ $t("about.vicentStoryDetail") }}</div>
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
.home-story {
  position: relative;
  overflow: hidden;
  margin-bottom: -7px;
}
.home-story--paper {
  position: absolute;
  width: 40%;
  height: 34%;
  top: 5.5%;
  right: 15px;
  background: url(/assets/img/paper.png) no-repeat center;
  background-size: contain;
}
.home-story .videoWrapper {
  padding-bottom: 155%;
}
.videoWrapper video {
    height: 100%;
    object-fit: cover;
    object-position: 15% 60%;
}
</style>
