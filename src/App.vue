<script>
import additem from './additem.vue'
import list from './list.vue'
export default{
  components: {
     list ,
     additem
  },
  data (){
    return{
      search: '',
      todolist: [
      {id: 1,
        title:'to do item 1',
        done: false
        },
       {id: 2,
        title:'to do item 2',
        done: false
      } ,
        {id: 3,
        title:'to do item 3',
        done: false
        } 
      ]
    }
  },
   computed: {
    //  nextid(){
    //   return this.todolist.lenght +1
    //  } 
    activeItems(){
       return this.todolist.filter(item => item.done == false)
    },
    doneItems(){
      return this.todolist.filter(item=> item.done == true)
    }
   },
   filteredlist(){
    return this.todolist.filter( item => {
       return item.title.match(this.search);
    } )

   },
 methods: {
    pushNewItemIntoList(data){
      this.todolist.push({
        id: 1,
        title: data,
        done: false

      })
     },
    changeDone(record){
      let x= this.todolist.find(item => item.id == record.id)
      x.done = !x.done
    },
    deleteTodolistItem(record){
      let x= this.todolist.find(item => item.id == record.id)
       this.todolist.splice(this.todolist.indexOf(x), 1)
    },
 
   
 },
    
}
</script>

<template>
   <div class="left">
    <additem  @onSubmit="pushNewItemIntoList($event)"/>
    <h1>All items </h1>
    <br>
    <list :changeStatus="true" :data="todolist"
    @changeDone="changeDone($event)"/>
    <h1>Active items</h1>
    <list  :data="activeItems" />
    <h1>Done items</h1>
    <list :delete="true"  :data="doneItems" @onDelete="deleteTodolistItem($event)" />
    </div>

    <div class="search">
    <input type="text" v-model="search" placeholder="Search item" />
    <div  v-for="item in filteredList" :key="item.index">
    <h2>All items</h2> 
    <list  :data="todolist"/>
    </div>
    </div>
</template>

<style>
 .search{
  margin-left: 710px;
  margin-top: -380px;
 }
.left{
  display: inline-block;
}
</style>

 




