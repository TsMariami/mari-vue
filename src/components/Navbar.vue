<script setup>
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
import Dropdown from './Dropdown.vue';

const store = useStore()
const router = useRouter()
const logout = async () => {
   await store.dispatch('user/logOut', )
   router.push({name: 'signin'})
}
</script>

<template>
  <nav class="bg-blue-100 border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
    <div class="container flex flex-wrap items-center justify-between mx-auto">
      <div class="hidden w-full md:block md:w-auto" id="navbar-default">
        <ul
          class="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
          <li>
            <RouterLink :to="{ name: 'Home' }"
              class="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white"
              aria-current="page">Home
            </Routerlink>
          </li>
          <li>
            <RouterLink :to="{ name: 'signup' }"
              class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
              sign up
            </Routerlink>
          </li>
          <li>
            <RouterLink :to="{ name: 'Categories index' }"
              class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
              Categories
            </Routerlink>
          </li>
          <li>
            <RouterLink :to="{ name: 'Create categories' }">
              <button
                class="-mt-[12px] bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                Add new Category
              </button>
            </RouterLink>
          </li>  
          <li>
              <button @click.prevent="logout()"
                class="-mt-[12px] bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                log out
              </button>
              <Dropdown/>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>