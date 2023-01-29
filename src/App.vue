<script>
import list from './list.vue'
export default{
  components: {
     list
  },
  data (){
    return{
      todolist: [
      {id: 1,
        title:'to do item 1',
        done: false
        },
       {id: 2,
        title:'to do item 2',
        done: true
      } ,
        {id: 3,
        title:'to do item 3',
        done: false
        } ,
        {id: 4,
        title:'to do item 4',
        done: true
        },
         {id: 5,
        title:'to do item 5',
        done: false
        }
      ]
    }
  },
   computed: {
     filteredtodolistitem(){
       return this.todolist.filter(item => item.done == true)
     },
     falsetodos(){
      return this.todolist.filter(item=> item.done == false)
     }
     
   }

    
}
</script> 


<template>
  <h1>all items</h1>
    <list :data="todolist" />
    <h1>done items</h1>
    <list :data="filteredtodolistitem" />
    <h1>active items</h1>
    <list :data="falsetodos" />
</template>




 