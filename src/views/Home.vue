<script setup>
import sticky from '../components/Sticky.vue';
import mainlayout from '../layout/mainlayout.vue';
import menus from '../components/menus.vue';
import homepage from '../components/homepage.vue';
</script>
<template>
  <mainlayout>
    <template #header>
      <menus/>
      <sticky/>
    </template>
    <template #default>
     <homepage/>
    </template>
</mainlayout></template>