<template>
    <aside id="default-sidebar"
        class="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar">
        <div class="h-full px-3 py-4 overflow-y-auto bg-gray-300 dark:bg-gray-800">
            <ul class="space-y-2">
                <li>
                    <a href="#"
                        class="flex items-center p-2 text-base font-normal border bg-gray-800 text-white rounded-lg dark:text-white hover:bg-gray-500 dark:hover:bg-gray-300">
                        <RouterLink :to="{ name: 'information' }" class="">
                            <span class="ml-3">Account infromation</span>
                        </RouterLink>
                    </a>
                </li>
                <li>
                    <a href="#"
                        class="flex items-center p-2 text-base font-normal border bg-gray-800 text-white  rounded-lg dark:text-white hover:bg-gray-500 dark:hover:bg-gray-300">
                        <RouterLink :to="{ name: 'update' }" class="">
                            <span class="flex-1 ml-3 whitespace-nowrap">Update infromation</span>
                        </RouterLink>
                    </a>
                </li>
            </ul>      
    </div>
</aside>
<div class=" ml-[280px]">
   <router-view/>  
</div>
 
<div>
    
</div></template>