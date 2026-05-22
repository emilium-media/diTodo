export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-5xl font-bold mb-6">Empezar ahora</h1>
      <p className="text-xl text-neutral-400 mb-8">
        ¿Qué quieres gestionar hoy?
      </p>
      <div className="flex gap-4">
        <button className="px-6 py-3 bg-blue-600 rounded-lg font-medium hover:bg-blue-700 transition">
          Continuar con Google
        </button>
        <button className="px-6 py-3 bg-neutral-800 rounded-lg font-medium hover:bg-neutral-700 transition text-white">
          Iniciar sesión
        </button>
      </div>
    </main>
  );
}
