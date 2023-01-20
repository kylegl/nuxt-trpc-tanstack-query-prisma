<script setup lang="ts">
const { error, mutate, reset, isSuccess } = useAddPost()
const postTitle = $ref<string>()
let postContent = $ref<string>()
const unfocus = $ref(false)

async function submitPost() {
  if (typeof postTitle !== 'string' && !postContent)
    return

  mutate({ title: postTitle, content: postContent })
  postContent = ''
}
</script>

<template>
  <div
    flex gap2 min-w-md max-w-xl
    bg-transparent
  >
    <Icon i-carbon:user-avatar-filled text-3xl text-teal-600 />

    <div flex="~ col" gap2 w-full>
      <TextEntry v-model="postContent" :unfocus="unfocus" placeholder="What's happening?" @submit="submitPost" />
      <Btn my-auto ml-auto @click="submitPost">
        Tweet
      </Btn>
    </div>
  </div>
</template>
