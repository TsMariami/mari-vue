<script setup>
import ProductsList from './components/ProductsList.vue'
import cart from './components/cart.vue'
const pageTitle = "5 Fav songs"
</script>

<template  >
  <div class="container mx-auto  text-center">
    <h1 class="text-3xl pt-6">{{ pageTitle }}</h1>
    <div class="container flex flex-row justify-between ">
      <ProductsList title="All"  action="action"   />
      <cart title="WatchList" class="mx-10 mt-8" />
    </div>
  </div>
</template> 
