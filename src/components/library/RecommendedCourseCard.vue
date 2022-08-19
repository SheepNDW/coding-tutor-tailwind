<script setup>
defineProps({
  title: String,
  category: String,
  desc: String,
  price: String,
  teacher: String,
  avatar: String,
});
</script>

<template>
  <div
    class="bg-ct-dark-light py-6 rounded-3xl text-white font-sanstc transition-all border-2 border-transparent hover:border-ct-green"
  >
    <div class="mx-auto px-8 lg:px-6">
      <div class="w-[100px] h-[100px] rounded-full mx-auto">
        <img class="block max-w-full rounded-full" :src="avatar" alt="teacher avatar" />
      </div>
      <div class="text-base text-center mt-2 mb-6">{{ teacher }}</div>
      <div>
        <h4 class="text-xl font-bold mb-2 md:h-14">{{ title }}</h4>
        <p class="text-base text-ct-green mb-2">{{ category }}</p>
        <p class="text-base">
          {{ desc }}
        </p>
      </div>
    </div>
    <div class="w-full h-[2px] bg-[#C1C1C1] bg-opacity-70 my-4"></div>
    <div class="mx-auto px-8 lg:px-6">
      <p class="text-base flex items-center justify-center">
        50分鐘<span class="text-[32px] font-azeret ml-2">NT${{ price }}</span>
      </p>
    </div>
  </div>
</template>
