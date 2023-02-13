
<script setup>
import actionButton from './actionButton.vue';
defineProps({
  data: { type: Object, requiered: true },
  action: { type: String, required: false, default: 'add' },
  title: {title: String }
})
</script>
<template>
  <h2 class="text-4xl font-bold">{{ title }}</h2>

  <div class="container ">
    {{ data.id }}
    - {{ data.name }}
  </div>
  <p class="mt-20 mb-20">
    <actionButton  :itemId="data.id" :action="action" />
  </p>
  
</template> 