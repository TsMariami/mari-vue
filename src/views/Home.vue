<script setup>
import sticky from '../components/sticky.vue';
import mainlayout from '../layout/mainlayout.vue';
import Menu from '../components/menu.vue';
import Default from '../components/default.vue';
</script>
<template>
  <mainlayout>
    <template #header>
      <Menu/>
      <sticky/>
    </template>
    <template #default>
     <Default/>
    </template>
</mainlayout></template>