<script setup lang="ts">
const username = $ref<string | undefined>()
const addUser = useAddUser()

async function go() {
  if (typeof username !== 'string')
    return

  addUser.mutate(username)
}
</script>

<template>
  <div>
    <InputEntry v-model="username" @submit="go" />
  </div>
</template>
