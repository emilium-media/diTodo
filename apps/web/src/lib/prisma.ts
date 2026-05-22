import { PrismaClient } from '@prisma/client'
import { PrismaMysql } from '@prisma/adapter-mysql'
import mysql from 'mysql2/promise'

// Configuramos el pool de conexiones nativo
const connection = mysql.createPool({
    uri: process.env.DATABASE_URL,
})

// Inyectamos el adaptador de MySQL al cliente de Prisma
const adapter = new PrismaMysql(connection)

// Patrón Singleton para Next.js (evita agotar las conexiones en hot-reloads de desarrollo)
const globalForPrisma = global as unknown as { prisma: PrismaClient }

export const prisma = globalForPrisma.prisma || new PrismaClient({ adapter })

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma

export default prisma