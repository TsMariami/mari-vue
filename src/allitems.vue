<script setup>
import {computed} from 'vue'
  const props = defineProps({
      item: { type: Object, required:true},
     change: {type: Boolean, required: true},
     Delete: {type: Boolean, required: true},
  })
  function onChange(){
    this.$emit("onChange", this.item )
   }
   function onDelete(){
    this.$emit("onDelete" , this.item)
   }

//  computed: {
//      ischecked(){
//        return this.item.done ?  'checked' : '' 
//    } 
  // }
</script>


<template>
  <li>
    <input 
    type="checkbox" 
    :checked="item.done"
    @change="onChange"
    v-if="change">
    {{ item.id }} - {{ item.name}}
    <button v-if="Delete" @click="onDelete">delete</button>
  </li>
</template> 