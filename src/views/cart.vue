<script setup>
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
        </template>
    </CartLayout>
</template>