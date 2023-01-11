<script setup lang="ts">
import { useDeleteManyUsers } from '~~/composables/userQueries'

const deleteManyUsers = useDeleteManyUsers()

function handleClick() {
  deleteManyUsers.mutate()
}
</script>

<template>
  <button m-3 text-sm btn @click="handleClick">
    Delete Users
  </button>
</template>
