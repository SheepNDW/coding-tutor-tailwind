<script setup>
import RecommendedCourseCard from '../../../components/library/RecommendedCourseCard.vue';
import { useCourseStore } from '../../../stores/course';

const store = useCourseStore();
const { courseList } = store;
</script>

<template>
  <div class="bg-ct-dark font-sanstc text-white py-10 lg:py-20">
    <div class="container grid xl:grid-cols-12 xl:gap-x-6 items-start">
      <div class="xl:col-start-2 xl:col-end-9 bg-ct-dark-light py-6 mb-[40px] lg:p-12 rounded-3xl">
        <div class="mx-auto px-6 lg:px-0 block lg:flex lg:items-start">
          <div>
            <div class="w-[100px] h-[100px] rounded-full mx-auto">
              <img
                class="block max-w-full rounded-full"
                src="https://raw.githubusercontent.com/hexschool/2022-web-layout-training/main/week6-202207/teacher01.jpg"
                alt="teacher avatar"
              />
            </div>
            <div class="text-base text-center mt-2">Belinda</div>
          </div>
          <div class="mt-6 lg:mt-1.5 lg:ml-12 lg:w-[60%]">
            <h4 class="text-xl lg:text-2xl font-bold mb-2 lg:mb-1 md:h-14 lg:h-auto">
              基礎前端 - HTML
            </h4>
            <p class="text-base text-ct-green mb-2">前端語言</p>
            <p class="text-base mb-6">
              帶領無基礎的平民老百姓，從最基礎的 HTML
              語法出發，使用最淺顯易懂的語言與生活隨處可見的例子，輕鬆進入網頁架設的世界，完成一個基礎的網頁架設。
            </p>
          </div>
        </div>
      </div>
      <div class="xl:col-start-2 xl:col-end-9 mb-[40px]">
        <h4 class="mb-4 text-xl">老師介紹</h4>
        <div class="bg-ct-dark-light py-6 px-6 lg:p-12 rounded-3xl">
          <div class="grid xl:grid-cols-[repeat(2,max-content)] xl:grid-rows-2 xl:gap-x-6">
            <div class="xl:cols-start-1 xl:cols-end-2 flex gap-2 mb-4">
              <i-ic:baseline-school class="text-ct-green text-xl" />
              <span class="text-[#C1C1C1] text-base flex-shrink-0">學歷</span>
              <p class="text-base">國立中央大學 資訊工程碩士 畢業</p>
            </div>
            <div class="xl:cols-start-1 xl:cols-end-2 xl:row-start-2 xl:row-end-3 flex gap-2 mb-4">
              <i-ic:round-home-repair-service class="text-ct-green text-xl" />
              <span class="text-[#C1C1C1] text-base flex-shrink-0">經歷</span>
              <p class="text-base">2020.08 - 迄今 上市企業 韌體工程師</p>
            </div>
            <div class="flex gap-2 mb-4">
              <i-ic:baseline-translate class="text-ct-green text-xl" />
              <span class="text-[#C1C1C1] text-base flex-shrink-0">語言</span>
              <p class="text-base">中文/英文</p>
            </div>
            <div class="flex gap-2">
              <i-ic:baseline-military-tech class="text-ct-green text-xl" />
              <span class="text-[#C1C1C1] text-base flex-shrink-0">等級</span>
              <p class="text-base">入門</p>
            </div>
          </div>
          <div class="w-full h-[1px] bg-[#C1C1C1] my-6"></div>
          <p class="text-base">
            目前任職於上市企業
            韌體工程師，撰寫各種微控制器韌體程式，如作業系統、系統軟體、裝置控制程式、驅動程式、網路應用程式、系統整合程式、數位訊號處理程式等。<br /><br />興趣是幫助他人學習程式語言，我相信，透過清楚的講解與示範，任何人都可以學好編寫程式與電腦科學中的複雜概念
          </p>
        </div>
      </div>
      <div class="xl:col-start-2 xl:col-end-9 mb-[40px]">
        <h4 class="mb-4 text-xl">課程簡介</h4>
        <div class="bg-ct-dark-light py-6 px-6 lg:p-12 rounded-3xl">
          <h6 class="pl-2 border-l-2 border-l-ct-green mb-4 text-lg">這堂課你將會學到：</h6>
          <ul class="mb-8">
            <li
              class="flex items-center before:content-[''] before:inline-block before:w-[5px] before:h-[5px] before:bg-ct-green before:mr-2"
            >
              網頁設計，基礎知識
            </li>
            <li
              class="flex items-center before:content-[''] before:inline-block before:w-[5px] before:h-[5px] before:bg-ct-green before:mr-2"
            >
              HTML 語法，概念實作能力
            </li>
            <li
              class="flex items-center before:content-[''] before:inline-block before:w-[5px] before:h-[5px] before:bg-ct-green before:mr-2"
            >
              CSS , Javascript 概念與知識
            </li>
            <li
              class="flex items-center before:content-[''] before:inline-block before:w-[5px] before:h-[5px] before:bg-ct-green before:mr-2"
            >
              能做出一個基礎的HTML 網頁
            </li>
          </ul>
          <h6 class="pl-2 border-l-2 border-l-ct-green mb-8 text-lg">
            什麼是 HTML，為什麼要打造網頁，就一定要先學它？
          </h6>
          <p>
            HTML元素是構建網站的基石。HTML允許嵌入圖像與物件，並且可以用於建立互動式表單，它被用來結構化資訊——例如標題、段落和列表等等，也可用來在一定程度上描述文件的外觀和語意。<br /><br />當你掌握了HTML，就可以開始規劃並建置你想要的網頁內容
            !
          </p>
        </div>
      </div>
      <div
        class="xl:col-start-9 xl:col-end-13 relative bg-ct-dark-light text-center border border-white py-10 px-6"
      >
        <div class="square absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2"></div>
        <div class="square absolute top-0 left-full -translate-x-1/2 -translate-y-1/2"></div>
        <div class="square absolute top-full left-0 -translate-x-1/2 -translate-y-1/2"></div>
        <div class="square absolute top-full left-full -translate-x-1/2 -translate-y-1/2"></div>
        <ul>
          <li class="flex justify-between items-center mb-4 pb-4 border-b border-b-white">
            <div class="text-left">
              <h6 class="font-azeret text-2xl">NT$1600</h6>
              <p class="text-base">1堂50分鐘</p>
            </div>
            <div
              class="flex items-center justify-center w-8 h-8 bg-gradient-to-r from-ct-blue to-ct-green rounded-full text-white cursor-pointer"
            >
              <i-ic:baseline-keyboard-arrow-right class="text-xl" />
            </div>
          </li>
          <li class="flex justify-between items-center mb-4 pb-4 border-b border-b-white">
            <div class="text-left">
              <h6 class="font-azeret text-2xl">NT$1400</h6>
              <p class="text-base">3堂50分鐘</p>
            </div>
            <div
              class="flex items-center justify-center w-8 h-8 bg-gradient-to-r from-ct-blue to-ct-green rounded-full text-white cursor-pointer"
            >
              <i-ic:baseline-keyboard-arrow-right class="text-xl" />
            </div>
          </li>
          <li class="flex justify-between items-center mb-4 pb-4 border-b border-b-white">
            <div class="text-left">
              <h6 class="font-azeret text-2xl">NT$1000</h6>
              <p class="text-base">10堂50分鐘</p>
            </div>
            <div
              class="flex items-center justify-center w-8 h-8 bg-gradient-to-r from-ct-blue to-ct-green rounded-full text-white cursor-pointer"
            >
              <i-ic:baseline-keyboard-arrow-right class="text-xl" />
            </div>
          </li>
          <li class="flex justify-between items-center mb-4 pb-4 border-b border-b-white">
            <div class="text-left">
              <h6 class="font-azeret text-2xl">NT$900</h6>
              <p class="text-base">20堂50分鐘</p>
            </div>
            <div
              class="flex items-center justify-center w-8 h-8 bg-gradient-to-r from-ct-blue to-ct-green rounded-full text-white cursor-pointer"
            >
              <i-ic:baseline-keyboard-arrow-right class="text-xl" />
            </div>
          </li>
        </ul>
        <div class="flex items-center justify-between">
          <div class="text-left">
            <h6 class="text-2xl">洽談報價</h6>
            <p class="text-base">客製化課程/專案製作</p>
          </div>
          <div
            class="flex items-center justify-center w-8 h-8 bg-gradient-to-r from-ct-blue to-ct-green rounded-full text-white cursor-pointer"
          >
            <i-ic:baseline-keyboard-arrow-right class="text-xl" />
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="bg-[#000] font-sanstc text-white py-10 lg:py-20">
    <div class="container">
      <h3 class="heading-3 text-center">其他人也看了這些課程</h3>
      <div class="w-[50px] h-[3px] bg-ct-green mx-auto mb-6"></div>
      <div class="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        <RecommendedCourseCard
          v-for="course in courseList"
          :key="course.id"
          v-bind="{ ...course }"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.square {
  @apply w-[10px] h-[10px] bg-white;
}
</style>
