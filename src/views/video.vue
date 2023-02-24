<script setup>
import Searchbar from '../components/searchbar.vue';
import sticky from '../components/sticky.vue';
import videolayout from '../layout/videolayout.vue';
import menus from '../components/menus.vue';
import videos from '../components/videos.vue'
</script>
<template>
  <videolayout>
    <template #header>
        <div class="bg-white">
          <menus/>  
        </div>
      <!-- <searchbar/> -->
      <sticky/>
      
    </template>
    <template #default>
     <div class="inline-block">
<videos />
     </div>
        
   </template>
</videolayout>
</template>