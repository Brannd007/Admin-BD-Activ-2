"use client";
import { useEffect, useState } from "react";

interface PromedioRow {
  nombre: string;
  matricula: string;
  promedio: number | null;
}

export default function Promedio() {
  const [rows, setRows] = useState<PromedioRow[]>([]);

  useEffect(() => {
    fetch("/api/promedio")
      .then((res) => res.json())
      .then((data) => setRows(data));
  }, []);

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
              <td>{r.promedio ?? "—"}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <p className="text-sm text-gray-500 mt-4">
        <strong>Consulta relacionada:</strong> Función de agregación (AVG)
      </p>
    </div>
  );
}
