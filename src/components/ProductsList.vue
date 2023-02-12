<script setup>
import { useStore } from "vuex"
import ListItemComponent from "./ListItemComponent.vue"
import Addviainput from "./Addviainput.vue";
import propsmodule from "../props/defineprops";
const props = defineProps({
    module: [ propsmodule ]
})
const store = useStore()
const data = store.getters.getsongs
</script>
<template>
    <div class="flex flex-col space-y-2 mx-10 mt-9 ">
        <input v-model="search" type="text" id="first_name"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-96  ml-12  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="search" required>
        <h2 class="font-bold text-xl text-green-600">{{ props.title }}</h2>
        <ListItemComponent v-for="item in data" :key="item.id" :data="item"  />
        <div class="mt-84">
            <Addviainput 
             :props.itemId="data.id" 
             action="action" />
        </div>
    </div>
</template>