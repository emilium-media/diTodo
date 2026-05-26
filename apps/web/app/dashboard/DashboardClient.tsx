"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import DatePicker, { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { es } from "date-fns/locale/es"; // Para que el calendario esté en español

// Registramos el idioma español
registerLocale("es", es);

interface DashboardClientProps {
    session: any;
}

export default function DashboardClient({ session }: DashboardClientProps) {
    const router = useRouter();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [loading, setLoading] = useState(false);

    // Estados del Formulario
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    //const [startDate, setStartDate] = useState("");
    const [startDate, setStartDate] = useState<Date | null>(null);
    //const [endDate, setEndDate] = useState("");
    const [endDate, setEndDate] = useState<Date | null>(null);
    const [urgency, setUrgency] = useState("NONE");
    const [status, setStatus] = useState("TODO");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            const response = await fetch("/api/events", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    title,
                    description,
                    startDate: startDate || null,
                    endDate: endDate || null,
                    urgency,
                    status,
                }),
            });

            if (response.ok) {
                setIsModalOpen(false);
                // Limpiar formulario
                setTitle("");
                setDescription("");
                setStartDate("");
                setEndDate("");
                setUrgency("NONE");
                setStatus("TODO");
                // Refrescar los componentes del servidor para ver el nuevo evento
                router.refresh();
            } else {
                alert("Error al guardar la tarea");
            }
        } catch (error) {
            console.error(error);
            alert("Error de conexión");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex h-screen bg-[#050509] text-neutral-50 font-sans overflow-hidden relative">

            {/* SIDEBAR LATERAL */}
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

                <div className="pt-6 border-t border-neutral-800">
                    <div className="flex items-center gap-3">
                        {session.user?.image ? (
                            <Image src={session.user.image} alt="Perfil" width={40} height={40} className="rounded-full border border-neutral-700" />
                        ) : (
                            <div className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center border border-neutral-700 text-white font-medium">
                                {session.user?.name?.charAt(0) || "U"}
                            </div>
                        )}
                        <div className="flex flex-col">
                            <span className="text-sm font-medium text-white line-clamp-1">{session.user?.name}</span>
                            <span className="text-xs text-neutral-500">Perfil y WhatsApp</span>
                        </div>
                    </div>
                </div>
            </aside>

            {/* ÁREA PRINCIPAL */}
            <main className="flex-1 flex flex-col relative overflow-hidden">

                {/* Header Superior */}
                <header className="h-24 border-b border-neutral-800 bg-[#050509]/80 backdrop-blur-xl flex justify-center px-8 z-10 shrink-0">
                    <div className="flex items-center justify-between w-full">
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-2 bg-[#11111d] border border-neutral-800 rounded-lg p-1">
                                <button className="px-4 py-1.5 rounded-md bg-neutral-800 text-white text-sm font-medium">Día</button>
                                <button className="px-4 py-1.5 rounded-md text-neutral-400 text-sm font-medium">Semana</button>
                                <button className="px-4 py-1.5 rounded-md text-neutral-400 text-sm font-medium">Mes</button>
                                <button className="px-4 py-1.5 rounded-md text-neutral-400 text-sm font-medium">Año</button>
                            </div>
                            <span className="font-medium text-white">Hoy, 26 Mayo</span>
                        </div>

                        {/* 🚀 EL DISPARADOR: Al hacer clic, abre el Pop-up */}
                        <div>
                            <button
                                onClick={() => setIsModalOpen(true)}
                                className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-xl text-sm font-semibold transition-all shadow-[0_0_15px_rgba(37,99,235,0.3)] flex items-center gap-2"
                            >
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>
                                Nueva Tarea / Nota
                            </button>
                        </div>
                    </div>
                </header>

                {/* Vista del Dashboard (Estatica por ahora) */}
                <div className="flex-1 overflow-y-auto p-8">
                    <div className="mb-8 bg-gradient-to-r from-blue-900/40 to-transparent border border-blue-500/20 rounded-2xl p-4">
                        <p className="text-white font-medium text-sm">Resumen enviado por WhatsApp hace 1 hora.</p>
                    </div>
                    <p className="text-neutral-400 text-sm">Haz clic en el botón superior para estrenar el pop-up de carga.</p>
                </div>
            </main>

            {/* ----------------------------------------------------------------- */}
            {/* 🚀 EL POP-UP (MODAL INTERACTIVO) DE CREACIÓN VISUAL */}
            {/* ----------------------------------------------------------------- */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-black/70 backdrop-blur-md flex items-center justify-center z-50 p-4 animate-fade-in">

                    <div className="bg-[#0a0a12] border border-neutral-800 w-full max-w-2xl rounded-2xl shadow-[0_0_50px_rgba(0,0,0,0.8)] overflow-hidden transform scale-100 transition-all">

                        {/* Header Pop-up */}
                        <div className="px-6 py-4 border-b border-neutral-800 flex justify-between items-center bg-[#11111d]">
                            <h3 className="text-lg font-bold text-white flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
                                Añadir elemento a DiTodo
                            </h3>
                            <button
                                onClick={() => setIsModalOpen(false)}
                                className="text-neutral-400 hover:text-white p-1 rounded-lg hover:bg-neutral-800 transition-colors"
                            >
                                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                            </button>
                        </div>

                        {/* Formulario */}
                        <form onSubmit={handleSubmit} className="p-6 space-y-4">

                            {/* Título */}
                            <div>
                                <label className="block text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-1.5">Nombre de la Tarea / Nota</label>
                                <input
                                    type="text"
                                    required
                                    placeholder="Ej: Reunión de estrategia Q3 o Idea de proyecto..."
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                    className="w-full bg-[#11111d] border border-neutral-800 rounded-xl p-3 text-white placeholder:text-neutral-600 focus:outline-none focus:border-blue-500 transition-colors"
                                />
                            </div>

                            {/* Detalle */}
                            <div>
                                <label className="block text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-1.5">Detalles / Descripción</label>
                                <textarea
                                    rows={3}
                                    placeholder="Escribe aquí los apuntes o pautas de la actividad..."
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                    className="w-full bg-[#11111d] border border-neutral-800 rounded-xl p-3 text-white placeholder:text-neutral-600 focus:outline-none focus:border-blue-500 transition-colors resize-none"
                                />
                            </div>

                            {/* Fechas (Rango Horario) */}
                            {/* Fechas (Calendario Premium Interactivo) */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 relative z-50">

                                {/* INICIO */}
                                <div className="flex flex-col">
                                    <label className="block text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-1.5">Inicio (Vacío = Draft)</label>
                                    <DatePicker
                                        selected={startDate}
                                        onChange={(date: Date | null) => setStartDate(date)}
                                        showTimeSelect
                                        timeFormat="HH:mm"
                                        timeIntervals={15} // Intervalos de 15 minutos en el dropdown
                                        timeCaption="Hora"
                                        dateFormat="d 'de' MMMM, yyyy - HH:mm"
                                        locale="es"
                                        placeholderText="Seleccionar fecha y hora..."
                                        className="w-full bg-[#11111d] border border-neutral-800 rounded-xl p-3 text-white placeholder:text-neutral-600 focus:outline-none focus:border-blue-500 transition-colors"
                                        calendarClassName="bg-[#0a0a12] border border-neutral-800 text-white shadow-2xl rounded-xl p-2 font-sans"
                                        // Tailwind styles para el popup del calendario (sobrescribiendo los default feos)
                                        wrapperClassName="w-full"
                                    />
                                </div>

                                {/* FIN */}
                                <div className="flex flex-col">
                                    <label className="block text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-1.5">Fin (Opcional)</label>
                                    <DatePicker
                                        selected={endDate}
                                        onChange={(date: Date | null) => setEndDate(date)}
                                        showTimeSelect
                                        timeFormat="HH:mm"
                                        timeIntervals={15}
                                        timeCaption="Hora"
                                        dateFormat="d 'de' MMMM, yyyy - HH:mm"
                                        locale="es"
                                        placeholderText="Seleccionar fecha y hora..."
                                        minDate={startDate || undefined} // No deja elegir un fin anterior al inicio
                                        className="w-full bg-[#11111d] border border-neutral-800 rounded-xl p-3 text-white placeholder:text-neutral-600 focus:outline-none focus:border-blue-500 transition-colors"
                                        calendarClassName="bg-[#0a0a12] border border-neutral-800 text-white shadow-2xl rounded-xl p-2 font-sans"
                                        wrapperClassName="w-full"
                                    />
                                </div>
                            </div>

                            {/* Semáforo de Urgencia y Estado */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-1.5">Color de Urgencia (Semáforo)</label>
                                    <select
                                        value={urgency}
                                        onChange={(e) => setUrgency(e.target.value)}
                                        className="w-full bg-[#11111d] border border-neutral-800 rounded-xl p-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
                                    >
                                        <option value="NONE">Ninguno (Azul suave / Gris)</option>
                                        <option value="GREEN">Verde (Con tiempo disponible)</option>
                                        <option value="YELLOW">Amarillo (Próximo a cumplirse)</option>
                                        <option value="RED">Rojo (Urgente / Sobre la hora)</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-1.5">Estado Inicial</label>
                                    <select
                                        value={status}
                                        onChange={(e) => setStatus(e.target.value)}
                                        className="w-full bg-[#11111d] border border-neutral-800 rounded-xl p-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
                                    >
                                        <option value="TODO">Por Hacer (To-Do)</option>
                                        <option value="IN_PROGRESS">En Progreso</option>
                                        <option value="DRAFT">Guardar como borrador (Draft)</option>
                                    </select>
                                </div>
                            </div>

                            {/* Barra de Herramientas Multimedia (Carga de archivos y Notas de Voz) */}
                            <div className="bg-[#11111d] border border-neutral-800 rounded-xl p-4 flex items-center justify-between">
                                <span className="text-xs text-neutral-400 font-medium">Adjuntar a la tarea:</span>
                                <div className="flex items-center gap-2">
                                    {/* Botón Nota de Voz Mock */}
                                    <button type="button" className="p-2 bg-neutral-800 hover:bg-neutral-700 text-neutral-300 rounded-lg transition-colors flex items-center gap-1.5 text-xs">
                                        <svg className="w-4 h-4 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" /></svg>
                                        Grabar Voz
                                    </button>
                                    {/* Botón Archivo Mock */}
                                    <button type="button" className="p-2 bg-neutral-800 hover:bg-neutral-700 text-neutral-300 rounded-lg transition-colors flex items-center gap-1.5 text-xs">
                                        <svg className="w-4 h-4 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                                        Subir Doc/Foto
                                    </button>
                                </div>
                            </div>

                            {/* Botonera de Envío */}
                            <div className="pt-2 flex justify-end gap-3">
                                <button
                                    type="button"
                                    onClick={() => setIsModalOpen(false)}
                                    className="px-5 py-2.5 rounded-xl border border-neutral-800 text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors text-sm font-medium"
                                >
                                    Cancelar
                                </button>
                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm transition-all shadow-[0_0_15px_rgba(37,99,235,0.3)] disabled:opacity-50"
                                >
                                    {loading ? "Guardando..." : "Confirmar y Programar"}
                                </button>
                            </div>

                        </form>

                    </div>
                </div>
            )}

        </div>
    );
}