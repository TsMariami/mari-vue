<script setup>
import { useStore } from 'vuex'
import { computed } from 'vue'
import ListItemComponent from './ListItemComponent.vue'
     defineProps({
        title: String 
     })
        const store = useStore()
        const data = store.getters.getcart
</script>
<template>
    <div class="flex flex-col space-y-2 mx-10 mt-9 ">
        <h2 class="font-bold text-xl text-green-600">{{ title }}</h2>
        <ul>
            <ListItemComponent v-for="item in data" :key="item.index" :data="item" action="delete" />
        </ul>
    </div>
</template>