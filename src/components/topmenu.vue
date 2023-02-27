<script>
import searchbar from './searchbar.vue'
import icons from './icons.vue';
export default {
    components: { searchbar, icons, }
}
</script>

<template>
        <div class="mt-2 w-96 ml-[268px] bg-white">
            <searchbar />
        </div>
        <div class="mt-3 ml-[540px] ">
            <icons />
        </div>
</template>