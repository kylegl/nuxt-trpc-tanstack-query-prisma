<script setup lang="ts">
import type { User } from '@prisma/client'

let users = $ref<User[] | null>()

async function handleClick() {
  const { data, error } = await useListUsers()

  users = data.value
}
</script>

<template>
  <div>
      <button m-3 text-sm btn @click="handleClick">
        List Users
      </button>
    <div v-if="users">
      <ul>
        <li v-for="user in users" :key="user.id">
          {{ user.username }}
        </li>
      </ul>
    </div>
  </div>
</template>
