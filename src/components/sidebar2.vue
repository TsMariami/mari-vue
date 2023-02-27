<script setup>

import { useStore } from 'vuex';
 const store = useStore()
    const icons = store.getters.geticons2
</script>


<template>
      <div class="ml-7">
            <ul class="space-y-2 ">
                <li v-for="item in icons " :key="item.index">
                    <a href="#"
                        class="flex flex-row p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                        <component :is="item.icon"></component>
                        <img :src="item.img" alt="" :class="item.class">
                        <span class="text-xs mt-2 -ml-1">{{item.name}}</span>
                    </a>
                </li>
            </ul>
        </div>
</template>