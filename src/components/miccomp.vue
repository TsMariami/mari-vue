<script setup>
import { useStore } from 'vuex';
const store = useStore()
const icons = store.getters.getsearchbaricons
</script>
<template>
    <a href="" class="hover:bg-gray-300 rounded-3xl ">
        <component :is="{...icons[1].icon}"></component>
    </a>
</template>