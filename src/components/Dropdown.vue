<script setup>

import { ref } from 'vue'

const show = ref(true)
const showOrHide = () => {
  var x = document.getElementById("dropdown");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
</script>
<template>
    <button id="dropdownDefaultButton" data-dropdown-toggle="dropdown"
        class="text-white hover:bg-blue-100 rounded-3xl items-center focus:outline-none  font-medium text-sm px-0.5 py-0.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        type="button" @click.prevent="showOrHide()"> 
        <a href=""  >
      <sign-in></sign-in>
        </a>
      </button>

    <div  v-if="show" id="dropdown" class="z-10 hidden bg-gray-400 divide-y divide-gray-100 rounded-lg shadow w-44 fixed top-[109px] dark:bg-gray-700">
        <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
           <li>
                 <RouterLink :to="{ name: 'dashboard' }" class=""> 
                <a href="#"
                    class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
                </RouterLink> 
            </li> 
            <li>
              <RouterLink :to="{ name: 'signup' }" > 
                <a href="#"
                    class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign up</a>
                    </RouterLink>
            </li>
            <li>
              <RouterLink :to="{ name: 'signin' }" class=""> 
                <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign
                in</a>
              </RouterLink>
        </li>
    </ul>
</div>
</template>
