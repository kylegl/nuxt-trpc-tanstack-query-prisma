import { useMutation, useQuery, useQueryClient } from '@tanstack/vue-query'
import type { TRPCClientError } from '@trpc/client'
import type { inferRouterOutputs } from '@trpc/server'
import type { AppRouter } from '~~/server/trpc/routers/appRouter'

type RouterOutput = inferRouterOutputs<AppRouter>
type CreateUserOutput = RouterOutput['user']['add']
type ListUserOutput = RouterOutput['user']['list']
type DeleteUser = RouterOutput['user']['delete']
type DeleteAllUsers = RouterOutput['user']['deleteMany']
type ErrorOutput = TRPCClientError<AppRouter>

export function useGetUser(username?: string) {
  const { $client } = useNuxtApp()
  const queryFn = async () => $client.user.getById.useQuery({ name: username })

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

  const queryFn = async () => $client.user.list.useQuery()
  return useQuery({ queryKey: ['user', 'list'], queryFn })
}

export function useDeleteUser() {
  const { $client } = useNuxtApp()
  const vueQueryClient = useQueryClient()

  const mutationFn = async (username: string) => useAsyncData<DeleteUser, ErrorOutput>(() => $client.user.delete.mutate(username))

  return useMutation({
    mutationFn,
    onSuccess: () => vueQueryClient.invalidateQueries({ queryKey: ['user', 'list'] }),
  })
}

export function useDeleteManyUsers() {
  const { $client } = useNuxtApp()
  const vueQueryClient = useQueryClient()

  const mutationFn = async () => useAsyncData<DeleteAllUsers, ErrorOutput>(() => $client.user.deleteMany.mutate())

  return useMutation({
    mutationFn,
    onSuccess: () => vueQueryClient.invalidateQueries({ queryKey: ['user', 'list'] }),
  })
}

// TODO basically vue-queries 'useQuery' needs to be a wrapper around trpc-nuxt's query fn. It will use the same techniques trpc-nuxt uses to wrap trpc's queryFn

