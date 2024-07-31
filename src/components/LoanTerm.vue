<script setup>
import { onMounted, ref } from 'vue'
import { getData } from '../utils/network'
import { loanTermEndpoint } from '../configs/endpoints'

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
  <section>
    <label for="loanTerm">How long will the loan term be?</label>
    <select
      id="loanTerm"
      v-model="model"
      name="loanTerm"
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
