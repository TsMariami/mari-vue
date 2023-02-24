<script setup>

import { useStore } from 'vuex';
 const store = useStore()
    const buttons = store.getters.getcategories
</script>
<template>
    <nav
        class="bg-white px-2 sm:px-4  dark:bg-gray-900 fixed top-12 w-full z-20  border-b border-gray-200 dark:border-gray-600 ml-[300px] ">
        <div class="container flex flex-wrap justify-center mx-auto -ml-64">
            <div class="flex md:order-2">
            </div>
            <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
                <ul
                    class="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md: font-normal md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700 ml-10">
                    <li class=" rounded-3xl " v-for="item in buttons" :key="item.index">
                        <a href="#" aria-current="page"><button
                                :class="item.class">
                                <span>{{item.name}}</span>
                            </button></a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>