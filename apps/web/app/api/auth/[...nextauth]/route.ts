import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";

// Inyectamos la URL correctamente usando el objeto datasources
const prisma = new PrismaClient({
    datasources: {
        db: {
            url: process.env.DATABASE_URL as string,
        },
    },
});

// Configuramos las opciones de autenticación
const authOptions = {
    adapter: PrismaAdapter(prisma),
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
        }),
    ],
    session: {
        strategy: "jwt" as const, // Usamos JWT para mayor velocidad en consultas
    },
    callbacks: {
        // Inyectamos el ID del usuario en la sesión para poder usarlo en la base de datos
        async session({ session, token }: any) {
            if (session?.user) {
                session.user.id = token.sub;
            }
            return session;
        },
    },
};

// Next.js App Router requiere exportar los métodos GET y POST
const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };