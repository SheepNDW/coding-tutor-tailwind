<script setup></script>

<template>
  <div class="bg-ct-dark-light py-10 lg:py-20">
    <div class="container grid grid-cols-12 gap-6">
      <div class="col-span-12 lg:col-start-1 lg:col-end-3 lg:self-center">
        <h3 class="heading-3 text-center lg:text-left">手把手帶你<br />親自到家教到會</h3>
        <div class="w-[50px] h-[3px] bg-ct-green mx-auto mb-6 lg:ml-0"></div>
      </div>
      <div class="col-span-12 lg:col-start-4 lg:col-end-13 grid gap-6 lg:grid-cols-3">
        <div
          class="bg-[#202020] border border-transparent lg:bg-ct-dark-light hover:bg-[#202020] hover:border-ct-green py-12 px-6 rounded-[12px] font-sanstc text-center"
        >
          <span class="material-icons-outlined icon-gradient mx-auto mb-6 text-5xl">code</span>
          <p class="text-lg font-bold mb-4 text-white">超過 100 種專業課程</p>
          <p class="text-lg font-normal text-white">
            學習標準化的電腦形式語言<br />培養運算思維和邏輯素養
          </p>
        </div>
        <div
          class="bg-[#202020] border border-transparent lg:bg-ct-dark-light hover:bg-[#202020] hover:border-ct-green py-12 px-6 rounded-[12px] font-sanstc text-center"
        >
          <span class="material-icons-round icon-gradient mx-auto mb-6 text-5xl">
            rocket_launch
          </span>
          <p class="text-lg font-bold mb-4 text-white">高效學習</p>
          <p class="text-lg font-normal text-white">客製化專屬課表<br />讓學習變簡單</p>
        </div>
        <div
          class="bg-[#202020] border border-transparent lg:bg-ct-dark-light hover:bg-[#202020] hover:border-ct-green py-12 px-6 rounded-[12px] font-sanstc text-center"
        >
          <span class="material-icons-round icon-gradient mx-auto mb-6 text-5xl">location_on</span>
          <p class="text-lg font-bold mb-4 text-white">指定地點</p>
          <p class="text-lg font-normal text-white">專業老師到你指定的地點<br />一對一高效學習</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.icon-gradient {
  @apply bg-clip-text bg-gradient-to-b from-ct-blue to-ct-green text-transparent;
}
</style>
