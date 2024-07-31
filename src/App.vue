<script setup>
import { ref, computed, watch } from 'vue'
import { stepsConfig } from './configs/steps'
defineOptions({
  name: 'App',
})

const currentStep = ref(0)
const formModel = ref({
  loanAmount: '',
  annualRate: '',
  loanMonths: '',
  repaymentsByYear: '',
})
const isFormValid = ref(false)

const updateCurrentStep = (stepNumber) => () => {
  if (currentStep.value < stepNumber) {
    currentStep.value = stepNumber
  }
}
const setFormValid = (isValid) => {
  isFormValid.value = isValid
}
const stepsToShow = computed(() => {
  return stepsConfig.slice(0, currentStep.value + 1)
})

watch(formModel.value, (newData, oldData) => {
  // To do the PMT here
})

</script>

<template>
  <!-- TODO: Complete the coding challenge here! -->
  <component
    :is="step.cmpName"
    v-for="(step, index) in stepsToShow"
    :key="step.cmpName"
    v-model="formModel[step.modelKey]"
    :move-to-next-step="updateCurrentStep(index + 1)"
    :set-form-valid="setFormValid"
  />
</template>
