<script setup lang="ts">
const { $client } = useNuxtApp()
const data = await $client.hello.query({ text: 'client' })
</script>

<template>
  <div>
    <Logos mb-6 />
    <p>{{data?.greeting}}</p>
    <Suspense>
      <PageView />
      <template #fallback>
        <div op50 italic>
          <span animate-pulse>Loading...</span>
        </div>
      </template>
    </Suspense>
    <InputEntry />
  </div>
</template>
