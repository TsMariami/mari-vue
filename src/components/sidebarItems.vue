<script setup>
import { useStore } from 'vuex';
 const store = useStore()
    const icons = store.getters["geticons"]
</script>
<template>
    <ul class="space-y2 ">
        <li v-for="item in icons" :key="item.index">
            <a href="#"
                class=" flex flex-row items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                <a class="flex flex-row block mb-2  lg:mt-0 text-black ml-4">
                    <component :is="{...item.icon}" class="mr-2 mt-1 -ml-1" ></component> 
                    <img :src="item.img" alt="" :class="item.class">
                    <RouterLink :to="{ name: item.name }" class="">
                        {{ item.name }}</RouterLink>
                </a>
            </a>
        </li>
        <a href="#"> 
            <sign-in></sign-in>
        </a>
    </ul>
</template>