<script setup lang="ts">
import { useAddUser, useGetUser } from '~~/composables/userQueries'
const config = useRuntimeConfig()

const user = useUserStore()
const username = $ref<string | undefined>()
const addUser = useAddUser()

async function go() {
  if (typeof username !== 'string')
    return

  addUser.mutate(username)

  user.setNewName(username)
}
</script>

<template>
  <div>
    <InputEntry v-model="username" @submit="go" />
  </div>
</template>
