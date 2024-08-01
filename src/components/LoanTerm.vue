<script setup>
import { onMounted, ref } from 'vue'
import { getData } from '../utils/network'
import { loanTermEndpoint } from '../configs/endpoints'
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
const loanTerm = ref([])

onMounted(async () => {
  loanTerm.value = await getData(loanTermEndpoint)
})
</script>

<template>
  <section class="py-3">
    <label
      for="loanTerm"
      :class="formLabelStyle"
    >How long would the loan term be?</label>
    <select
      id="loanTerm"
      v-model="model"
      v-focus
      name="loanTerm"
      :class="formSelectStyle"
      @change="props.moveToNextStep"
    >
      <option
        disabled
        value=""
      >
        Please select one loan term
      </option>
      <option
        v-for="item in loanTerm"
        :key="item.label"
        :value="`${item.value}`"
      >
        {{ item.label }}
      </option>
    </select>
  </section>
</template>
