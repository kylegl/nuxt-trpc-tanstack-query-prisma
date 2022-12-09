<script setup lang="ts">
import useGetUser from '~~/composables/useGetUser'

const user = useUserStore()
const username = $ref<string | undefined>()
const isLoggedIn = $ref(false)

async function go() {
  const { data, pending, error } = await useGetUser(username)
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
