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
    onMutate: async (input) => {
      await vueQueryClient.cancelQueries(['post', 'list'])
      const previousPosts = vueQueryClient.getQueryData(['post', 'list'])
      const newPost = {
        id: '__temp__id',
        createdAt: new Date(),
        ...input,
      }

      vueQueryClient.setQueryData(['post', 'list'],
        (old) => {
          return old ? [newPost, ...old] : undefined
        },
      )

      return { previousPosts }
    },
    onSuccess: () => vueQueryClient.invalidateQueries({ queryKey: ['post', 'list'] }),
  })
}

export function useListPosts() {
  const { $client } = useNuxtApp()

  const queryFn = async () => {
    const data = await $client.post.list.query()
    return data
  }
  return useQuery({ queryKey: ['post', 'list'], queryFn })
}

export function useDeletePost() {
  const { $client } = useNuxtApp()
  const vueQueryClient = useQueryClient()

  const mutationFn = async (input: DeletePostInput) => {
    return useAsyncData<DeletePostOutput, ErrorOutput>
    (
      () => $client.post.delete.mutate(input),
    )
  }

  return useMutation({
    mutationFn,
    onMutate: async ({ id }) => {
      await vueQueryClient.cancelQueries(['post', 'list'])
      const previousPosts = vueQueryClient.getQueryData(['post', 'list'])

      vueQueryClient.setQueryData(['post', 'list'], (old) => {
        return old.filter(post => post.id !== id)
      })

      return { previousPosts }
    },
    onError: (err, { id }, context) => {
      vueQueryClient.setQueryData(['post', 'list'], context?.previousPosts)
      return err
    },
    onSettled: () => vueQueryClient.invalidateQueries({ queryKey: ['post', 'list'] }),
  })
}
