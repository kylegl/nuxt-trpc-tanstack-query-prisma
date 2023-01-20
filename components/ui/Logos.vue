<template>
  <div flex="~ col" gap4>
    <div inline-flex text-2xl font-300 cursor-default>
      <div flex flex-col children:mx-auto>
        <img w-18 h-18 inline-block src="/nuxt.png">
        <span text-green5 mt--2>Nuxt 3</span>
      </div>
      <div
        text="3xl gray4"
        m="x-4 y-auto"
        transition-all-500
        transform
        hover:rotate-135
        i-carbon-add
      />
      <div flex flex-col children:mx-auto>
        <img w-18 h-18 inline-block src="/vite.png">
        <span text-purple5 mt--2>Vitesse</span>
      </div>
    </div>
    <div inline-flex text-5xl justify-between>
      <a href="https://trpc.io" target="_blank">
        <Icon i-logos:trpc />
      </a>
      <a href="https://tanstack.com/query/v4" target="_blank">
        <Icon i-logos:react-query-icon />
      </a>
      <a href="https://www.prisma.io/" target="_blank">
        <Icon i-logos:prisma />
      </a>
      <a href="https://supabase.com/" target="_blank">
        <Icon i-skill-icons:supabase-dark />
      </a>
    </div>
  </div>
</template>
