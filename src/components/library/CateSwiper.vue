<script setup>
import { onMounted, ref } from 'vue';
import Swiper, { Autoplay } from 'swiper';
import 'swiper/css';

defineProps({
  slides: Array,
});

const swiper = ref(null);

onMounted(() => {
  swiper.value = new Swiper('.cate-swiper', {
    slideClass: 'cate-swiper-slide',
    slidesPerView: 'auto',
    spaceBetween: 16,
    centeredSlides: true,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    },
    loop: true,
    modules: [Autoplay],
  });
});
</script>

<template>
  <div class="cate-swiper">
    <ul class="swiper-wrapper">
      <li
        class="cate-swiper-slide text-white font-sanstc font-bold p-4 md:px-6 border border-white rounded-lg"
        v-for="(item, i) in slides"
        :key="i"
      >
        {{ item }}
      </li>
    </ul>
  </div>
</template>
