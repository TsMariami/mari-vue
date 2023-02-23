<script setup>
import Cart from '../components/Cart.vue'
import Menu from '../components/menus.vue';
import CartLayout from '../layout/Cartlayout.vue'
</script>
<template>
    <CartLayout>
        <template #CartHeader>
            <Menu />
        </template>
        <template #default>
            cart
            <Cart />
        </template>
    </CartLayout>
</template>