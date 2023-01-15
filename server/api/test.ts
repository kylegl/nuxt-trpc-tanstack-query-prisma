import { prisma } from '~~/server/prisma/prisma'

export default defineEventHandler(async () => {
  const list = await prisma.user.findMany()
  return { list, test: 'data' }
})
