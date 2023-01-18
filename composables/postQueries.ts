import type { TRPCClientError } from '@trpc/client'
import { useMutation, useQuery, useQueryClient } from '@tanstack/vue-query'
import type { inferRouterOutputs } from '@trpc/server'
import type { CreatePostInput, DeletePostInput } from '~~/server/trpc/router/routes/postRouter'
import type { AppRouter } from '~~/server/trpc/router/appRouter'

type RouterOutput = inferRouterOutputs<AppRouter>
type ErrorOutput = TRPCClientError<AppRouter>
type CreatePostOutput = RouterOutput['post']['add']
type DeletePostOutput = RouterOutput['post']['delete']
type ListPostsOutput = RouterOutput['post']['list']

export function useAddPost() {
  const vueQueryClient = useQueryClient()
  const { $client } = useNuxtApp()
  const mutationFn = (input: CreatePostInput) => useAsyncData<CreatePostOutput, ErrorOutput>(() => $client.post.add.mutate(input))

  return useMutation({
    mutationFn,
    onSuccess: () => vueQueryClient.invalidateQueries({ queryKey: ['post', 'list'] }),
  })
}

export function useListPosts() {
  const { $client } = useNuxtApp()

  const queryFn = async () => useAsyncData<ListPostsOutput, ErrorOutput>(() => $client.post.list.query())
  return useQuery({ queryKey: ['post', 'list'], queryFn })
}

export function useDeletePost() {
  const { $client } = useNuxtApp()
  const vueQueryClient = useQueryClient()

  const mutationFn = async (input: DeletePostInput) => {
    useAsyncData<DeletePostOutput, ErrorOutput>
    (
      () => $client.post.delete.mutate(input),
    )
  }

  return useMutation({
    mutationFn,
    onSuccess: () => vueQueryClient.invalidateQueries({ queryKey: ['post', 'delete'] }),
  })
}
