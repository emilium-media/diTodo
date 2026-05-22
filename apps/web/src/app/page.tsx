export default function Home() {
    return (
        <div className="flex min-h-screen bg-neutral-950 text-neutral-50 selection:bg-blue-600 selection:text-white">

            {/* PANEL IZQUIERDO: Branding Asimétrico y Textura Oscura */}
            <div className="hidden lg:flex w-1/2 flex-col justify-between p-12 relative overflow-hidden bg-[#0a0a0a] border-r border-neutral-800">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-neutral-800/30 via-transparent to-transparent pointer-events-none" />
                <div className="absolute -bottom-[20%] -left-[10%] w-[50%] h-[50%] bg-blue-900/20 blur-[120px] rounded-full pointer-events-none" />

                <div className="relative z-10">
                    <h1 className="text-4xl font-serif tracking-tight text-neutral-200">DiTodo<span className="text-blue-600">.</span></h1>
                </div>

                <div className="relative z-10 max-w-md">
                    <h2 className="text-3xl font-medium tracking-tight mb-4">
                        Trabaja más inteligente con la #1 en gestión.
                    </h2>
                    <p className="text-neutral-400 text-lg leading-relaxed">
                        Planifica, gestiona y haz el seguimiento de todos tus proyectos en una sola plataforma inmersiva, diseñada para no interrumpir tu flujo.
                    </p>
                </div>
            </div>

            {/* PANEL DERECHO: Formulario de Login interactivo */}
            <div className="w-full lg:w-1/2 flex flex-col items-center justify-center p-8 lg:p-24 relative bg-neutral-950">
                <div className="w-full max-w-sm space-y-10">

                    <div className="lg:hidden mb-12 text-center">
                        <h1 className="text-4xl font-serif tracking-tight text-neutral-200 mb-2">DiTodo<span className="text-blue-600">.</span></h1>
                        <p className="text-neutral-400">Trabaja más inteligente.</p>
                    </div>

                    <div className="text-center lg:text-left space-y-2">
                        <h2 className="text-4xl font-semibold tracking-tight text-white">Empezar ahora</h2>
                        <p className="text-neutral-400 text-lg">¿Qué quieres gestionar hoy?</p>
                    </div>

                    <div className="space-y-6 pt-4">
                        <button className="w-full flex items-center justify-center gap-3 px-4 py-3.5 bg-white text-neutral-950 font-medium rounded-xl hover:bg-neutral-200 transition-all duration-200 shadow-[0_0_20px_rgba(255,255,255,0.05)] border border-transparent">
                            <svg className="w-5 h-5" viewBox="0 0 24 24">
                                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                            </svg>
                            Continuar con Google
                        </button>

                        <div className="relative flex items-center py-2">
                            <div className="flex-grow border-t border-neutral-800"></div>
                            <span className="flex-shrink-0 mx-4 text-neutral-600 text-sm font-medium uppercase tracking-wider">o</span>
                            <div className="flex-grow border-t border-neutral-800"></div>
                        </div>

                        <div className="text-center">
                            <p className="text-neutral-400">
                                ¿Ya tienes una cuenta? <a href="#" className="text-blue-500 font-medium hover:text-blue-400 transition-colors">Iniciar sesión</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
