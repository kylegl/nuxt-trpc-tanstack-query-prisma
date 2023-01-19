<script setup lang="ts">
const { title, content, createdAt, id } = defineProps<{
  title?: string
  content?: string
  createdAt: Date
  id: number
}>()

let deleted = $ref(false)

const deletePost = useDeletePost()
function handleDeletePost() {
  deleted = true
  console.log('id', id)
  deletePost.mutate({ id })
}

const timeAgo = useTimeAgo(createdAt)
</script>

<template>
  <div flex gap2 p2 border="~ rounded gray-200 dark:gray-700" min-w-md max-w-xl
  :class="[deleted ? 'op30' : 'op100']"
  >
    <div flex="~ col">
      <Icon i-carbon:user-avatar-filled text-3xl text-teal-600 />
    </div>
    <div flex="~ col" w-full>
      <div flex items-center gap1>
        <div>
          User
        </div>
        <div>•</div>
        <div>{{ timeAgo }}</div>
        <button ml-auto @click="handleDeletePost">
          <Icon i-carbon:trash-can trsh-btn />
        </button>
      </div>
      <h3 v-if="title" text-teal-600>
        {{ title }}
      </h3>
      <div v-if="content">
        {{ content }}
      </div>
    </div>
  </div>
</template>
