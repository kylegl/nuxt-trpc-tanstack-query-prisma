<script setup lang="ts">
import { useAddUser, useGetUser, useTestAddUser } from '~~/composables/useGetUser'

const user = useUserStore()
const username = $ref<string | undefined>()
const addUser = useTestAddUser()

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
