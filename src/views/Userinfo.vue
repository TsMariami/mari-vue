<script setup>

import Users from '../users';
const { users } = Users()

</script>

<template>
    <ul class=" flex flex-col justify-between">
        <div class="inline-block mb-5  ">
            <RouterLink :to="{ name: 'userinfo' }" >
                <span class="flex flex-col font-bold text-2xl text-blue-600 mb-4 text-center bg-gray-200 "
                    v-for="item in users">
                    {{ item?.email }}
                </span>
                <span class="flex flex-col font-bold text-2xl text-blue-600 mb-4 text-center bg-gray-200 " v-for="item in users" :key="item?.index"  >
                    {{ item?.date }}
                </span>
            </RouterLink>
        </div>
    </ul>
</template>