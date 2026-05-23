import type { Metadata } from "next";
import "./globals.css"; // Asumiendo que Tailwind está configurado aquí

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
        {children}
      </body>
    </html>
  );
}
