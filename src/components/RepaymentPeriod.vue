<script setup>
import { onMounted, ref } from 'vue'
import { getData } from '../utils/network'
import { repaymentPeriodEndpoint } from '../configs/endpoints'

const props = defineProps({
  moveToNextStep: {
    type: Function,
    default: undefined,
  },
})
const model = defineModel({
  type: String,
})
const repaymentPeriod = ref([])

onMounted(async () => {
  repaymentPeriod.value = await getData(repaymentPeriodEndpoint)
})
</script>

<template>
  <section>
    <label for="repaymentPeriod">How frequent the loan will be paid?</label>
    <select
      id="repaymentPeriod"
      v-model="model"
      name="repaymentPeriod"
      @change="props.moveToNextStep"
    >
      <option
        disabled
        value=""
      >
        Please select one repayment period
      </option>
      <option
        v-for="item in repaymentPeriod"
        :key="item.label"
        :value="`${item.value}`"
      >
        {{ item.label }}
      </option>
    </select>
  </section>
</template>
