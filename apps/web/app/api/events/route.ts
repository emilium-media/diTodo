import { NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(request: Request) {
    try {
        const session = await getServerSession();
        if (!session || !session.user?.email) {
            return NextResponse.json({ error: "No autorizado" }, { status: 401 });
        }

        // Buscar al usuario en la BD para obtener su ID
        const dbUser = await prisma.user.findUnique({
            where: { email: session.user.email },
        });

        if (!dbUser) {
            return NextResponse.json({ error: "Usuario no encontrado" }, { status: 404 });
        }

        const body = await request.json();
        const { title, description, startDate, endDate, status, urgency } = body;

        if (!title) {
            return NextResponse.json({ error: "El título es obligatorio" }, { status: 400 });
        }

        // Crear el evento conectado al usuario
        const newEvent = await prisma.event.create({
            data: {
                title,
                description,
                startDate: startDate ? new Date(startDate) : null,
                endDate: endDate ? new Date(endDate) : null,
                status: status || "TODO",
                urgency: urgency || "NONE",
                userId: dbUser.id,
            },
        });

        return NextResponse.json({ success: true, event: newEvent });
    } catch (error) {
        console.error("Error al crear evento:", error);
        return NextResponse.json({ error: "Error interno del servidor" }, { status: 500 });
    }
}