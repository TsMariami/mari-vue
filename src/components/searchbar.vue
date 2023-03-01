<script setup>
import searchbarcomp from './SearchBarComp.vue'
import miccomp from './MicComp.vue';
</script>
<template>
    <div class="mb-4 xl:  ">
        <div class=" input-group relative flex  items-stretch w-[640px] mb-4 ">
           <searchbarcomp/>
            <div>
                <miccomp />
            </div>
        </div>
    </div>
</template>

