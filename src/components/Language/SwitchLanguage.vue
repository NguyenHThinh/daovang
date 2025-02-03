<template>
  <div class="text-center">
    <div class="languages">
      <div class="languages-item" @click="toggleSwitchLanguage">
        <NuxtImg :src="currentLanguage?.flag" alt="ENG" /><span>{{
          currentLanguage?.name
        }}</span>
      </div>
      <ul :class="[{ 'dropdown-languages': isOpenSwitchLanguage }]">
        <li
          :class="[{ active: language.code === locale }]"
          v-for="language in locales"
          :key="language.id"
          @click="setLocale(language.code)"
        >
          <img :src="language.flag" alt="ENG" /><span>{{ language.name }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts" setup>
const { locales, locale, setLocale } = useI18n();

const isOpenSwitchLanguage = ref(false);
const toggleSwitchLanguage = () => {
  isOpenSwitchLanguage.value = !isOpenSwitchLanguage.value;
};

const currentLanguage = ref(locales.value.find((i) => i.code === locale.value));
</script>

<style scoped>
img {
  object-fit: cover;
}
</style>
