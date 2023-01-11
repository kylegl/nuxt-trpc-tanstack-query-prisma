import { useMutation, useQuery, useQueryClient } from '@tanstack/vue-query'
import type { TRPCClientError } from '@trpc/client'
import type { inferRouterOutputs } from '@trpc/server'
import type { AppRouter } from '~~/server/trpc/routers/appRouter'

type RouterOutput = inferRouterOutputs<AppRouter>
type CreateUserOutput = RouterOutput['user']['add']
type ListUserOutput = RouterOutput['user']['list']
type ErrorOutput = TRPCClientError<AppRouter>

export function useGetUser(username?: string) {
  const { $client } = useNuxtApp()
  const queryFn = async () => $client.user.getUser.useQuery({ username })

  return useQuery({ queryKey: ['user', 'byId'], queryFn })
}

export function useAddUser() {
  const vueQueryClient = useQueryClient()
  const { $client } = useNuxtApp()
  const mutationFn = (username: string) => useAsyncData<CreateUserOutput, ErrorOutput>(() => $client.user.add.mutate({ username }))

  return useMutation({
    mutationFn,
    onSuccess: () => vueQueryClient.invalidateQueries({ queryKey: ['user', 'list'] }),
  })
}

export function useListUsers() {
  const { $client } = useNuxtApp()

  const queryFn = async () => useAsyncData<ListUserOutput, ErrorOutput>(() => $client.user.list.query())
  return useQuery({ queryKey: ['user', 'list'], queryFn })
}

// TODO basically vue-queries 'useQuery' needs to be a wrapper around trpc-nuxts query fn. It will use the same techniques trpc-nuxt uses to wrap trpcs queryfn

