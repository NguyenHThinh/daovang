<template>
  <div class="text-center">
    <div class="languages">
      <div class="languages-item" @click="toggleSwitchLanguage">
        <img :src="currentLanguage.flag" alt="ENG" /><span>{{
          currentLanguage.name
        }}</span>
      </div>
      <ul :class="[{ 'dropdown-languages': isOpenSwitchLanguage }]">
        <li
          :class="[{ active: currentLanguage.id === language.id }]"
          v-for="language in LANGUAGE_DATA"
          :key="language.id"
          @click="handleSwitchLanguage(language)"
        >
          <img :src="language.flag" alt="ENG" /><span>{{ language.name }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts" setup>
const LANGUAGE_DATA = [
  {
    id: 1,
    name: "English",
    flag: "/_nuxt/assets/flag/en.png",
  },
  {
    id: 2,
    name: "Viet Nam",
    flag: "/_nuxt/assets/flag/vi.png",
  },
  {
    id: 3,
    name: "China",
    flag: "/_nuxt/assets/flag/zh.png",
  },
];

const isOpenSwitchLanguage = ref(false);
const toggleSwitchLanguage = () => {
  isOpenSwitchLanguage.value = !isOpenSwitchLanguage.value;
};

const currentLanguage = ref(LANGUAGE_DATA[0]);

const handleSwitchLanguage = (language: any) => {
  currentLanguage.value = language;
  isOpenSwitchLanguage.value = false;
};
</script>

<style scoped>
img {
  object-fit: cover;
}
</style>