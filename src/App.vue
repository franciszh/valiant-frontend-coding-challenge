<script setup>
import { ref, computed, watch } from 'vue'
import { stepsConfig } from './configs/steps'
import PMT from './utils/PMT'
import ProgressBar from './components/ProgressBar.vue'
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
const instalment = ref(null)

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

watch([formModel.value, isFormValid], ([formData, isFormValid]) => {
  if (!isFormValid) {
    instalment.value = null
    return
  }
  if (Object.values(formData).some((data) => !data)) {
    instalment.value = null
    return
  }
  const { annualRate, repaymentsByYear, loanMonths, loanAmount } = formModel.value
  const rate = Number(annualRate) / Number(repaymentsByYear)
  // this is the tricky bit as the num of payments varies according to different repayment periods
  const totalNumOfPayments = Number(repaymentsByYear) / 12 * Number(loanMonths)
  const rawInstalment = PMT(rate, totalNumOfPayments, Number(loanAmount))
  instalment.value = Math.round(Math.abs(rawInstalment))
})

</script>

<template>
  <!-- TODO: Complete the coding challenge here! -->
  <div class="flex justify-center pt-10">
    <main class="w-2/4">
      <ProgressBar :progress="currentStep / stepsConfig.length * 100" />
      <form>
        <component
          :is="step.cmpName"
          v-for="(step, index) in stepsToShow"
          :key="step.cmpName"
          v-model="formModel[step.modelKey]"
          :move-to-next-step="updateCurrentStep(index + 1)"
          :set-form-valid="setFormValid"
        />
        <LoanResult
          v-if="instalment !== null"
          :instalment="instalment"
          :num-of-instalment="Number(formModel.repaymentsByYear) / 12 * Number(formModel.loanMonths)"
        />
      </form>
    </main>
  </div>
</template>
