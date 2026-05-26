import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";
import DashboardClient from "./DashboardClient";

export default async function DashboardPage() {
    // Validar sesión en el servidor
    const session = await getServerSession();

    if (!session) {
        redirect("/login");
    }

    // Devolver el componente interactivo pasándole la sesión activa
    return <DashboardClient session={session} />;
}