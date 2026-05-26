import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

export default async function DashboardPage() {
    // 1. PROTEGER LA RUTA: Verificamos si hay sesión activa
    const session = await getServerSession();

    // Si no hay usuario, redirección al login (Manejo de inactividad/deslogueo)
    if (!session) {
        redirect("/login");
    }

    return (
        <div className="flex h-screen bg-[#050509] text-neutral-50 font-sans overflow-hidden">

            {/* SIDEBAR LATERAL (Navegación Principal) */}
            <aside className="w-64 border-r border-neutral-800 bg-[#0a0a12] p-6 hidden lg:flex lg:flex-col z-20 shadow-2xl">
                <div className="flex items-center gap-3 mb-10">
                    <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center font-bold text-white shadow-lg shadow-blue-500/20">
                        D
                    </div>
                    <span className="text-2xl font-bold tracking-tight text-white">DiTodo</span>
                </div>

                <nav className="space-y-1.5 flex-1">
                    <Link href="/dashboard" className="flex items-center gap-3 px-3 py-2.5 rounded-lg bg-blue-600/10 text-blue-400 font-medium border border-blue-500/20">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
                        Mi Agenda
                    </Link>
                    <Link href="/dashboard/notas" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-neutral-400 hover:bg-neutral-800 hover:text-white transition-colors">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg>
                        Sticky Notes
                    </Link>
                    <Link href="/dashboard/archivos" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-neutral-400 hover:bg-neutral-800 hover:text-white transition-colors">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" /></svg>
                        Repositorio
                    </Link>
                    <Link href="/dashboard/historico" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-neutral-400 hover:bg-neutral-800 hover:text-white transition-colors">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
                        Analíticas (6 Meses)
                    </Link>
                </nav>

                {/* Footer Sidebar - Perfil y Configuración */}
                <div className="pt-6 border-t border-neutral-800">
                    <Link href="/dashboard/perfil" className="flex items-center gap-3 group">
                        {session.user?.image ? (
                            <Image src={session.user.image} alt="Perfil" width={40} height={40} className="rounded-full border border-neutral-700 group-hover:border-blue-500 transition-colors" />
                        ) : (
                            <div className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center border border-neutral-700 group-hover:border-blue-500 transition-colors text-white font-medium">
                                {session.user?.name?.charAt(0) || "U"}
                            </div>
                        )}
                        <div className="flex flex-col">
                            <span className="text-sm font-medium text-white line-clamp-1">{session.user?.name}</span>
                            <span className="text-xs text-neutral-500 flex items-center gap-1">
                                <svg className="w-3 h-3 text-green-500" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15h-2v-2h2v2zm0-4h-2V7h2v6z" /></svg>
                                Perfil y WhatsApp
                            </span>
                        </div>
                    </Link>
                </div>
            </aside>

            {/* ÁREA PRINCIPAL */}
            <main className="flex-1 flex flex-col relative overflow-hidden">

                {/* Efectos de fondo sutiles */}
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-900/10 blur-[150px] rounded-full pointer-events-none -z-10" />

                {/* Header Superior: Controles de Tiempo y Alertas */}
                <header className="h-24 border-b border-neutral-800 bg-[#050509]/80 backdrop-blur-xl flex flex-col justify-center px-8 z-10 shrink-0">
                    <div className="flex items-center justify-between">
                        {/* Navegación de Tiempo */}
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-2 bg-[#11111d] border border-neutral-800 rounded-lg p-1">
                                <button className="px-4 py-1.5 rounded-md bg-neutral-800 text-white text-sm font-medium shadow-sm">Día</button>
                                <button className="px-4 py-1.5 rounded-md text-neutral-400 hover:text-white text-sm font-medium transition-colors">Semana</button>
                                <button className="px-4 py-1.5 rounded-md text-neutral-400 hover:text-white text-sm font-medium transition-colors">Mes</button>
                                <button className="px-4 py-1.5 rounded-md text-neutral-400 hover:text-white text-sm font-medium transition-colors">Año</button>
                            </div>

                            <div className="flex items-center gap-2">
                                <button className="p-2 rounded-lg border border-neutral-800 hover:bg-neutral-800 transition-colors text-neutral-400">
                                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                                </button>
                                <span className="font-medium text-white min-w-[120px] text-center">Hoy, 26 Mayo</span>
                                <button className="p-2 rounded-lg border border-neutral-800 hover:bg-neutral-800 transition-colors text-neutral-400">
                                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                                </button>
                            </div>
                        </div>

                        {/* Acciones Rápidas */}
                        <div className="flex items-center gap-4">
                            <button className="relative p-2 text-neutral-400 hover:text-white transition-colors">
                                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
                                <span className="absolute top-1 right-1 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-[#050509]"></span>
                            </button>
                            <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-xl text-sm font-semibold transition-all shadow-[0_0_15px_rgba(37,99,235,0.3)] flex items-center gap-2">
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>
                                Nueva Tarea / Nota
                            </button>
                        </div>
                    </div>
                </header>

                {/* Contenido Scrollable */}
                <div className="flex-1 overflow-y-auto p-8 custom-scrollbar">

                    {/* Banner de Notificaciones Inteligentes */}
                    <div className="mb-8 bg-gradient-to-r from-blue-900/40 to-transparent border border-blue-500/20 rounded-2xl p-4 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400">
                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                            </div>
                            <div>
                                <p className="text-white font-medium text-sm">Resumen enviado por WhatsApp hace 1 hora.</p>
                                <p className="text-neutral-400 text-xs">Tienes 1 reunión próxima y 2 tareas para hoy.</p>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">

                        {/* TIMELINE DE EVENTOS (Columna Izquierda e Central - 2/3) */}
                        <div className="xl:col-span-2 space-y-6">
                            <div className="flex items-center justify-between mb-4">
                                <h2 className="text-xl font-bold text-white flex items-center gap-2">
                                    <svg className="w-5 h-5 text-neutral-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" /></svg>
                                    Flujo del Día
                                </h2>
                            </div>

                            <div className="space-y-4 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-neutral-800 before:to-transparent">

                                {/* Evento ROJO (Urgente / Sobre la hora) */}
                                <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                                    <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-[#050509] bg-red-500 text-white shadow-[0_0_15px_rgba(239,68,68,0.4)] shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                    </div>
                                    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-[#11111d] border border-red-500/30 p-4 rounded-xl shadow-lg">
                                        <div className="flex items-center justify-between mb-1">
                                            <span className="font-bold text-red-400 text-sm">10:00 AM - 11:30 AM</span>
                                        </div>
                                        <h3 className="font-bold text-white text-lg">Presentación Kickoff Proyecto</h3>
                                        <p className="text-neutral-400 text-sm mt-1">Adjuntos: Kickoff.ppt (Click para abrir)</p>
                                    </div>
                                </div>

                                {/* Evento AMARILLO (Próximo) */}
                                <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                                    <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-[#050509] bg-yellow-500 text-white shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                                        <span className="w-2 h-2 bg-white rounded-full"></span>
                                    </div>
                                    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-[#11111d] border border-yellow-500/30 p-4 rounded-xl">
                                        <div className="flex items-center justify-between mb-1">
                                            <span className="font-bold text-yellow-500 text-sm">14:00 PM - 15:00 PM</span>
                                        </div>
                                        <h3 className="font-bold text-white text-lg">Revisar Presupuesto Q3</h3>
                                    </div>
                                </div>

                                {/* Evento VERDE (Con tiempo) */}
                                <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                                    <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-[#050509] bg-green-500 text-white shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                                        <span className="w-2 h-2 bg-white rounded-full"></span>
                                    </div>
                                    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-[#11111d] border border-green-500/30 p-4 rounded-xl">
                                        <div className="flex items-center justify-between mb-1">
                                            <span className="font-bold text-green-500 text-sm">17:00 PM - 18:00 PM</span>
                                        </div>
                                        <h3 className="font-bold text-white text-lg">Llamada con Inversores</h3>
                                    </div>
                                </div>

                                {/* Evento GRIS (Completado) */}
                                <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group opacity-60 hover:opacity-100 transition-opacity">
                                    <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-[#050509] bg-neutral-600 text-white shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                    </div>
                                    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-[#0a0a12] border border-neutral-800 p-4 rounded-xl line-through text-neutral-500">
                                        <div className="mb-1 text-sm font-medium">08:00 AM</div>
                                        <h3 className="font-bold text-lg">Revisión de Correos</h3>
                                    </div>
                                </div>

                            </div>
                        </div>

                        {/* COLUMNA DERECHA: Sticky Notes y Drafts */}
                        <div className="space-y-6">

                            {/* Drafts (Azul Suave) */}
                            <div>
                                <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                                    <svg className="w-5 h-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" /></svg>
                                    Drafts (Sin programar)
                                </h2>
                                <div className="bg-blue-900/10 border border-blue-500/20 p-4 rounded-xl cursor-pointer hover:bg-blue-900/20 transition-colors">
                                    <h3 className="text-blue-300 font-medium">Comprar pasajes para conferencia</h3>
                                    <p className="text-blue-500/60 text-xs mt-2">Arrastra al calendario para asignar fecha</p>
                                </div>
                            </div>

                            <div className="w-full h-px bg-neutral-800 my-4"></div>

                            {/* Sticky Notes */}
                            <div>
                                <div className="flex items-center justify-between mb-4">
                                    <h2 className="text-lg font-bold text-white flex items-center gap-2">
                                        <svg className="w-5 h-5 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" /></svg>
                                        Notas Rápidas
                                    </h2>
                                    <button className="text-blue-400 hover:text-blue-300 text-sm font-medium">+ Agregar</button>
                                </div>

                                <div className="grid gap-4">
                                    {/* Nota con Audio y Doc */}
                                    <div className="bg-[#1c1c21] p-4 rounded-xl border-l-4 border-yellow-500 shadow-md hover:-translate-y-1 transition-transform cursor-pointer">
                                        <p className="text-sm text-neutral-300 mb-3">Ideas para la nueva interfaz. Recordar usar el color azul primario.</p>
                                        <div className="flex items-center gap-2 mt-2">
                                            <span className="flex items-center gap-1 bg-neutral-800 text-xs px-2 py-1 rounded text-neutral-400">
                                                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" /></svg>
                                                audio_nota.mp3
                                            </span>
                                            <span className="flex items-center gap-1 bg-neutral-800 text-xs px-2 py-1 rounded text-neutral-400">
                                                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                                                boceto.jpg
                                            </span>
                                        </div>
                                    </div>

                                    {/* Nota de Video */}
                                    <div className="bg-[#1c1c21] p-4 rounded-xl border-l-4 border-purple-500 shadow-md hover:-translate-y-1 transition-transform cursor-pointer">
                                        <div className="relative w-full h-24 bg-black rounded-lg mb-2 flex items-center justify-center overflow-hidden border border-neutral-800">
                                            <div className="absolute inset-0 bg-cover bg-center opacity-50" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=400&auto=format&fit=crop')" }}></div>
                                            <svg className="w-8 h-8 text-white relative z-10 opacity-80 hover:opacity-100 hover:scale-110 transition-all" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                                        </div>
                                        <p className="text-sm text-neutral-300 font-medium line-clamp-1">Grabación_Demo_SaaS.mp4</p>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </main>
        </div>
    );
}