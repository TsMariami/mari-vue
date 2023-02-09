<script setup>

import { useStore } from "vuex"
import { computed } from "vue"
import ListItemComponent from "./ListItemComponent.vue"
import Addviainput from "./Addviainput.vue";
// import store from "./store";
import { ref } from "vue";
// let search = ref("");
// defineProps({
//     action: { type: String, required: true },
//     title: { type: String },
//     data: { type: Object, requiered: true },
// })
const action = 'add'
const store = useStore()
const data = store.getters.getsongs
//     function filteredList() {
//   return store.state.songs.filter((item) =>
//     item.name.toLowerCase().includes(this.search.value.toLowerCase())
//   );
// }
</script>
<template>

    <div class="flex flex-col space-y-2 mx-10 mt-9 ">
        <!-- <input v-model="search" type="text" id="first_name"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-96  ml-12  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="search" required> -->
        <!-- <div class="item fruit" v-for="item in filteredList()" :key="item">
    <p>{{ item }}</p>
  </div> -->
        <h2 class="font-bold text-xl text-green-600">{{ title }}</h2>
        <ListItemComponent v-for="item in data" :key="item.id" :data="item" />
        <div class="mt-84">
            <!-- <Addviainput :itemId="data.id" :action="action" /> -->
        </div>
    </div>
</template>
