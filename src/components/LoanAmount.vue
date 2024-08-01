<script setup>
import { ref, defineModel } from 'vue'
import { formLabelStyle, formTextInputStyle, formTextInputErrorStyle } from '../utils/styles'
import db from 'lodash.debounce'

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
const errorMessage = ref('')

const validator = (value) => {
  if (isNaN(value)) {
    return 'Please enter a number'
  }
  if (value < 1000 || value > 20000000) {
    return 'Sorry, we only provide loans in the range of one thousand dollars to twenty million dollars'
  }
  return ''
}
const inputOnChangeHandler = (event) => {
  const element = event.target
  const value = element.value
  const { setFormValid, moveToNextStep } = props
  const validationMessage = validator(value)
  errorMessage.value = validationMessage
  // triggers the native html input field invalid state
  element.setCustomValidity(validationMessage)
  if (setFormValid) {
    setFormValid(!validationMessage)
  }
  if (!validationMessage && moveToNextStep) {
    moveToNextStep()
  }
}
// add debounce to improve the typing UX
const debouncedOnChange = db(inputOnChangeHandler, 500)
</script>

<template>
  <section class="py-3">
    <label
      :class="formLabelStyle"
      for="loanAmount"
    >How much would you like to borrow?</label>
    <input
      id="loanAmount"
      v-model="model"
      v-focus
      :class="formTextInputStyle"
      type="text"
      name="loanAmount"
      placeholder="Please input the loan amount"
      :aria-invalid="!!errorMessage"
      :aria-describedby="errorMessage ? 'loanAmountErrorMessage' : undefined"
      @input="debouncedOnChange"
    >
    <p
      v-if="errorMessage"
      id="loanAmountErrorMessage"
      role="alert"
      :class="formTextInputErrorStyle"
    >
      {{ errorMessage }}
    </p>
  </section>
</template>
