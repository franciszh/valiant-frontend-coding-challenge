<script setup>
import { loanResultParaStyle, loanResultMessageBox } from '../utils/styles'

defineProps({
  instalment: {
    type: Number,
    required: true,
  },
  numOfInstalment: {
    type: Number,
    required: true,
  },
})
</script>

<template>
  <section :class="loanResultMessageBox">
    <p :class="loanResultParaStyle">
      You are expected to repay <span class="font-bold">${{ instalment.toLocaleString() }} per instalment</span> and <span class="font-bold">${{ (instalment * numOfInstalment).toLocaleString() }} over the loan term</span> in total
    </p>
  </section>
</template>
