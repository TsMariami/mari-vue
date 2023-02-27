<script setup>
import sticky from '../components/sticky.vue';
import videolayout from '../layout/videolayout.vue';
import videos from '../components/videos.vue'
import Topmenu from '../components/topmenu.vue';

</script>
<template>
  <videolayout>
    <template #header>
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
        <Topmenu/>
    </nav>

    <nav class="bg-white  dark:bg-gray-900 w-full z-20 w-16 ml-[750px] overflow-scroll">
       <sticky />
    </nav>
     
    </template>
    <template #default>
     <div class="inline-block">
      <videos />
     </div>
        
   </template>
</videolayout>
</template>