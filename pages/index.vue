<script setup lang="ts">
const user = useUserStore()
</script>

<template>
  <div>
    <Logos mb-6 />
    <p>{{user.savedName}}</p>
    <Suspense>
      <PageView />
      <template #fallback>
        <div op50 italic>
          <span animate-pulse>Loading...</span>
        </div>
      </template>
    </Suspense>
    <Login />
  </div>
</template>
