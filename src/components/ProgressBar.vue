<script setup>
defineProps({
  progress: {
    type: Number,
    required: true,
  },
})
</script>

<template>
  <div
    role="progressbar"
    tabindex="0"
    aria-label="How much you have progressed in the loan calculator"
    class="w-full rounded-full bg-gray-400"
    aria-valuemin="0"
    :aria-valuenow="progress"
    aria-valuemax="100"
  >
    <div
      class="rounded-full bg-blue-600 p-0.5 text-center text-xs font-medium leading-none text-blue-100"
      :style="{ width: `${progress}%` }"
    >
      {{ `${progress}%` }}
    </div>
  </div>
</template>
