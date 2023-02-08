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
    <a :href="data.url"><img class="w-80 mt-10 ml-14 " :src="data.cover" alt=""></a>
    <p class=" mt-4 ">{{ data.description }} </p>- 
    <p >Video Link : <a :href="data.url" class="text-blue-600 ">
      {{ data.url }}</a></p>
  </div>
  <p class="mt-20 mb-20">
    <actionButton  :itemId="data.id" :action="action" />
  </p>
  
</template> 