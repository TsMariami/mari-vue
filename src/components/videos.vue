<script setup>
import { useStore } from 'vuex';
 const store = useStore()
    const video = store.getters.getvideos
</script>

<template>
    <div class="inline-block">
       <video :src="video.url">dddd</video>
    </div>
   <ul class="card object-cover object-center w-52 mx-auto absolute right-12"> 
    <li v-for="item in video" :key="item.index">
        <a :href="item.url">
            <div class="flex flex-row">
                <div class="">
                    <img :src="item.cover" alt="" class="rounded-xl ">
                    <div class="flex flex-row mt-2">
                        <img :src="item.channelimg" alt="" class="w-9 rounded-3xl">
                        <span class="font-medium ml-3 text-sm ">{{ item.title }}</span>
                    </div>
                    <div class="flex flex-row text-start -mt-3">
                        <span class="text-xs text-gray-600 ml-12">{{ item.channel }}</span>
                        <span class="text-xs text-gray-600 ml-12">{{ item.description }}</span>
                    </div>
                </div>
            </div>
        </a>
    </li>
   </ul>


</template>