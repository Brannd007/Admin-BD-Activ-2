'use client';
import { getStudentsWithAverageAbove } from '../../lib/mockData';

export default function PromedioMayor8() {
  const rows = getStudentsWithAverageAbove(8);
  return (
    <div className="card">
      <h2 className="text-xl font-semibold mb-4">7. Alumnos con Promedio Mayor a 8</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Matrícula</th>
            <th>Promedio</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={i}>
              <td>{r.nombre}</td>
              <td>{r.matricula}</td>
              <td>{r.promedio}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <p className="text-sm text-gray-500 mt-4"><strong>Consulta relacionada:</strong> Subconsulta con filtro avanzado (HAVING)</p>
    </div>
  );
}
