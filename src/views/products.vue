<script setup>
import mainlayout from '../layout/mainlayout.vue';
import ProductsList from '../components/ProductsList.vue'
import Menu from '../components/menu.vue';
</script>
<template>
   <mainlayout>
      <template #header>
         <Menu />
      </template>
      <template #default>
         <div>
            Products
            <ProductsList />
         </div>
      </template>
   </mainlayout>
</template>