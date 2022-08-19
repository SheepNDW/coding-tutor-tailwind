<script setup>
import RecommendedCourseCard from '@/components/library/RecommendedCourseCard.vue';
import { useCourseStore } from '@/stores/course';

const store = useCourseStore();
const { courseList } = store;
</script>

<template>
  <div class="bg-ct-dark py-10 lg:py-20">
    <div class="container">
      <h3 class="heading-3 text-center">熱門推薦課程</h3>
      <div class="w-[50px] h-[3px] bg-ct-green mx-auto mb-6 lg:mb-12"></div>
      <div class="grid md:grid-cols-2 xl:grid-cols-4 gap-6 mb-6 lg:mb-12">
        <RecommendedCourseCard v-for="item in courseList" :key="item.id" v-bind="{ ...item }" />
      </div>

      <button class="gradient-btn mx-auto text-lg">所有課程列表</button>
    </div>
  </div>
</template>

<style scoped></style>
