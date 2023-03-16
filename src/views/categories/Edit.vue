<script setup>
import { computed } from 'vue';
import { onMounted } from 'vue';
import { useStore } from 'vuex'
import {useRouter} from 'vue-router'
const props = defineProps({
    id: { type: String, required: true }
})
const store = useStore()
const router = useRouter()
const category = computed(() => {
    return store.getters['categories/getCategory']
})

const updateInfo = async () =>{
   store.dispatch('categories/editCategory' , category)
   router.push({name: 'Categories index'}) 
}

onMounted(() => {
    store.dispatch('categories/getCategoriesbyId', props.id)
})
</script>
<template>
    <div>

  
    <div>
        <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First name</label>
        <input v-model="category.name" type="text" id="first_name"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-80 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
             >
    </div>
    <label for="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select an option</label>
    <select v-model="category.type" id="countries"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-80 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
        <option value="product">product</option>
        <option value="social">social</option>
        <option value="news">news</option>
    </select>
<button type="submit" @click.prevent="updateInfo()"
    class="text-white mt-5 ml-24 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Edit</button>
</div>
    </template>