<script>
 export default{
  props: {
     item: { type: Object, required:true}
 },
 mounted(){
 
 }
 }
</script>


<template>
  <li><input type="checkbox">{{ item.id }} - {{ item.title}}</li>
</template>