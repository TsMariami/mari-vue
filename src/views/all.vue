<script setup>
import sticky from '../components/Sticky.vue';
import mainlayout from '../layout/MainLayout.vue';
import menus from '../components/Menus.vue';
import TAGS from '../components/Tags.vue';
</script>
<template>
  <mainlayout>
    <template #header>
      <menus/>
      <sticky/>
    </template>
    <template #default>
     <TAGS/>
    </template>
</mainlayout></template>