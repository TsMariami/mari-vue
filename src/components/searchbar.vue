<script>
import searchbarcomp from './searchbarcomp.vue'
import miccomp from './miccomp.vue';
export default {
    components: { searchbarcomp, miccomp }
}
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

