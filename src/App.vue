<script>
    import axios from 'axios'

    export default{
      data() {
        return {
          range: [5, 10, 20],
          limit: 5,
          langs: ['ge', 'en'],
          lang: 'ge',
          apiUrl: "http://items.magischer.de/api/products",
          products: [],
          res: null,
        }
      },
      methods: {
    function(url = this.apiUrl){ 
        axios.get(url, {
             params: {
             limit: this.limit,
             lang: this.lang
          }
        }).then((response) =>{
          this.res = response.data ,
          this.products = response.data.data
         })
      }  ,
         nextPage(){
        this.function(this.res?.next_page_url)
      },
        previousPage(){
        this.function(this.res?.prev_page_url)
      },
        firstPage(){
        this.function(this.res?.first_page_url)
      },
      lastPage(){
       this.function(this.res?.last_page_url)
      },
      changelang(e){  
        this.lang = e.target.value
        this.function()
    },
    changelimit(e){
      this.limit = e.target.value
        this.function()
    }
  },
  mounted() {
    this.function()
  },
}
  
</script>

<template>
  <select @change="changelang">
    <option v-for="language in langs" :key="language.index" :value="language" >
    {{ language }} </option>
  </select> 
  <select @change="changelimit">
    <option v-for="amount in range" :key="amount.index" :value="amount" >
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
  <a href="#" @click.prevent="firstPage" style="float : left" >first page</a>
  <button style="float : left" :disabled="!res?.prev_page_url" @click.prevent="previousPage" > previous</button>
   <button  :disabled="!res?.next_page_url" style="float : right" @click.prevent="nextPage">next</button>
   <a href="#" @click.prevent="lastPage" style="float : right" >last page</a>
</template>

 




