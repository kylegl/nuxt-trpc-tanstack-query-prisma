<script setup lang="ts">
const revealModal = $ref(false)
const toggleModal = useToggle($$(revealModal))
const modal = ref(null)
onClickOutside(modal, () => {
  if (revealModal)
    toggleModal()
  return modal
})
</script>

<template>
  <div>
    <Btn @click="toggleModal()">
      Tweet
    </Btn>
    <teleport to="body">
      <div
        v-if="revealModal"
        ref="modal" absolute top="30%" left="50%" translate-x="-50%" z1 p4 rounded-lg
        bg-zinc-900 border="~ rounded gray-200 dark:gray-700"
      >
        <button @click="toggleModal()">
          <Icon i-carbon:close />
        </button>
        <AddPost />
      </div>
    </teleport>
  </div>
</template>
