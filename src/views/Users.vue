<script setup>
import Users from '../users';
const { users } = Users()
console.log(users)
</script>

<template>
    <div class="relative overflow-x-auto">
        <table class="w-full  text-sm text-left text-gray-500 dark:text-gray-400">
            <thead >
                <tr class="">
                    <th scope="col" class="px-6 py-3 ">name</th>
                    <th scope="col" class=" px-6 py-3 text-left">avatar</th>
                    <th scope="col" class=" px-6 py-3 text-left">info</th>

                </tr>
            </thead>
            <tbody >
                <tr class="bg-white border dark:bg-gray-800 dark:border-gray-700 " v-for="item in users">
                        <td scope="row" class=" px-9 py-4  w-32">
                            <RouterLink :to="{ name: 'userinfo' }" >
                            <span class=" flex flex-col font-bold text-2xl text-blue-600 bg-gray-200  " :key="item?.index">
                                {{ item?.name }}
                            </span>
                              </RouterLink> 
                        </td>
                    <td class="border px-6 py-4 w-10">
                        <span class=" flex flex-col font-bold mb-4 bg-gray-200 w-52 " :key="item?.index">
                            <img :src="item?.avatar" alt="">
                        </span>
                    </td>
                    <td class="border px-6 py-4">
                        <!-- <router-view></router-view> -->
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
    <router-view></router-view>
</template>