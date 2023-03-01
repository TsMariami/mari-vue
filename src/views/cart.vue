<script setup>
import Menu from '../components/Menus.vue';
import CartLayout from '../layout/CartLayout.vue'
</script>
<template>
    <CartLayout>
        <template #CartHeader>
            <Menu />
        </template>
        <template #default>
            cart
        </template>
    </CartLayout>
</template>