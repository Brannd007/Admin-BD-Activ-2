"use client";
import { useEffect, useState } from "react";

interface Alumno {
  id: number;
  nombre: string;
  apellido: string;
  matricula: string;
}

interface Calificacion {
  materia: string;
  calificacion: number;
}

export default function Calificaciones() {
  const [students, setStudents] = useState<Alumno[]>([]);
  const [studentId, setStudentId] = useState<number | null>(null);
  const [rows, setRows] = useState<Calificacion[]>([]);

  useEffect(() => {
    fetch("/api/alumnos-proyeccion")
      .then((res) => res.json())
      .then((data) => {
        setStudents(data);
        if (data.length > 0) setStudentId(data[0].id);
      });
  }, []);

  useEffect(() => {
    if (studentId) {
      fetch(`/api/calificaciones?alumnoId=${studentId}`)
        .then((res) => res.json())
        .then((data) => setRows(data));
    }
  }, [studentId]);

  return (
    <div className="card">
      <h2 className="text-xl font-semibold mb-4">5. Calificaciones por Alumno</h2>
      <div className="flex items-center gap-3">
        <label>Selecciona alumno:</label>
        <select
          value={studentId ?? ""}
          onChange={(e) => setStudentId(Number(e.target.value))}
        >
          {students.map((s) => (
            <option key={s.id} value={s.id}>
              {s.matricula} — {s.nombre} {s.apellido}
            </option>
          ))}
        </select>
      </div>

      <h3 className="mt-6 mb-2 font-medium">Calificaciones</h3>
      <table className="table">
        <thead>
          <tr>
            <th>Materia</th>
            <th>Calificación obtenida</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={i}>
              <td>{r.materia}</td>
              <td>{r.calificacion}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <p className="text-sm text-gray-500 mt-4">
        <strong>Consulta relacionada:</strong> JOIN alumno–materia–calificación
      </p>
    </div>
  );
}
