import { PrismaClient } from '@prisma/client'
import { config } from 'dotenv'

declare global {
  // eslint-disable-next-line vars-on-top, no-var
  var prisma: PrismaClient | undefined
}

config()

export const prisma = global.prisma || new PrismaClient()

if (process.env.NODE_ENV !== 'production')
  global.prisma = prisma
