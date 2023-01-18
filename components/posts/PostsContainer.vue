<script setup lang="ts">
const { isLoading, status, data: posts } = $(useListPosts())

const hasPosts = $computed(() => Array.isArray(posts?.data))
</script>

<template>
  <div flex="~ col">
    {{ posts }}
    <div v-if="hasPosts" flex="~ col" gap8>
      <Post v-for="post in posts?.data" :key="post?.id" :title="post?.title" :content="post?.content" :created-at="post?.createdAt" />
    </div>
    <div v-else>
      no posts
    </div>
  </div>
</template>
