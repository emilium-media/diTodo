import type { Metadata } from "next";
import "./globals.css"; // Asumiendo que Tailwind está configurado aquí

import { Providers } from "./Providers"; // Importa el archivo que creamos

export const metadata: Metadata = {
    title: "DiTodo | Trabaja más inteligente",
    description: "Plataforma colaborativa inmersiva para gestión de tareas y agendas.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="es">
            <body className="bg-neutral-950 text-white antialiased">
                {/* 🔐 Inyectamos el SessionProvider envolviendo los children */}
                <Providers>
                    {children}
                </Providers>
            </body>
        </html>
    );
}