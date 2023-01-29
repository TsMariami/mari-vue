<script>
import Menu from './list.vue'
export default{
   components : {
    Menu
   },
 data() { 
    return {
        menulist: [
        {
            id: 1,
            title: 'Home',
            URL : 'http://localhost:5173/',
            description : 'description of "Home"',
           
           },
           {
            id: 2,
            title: 'Products',
            URL : 'http://localhost:5173/',
            description : 'description of "Products"',
           
           },
           {
            id: 3,
            title: 'Contact us',
            URL : 'http://localhost :5173/',
            description : 'description of "Contact us"',
           
           },
           {
            id: 4,
            title: 'Info',
            URL : 'http://localhost:5173/',
            description : 'description of "Info"',
           
           },    
       ]
    }
  },
}
</script> 


<template>
  <Menu :menulist = "menulist"></Menu>
</template>



 <!-- <script>

 export default {
   data() {
     return {
       width: 50,
       height: 30,
       simagle: null,
       show: false,
       backgroundcolor: null
     }
   },
   computed: {
     calculateSpace(){
       return this.width 
     },
     calculateMoculoba(){
       return this.calculateSpace * this.simagle
     }
   }
 }
 
 </script>
 
 <template>
   <div>
     <form>
 
       <label>სიგრძე</label><br />
       <input v-model="width" /><br />
 
       <label>სიგანე</label><br />
       <input v-model="height" /><br />
       
       <label>სიმაღლე</label><br />
       <input v-model="simagle" /><br />
     </form>
     <br />
     <button @click.prevent="show = !show">
       <span v-if="!show">Show</span>
       <span v-if="show">Hide</span>
     </button>
     <p v-if="show">ფართობი: {{ calculateSpace }}</p>
     <p v-if="show">მოცულობა: {{ calculateMoculoba }}</p>
   </div>
    <br>
    <input type="color" v-model="backgroundcolor" >
    <br>
    <br>
   <div class="square" :style="{ width: width + 'px', height: height + 'px' , border: '5px solid' , background: backgroundcolor }"> </div>
    
  </template> -->