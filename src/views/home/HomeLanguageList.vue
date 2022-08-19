<script setup>
const languageList = [
  'JavaScript',
  'HTML/CSS',
  'SQL',
  'Java',
  'Bash/Shell',
  'Bash/Shell',
  'Python',
  'PHP',
  'C++',
  'TypeScript',
];
</script>

<template>
  <div class="bg-ct-dark-light py-10 lg:py-20 relative overflow-hidden">
    <div class="container">
      <h3 class="heading-3 text-center">你想要學習的程式，都在這裡</h3>
      <div class="w-[50px] h-[3px] bg-ct-green mx-auto mb-6"></div>
      <ul class="whitespace-nowrap transition-all duration-500">
        <li
          class="inline-block mr-4 text-white font-sanstc font-bold p-4 md:px-6 border border-white rounded-lg"
          v-for="lan in languageList"
          :key="lan"
        >
          {{ lan }}
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped></style>
