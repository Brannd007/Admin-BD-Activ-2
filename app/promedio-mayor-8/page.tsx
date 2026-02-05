'use client';

import { useEffect, useState } from 'react';

interface StudentAverage {
  nombre: string;
  matricula: string;
  promedio: number;
}

export default function PromedioMayor8() {
  const [rows, setRows] = useState<StudentAverage[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/alumnos-promedio-mayor?min=8')
      .then(res => res.json())
      .then(data => {
        setRows(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return (
    <div className="card">
      <h2 className="text-xl font-semibold mb-4">
        7. Alumnos con Promedio Mayor a 8
      </h2>

      {loading ? (
        <p>Cargando alumnos...</p>
      ) : (
        <table className="table">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Matrícula</th>
              <th>Promedio</th>
            </tr>
          </thead>
          <tbody>
            {rows.map(r => (
              <tr key={r.matricula}>
                <td>{r.nombre}</td>
                <td>{r.matricula}</td>
                <td>{r.promedio}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      <p className="text-sm text-gray-500 mt-4">
        <strong>Consulta relacionada:</strong> Subconsulta con filtro avanzado (HAVING)
      </p>
    </div>
  );
}
