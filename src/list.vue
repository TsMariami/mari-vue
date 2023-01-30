<script>
import allitems from './allitems.vue'
 export default{
  props: {
     data: { type: Array, required:true},
     changeStatus : {type:Boolean, required: false , default: false},
     delete: {type:Boolean, required: false , deffiault: false},
     
 },
 components: {
    allitems
 },
 mounted(){
  
 },
 methods: {
  changeDone(item){
    this.$emit("changeDone" , item )

  },
  deleteDoneItem(data){
   this.$emit('onDelete', data)
  } 
 },
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
