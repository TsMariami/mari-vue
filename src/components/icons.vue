<script setup>
import DotIcon from './icons/DotIcon.vue'
</script>
<template>
    <div class="flex flex-row  items-center mr-6">
        <a href="">
          <DotIcon/>
        </a>
        <RouterLink :to="{ name: 'accountinfo' }" class="">
        <a href="" class="hover:bg-blue-100 rounded-3xl">
      <sign-in></sign-in>
        </a>
      </RouterLink>
    </div>
</template>

