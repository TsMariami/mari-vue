<script setup>
import ProductsList from './ProductsList.vue'
import Cart from './Cart.vue'
const pageTitle = "Shopping"
</script>

<template>
  <div class="container mx-auto  text-center">
    <h1 class="text-3xl pt-6">{{ pageTitle }}</h1>
    <div class="container flex flex-row justify-between ">
      <ProductsList :title="'Products List '" />
      <Cart :title="'Cart Item'" class="mx-10 mt-8" />
    </div>
  </div>
</template> 