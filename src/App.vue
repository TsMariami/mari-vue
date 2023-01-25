<script>

export default{
 data() {
    return {
      placeholder: '    search',
        menulist: [ 
        {
            id: 1,
            title: 'home',
            URL : 'http://localhost:5173/'
           },
           {
            id: 2,
            title: 'products',
            URL : 'http://localhost:5173/'
           },
           {
            id: 3,
            title: 'contact us',
            URL : 'http://localhost:5173/'
           },
           {
            id: 4,
            title: 'info',
            URL : 'http://localhost:5173/'
           },
       
       ]
    }
  }
}

</script> 



<style>
.container-fluid {
  color: blueviolet;
  margin-right:120px;
  width: 100px;
  font-size: 20px;
  margin-top: 20px;
  font-weight: 700;
  margin-left: 40px;
}
nav {
  display: flex;

}
h1{
  margin-left: 350px;
}
a,
.green {
  text-decoration: none;
    transition: 0.4s;
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
input{
  height: 40px;
  margin-top: 20px;
  margin-left: 180px;
  width: 180px;
  border-radius: 20px;
}

</style>



<template>
  
    <div class="nav">
        <nav>
        <a :href= "item.URL" class="container-fluid" v-for= " item in menulist" :key="item.id"
         >
  {{ item.title }}
        </a>
        <input type="text"  :placeholder='placeholder'>
  </nav>
    </div>
</template>
