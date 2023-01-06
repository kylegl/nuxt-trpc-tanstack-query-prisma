<script setup lang="ts">
import { useAddUser, useGetUser } from '~~/composables/useGetUser'

const user = useUserStore()
const username = $ref<string | undefined>()

async function go() {
  if (typeof username !== 'string')
    return

  const { data, pending, error } = await useAddUser(username)
  if (!error.value) {
    const registeredUser = data.value?.username

    if (registeredUser)
      user.setNewName(registeredUser)
  }
}
</script>

<template>
  <div>
    <InputEntry v-model="username" @submit="go" />
  </div>
</template>
