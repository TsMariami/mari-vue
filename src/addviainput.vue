<script setup>
  import { useStore } from 'vuex'
  const props = defineProps({
   itemId: { type: Number, required: true },
   action:  { type: String, required: true }
   })
        const inputclass = "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 "
        const textArea = "form-control block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 overflow-auto"
        const addbutton = "text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900 w-40 ml-80 mt-20  "
          const store = useStore()
       
          function Add(e) {
            store.dispatch('additemtowatchlist', props.itemId)
        }
        function RemoveFromCart(e) {
            store.dispatch('deleteitemfromwatchlist', props.itemId)
        }
</script>

<template>
    <div class="add"></div>
   <input type="text" :class="inputclass" placeholder="Name" required>
   <input type="text" :class="inputclass" placeholder="URL" required>
   <input type="text" :class="inputclass" placeholder="Cover " required>
  <textarea aria-label="With textarea"  :class="textArea" placeholder="Description"  required></textarea>
  <button type="button" :class="addbutton">Add song to All</button>
</template>   