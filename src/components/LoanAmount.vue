<script setup>
import { ref } from 'vue'
const errorMessage = ref(null)
// a function that updates the error message state
const validator = (event) => {
  const value = event.target.value
  if (isNaN(value)) {
    errorMessage.value = 'Please enter a number please'
    return
  }
  if (value < 1000 || value > 20000000) {
    errorMessage.value = 'Sorry, we only provide loans in the range of one thousand dollars to twenty million dollars'
    return
  }
  errorMessage.value = null
}
</script>

<template>
  <label for="loanAmount">How much loan are you looking at?</label>
  <input
    id="loanAmount"
    type="text"
    name="loanAmount"
    :aria-invalid="!!errorMessage"
    :aria-describedby="errorMessage ? 'loanAmountErrorMessage' : undefined"
    @input="validator"
  >
  <p
    v-if="errorMessage"
    id="loanAmountErrorMessage"
    role="alert"
  >
    {{ errorMessage }}
  </p>
</template>
