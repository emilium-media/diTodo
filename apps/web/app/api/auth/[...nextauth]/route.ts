import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter as AuthPrismaAdapter } from "@auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";
import { PrismaMariadb } from "@prisma/adapter-mariadb";
import * as mariadb from "mariadb";

// 1. Prisma V7: Creamos el pool usando el driver oficial (100% compatible con tu MySQL)
const pool = mariadb.createPool(process.env.DATABASE_URL as string);

// 2. Envolvemos el pool en el adaptador oficial
const adapter = new PrismaMariadb(pool);

// 3. Instanciamos Prisma entregándole el adaptador (¡La única forma válida en V7!)
const prisma = new PrismaClient({ adapter });

const authOptions = {
    adapter: AuthPrismaAdapter(prisma),
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
        }),
    ],
    session: {
        strategy: "jwt" as const,
    },
    callbacks: {
        async session({ session, token }: any) {
            if (session?.user) {
                session.user.id = token.sub;
            }
            return session;
        },
    },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };