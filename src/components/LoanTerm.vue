<script setup>
import { onMounted, ref } from 'vue'
import { getData } from '../utils/network'
import { loanTermEndpoint } from '../configs/endpoints'

const loanTerm = ref([])
onMounted(async () => {
  loanTerm.value = await getData(loanTermEndpoint)
})
</script>

<template>
  <label for="loanTerm">How long will the loan term be?</label>
  <select
    id="loanTerm"
    name="loanTerm"
  >
    <option
      v-for="item in loanTerm"
      :key="item.label"
      :value="item.value"
    >
      {{ item.label }}
    </option>
  </select>
</template>
