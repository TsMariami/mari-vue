<script setup>
import mainlayout from '../layout/mainlayout.vue';
import Menu from '../components/menus.vue';
</script>
<template>
    <mainlayout>
        <template #header>
            <Menu />
        </template>
    </mainlayout>
</template>