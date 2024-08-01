<script setup>
import { onMounted, ref } from 'vue'
import { getData } from '../utils/network'
import { loanPurposeEndPoint } from '../configs/endpoints'
import { formLabelStyle, formSelectStyle } from '../utils/styles'

const props = defineProps({
  moveToNextStep: {
    type: Function,
    default: undefined,
  },
})
const model = defineModel({
  type: String,
})
const loanPurposeOptions = ref([])

onMounted(async () => {
  loanPurposeOptions.value = await getData(loanPurposeEndPoint)
})
</script>

<template>
  <section class="py-3">
    <label
      for="loanPurpose"
      :class="formLabelStyle"
    >How would the loan be used?</label>
    <select
      id="loanPurpose"
      v-model="model"
      name="loanPurpose"
      :class="formSelectStyle"
      @change="props.moveToNextStep"
    >
      <option
        disabled
        value=""
      >
        Please select one loan purpose
      </option>
      <option
        v-for="item in loanPurposeOptions"
        :key="item.value"
        :value="`${item.annualRate}`"
      >
        {{ item.label }}
      </option>
    </select>
  </section>
</template>
