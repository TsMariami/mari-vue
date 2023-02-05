<script setup>
import actionButton from './actionButton.vue';
 defineProps({
      data: { type: Object, requiered: true },
    action: {type: String, required: false, default: 'add'}
 })
  </script>
<template>
  <li class="flex flex-row justify-between">
    <span class="mr-40">{{ data.name }}</span>
    <actionButton class="mb-3" :itemId="data.id" :action="action" />
  </li>
</template> 