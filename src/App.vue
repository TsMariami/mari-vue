<script setup>
import file from './file'
import list from './list.vue'

const {products, getApiData ,gama,limits, langs, changelang, changelimit,  } = file()
 

</script>
  

<template>
  <!-- <list :data="products"/> -->
  <select @change.prevent="changelang">
    <option v-for="language in langs" :key="language.index" :value="language" >
    {{ language }} </option>
  </select> 
  <select @change.prevent="changelimit">
    <option v-for="amount in limits" :key="amount.index" :value="amount" >
    {{ amount }} </option>
  </select>
  <table>
    <thead>
      <tr>
        <th> porduct ID </th>
        <th> product name </th>
        <th> cover image </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in products" :key="item.index">
        <td>{{ item.id }}</td>
        <td>{{ item.name }}</td>
        <td><img :src="item.img.cover" alt=""></td>
      </tr>
    </tbody>
  </table>
  <div>
    <button @click.prevent="getApiData(gama.first_page_url)"  :disabled=" !gama?.first_page_url"  style="float : right"> first page </button>
    <button @click.prevent="getApiData(gama.prev_page_url)" :disabled=" !gama?.prev_page_url"  style="float : left"> prev page</button>
    <button @click.prevent="getApiData(gama?.next_page_url)" :disabled=" !gama?.next_page_url"  style="float : right">next page</button>
    <button @click.prevent="getApiData(gama.last_page_url)"  :disabled=" !gama?.last_page_url"  style="float : left">last page</button>

  </div>

</template>

 




