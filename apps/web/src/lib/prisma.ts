import { PrismaClient } from '@prisma/client'

// Patrón Singleton para evitar agotar conexiones en desarrollo
const globalForPrisma = global as unknown as { prisma: PrismaClient }

// Instanciamos Prisma de forma nativa pasando la URL dinámicamente
export const prisma = globalForPrisma.prisma || new PrismaClient({
    datasourceUrl: process.env.DATABASE_URL,
})

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma

export default prisma
