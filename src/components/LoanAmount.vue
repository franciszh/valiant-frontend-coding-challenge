<script setup>
import { ref, defineModel } from 'vue'

const props = defineProps({
  moveToNextStep: {
    type: Function,
    default: undefined,
  },
  setFormValid: {
    type: Function,
    default: undefined,
  },
})
const model = defineModel({
  type: String,
})
const errorMessage = ref(null)

const validator = (event) => {
  const value = event.target.value
  if (isNaN(value)) {
    return 'Please enter a number please'
  }
  if (value < 1000 || value > 20000000) {
    return 'Sorry, we only provide loans in the range of one thousand dollars to twenty million dollars'
  }
  return null
}
const inputOnChangeHandler = (event) => {
  const validationMessage = validator(event)
  errorMessage.value = validationMessage
  if (props.setFormValid) {
    props.setFormValid(!validationMessage)
  }
  if (!validationMessage && props.moveToNextStep) {
    props.moveToNextStep()
  }
}
</script>

<template>
  <section>
    <label for="loanAmount">How much loan are you looking at?</label>
    <input
      id="loanAmount"
      v-model="model"
      type="text"
      name="loanAmount"
      :aria-invalid="!!errorMessage"
      :aria-describedby="errorMessage ? 'loanAmountErrorMessage' : undefined"
      @input="inputOnChangeHandler"
    >
    <p
      v-if="errorMessage"
      id="loanAmountErrorMessage"
      role="alert"
    >
      {{ errorMessage }}
    </p>
  </section>
</template>
