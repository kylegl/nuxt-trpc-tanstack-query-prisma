<script setup lang="ts">
const addPost = useAddPost()
const postTitle = $ref<string>()
const postContent = $ref<string>()

function submitPost() {
  if (typeof postTitle !== 'string' && typeof postContent !== 'string')
    return

  const res = addPost.mutate({ title: postTitle, content: postContent })
  console.log('res', res)
}
</script>

<template>
  <div flex="~ col" gap2 border="~ rounded gray-200 dark:gray-700" p2>
    <label>Title</label>
    <InputEntry v-model="postTitle" />
    <label>Content</label>
    <InputEntry v-model="postContent" />
    <Btn m-auto @click="submitPost">
      Post
    </Btn>
  </div>
</template>
