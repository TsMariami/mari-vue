<script setup>
  import mainlayout from '../layout/mainlayout.vue';
  import menu from '../menu.vue';
</script>



<template>
   <mainlayout>
    <template #header >
              <menu/>
    </template>
       
    <template #footer>
        this is footer 
 
    </template>
      <template #default>
           <h2> home page </h2>
    
         </template>
  </mainlayout>
</template>