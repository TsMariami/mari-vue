<script setup>
import { useStore } from 'vuex';
const store = useStore()
const video = store.getters.getvideos
</script>
<template>
    <div class="container inline-block pt-16 flex flex-col ">
        <video width="1000" controls class="inline-block pl-20 mb-3">
            <source :src="video.url">
        </video>
        <span class=" font-semibold ml-20 "> SOME TEXT</span>
    </div>
    <div class="-mt-96 ">
        <ul class="">
            <li v-for="item in video" :key="item.index">
                <div class=" ml-[1020px] ">
                    <div class="mt-2">
                        <a :href="item.url">
                        <div class="flex flex-row">
                            <img :src="item.cover" alt="" class="rounded-xl w-44">
                            <div class="flex flex-col">
                                <span class=" font-medium ml-3 text-sm  h-7 ">{{ item.title }}</span>
                                <span class="text-xs text-gray-600 ml-2 ">{{ item.channel }} </span>
                                <span class="text-xs text-gray-600  ml-2 ">{{ item.description }}</span>
                            </div>
                        </div>
                        </a>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>

