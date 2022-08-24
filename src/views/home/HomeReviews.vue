<script setup>
import Swiper, { Navigation, Pagination, EffectFade } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import { ref, onMounted, onUnmounted } from 'vue';

const slidesContent = [
  {
    bgPicture:
      'https://raw.githubusercontent.com/hexschool/2022-web-layout-training/main/week6-202207/share.jpg',
    avatar:
      'https://raw.githubusercontent.com/hexschool/2022-web-layout-training/main/week6-202207/student01.jpg',
    title: '老師很有耐心',
    content:
      '老師手把手的細心教學，用手繪圖，以淺顯易懂的方式，讓零網頁基礎的我也能快速了解網頁的架構與原理，學網頁變得有趣多了！',
  },
  {
    bgPicture:
      'https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
    avatar:
      'https://raw.githubusercontent.com/hexschool/2022-web-layout-training/main/week6-202207/student02.jpg',
    title: '老師很有耐心',
    content:
      '老師手把手的細心教學，用手繪圖，以淺顯易懂的方式，讓零網頁基礎的我也能快速了解網頁的架構與原理，學網頁變得有趣多了！',
  },
  {
    bgPicture:
      'https://raw.githubusercontent.com/hexschool/2022-web-layout-training/main/week6-202207/share.jpg',
    avatar:
      'https://raw.githubusercontent.com/hexschool/2022-web-layout-training/main/week6-202207/student03.jpg',
    title: '老師很有耐心',
    content:
      '老師手把手的細心教學，用手繪圖，以淺顯易懂的方式，讓零網頁基礎的我也能快速了解網頁的架構與原理，學網頁變得有趣多了！',
  },
  {
    bgPicture:
      'https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
    avatar:
      'https://raw.githubusercontent.com/hexschool/2022-web-layout-training/main/week6-202207/student04.jpg',
    title: '老師很有耐心',
    content:
      '老師手把手的細心教學，用手繪圖，以淺顯易懂的方式，讓零網頁基礎的我也能快速了解網頁的架構與原理，學網頁變得有趣多了！',
  },
];

const swiper = ref(null);

onMounted(() => {
  swiper.value = new Swiper('.reviews-swiper', {
    // Optional parameters
    effect: 'fade',
    fadeEffect: {
      crossFade: true,
    },
    pagination: {
      el: '.swiper-pagination',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    modules: [Navigation, Pagination, EffectFade],
  });
});

onUnmounted(() => {
  swiper.value = null;
});
</script>

<template>
  <div
    class="bg-ct-dark md:bg-[url(@/assets/images/bg_share.jpg)] bg-center bg-cover bg-no-repeat py-10 lg:py-20"
  >
    <div class="container">
      <h3 class="heading-3 text-center">專屬你的學習課程<br />超過 3000 位學員得到了程式超能力</h3>
      <div class="w-[50px] h-[3px] bg-ct-green mx-auto mb-6 lg:mb-12"></div>
      <!-- swiper -->
      <div class="grid grid-cols-12">
        <div class="swiper reviews-swiper col-start-1 col-end-13 lg:col-start-3 lg:col-end-11">
          <!-- Additional required wrapper -->
          <div class="swiper-wrapper">
            <!-- Slides -->
            <div class="swiper-slide relative" v-for="(item, index) in slidesContent" :key="index">
              <div
                class="relative lg:absolute top-0 left-[5px] lg:left-[10px] w-[calc(100%_-_5px)] h-[213px] lg:w-[60%] lg:h-[90%] rounded-3xl mb-[40px]"
              >
                <img
                  class="block w-full h-full object-cover rounded-3xl swiper-img"
                  :src="item.bgPicture"
                  alt=""
                />
              </div>
              <div
                class="relative lg:absolute right-0 bottom-0 w-full lg:w-[45%] p-6 lg:p-8 font-sanstc rounded-3xl rounded-bl-none bg-white"
              >
                <h5 class="text-[#494755] text-lg font-bold">{{ item.title }}</h5>
                <p class="text-[#494755] text-base mt-4">{{ item.content }}</p>
                <img
                  class="absolute top-[-30px] right-[32px] bottom-auto transform-none w-[80px] h-[80px] rounded-full object-cover z-20"
                  :src="item.avatar"
                  alt="student"
                />
              </div>
            </div>
          </div>
          <div
            class="absolute left-1/2 -translate-x-1/2 lg:left-[20%] lg:translate-x-0 w-[150px] flex items-center justify-center z-10"
          >
            <div class="swiper-button-prev">
              <span class="material-icons">west</span>
            </div>
            <div class="swiper-pagination"></div>
            <div class="swiper-button-next">
              <span class="material-icons">east</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.swiper {
  @apply relative w-full h-[500px] lg:h-[429px];
}

.swiper-pagination-bullets.swiper-pagination-horizontal {
  width: auto;
  bottom: 0;
  left: auto;
}

.swiper-pagination .swiper-pagination-bullet {
  background-color: #62db54;
  opacity: 1;
}

.swiper-pagination .swiper-pagination-bullet-active {
  width: 16px;
  border-radius: 100px;
}

.swiper-button-next:after,
.swiper-button-prev:after {
  content: '';
}

.swiper-button-next,
.swiper-button-prev {
  @apply w-[24px] h-[24px] text-ct-green;
}
</style>
