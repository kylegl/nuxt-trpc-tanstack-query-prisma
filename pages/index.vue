<script setup lang="ts">

</script>

<template>
  <div flex="~ col" gap4 justify-center items-center text-gray>
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
      <AddPost p4 rounded-md border="~ rounded gray-200 dark:gray-700" />
      <PostsContainer />
    </div>
  </div>
</template>
