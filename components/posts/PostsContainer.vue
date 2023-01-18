<script setup lang="ts">
const posts = useListPosts()

const hasPosts = $computed(() => Array.isArray(posts))
</script>

<template>
  <div flex="~ col">
    <div v-if="hasPosts" flex="~ col" gap8>
      <Post v-for="post in posts" :key="post?.id" :title="post?.title" :content="post?.content" />
    </div>
    <div v-else> no posts</div>
  </div>
</template>
