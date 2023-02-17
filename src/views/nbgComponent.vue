<script setup>
import mainlayout from '../layout/mainlayout.vue';
import defineprops from '../props/defineprops';
import Menu from '../components/menu.vue';
const { show } = defineprops()
</script>
<template>
  <mainlayout>
    <template #header>
      <Menu />
    </template>
    <template #default>
      <div class=" flex flex-row justify-between">
        <div class="inline-block flex flex-col mb-5 ">
          <span class=" font-bold text-2xl text-blue-600 mb-4 text-center bg-gray-200 ">
            Name
          </span>
          <div class="inline-block flex flex-col mb-5 bg-gray-400" v-for="item in show" :key="item.index">
            {{ item.name }}
          </div>
        </div>
        <div class="inline-block flex flex-col mb-5 ">
          <span class=" font-bold text-2xl text-blue-600 mb-4 text-center bg-gray-300 ">
            Date
          </span>
          <div class="inline-block flex flex-col mb-5 bg-gray-500" v-for="item in show" :key="item.index">
            {{ item.date }}
          </div>
        </div>
        <div class="inline-block flex flex-col mb-5 ">
          <span class=" font-bold text-2xl text-blue-600 mb-4  bg-gray-200 ">
            Code
          </span>
          <div class="inline-block flex flex-col mb-5 text-center bg-gray-400" v-for="item in show" :key="item.index">
            {{ item.code }}
          </div>
        </div>
        <div class="inline-block flex flex-col mb-5 ">
          <span class=" font-bold text-2xl text-blue-600 mb-4 bg-gray-300 ">
            Quantity
          </span>
          <div class="inline-block flex flex-col mb-5 text-center bg-gray-500" v-for="item in show" :key="item.index">
            {{ item.quantity }}
          </div>
        </div>
        <div class="inline-block flex flex-col mb-5 ">
          <span class=" font-bold text-2xl text-blue-600 mb-4 bg-gray-200 ">
            RateFormated
          </span>
          <div class="inline-block flex flex-col mb-5 text-center bg-gray-400" v-for="item in show" :key="item.index">
            {{ item.rateFormated }}
          </div>
        </div>
        <div class="inline-block flex flex-col mb-5 ">
          <span class=" font-bold text-2xl text-blue-600 mb-4 bg-gray-300 ">
            DiffFormated
          </span>
          <div class="inline-block flex flex-col mb-5  text-center bg-gray-500" v-for="item in show" :key="item.index">
            {{ item.diffFormated }}
          </div>
        </div>
        <div class="inline-block flex flex-col mb-5 ">
          <span class=" font-bold text-2xl text-blue-600 mb-4 bg-gray-200">
            Rate
          </span>
          <div class="inline-block flex flex-col mb-5 bg-gray-400" v-for="item in show" :key="item.index">
            {{ item.rate }}
          </div>
        </div>
        <div class="inline-block flex flex-col mb-5 ">
          <span class=" font-bold text-2xl text-blue-600 mb-4 bg-gray-300">
            Diff
          </span>
          <div class="inline-block flex flex-col mb-5 bg-gray-500" v-for="item in show" :key="item.index">
            {{ item.diff }}
          </div>
        </div>
        <div class="inline-block flex flex-col mb-5 ">
          <span class=" font-bold text-2xl text-blue-600 mb-4 text-center bg-gray-200">
            ValidFromDate
          </span>
          <div class="inline-block flex flex-col mb-5 bg-gray-400" v-for="item in show" :key="item.index">
            {{ item.validFromDate }}
          </div>
        </div>
      </div>
    </template>
  </mainlayout>
</template>      