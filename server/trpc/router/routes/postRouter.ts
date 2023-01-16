import { z } from 'zod'
import { prisma } from '~~/server/prisma/prisma'
import { publicProcedure, router } from '~~/server/trpc/trpc'

export const createPostInputShape = z.object({
  title: z.string(),
  content: z.string(),
})
export type CreatePostInput = z.infer<typeof createPostInputShape>
export const deletePostInputShape = z.object({
  id: z.number(),
})
export type DeletePostInput = z.infer<typeof deletePostInputShape>

export const postRouter = router({
  add: publicProcedure
    .input(createPostInputShape)
    .mutation(async ({ input }) => {
      const post = await prisma.post.create({
        data: input,
      })

      return post
    }),
  delete: publicProcedure
    .input(deletePostInputShape)
    .mutation(async ({ input }) => {
      const res = await prisma.post.delete({ where: { id: input.id } })

      return res
    }),
  list: publicProcedure
    .query(async () => {
      const posts = await prisma.post.findMany()

      return posts
    }),
})
