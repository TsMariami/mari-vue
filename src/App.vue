<script setup>
import ProductsList from './ProductsList.vue'
import Cart from './Cart.vue'
const pageTitle = "5 Fav songs"
</script>

<template  >
  <div class="container mx-auto  text-center">
    <h1 class="text-3xl pt-6">{{ pageTitle }}</h1>
    <div class="container flex flex-row justify-between ">
      <ProductsList :title="'All'" />
      <Cart :title="'WatchList'" class="mx-10 mt-8" />
    </div>
  </div>
</template> 

<!-- 
<script>
    const menu =  [
    { routeName: 'Home', title: 'Main Page'},
  { routeName: 'About', title: 'About Us'},   ]
</script>

<template>
  <div>
    <RouterLink v-for="item in menu" :key="item.index" :to="{name: item.routeName}" > {{ item.title }}</RouterLink>

  </div>
  <RouterView/>
</template> -->