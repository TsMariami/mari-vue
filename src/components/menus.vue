<script >
import Menu from "../views/menu"
import searchbar from "./searchbar.vue"
import icons from './icons.vue'
import sidebar from './sidebar.vue'
import sidebar2 from './sidebar2.vue'
import Topmenu from "./topmenu.vue"
export default {
    data: function () {
        return {
            show: true,
        };
    },
    methods: {
        showorhide(e) {
            this.show = !this.show;
        }
    },
    components: { searchbar, icons, sidebar, sidebar2, Topmenu }
}
</script>

<template>
    <nav class="flex flex-row justify-between  fixed top-0  bg-white pl-4 h-14 ">
        <div class="flex flex-row items-center flex-shrink-0 text-white ">
            <button @click.prevent="showorhide()" class="p-2 hover:bg-gray-200 rounded-3xl">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" class="bi bi-list fill-black mr-  "
                    viewBox="0 0 16 16">
                    <path fill-rule="evenodd"
                        d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                </svg>
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