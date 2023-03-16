<script setup>
import { useStore } from 'vuex';
import { computed } from 'vue';
import { onMounted } from 'vue';
import Navbar from '../../components/Navbar.vue';
const store = useStore()


const deleteUser = async (id) =>await store.dispatch('user/deleteUser', id)




const users = computed(() => store.getters['user/getusers'])

const showOrHide = () => {
    var x = document.getElementById("popup-modal");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

onMounted(() => store.dispatch('user/getUsers'))
</script>

<template>
    <Navbar/>
    <div class="relative overflow-x-auto">
        <table class="w-full  text-sm text-left text-gray-500 dark:text-gray-400">
            <thead>
                <tr class="">
                    <th scope="col" class="px-6 py-3 ">name</th>
                    <th scope="col" class=" px-6 py-3 text-left">type</th>
                    <th scope="col" class=" px-6 py-3 text-left">edit</th>
                    <th scope="col" class=" px-2 py-3 text-left">delete</th>

                </tr>
            </thead>
            <tbody>
                <tr class="bg-white border dark:bg-gray-800 dark:border-gray-700 " v-for="item in users">
                    <td scope="row" class=" ">
                            <span 
                                class=" flex flex-col font-bold text-2xl text-blue-600 " :key="item?.index">
                                {{ item?.name }}
                            </span>
                    </td>
                    <td class="border text-center ">
                        <span class=" flex flex-col font-bold text-2xl text-blue-600 " :key="item?.index">
                            {{ item?.type }}
                        </span>
                    </td>
                    <td  class="border text-center ">
                        <RouterLink :to="{ name: 'Edit categories', params:{ id:item?.id } }">
                        <button type="button"
                            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Edit</button>
                        </RouterLink>
                    </td>
                    <td scope="row" class=" px-9 py-4  w-32">
                        <button @click.prevent="showOrHide()" data-modal-target="popup-modal"
                            data-modal-toggle="popup-modal"
                            class="block text-white bg-red-700 hover:bg-red-800  font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                            type="button">
                            Delete
                        </button>

                        <div id="popup-modal" tabindex="-1"
                            class="fixed top-0 left-0 right-0 z-50 hidden ml-[600px] mt-[200px]  p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] md:h-full">
                            <div class="relative w-full h-full max-w-md md:h-auto">
                                <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                                    <button @click.prevent="showOrHide()" type="button"
                                        class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
                                        data-modal-hide="popup-modal">
                                        <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd"
                                                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                                clip-rule="evenodd"></path>
                                        </svg>
                                    </button>
                                    <div class="p-6 text-center">
                                        <svg aria-hidden="true"
                                            class="mx-auto mb-4 text-gray-400 w-14 h-14 dark:text-gray-200" fill="none"
                                            stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                        </svg>
                                        <h3 class="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">Are you sure
                                            you want to delete this user?</h3>
                                        <button @click.prevent="deleteUser(users.id)" data-modal-hide="popup-modal"
                                            type="button"
                                            class="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2">
                                            Yes, I'm sure
                                        </button>
                                        <button @click.prevent="showOrHide()" data-modal-hide="popup-modal" type="button"
                                            class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">No,
                                            cancel</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
<!-- <router-view></router-view> -->
</template>