<script setup lang="ts">
const { title, content, createdAt } = defineProps<{ title?: string; content?: string; createdAt: Date }>()
</script>

<template>
  <div flex gap2 p2 border="~ rounded gray-200 dark:gray-700">
    <div flex="~ col" />
    <div flex="~ col" gap2>
      <div flex items-center gap1>
        <Icon i-carbon:user-avatar-filled text-xl />
        <span>
        User
        </span>
        <Icon i-ci:dot-01-xs />
        <div>{{ createdAt.toLocaleDateString('en-us') }}</div>
      </div>
      <h3 v-if="title" text-teal-600>
        {{ title }}
      </h3>
      <div v-if="content">
        {{ content }}
      </div>
    </div>
  </div>
</template>
