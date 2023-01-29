<script>
import allitems from './allitems.vue'
 export default{
  props: {
     data: { type: Array, required:true}
 },
 components: {
    allitems
 },
 mounted(){
  
 }
 }
</script>


<template>
  <ul>
    <allitems v-for="item in data" :key="item.id" :item="item"/> 
  </ul>
</template>