<!-- <script>
import { findDir } from '@vue/compiler-core'

export default{
    props : { 
      menulist: {type: Array, required: true}
    },

    data : function() { 
       return {
       show: false,
       
       }
     },
     methods: {
      showorhide(e) {
        this.show = !this.show
          console.log(e.target)
      console.log( find(item => item.id == '3'))
      }
    
      
     },
    }
   </script> 
   
   
   <template>
     
       <div class="nav">
           <nav>
           <div class="seconddiv" v-for= "item in menulist" :key="item.id">
           <a  :href= "item.URL" @click.prevent="showorhide" >
     {{ item.title }}
           </a> 
            <div v-if="show">{{ item.description }}</div> 
    
   </div>
     </nav> 
     </div>
     <br>
   </template>
   
   
   
   <style>
   .seconddiv {
     color: blueviolet;
     margin-right:120px;
     width: 100px;
     font-size: 20px;
     margin-top: 20px;
     margin-left: 40px;
   }
   nav{
     display: flex;
   
   }
   h1{
     margin-left: 350px;
   }
   a,
   .green {
     text-decoration: none;
       transition: 0.4s; 
        font-weight: 700;
   } 
   
     @media (hover: hover) {
     a:hover {
       background-color: hsl(0, 96%, 69%);
     }
   }
   
   .nav{
     background-color: darkgray;
     height: 70px;
   }
   
   </style>
    -->