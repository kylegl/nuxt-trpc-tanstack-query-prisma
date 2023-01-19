<script setup lang="ts">
const props = defineProps<{ modelValue?: string; placeholder?: string }>()
const emit = defineEmits(['update:modelValue', 'submit'])

const val = useVModel(props, 'modelValue', emit)

function handleSubmit() {
  emit('submit')
}
</script>

<template>
  <textarea
    id="input" v-model="val" :placeholder="placeholder" p="x-4 y-2"
    bg="transparent" outline="none active:none"
    @keydown.enter="handleSubmit"
  />
</template>
