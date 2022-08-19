<script setup></script>

<template>
  <div
    class="h-[336px] bg-[url(@/assets/images/bg_home_mobile.jpg)] bg-center bg-cover bg-no-repeat flex items-center justify-center md:bg-[url(@/assets/images/bg_home.jpg)] md:h-[680px]"
  >
    <div
      class="relative bg-[#202020] font-sanstc text-white text-center border border-white py-8 px-7 md:py-12 md:px-20"
    >
      <div class="square absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2"></div>
      <div class="square absolute top-0 left-full -translate-x-1/2 -translate-y-1/2"></div>
      <div class="square absolute top-full left-0 -translate-x-1/2 -translate-y-1/2"></div>
      <div class="square absolute top-full left-full -translate-x-1/2 -translate-y-1/2"></div>
      <h2 class="font-bold text-2xl md:text-5xl md:leading-[62px]">
        <span class="bg-gradient-to-b from-ct-blue to-ct-green bg-clip-text text-transparent"
          >全台最豐富的程式家教</span
        ><br />
        在實踐中化理想為現實
      </h2>
      <span class="block mt-6 text-sm font-light md:text-[18px]"
        >全台最專業師資｜到府程式家教｜客製化課程</span
      >
    </div>
  </div>
</template>

<style scoped>
.square {
  @apply w-[10px] h-[10px] bg-white;
}
</style>
