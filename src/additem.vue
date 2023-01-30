<script>
export default{
    data() {
        return{
            itemtitle: null
        }
    },
   methods: {
    submitItemTolist(e){
       this.$emit('onSubmit', this.itemtitle),
       this.itemtitle = null
    }
},
 
}


</script>



<template>
    <form  @submit.prevent="submitItemTolist">
    <input v-model="itemtitle">
    <button type="submit">Add</button>
    <br><br><br>
    </form>
</template>