<script setup>
import sidebaritems from './SidebarItems.vue'
</script>
<template>
  <aside>
    <div class="fixed top-16 left-0 z-40 w-60 h-screen transition-transform -translate-x-full sm:translate-x-0">
      <div class="h-full px-3 py-4 overflow-y-scroll bg-light-50 dark:bg-gray-800  ">
        <sidebaritems/>
      </div>
    </div>
  </aside>
</template>