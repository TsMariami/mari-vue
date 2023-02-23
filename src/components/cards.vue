<script setup>
import { useStore } from 'vuex';
 const store = useStore()
    const video = store.getters.getvideos
</script>
<template>
    <div class="w-full max-w-xs text-center mb-5">
        <a :href="video[0].url">
            <div class="card object-cover object-center w-full h-64 mx-auto">
                <div class="">
                    <img :src="video[0].cover" alt="" class="rounded-xl">
                    <div class="flex flex-row mt-2">
                        <img :src="src/components/img/card imgs/card1.1.jpg" alt="" class="w-9 rounded-3xl">
                        <span class="font-medium ml-3 text-sm ">{{ video[0].title }}</span>
                    </div>
                    <div class="flex flex-col text-start mt-2 -mt-2">
                        <span class="text-xs text-gray-600 ml-12">Lana Del Rey</span>
                        <span class="text-xs text-gray-600 ml-12">529M views 9 years
                                ago</span>
                    </div>
                </div>
            </div>
        </a>
    </div>
    <div class="w-full max-w-xs text-center mb-5">
        <a :href="video[1].url">
            <div class="card object-cover object-center w-full h-64 mx-auto">
                <div class="">
                    <img :src="video[1].cover" alt="" class="rounded-xl">
                    <div class="flex flex-row mt-2">
                        <img src="src/components/img/card imgs/card3.1.jpg" alt="" class="w-9 rounded-3xl">
                        <span class="font-medium ml-3 text-sm text-start">{{video[1].title}}</span>
                    </div>
                    <div class="flex flex-col text-start mt-2">
                        <span class="text-xs text-gray-600 ml-12">Mac Demarco</span>
                        <span class="text-xs text-gray-600 ml-12">100M views <span class="ml-1"> 10 years
                                ago</span></span>
                    </div>
                </div>
            </div>
        </a>
    </div>
    <div class="w-full max-w-xs text-center mb-5">
        <a :href="video[2].url">
            <div class="card object-cover object-center w-full h-64 mx-auto">
                <div class="">
                    <img :src="video[2].cover" alt="" class="rounded-xl">
                    <div class="flex flex-row mt-2">
                        <img src="src/components/img/card imgs/card2.2.jpg" alt="" class="w-9 rounded-3xl">
                        <span class=" font-medium ml-3 text-sm ">{{video[2].title}}</span>
                    </div>
                    <div class="flex flex-col text-start -mt-2">
                        <span class="text-xs text-gray-600 ml-12">Coldplay</span>
                        <span class="text-xs text-gray-600 ml-12">600M views <span class="ml-1"> 4 years
                                ago</span></span>
                    </div>
                </div>
            </div>
        </a>
    </div>
    <div class="w-full max-w-xs text-center mb-5">
        <a :href="video[3].url">
            <div class="card object-cover object-center w-full h-64 mx-auto">
                <div class="src/components/img/card imgs/card4.webp">
                    <img :src="video[3].cover" alt="" class="rounded-xl">
                    <div class="flex flex-row mt-2">
                        <img src="src/components/img/card imgs/card4.1.jpg" alt="" class="w-9 rounded-3xl">
                        <span class="font-medium ml-3 text-sm justify-start">{{video[3].title}}</span>
                    </div>
                    <div class="flex flex-col text-start -mt-2">
                        <span class="text-xs text-gray-600 ml-12">Billie Eilish</span>
                        <span class="text-xs text-gray-600 ml-12">2B views <span class="ml-1"> 8 years
                                ago</span></span>
                    </div>
                </div>
            </div>
        </a>
    </div>
    <div class="w-full max-w-xs text-center mb-5">
        <a :href="video[4].url">
            <div class="card object-cover object-center w-full h-64 mx-auto">
                <div class="">
                    <img :src="video[4].cover" alt="" class="rounded-xl">
                    <div class="flex flex-row mt-2">
                        <img src="src/components/img/card imgs/card5.1.jpg" alt="" class="w-9 rounded-3xl">
                        <span class="font-medium ml-3 text-sm ">{{video[4].title}}</span>
                    </div>
                    <div class="flex flex-col text-start -mt-2">
                        <span class="text-xs text-gray-600 ml-12">Pixie</span>
                        <span class="text-xs text-gray-600 ml-12">700M views <span class="ml-1"> 5 years
                                ago</span></span>
                    </div>
                </div>
            </div>
        </a>
    </div>
    <div class="w-full max-w-xs text-center mb-5">
        <a :href="video[5].url">
            <div class="card object-cover object-center w-full h-64 mx-auto">
                <div class="">
                    <img :src="video[5].cover" alt="" class="rounded-xl">
                    <div class="flex flex-row mt-2">
                        <img src="src/components/img/card imgs/crad6.1.jpg" alt="" class="w-9 rounded-3xl">
                        <span class="font-medium ml-3 text-sm ">{{video[5].title}}</span>
                    </div>
                    <div class="flex flex-col text-start -mt-2">
                        <span class="text-xs text-gray-600 ml-12">Harry Styles</span>
                        <span class="text-xs text-gray-600 ml-12">529M views <span class="ml-1"> 4 years
                                ago</span></span>
                    </div>
                </div>
            </div>
        </a>
    </div>
    <div class="w-full max-w-xs text-center mb-5">
        <a :href="video[6].url">
            <div class="card object-cover object-center w-full h-64 mx-auto">
                <div class="">
                    <img :src="video[6].cover" alt="" class="rounded-xl">
                    <div class="flex flex-row mt-2">
                        <img src="src/components/img/card imgs/card7.1.jpg" alt="" class="w-9 rounded-3xl">
                        <span class="font-medium ml-3 text-sm ">{{video[6].title}}</span>
                    </div>
                    <div class="flex flex-col text-start -mt-2">
                        <span class="text-xs text-gray-600 ml-12">Identity</span>
                        <span class="text-xs text-gray-600 ml-12">50M views <span class="ml-1"> 1 year
                                ago</span></span>
                    </div>
                </div>
            </div>
        </a>
    </div>
    <div class="w-full max-w-xs text-center mb-5">
        <a :href="video[7].url">
            <div class="card object-cover object-center w-full h-64 mx-auto">
                <div class="">
                    <img :src="video[7].cover" alt="" class="rounded-xl">
                    <div class="flex flex-row mt-2">
                        <img src="src/components/img/card imgs/card8.1.jpg" alt="" class="w-9 rounded-3xl">
                        <span class="font-medium ml-3 text-sm "> {{video[7].title}}</span>
                    </div>
                    <div class="flex flex-col text-start -mt-2">
                        <span class="text-xs text-gray-600 ml-12">The Beatles</span>
                        <span class="text-xs text-gray-600 ml-12">906M views <span class="ml-1"> 14 years
                                ago</span></span>
                    </div>
                </div>
            </div>
        </a>
    </div>
    <div class="w-full max-w-xs text-center mb-5">
        <a :href="video[8].url">
            <div class="card object-cover object-center w-full h-64 mx-auto">
                <div class="">
                    <img :src="video[8].cover" alt="" class="rounded-xl">
                    <div class="flex flex-row mt-2">
                        <img src="" alt="" class="w-9 rounded-3xl">
                        <span class="font-medium ml-3 text-sm "> {{video[8].title}}</span>
                    </div>
                    <div class="flex flex-col text-start -mt-2">
                        <span class="text-xs text-gray-600 ml-12">Karaoke</span>
                        <span class="text-xs text-gray-600 ml-12">38M views <span class="ml-1"> 1 year
                                ago</span></span>
                    </div>
                </div>
            </div>
        </a>
    </div>
</template>