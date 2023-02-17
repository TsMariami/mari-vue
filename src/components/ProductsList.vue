<script setup>
import { useStore } from "vuex"
import ListItemComponent from "./ListItemComponent.vue"
const store = useStore()
const data = store.getters.getsongs
</script>
<template>
    <div class="flex flex-col space-y-2 mx-10 mt-9 ">
        <ListItemComponent v-for="item in data" :key="item.id" :data="item" />
        <div class="mt-84">
        </div>
    </div>
</template>