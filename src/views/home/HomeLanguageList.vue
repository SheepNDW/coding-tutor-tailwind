<script setup>
import CateSwiper from '../../components/library/CateSwiper.vue';
const languageList = [
  'JavaScript',
  'HTML/CSS',
  'SQL',
  'Java',
  'Bash/Shell',
  'Python',
  'PHP',
  'C++',
  'TypeScript',
  'Node.js',
];
</script>

<template>
  <div class="bg-ct-dark-light py-10 lg:py-20 relative overflow-hidden">
    <div class="container">
      <h3 class="heading-3 text-center">你想要學習的程式，都在這裡</h3>
      <div class="w-[50px] h-[3px] bg-ct-green mx-auto mb-6"></div>
      <CateSwiper :slides="languageList" />
    </div>
  </div>
</template>

<style scoped></style>
