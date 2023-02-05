<script setup> 
import file from './file'
import allitems from './allitems.vue'
   const props = defineProps({
    data: { type: Array, required:true},
     changeStatus : {type:Boolean, required: false , default: false},
     delete: {type:Boolean, required: false , deffiault: false},
   })

  function changeDone(item){
   this.$emit("changeDone" , item )

  }
  function deleteDoneItem(data){
   this.$emit('onDelete', data)
  } 

</script>


<template>
  <ul>
    <allitems 
     v-for="item in data"
     :key="item.index" 
     :item="item"
     @onChange="changeDone($event)"
     :change="changeStatus"
     :Delete="delete"
     @onDelete="deleteDoneItem($event)" /> 
  </ul>
</template>
