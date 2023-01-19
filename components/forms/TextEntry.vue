<script setup lang="ts">
const props = defineProps<{ modelValue?: string; placeholder?: string; unfocus: boolean }>()
const emit = defineEmits(['update:modelValue', 'submit'])
const textarea = ref(null)
let { focused } = $(useFocus(textarea))
const val = useVModel(props, 'modelValue', emit)

function handleSubmit() {
  emit('submit')
  focused = false
}

watchEffect(() => props.unfocus && (focused = false))
</script>

<template>
  <textarea
    ref="textarea"
    v-model="val" :placeholder="placeholder" p="x-4 y-2"
    bg="transparent" outline="none active:none"
    @keydown.enter="handleSubmit"
  />
</template>
