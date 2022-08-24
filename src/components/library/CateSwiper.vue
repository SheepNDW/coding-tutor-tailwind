<script setup>
import { onMounted, onUnmounted, ref } from 'vue';
import Swiper, { Autoplay } from 'swiper';
import 'swiper/css';

const props = defineProps({
  slides: Array,
  isLoop: {
    type: Boolean,
    default: false,
  },
  isAutoplay: {
    type: Boolean,
    default: false,
  },
});

const swiper = ref(null);
const modules = props.isAutoplay ? [Autoplay] : [];

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
    loop: props.isLoop,
    modules,
  });
});

onUnmounted(() => {
  swiper.value = null;
});
</script>

<template>
  <div class="cate-swiper">
    <ul class="swiper-wrapper">
      <li
        class="cate-swiper-slide shrink-0 self-center text-white font-sanstc font-bold p-4 md:px-6 border border-white rounded-lg"
        v-for="(item, i) in slides"
        :key="i"
      >
        {{ item }}
      </li>
    </ul>
  </div>
</template>
