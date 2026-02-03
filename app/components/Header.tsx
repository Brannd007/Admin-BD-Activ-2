import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-indigo-600 text-white">
      <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded bg-white/20 flex items-center justify-center font-bold">UA</div>
          <div>
            <div className="font-semibold">Portal Académico</div>
            <div className="text-xs text-indigo-100">Demo — datos simulados</div>
          </div>
        </div>
        <nav className="hidden md:flex gap-4 text-sm">
          <Link className="hover:underline" href="/gestion-alumnos">Gestión</Link>
          <Link className="hover:underline" href="/proyeccion-datos">Proyección</Link>
          <Link className="hover:underline" href="/alumno-carrera">Alumno–Carrera</Link>
          <Link className="hover:underline" href="/materias-inscritas">Materias</Link>
          <Link className="hover:underline" href="/calificaciones">Calificaciones</Link>
          <Link className="hover:underline" href="/promedio">Promedio</Link>
          <Link className="hover:underline" href="/promedio-mayor-8">Top</Link>
          <Link className="hover:underline" href="/kardex">Kardex</Link>
        </nav>
      </div>
    </header>
  );
}
