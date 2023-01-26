<script>
export default{
    props : { 
      menulist: {type: Array, required: true}
    },

    data : function() { 
       return {
        show: true
       }
     },
     methods: {
      showorhide(x) {
        this.show = !this.show
        
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
      <!-- <button  v-if="show">bla</button> -->
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
   