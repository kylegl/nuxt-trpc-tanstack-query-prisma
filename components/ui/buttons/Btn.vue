<script setup lang="ts">
const { disabled } = defineProps<{ val?: string; disabled?: boolean }>()
const emit = defineEmits(['click'])
</script>

<template>
  <button
    m-3 text-sm btn
    :disabled="disabled"
    @click="emit('click')"
  >
    <slot />
  </button>
</template>
