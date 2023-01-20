<script setup lang="ts">
const { isLoading, status, data: posts, suspense } = useListPosts()

onServerPrefetch(async () => { await suspense() })
</script>

<template>
  <div flex="~ col">
    <div v-if="Array.isArray(posts)" flex="~ col" items-center gap1>
      <Post
        v-for="post in posts"
        :id="post.id"
        :key="post.id"
        :title="post.title"
        :content="post.content"
        :created-at="post.createdAt"
      />
    </div>
  </div>
</template>
