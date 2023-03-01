<script setup>
import { useStore } from 'vuex';
const store = useStore()
const video = store.getters['filtervideos']
</script>
<template>
    <div class="w-full max-w-xs text-center mt-8" v-for="item in video" :key="item.index">
        <a class="flex flex-row block lg:inline-block lg:mt-0 text-black ml-4">
            <div class="card object-cover object-center w-full h-64 mx-auto ">
                <RouterLink :to="{ name: 'video' }">
                    <div class="">
                        <img :src="item.cover" alt="" class="rounded-xl">
                        <div class="flex flex-row mt-2">
                            <img :src="item.channelimg" alt="" class="w-9 h-9 rounded-3xl">
                            <span class="font-medium ml-3 text-sm ">{{ item.title }}</span>
                        </div>
                        <div class="flex flex-col text-start -mt-3 ">
                            <span class="text-xs text-gray-600 ml-12">{{ item.channel }}</span>
                            <span class="text-xs text-gray-600 ml-12">{{ item.description }}</span>
                        </div>
                    </div>
                </RouterLink>
            </div>
        </a>
    </div>
</template>