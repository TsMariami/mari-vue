<script setup>
import { ref } from 'vue'
import sidebar from './Sidebar.vue'
import sidebar2 from './Sidebar2.vue'
import Topmenu from "./TopMenu.vue"
import ToggleIcon from './icons/ToggleIcon.vue'
const show = ref(true)
const showOrHide = () => {
    show.value = !show.value;
}
</script>
<template>
    <nav class="flex flex-row justify-between  fixed top-0  bg-white pl-4 h-14 ">
        <div class="flex flex-row items-center flex-shrink-0 text-white ">
            <button @click.prevent="showOrHide()" class="p-2 hover:bg-gray-200 rounded-3xl">
                <ToggleIcon/>
            </button>
            <a href="http://localhost:5173/">
                <img src="src/components/img/youtube.png" alt="youtube" width="105" class="ml-3">
            </a>
        </div>
        <Topmenu />
    </nav>
    <aside id="mySidebar" v-if="show" aria-label="Sidebar">
        <sidebar />
    </aside>

    <aside id="mySidebar" v-else="!show"
        class="fixed top-16 left-0 z-40 w-24  h-screen transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar">
        <sidebar2 />
    </aside>
</template>