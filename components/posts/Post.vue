<script setup lang="ts">
const { title, content } = defineProps<{ title?: string; content?: string }>()
</script>

<template>
  <div flex="~ col" gap4>
    <h3 v-if="title">
      {{ title }}
    </h3>
    <div v-if="content" p2>
      {{ content }}
    </div>
  </div>
</template>
