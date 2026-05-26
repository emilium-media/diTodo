import { NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(request: Request) {
    try {
        // 1. Validar que el usuario tenga una sesión activa de Google
        const session = await getServerSession();
        if (!session || !session.user?.email) {
            return NextResponse.json({ error: "No autorizado" }, { status: 401 });
        }

        // 2. Extraer la preferencia del cuerpo de la petición
        const { objective } = await request.json();
        if (!objective) {
            return NextResponse.json({ error: "Falta el campo objective" }, { status: 400 });
        }

        // 3. Actualizar silenciosamente en MySQL usando Prisma
        await prisma.user.update({
            where: { email: session.user.email },
            data: { objective: objective },
        });

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error("Error en Onboarding API:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}