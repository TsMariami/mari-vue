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
            description : 'description of "Contact us"'
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



