<script setup>
import sticky from '../components/sticky.vue';
import mainlayout from '../layout/mainlayout.vue';
import menus from '../components/menus.vue';
import TAGS from '../components/TAGS.vue';
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