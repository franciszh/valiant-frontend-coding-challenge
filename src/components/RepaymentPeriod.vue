<script setup>
import { onMounted, ref } from 'vue'
import { getData } from '../utils/network'
import { repaymentPeriodEndpoint } from '../configs/endpoints'

const repaymentPeriod = ref([])
onMounted(async () => {
  repaymentPeriod.value = await getData(repaymentPeriodEndpoint)
})
</script>

<template>
  <label for="repaymentPeriod">How frequent the loan will be paid?</label>
  <select
    id="repaymentPeriod"
    name="repaymentPeriod"
  >
    <option
      v-for="item in repaymentPeriod"
      :key="item.label"
      :value="item.value"
    >
      {{ item.label }}
    </option>
  </select>
</template>
