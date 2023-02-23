<script>
import cards from './cards.vue'
export default {
    components: { cards }
}
</script>

<template>
    <section class="container p-6 mx-auto space-y-3">
        <div class="flex items-center justify-center mt-5">
            <div class="grid gap-2 my-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ml-64 ">
                <cards />
            </div>
        </div>
    </section>
</template>