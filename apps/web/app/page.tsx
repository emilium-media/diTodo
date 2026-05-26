import Link from 'next/link';

export default function Home() {
    return (
        <div className="relative min-h-screen bg-neutral-950 text-neutral-50 overflow-hidden font-sans">

            {/* Background Glows (Efectos de luz de fondo) */}
            <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/20 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-600/20 blur-[120px] rounded-full pointer-events-none" />

            <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-center min-h-screen gap-16">

                {/* PANEL IZQUIERDO: Copywriting y CTA */}
                <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left space-y-8 pt-20 lg:pt-0">

                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-sm font-medium text-neutral-300">
                        <span className="flex h-2 w-2 rounded-full bg-blue-500"></span>
                        DiTodo Work OS 2.0
                    </div>

                    <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-white leading-[1.1]">
                        Gestiona todo. <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                            En un solo lugar.
                        </span>
                    </h1>

                    <p className="text-lg lg:text-xl text-neutral-400 max-w-xl leading-relaxed">
                        Únete a los equipos que trabajan de forma más inteligente. Planifica, ejecuta y haz el seguimiento de tus proyectos con una plataforma que se adapta a tu flujo natural.
                    </p>

                    {/* 🚀 ZONA DE BOTONES ADAPTADA */}
                    <div className="w-full max-w-sm space-y-4 pt-4">

                        {/* Botón Principal -> Redirige a /login */}
                        <Link
                            href="/login"
                            className="w-full flex items-center justify-center gap-3 px-6 py-4 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-all duration-200 shadow-[0_0_20px_rgba(37,99,235,0.3)]"
                        >
                            Iniciar Sesión
                        </Link>

                        {/* Botón Secundario (Puedes dejarlo o quitarlo, ahora que tienes la página de login) */}
                        <Link
                            href="/login"
                            className="w-full flex items-center justify-center gap-3 px-6 py-4 bg-neutral-900 text-white font-medium rounded-xl border border-neutral-800 hover:bg-neutral-800 transition-all duration-200"
                        >
                            Crear una cuenta
                        </Link>
                    </div>
                    {/* FIN DE ZONA DE BOTONES */}

                </div>

                {/* PANEL DERECHO: Mockup de Tablero Estilo Monday */}
                <div className="hidden lg:block w-1/2 relative perspective-1000">
                    <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 to-purple-500/10 rounded-2xl transform rotate-3 scale-105 blur-lg"></div>

                    <div className="relative bg-[#1c1c21] border border-neutral-800 rounded-2xl shadow-2xl transform -rotate-2 hover:rotate-0 transition-transform duration-500 overflow-hidden">

                        {/* Header del tablero */}
                        <div className="flex items-center gap-2 p-4 border-b border-neutral-800 bg-[#232329]">
                            <div className="w-3 h-3 rounded-full bg-red-500"></div>
                            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                            <div className="w-3 h-3 rounded-full bg-green-500"></div>
                            <div className="ml-4 font-medium text-sm text-neutral-300">Campaña Q3 - Marketing</div>
                        </div>

                        {/* Filas de Tareas */}
                        <div className="p-5 space-y-4">

                            {/* Tarea 1 */}
                            <div className="flex items-center justify-between group">
                                <div className="flex items-center gap-3">
                                    <div className="w-5 h-5 rounded border border-neutral-700 bg-neutral-800 flex items-center justify-center group-hover:border-blue-500 transition-colors"></div>
                                    <span className="text-sm font-medium text-neutral-200">Diseño de Landing Page</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-xs font-bold text-white border-2 border-[#1c1c21]">EM</div>
                                    <span className="w-32 py-1.5 text-center text-xs font-bold rounded bg-[#00c875] text-white shadow-sm">Completado</span>
                                </div>
                            </div>

                            {/* Tarea 2 */}
                            <div className="flex items-center justify-between group">
                                <div className="flex items-center gap-3">
                                    <div className="w-5 h-5 rounded border border-neutral-700 bg-neutral-800 flex items-center justify-center group-hover:border-blue-500 transition-colors"></div>
                                    <span className="text-sm font-medium text-neutral-200">Integración de Base de Datos</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center text-xs font-bold text-white border-2 border-[#1c1c21]">AI</div>
                                    <span className="w-32 py-1.5 text-center text-xs font-bold rounded bg-[#fdab3d] text-white shadow-sm">En proceso</span>
                                </div>
                            </div>

                            {/* Tarea 3 */}
                            <div className="flex items-center justify-between group">
                                <div className="flex items-center gap-3">
                                    <div className="w-5 h-5 rounded border border-neutral-700 bg-neutral-800 flex items-center justify-center group-hover:border-blue-500 transition-colors"></div>
                                    <span className="text-sm font-medium text-neutral-200">Revisión de Seguridad</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-full bg-neutral-600 flex items-center justify-center text-xs font-bold text-white border-2 border-[#1c1c21]">JS</div>
                                    <span className="w-32 py-1.5 text-center text-xs font-bold rounded bg-[#e2445c] text-white shadow-sm">Estancado</span>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </div >
    );
}