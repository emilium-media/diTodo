import { defineConfig } from '@prisma/config'

export default defineConfig({
    migrate: {
        // Apuntamos a la variable de entorno que ya tienes configurada
        url: process.env.DATABASE_URL,
    },
})