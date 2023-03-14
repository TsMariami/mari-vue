<script setup>
import { useStore } from 'vuex';
import {ref} from 'vue'
import Navbar from '../../components/Navbar.vue';
const store = useStore()

const newUserName = ref('');
const newType = ref('');


const addUser = async () => {
    await store.dispatch('user/addUser', [newUserName.value , newType.value]);
    newUserName.value = '';
    newType.value = '';
};

</script>

<template>
  <Navbar/>
  <div class="w-full ml-[600px] mt-[200px] max-w-xs">
    <form class="bg-blue-400  shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="Name">
          Name
        </label>
        <input v-model="newUserName" 
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="username" type="text" placeholder="Name">
      </div>
      <div class="mb-6">

        <label for="type" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">choose a type</label>
        <select  v-model="newType"  id="type"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
          <option value="news">news</option>
          <option value="product">product</option>
          <option value="social">social</option>
        </select>

      </div>
      <div class="flex items-center justify-between">
        <button @click.prevent="addUser()"
          class="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="button">
          Add
        </button>
      </div>
  </form>
</div></template>