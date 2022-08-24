<script setup>
import CateSwiper from '../../components/library/CateSwiper.vue';
import { useCourseStore } from '../../stores/course';

const categories = [
  '所有課程',
  '行動應用開發',
  '資料庫/資料科學',
  '前端語言',
  '後端語言',
  '作業系統與伺服器',
];

const store = useCourseStore();
const { courseList } = store;
</script>

<template>
  <main class="bg-ct-dark py-10 lg:py-20">
    <div class="container overflow-hidden">
      <CateSwiper :slides="categories" />
      <div
        class="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-y-6 gap-x-6 lg:gap-y-8 lg:gap-x-0"
      >
        <div
          class="lg:col-start-2 lg:col-end-12 bg-ct-dark-light py-8 lg:p-12 rounded-3xl text-white font-sanstc transition-all border-2 border-transparent hover:border-ct-green"
          v-for="item in courseList"
          :key="item.id"
        >
          <div class="mx-auto px-6 lg:px-0 block lg:flex lg:items-start">
            <div>
              <div class="w-[100px] h-[100px] rounded-full mx-auto">
                <img
                  class="block max-w-full rounded-full"
                  :src="item.avatar"
                  alt="teacher avatar"
                />
              </div>
              <div class="text-base text-center mt-2">{{ item.teacher }}</div>
            </div>
            <div class="mt-6 lg:mt-1.5 lg:ml-12 lg:w-[60%]">
              <h4 class="text-xl lg:text-2xl font-bold mb-2 lg:mb-1 md:h-14 lg:h-auto">
                {{ item.title }}
              </h4>
              <p class="text-base text-ct-green mb-2">{{ item.category }}</p>
              <p class="text-base mb-6">
                {{ item.desc }}
              </p>
            </div>
            <div class="lg:ml-[88px]">
              <p class="text-base flex flex-row lg:flex-col gap-2 items-center justify-center mb-4">
                50分鐘<span class="text-[32px] font-azeret">NT${{ item.price }}</span>
              </p>
              <div class="flex flex-row lg:flex-col gap-2 justify-center">
                <button
                  class="block rounded-lg border border-white py-2 px-8 text-lg text-white font-sanstc"
                >
                  課程介紹
                </button>
                <button class="gradient-btn text-lg">立即預約</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped></style>
