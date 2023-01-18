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
    <div flex="~ col" items-center justify-center gap2>
      <AddPost />
      <PostsContainer />
    </div>
  </div>
</template>
