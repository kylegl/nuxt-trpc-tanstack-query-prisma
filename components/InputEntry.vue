<script setup lang="ts">
const props = defineProps<{ modelValue?: string }>()
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
      placeholder="What's your username?"
      type="text" autocomplete="off"
      p="x-4 y-2" m="t-5" w="250px"
      text="center" bg="transparent"
      border="~ rounded gray-200 dark:gray-700"
      outline="none active:none"
      @keydown.enter="handleSubmit"
    >
    <div>
      <button
        m-3 text-sm btn
        :disabled="!val"
        @click="handleSubmit"
      >
        GO
      </button>
    </div>
  </div>
</template>
