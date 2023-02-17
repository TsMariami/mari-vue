<script setup>
import mainlayout from '../layout/mainlayout.vue';
import Menu from '../components/menu.vue';
import apilayout from '../layout/apilayout.vue'
</script>
<template>
  <mainlayout>
    <template #header>
      <Menu />
    </template>
    <template #default>
      <apilayout/>
    </template>
  </mainlayout>
</template>     
