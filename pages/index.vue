<script setup lang="ts">

</script>

<template>
  <div>
    <Logos mb-6 />
    <Suspense>
      <PageView />
      <template #fallback>
        <div op50 italic>
          <span animate-pulse>Loading...</span>
        </div>
      </template>
    </Suspense>
    <Login />
    <div flex items-center justify-center gap2>
      <ListUsers />
      <DeleteUsers />
    </div>
    <TestServerFn />
  </div>
</template>
