<script setup>
import { onMounted, ref } from 'vue'
import { getData } from '../utils/network'
import { loanPurposeEndPoint } from '../configs/endpoints'

const loanPurposeOptions = ref([])
onMounted(async () => {
  loanPurposeOptions.value = await getData(loanPurposeEndPoint)
})
</script>

<template>
  <label for="loanPurpose">How will the loan be used?</label>
  <select
    id="loanPurpose"
    name="loanPurpose"
  >
    <option
      v-for="item in loanPurposeOptions"
      :key="item.value"
      :value="item.annualRate"
    >
      {{ item.label }}
    </option>
  </select>
</template>
