"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Onboarding() {
    const router = useRouter();
    const [loading, setLoading] = useState(false);

    const handleSelection = async (objective: string) => {
        setLoading(true);
        try {
            // Enviamos la selección a nuestra nueva API
            const response = await fetch("/api/onboarding", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ objective }),
            });

            if (response.ok) {
                // Redirección inmediata y limpia al Dashboard principal
                router.push("/dashboard");
            } else {
                alert("Hubo un error al guardar tu preferencia. Inténtalo de nuevo.");
            }
        } catch (error) {
            console.error(error);
            alert("Hubo un error de conexión.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-neutral-950 text-white flex flex-col items-center justify-center p-6 font-sans relative overflow-hidden">

            {/* Background Glows (Ambiente inmersivo) */}
            <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-purple-600/10 blur-[120px] rounded-full pointer-events-none" />

            <div className="relative z-10 max-w-5xl w-full space-y-16 text-center">

                {/* Título Principal */}
                <div className="space-y-4 animate-fade-in-up">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white">
                        Hola, ¿Qué tienes en mente para hoy?
                    </h1>
                    <p className="text-neutral-400 text-lg md:text-xl max-w-2xl mx-auto">
                        Personalizaremos tu experiencia DiTodo y las plantillas iniciales basándonos en tu objetivo principal.
                    </p>
                </div>

                {/* Grilla de Opciones Interactivas */}
                <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 ${loading ? 'opacity-50 pointer-events-none' : ''}`}>

                    {/* Card 1: Trabajo */}
                    <button
                        onClick={() => handleSelection('trabajo')}
                        className="w-full text-left group relative p-8 rounded-2xl bg-[#1c1c21] border border-neutral-800 hover:border-blue-500 hover:bg-[#232329] transition-all duration-300 hover:-translate-y-2 flex flex-col items-center gap-5 cursor-pointer shadow-lg hover:shadow-blue-500/10"
                    >
                        <div className="w-20 h-20 rounded-full bg-blue-500/10 text-blue-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                            <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                        </div>
                        <div className="space-y-2">
                            <h3 className="text-xl font-semibold text-white text-center">Trabajo</h3>
                            <p className="text-sm text-neutral-400 text-center leading-relaxed">Gestiona equipos, proyectos ágiles y OKRs empresariales.</p>
                        </div>
                    </button>

                    {/* Card 2: Uso Personal */}
                    <button
                        onClick={() => handleSelection('personal')}
                        className="w-full text-left group relative p-8 rounded-2xl bg-[#1c1c21] border border-neutral-800 hover:border-purple-500 hover:bg-[#232329] transition-all duration-300 hover:-translate-y-2 flex flex-col items-center gap-5 cursor-pointer shadow-lg hover:shadow-purple-500/10"
                    >
                        <div className="w-20 h-20 rounded-full bg-purple-500/10 text-purple-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                            <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                        </div>
                        <div className="space-y-2">
                            <h3 className="text-xl font-semibold text-white text-center">Uso Personal</h3>
                            <p className="text-sm text-neutral-400 text-center leading-relaxed">Organiza tu vida diaria, hábitos, viajes y metas personales.</p>
                        </div>
                    </button>

                    {/* Card 3: Estudios */}
                    <button
                        onClick={() => handleSelection('estudios')}
                        className="w-full text-left group relative p-8 rounded-2xl bg-[#1c1c21] border border-neutral-800 hover:border-yellow-500 hover:bg-[#232329] transition-all duration-300 hover:-translate-y-2 flex flex-col items-center gap-5 cursor-pointer shadow-lg hover:shadow-yellow-500/10"
                    >
                        <div className="w-20 h-20 rounded-full bg-yellow-500/10 text-yellow-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                            <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                            </svg>
                        </div>
                        <div className="space-y-2">
                            <h3 className="text-xl font-semibold text-white text-center">Estudios</h3>
                            <p className="text-sm text-neutral-400 text-center leading-relaxed">Planifica entregas, cronogramas de exámenes y apuntes.</p>
                        </div>
                    </button>

                    {/* Card 4: ONGs */}
                    <button
                        onClick={() => handleSelection('ong')}
                        className="w-full text-left group relative p-8 rounded-2xl bg-[#1c1c21] border border-neutral-800 hover:border-green-500 hover:bg-[#232329] transition-all duration-300 hover:-translate-y-2 flex flex-col items-center gap-5 cursor-pointer shadow-lg hover:shadow-green-500/10"
                    >
                        <div className="w-20 h-20 rounded-full bg-green-500/10 text-green-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                            <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                            </svg>
                        </div>
                        <div className="space-y-2">
                            <h3 className="text-xl font-semibold text-white text-center">ONGs</h3>
                            <p className="text-sm text-neutral-400 text-center leading-relaxed">Coordina voluntarios, eventos y proyectos de impacto social.</p>
                        </div>
                    </button>

                </div>
            </div>
        </div>
    );
}