"use client";

import { signIn } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";

export default function LoginPage() {
    return (
        // Fondo oscuro e inmersivo con gradiente sutil
        <main className="min-h-screen bg-[#050509] flex flex-col items-center justify-center p-4 selection:bg-blue-500/20">

            {/* El Card de Login (Siguiendo el diseño elegido) */}
            <div className="w-full max-w-md bg-[#0a0a12] border border-gray-800/50 p-8 rounded-2xl shadow-[0_0_60px_-15px_rgba(30,58,138,0.3)]">

                {/* Logo y Encabezado */}
                <div className="flex flex-col items-center mb-10">
                    {/* Reemplaza con tu logo real si lo tienes */}
                    <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mb-4 text-2xl font-bold text-white">
                        D
                    </div>
                    <h1 className="text-2xl font-bold text-white tracking-tight">
                        Ingresa a DiTodo
                </div>
                <p className="text-gray-400 mt-2 text-sm text-center">
                    Gestiona tu día, simple y productivo.
                </p>
            </div>

            {/* 🚀 BOTÓN CLAVE: Continuar con Google (NextAuth Integrado) */}
            <button
                onClick={() => signIn("google", { callbackUrl: "/onboarding" })}
                className="w-full flex items-center justify-center gap-3 bg-white hover:bg-gray-100 text-gray-900 font-semibold py-3 px-6 rounded-xl transition-all duration-200 transform hover:scale-[1.01] shadow-md"
            >
                {/* Logo de Google */}
                <Image
                    src="https://authjs.dev/img/providers/google.svg"
                    alt="Google"
                    width={20}
                    height={20}
                />
                Continuar con Google
            </button>

            {/* Separador visual (tal como en la imagen de referencia) */}
            <div className="relative my-8">
                <div className="absolute inset-0 flex items-center" aria-hidden="true">
                    <div className="w-full border-t border-gray-800" />
                </div>
                <div className="relative flex justify-center">
                    <span className="bg-[#0a0a12] px-3 text-xs text-gray-600 uppercase tracking-widest">
                        o ingresa con tu correo
                    </span>
                </div>
            </div>

            {/* Placeholders para Email/Password (Estructura visual lista) */}
            <div className="space-y-4 opacity-50 pointer-events-none">
                <div>
                    <input
                        type="email"
                        placeholder="Correo electrónico"
                        className="w-full bg-[#11111d] border border-gray-800 text-white p-3 rounded-lg text-sm placeholder:text-gray-600 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                        disabled
                    />
                </div>
                <div>
                    <input
                        type="password"
                        placeholder="Contraseña"
                        className="w-full bg-[#11111d] border border-gray-800 text-white p-3 rounded-lg text-sm placeholder:text-gray-600 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                        disabled
                    />
                </div>
            </div>

            {/* Enlace de registro (Footer) */}
            <div className="mt-10 text-center text-sm">
                <p className="text-gray-500">
                    ¿No tienes cuenta?{' '}
                    <Link href="/" className="text-blue-400 hover:text-blue-300 font-medium transition">
                        Registrate gratis
                    </Link>
                </p>
            </div>

        </div>

      {/* Footer de la página */ }
    <footer className="mt-8 text-xs text-gray-700">
        © 2026 Emilium Media. Todos los derechos reservados.
    </footer>
    </main >
  );
}