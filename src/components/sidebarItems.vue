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
   <!-- <li class="pt-2 pl-7 pb-2 pr-7">
            <p class="text-sm mb-3">Sign in to like videos, comment, and subscribe.</p>
            <a href="" class="hover:bg-blue-100 rounded-3xl">
                <div class="flex flex-row border w-24 h-8 rounded-3xl justify-center items-center ">
                   <component :is="item.icon" ></component>
                    <span class="text-blue-600 justify mb-1 ml-2">sign in</span>
                </div>
            </a>
        </li> -->

 <!-- <li>
            <a href="#"
                class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                <img src="src/components/img/youtube-shorts-logo-15253.png" alt="" class="w-5">
                <a class="block mt-4 lg:inline-block lg:mt-0 text-black ml-4">
                    <RouterLink :to="{ name: 'Shorts' }">
                        Shorts</RouterLink>
                </a>
            </a>
        </li>
        <li>
            <a href="#"
                class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                <span class="flex-1 ml-3 whitespace-nowrap">Subscriptions</span>
            </a>
        </li>
    </ul>
    <ul class="pt-4 mt-4 space-y-2 border-t border-gray-200 dark:border-gray-700">
        <li>
            <a href="#"
                class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                <img src="src/components/img/library.png" alt="" class="w-7">
                <span class="flex-1 ml-3 whitespace-nowrap">Library</span>
            </a>
        </li>
        <li>
            <a href="#"
                class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                
                <span class="flex-1 ml-3 whitespace-nowrap">History</span>
            </a>
        </li>
    </ul>
    <ul class="pt-4 mt-4 space-y-2 border-t border-gray-200 dark:border-gray-700">
     
    </ul>
    <ul class="pt-4 mt-4 space-y-2 border-t border-gray-200 dark:border-gray-700">
        <h2 class="text-xl">Explore</h2>
        <li>
            <a href="#"
                class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
               
                <span class="flex-1 ml-3 whitespace-nowrap">Trending</span>
            </a>
        </li>

        <ul class="pt-4 mt-4 space-y-2 border-t border-gray-200 dark:border-gray-700"></ul>
        <li>
            <a href="#"
                class="flex items-center p-2 text-base font-normal text-gray-900 transition duration-75 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group">
                
                <span class="ml-4">Music</span>
            </a>
        </li>
        <li>
            <a href="#"
                class="flex items-center p-2 text-base font-normal text-gray-900 transition duration-75 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group">
               
                <span class="ml-3">Gaming</span>
            </a>
        </li>
        <li>
            <a href="#"
                class="flex items-center p-2 text-base font-normal text-gray-900 transition duration-75 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group">
                <img src="src/components/img/trophy.png" alt="" class="w-5">
                <span class="ml-3">Sports</span>
            </a>
        </li>
    </ul>
    <ul class="pt-4 mt-4 space-y-2 border-t border-gray-200 dark:border-gray-700">
        <li>
            <a href="#"
                class="flex items-center p-2 text-base font-normal text-gray-900 transition duration-75 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group">
                
                <span class="ml-3">Browse channels</span>
            </a>
        </li>
    </ul>
    <ul class="pt-4 mt-4 space-y-2 border-t border-gray-200 dark:border-gray-700">
        <li>
            <a href="#"
                class="flex items-center p-2 text-base font-normal text-gray-900 transition duration-75 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group">
                <img src="src/components/img/icons8-youtube-music-48.png" alt="" class="w-8">
                <span class="ml-3">YouTube Music</span>
            </a>
        </li>
        <li>
            <a href="#"
                class="flex items-center p-2 text-base font-normal text-gray-900 transition duration-75 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group">
                <img src="src/components/img/kids.png" alt="" class="w-11 -ml-2">
                <span class="ml-3">YouTube Kids</span>
            </a>
        </li>
        <li>
            <a href="#"
                class="flex items-center p-2 text-base font-normal text-gray-900 transition duration-75 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group">
                <img src="src/components/img/tv.png" alt="" class="w-12 -ml-2">
                <span class="ml-3">YouTube TV</span>
            </a>
        </li>
    </ul>
    <ul class="pt-4 mt-4 space-y-2 border-t border-gray-200 dark:border-gray-700">
        <li>
            <a href="#"
                class="flex items-center p-2 text-base font-normal text-gray-900 transition duration-75 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group">
                
                <span class="ml-3">Settings</span>
            </a>
        </li>
        <li>
            <a href="#"
                class="flex items-center p-2 text-base font-normal text-gray-900 transition duration-75 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group">
                
                <span class="ml-3">Report history</span>
            </a>
        </li>
        <li>
            <a href="#"
                class="flex items-center p-2 text-base font-normal text-gray-900 transition duration-75 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group">
               
                <span class="ml-3">Help</span>
            </a>
        </li>
        <li>
            <a href="#"
                class="flex items-center p-2 text-base font-normal text-gray-900 transition duration-75 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group">
                
                <span class="ml-3">Send feedback</span>
            </a>
        </li>
        <li>
            <a href="#"
                class="flex items-center p-2 text-base font-normal text-gray-900 transition duration-75 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
                    class="bi bi-exclamation-circle" viewBox="0 0 16 16">
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                    <path
                        d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995z" />
                </svg>
                <span class="ml-3">Send feedback</span>
            </a>
        </li> -->