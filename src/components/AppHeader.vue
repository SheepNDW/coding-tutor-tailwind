<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import logoPC from '@/assets/images/logo.svg';
import logoM from '@/assets/images/logo2.svg';

const router = useRouter();

const isDropdown = ref(false);
const moveToHomePage = () => {
  isDropdown.value = false;
  router.push('/');
};
</script>

<template>
  <header class="h-[72px] md:h-[90px] bg-ct-dark-light sticky top-0 z-[1000]">
    <div class="container h-[70px] md:h-[88px] flex items-center">
      <h1 class="h-6 w-6 md:h-12 md:w-[175px] mr-auto" @click="moveToHomePage">
        <img class="block md:hidden max-w-full" :src="logoM" alt="logo" />
        <img class="hidden md:block max-w-full" :src="logoPC" alt="logo" />
      </h1>

      <ul class="hidden text-white text-[18px] font-sanstc md:flex gap-12 items-center">
        <li class="transition hover:text-ct-green">
          <router-link to="/">首頁</router-link>
        </li>
        <li class="transition hover:text-ct-green">
          <router-link to="/classes">課程介紹</router-link>
        </li>
        <li class="transition hover:text-ct-green">
          <router-link class="flex gap-1 items-center" to="/">
            <i-ic:round-person-pin />登入
          </router-link>
        </li>
      </ul>

      <i-ic:outline-drag-handle
        class="md:hidden text-2xl text-ct-green"
        @click="isDropdown = !isDropdown"
      />
    </div>
    <div class="line h-[2px] w-full"></div>
    <ul class="dropdown" :class="{ active: isDropdown }">
      <li class="transition hover:text-ct-green">
        <router-link to="/" @click="isDropdown = false">首頁</router-link>
      </li>
      <li class="transition hover:text-ct-green">
        <router-link to="/classes" @click="isDropdown = false">課程介紹</router-link>
      </li>
      <li class="transition hover:text-ct-green">
        <router-link class="flex gap-1 items-center" to="/" @click="isDropdown = false">
          <i-ic:round-person-pin />登入
        </router-link>
      </li>
    </ul>
  </header>
</template>

<style scoped>
.line {
  background: linear-gradient(to right, #62db54 0%, #62db54 50%, #09acf5 50%, #09acf5 100%);
}

.dropdown {
  @apply absolute left-0 w-full h-0 overflow-hidden bg-ct-dark-light text-white text-[18px] font-sanstc z-10;
  @apply flex flex-col gap-6 items-center md:hidden;
  @apply transition-all duration-500;
}

.dropdown.active {
  @apply h-[177px] py-6;
}
</style>
