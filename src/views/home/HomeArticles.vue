<script setup>
const articleShare = [
  {
    title: '2022 前端開發者學習地圖',
    desc: '轉職為前端的這條職業路上該如何發展？本篇為前端開發者提供學習地圖參考',
    picture:
      'https://raw.githubusercontent.com/hexschool/2022-web-layout-training/main/week6-202207/article01.jpg',
  },
  {
    title: '軟體工程師有哪些類別',
    desc: '軟體工程師領域廣闊，許多人仍然對此相關職務感到陌生，本篇就介紹主流的軟體工程師職務',
    picture:
      'https://raw.githubusercontent.com/hexschool/2022-web-layout-training/main/week6-202207/article02.jpg',
  },
  {
    title: '免費 25 小時前端教學資源',
    desc: '這篇文章規劃了適合「前端工程師」的學習地圖，讓新進的學生了解如何選擇課程',
    picture:
      'https://raw.githubusercontent.com/hexschool/2022-web-layout-training/main/week6-202207/article03.jpg',
  },
];
</script>

<template>
  <div class="bg-ct-dark py-10 lg:py-20">
    <div class="container">
      <div class="heading-3 text-center">文章分享</div>
      <div class="w-[50px] h-[3px] bg-ct-green mx-auto mb-6"></div>
      <div class="grid gap-6 md:grid-cols-3">
        <div
          class="relative text-white font-sanstc lg:p-8 group"
          v-for="article in articleShare"
          :key="article.title"
        >
          <div
            class="squareRounded absolute top-0 left-0 border-l-2 border-t-2 rounded-tl-lg border-ct-green"
          ></div>
          <div
            class="squareRounded absolute top-0 right-0 border-r-2 border-t-2 rounded-tr-lg border-ct-green"
          ></div>
          <div
            class="squareRounded absolute bottom-0 left-0 border-l-2 border-b-2 rounded-bl-lg border-ct-green"
          ></div>
          <div
            class="squareRounded absolute bottom-0 right-0 border-r-2 border-b-2 rounded-br-lg border-ct-green"
          ></div>
          <div class="w-full mb-4">
            <img class="block max-w-full" :src="article.picture" alt="" />
          </div>
          <h4 class="font-bold text-lg mb-4">{{ article.title }}</h4>
          <p class="text-base mb-4">{{ article.desc }}</p>
          <a href="javascript:;" class="block mr-0 font-azeret text-ct-green text-lg text-right">
            MORE
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.squareRounded {
  @apply hidden w-8 h-8 lg:group-hover:block;
}
</style>
