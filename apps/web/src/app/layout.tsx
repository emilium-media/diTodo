import "./globals.css";

export const metadata = {
    title: "DiTodo | Trabaja más inteligente",
    description: "Plataforma colaborativa inmersiva inspirada en metodologías ágiles.",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="es">
            <body className="bg-neutral-950 text-white antialiased">
                {children}
            </body>
        </html>
    );
}
