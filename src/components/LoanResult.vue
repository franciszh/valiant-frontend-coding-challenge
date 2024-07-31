<script setup>
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
  <section>
    <p>You are expected to repay ${{ instalment }} per instalment and totally ${{ instalment * numOfInstalment }} over the loan term</p>
  </section>
</template>
