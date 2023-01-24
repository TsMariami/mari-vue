<script>

export default{
 data() {
    return {
      placeholder: '    search',
        mylist: [ 
           
          "Home",
          "Products",
          "Contact us",
          "info"
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
.navbar {
  display: flex;

}
h1{
  margin-left: 350px;
}
a,
.green {
  text-decoration: none;
  color: hsla(160, 100%, 37%, 1);
  transition: 0.4s;
}

@media (hover: hover) {
  a:hover {
    background-color: hsla(160, 100%, 37%, 0.2);
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
        <nav class="navbar bg-dark" data-bs-theme="dark">
        <a class="container-fluid" v-for="item in mylist">
  {{ item }}
        </a>
        <input type="text"  :placeholder='placeholder'>
  </nav>
    </div>
</template>
