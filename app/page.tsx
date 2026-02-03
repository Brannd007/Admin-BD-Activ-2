import Image from "next/image";

export default function Home() {
  return (
    <div className="card">
      <h1 className="text-2xl font-bold mb-2">Portal Académico - Demo</h1>
      <p className="mb-4">Selecciona una sección:</p>
      <ul className="list-disc pl-5 space-y-1">
        <li><a className="text-indigo-600 hover:underline" href="/gestion-alumnos">1. Gestión de Alumnos</a></li>
        <li><a className="text-indigo-600 hover:underline" href="/proyeccion-datos">2. Proyección de Datos</a></li>
        <li><a className="text-indigo-600 hover:underline" href="/alumno-carrera">3. Consulta Alumno – Carrera</a></li>
        <li><a className="text-indigo-600 hover:underline" href="/materias-inscritas">4. Materias Inscritas por Alumno</a></li>
        <li><a className="text-indigo-600 hover:underline" href="/calificaciones">5. Calificaciones por Alumno</a></li>
        <li><a className="text-indigo-600 hover:underline" href="/promedio">6. Promedio General del Alumno</a></li>
        <li><a className="text-indigo-600 hover:underline" href="/promedio-mayor-8">7. Alumnos con Promedio &gt; 8</a></li>
        <li><a className="text-indigo-600 hover:underline" href="/kardex">8. Vista Kardex (vista SQL)</a></li>
      </ul>
      <hr className="my-4" />

      <p className="text-sm text-gray-500">Datos simulados con <code>lib/mockData.ts</code>. Reemplaza por llamadas reales a tu API/DB.</p>
    </div>
  );
}
