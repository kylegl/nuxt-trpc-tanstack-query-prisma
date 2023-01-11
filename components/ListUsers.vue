<script setup lang="ts">
import { useListUsers } from '~~/composables/userQueries'

const { data: res } = $(useListUsers())
const revealList = $ref(false)
const toggleList = useToggle($$(revealList))

const users = $computed(() => res?.data)
</script>

<template>
  <div>
    <button m-3 text-sm btn @click="toggleList()">
      List Users
    </button>
    <div v-if="revealList">
      <ul>
        <li v-for="user in users" :key="user.id">
          {{ user.username }}
        </li>
      </ul>
    </div>
  </div>
</template>
