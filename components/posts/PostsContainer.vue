<script setup lang="ts">
const { isLoading, status, data: posts } = $(useListPosts())
</script>

<template>
  <div flex="~ col">
    <div v-if="Array.isArray(posts?.data)" flex="~ col" items-center gap1>
      <Post
        v-for="post in posts?.data"
        :id="post.id"
        :key="post.id"
        :title="post.title"
        :content="post.content"
        :created-at="post.createdAt"
      />
    </div>
  </div>
</template>
