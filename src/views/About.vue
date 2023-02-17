<script setup>
import mainlayout from '../layout/mainlayout.vue';
import Menu from '../components/menu.vue';
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