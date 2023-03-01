<script setup>
import mainlayout from '../layout/MainLayout.vue';
import Menu from '../components/Menus.vue';
</script>
<template>
    <mainlayout>
        <template #header>
            <Menu />
        </template>
        <template #default>
            <h2> about us </h2>
        </template>
    </mainlayout>
</template>