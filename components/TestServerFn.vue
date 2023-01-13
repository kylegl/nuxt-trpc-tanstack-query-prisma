<script setup lang="ts">
const res = await useFetch('/api/test')
</script>

<template>
  <div>
    {{ res }}
  </div>
</template>
