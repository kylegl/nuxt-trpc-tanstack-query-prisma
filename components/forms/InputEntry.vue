<script setup lang="ts">
interface Props {
  modelValue?: string
  placeholder?: string
  rows?: number
}
const props = withDefaults(defineProps<Props>(), {
  rows: 2,
})
const emit = defineEmits(['update:modelValue', 'submit'])

const val = useVModel(props, 'modelValue', emit)

function handleSubmit() {
  emit('submit')
}
</script>

<template>
  <div>
    <input
      id="input"
      v-model="val"
      :placeholder="placeholder"
      type="text" autocomplete="off"
      p="x-4 y-2" w="250px"
      text="center" bg="transparent"
      border="~ rounded gray-200 dark:gray-700"
      outline="none active:none"
      @keydown.enter="handleSubmit"
    >
  </div>
</template>
