<template>
<div >
    <RouterLink :to="{ name: 'users' }" > 
    <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
        Show users info 
    </button>
    </RouterLink>
    <RouterLink :to="{ name: 'create' }" > 
    <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
        Add new account 
    </button>
    </RouterLink>
</div>
<router-view></router-view>
</template>