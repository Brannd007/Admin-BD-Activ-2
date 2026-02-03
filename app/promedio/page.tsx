'use client';
import { getAveragePerStudent } from '../../lib/mockData';

export default function Promedio() {
  const rows = getAveragePerStudent();
  return (
    <div className="card">
      <h2 className="text-xl font-semibold mb-4">6. Promedio General del Alumno</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Nombre del alumno</th>
            <th>Promedio</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={i}>
              <td>{r.nombre}</td>
              <td>{r.promedio ?? '—'}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <p className="text-sm text-gray-500 mt-4"><strong>Consulta relacionada:</strong> Función de agregación (AVG)</p>
    </div>
  );
}
