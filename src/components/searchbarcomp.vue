<script setup>
import {onMounted, ref, watch } from 'vue'
import { useStore } from 'vuex';
const store = useStore()
const icons = store.getters.getsearchbaricons

const filter = ref(null)
watch(filter, (newValue) => {
    store.dispatch['filtervideos', newValue]
})
// onMounted(() => {
//     console.log (filtervideos)
// })

</script>

<template>
     <input v-model="filter" type="search"
                class="input h-10 shadow-inner form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-clip-padding border border-solid border-gray-400 rounded-l-3xl transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:outline-none "
                placeholder="Search" aria-label="Search" aria-describedby="button-addon2">
            <button
                class=" btn inline-block px-6 py-2.5 bg-gray-200 text-gray-800 font-normal text-sm leading-tight uppercase rounded-r-3xl border border-gray-400 active:shadow-lg transition duration-150 ease-in-out flex items-center"
                type="button" id="button-addon2" >
                <component :is="{...icons[0].icon}"></component>
            </button>
</template>