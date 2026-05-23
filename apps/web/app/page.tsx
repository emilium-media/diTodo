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

          <div className="w-full max-w-sm space-y-4 pt-4">
            <button className="w-full flex items-center justify-center gap-3 px-6 py-4 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-all duration-200 shadow-[0_0_20px_rgba(37,99,235,0.3)]">
              <svg className="w-5 h-5 bg-white rounded-full p-0.5" viewBox="0 0 24 24">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
              </svg>
              Continuar con Google
            </button>
            <button className="w-full flex items-center justify-center gap-3 px-6 py-4 bg-neutral-900 text-white font-medium rounded-xl border border-neutral-800 hover:bg-neutral-800 transition-all duration-200">
              Iniciar sesión con Email
            </button>
          </div>
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
    </div>
  );
}