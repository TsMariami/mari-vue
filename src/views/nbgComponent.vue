<script setup>

import mainlayout from '../layout/mainlayout.vue';
import menus from '../components/menus.vue';
</script>
<template>
  <mainlayout>
    <template #header>
      <menus />
    </template>
    <template #default>
    </template>
  </mainlayout>
</template>     
