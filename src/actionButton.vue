<script setup>
import { useStore } from 'vuex'
    const props = defineProps({
   itemId: { type: Number, required: true },
   action:  { type: String, required: true }
   })
        const AddButton = "focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800  ml-3"
        const RemoveButton = "focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
        const store = useStore()
        function addToCart(e) {
            store.dispatch('additemtocart', props.itemId)
        }
        function RemoveFromCart(e) {
            store.dispatch('deleteitemfromcart', props.itemId)
        }
</script>
<template>
    <button v-if="action === 'add'" @click.prevent="addToCart" type="button" :class="AddButton">Add To Cart</button>
    <button v-else @click.prevent="RemoveFromCart" type="button" :class="RemoveButton">Remove From Cart</button>
</template>