"use client";
import { useEffect, useState } from "react";

interface Alumno {
  id: number;
  nombre: string;
  apellido: string;
  matricula: string;
}

interface MateriaInscrita {
  materia: string;
  semestre: number;
  periodo: string;
}

export default function MateriasInscritas() {
  const [students, setStudents] = useState<Alumno[]>([]);
  const [alumnoId, setAlumnoId] = useState<number | null>(null);
  const [rows, setRows] = useState<MateriaInscrita[]>([]);

  useEffect(() => {
    fetch("/api/alumnos-proyeccion")
      .then((res) => res.json())
      .then((data) => {
        setStudents(data);
        if (data.length > 0) setAlumnoId(data[0].id);
      });
  }, []);

  useEffect(() => {
    if (alumnoId) {
      fetch(`/api/materias-inscritas?alumnoId=${alumnoId}`)
        .then((res) => res.json())
        .then((data) => setRows(data));
    }
  }, [alumnoId]);

  return (
    <div className="card">
      <h2 className="text-xl font-semibold mb-4">4. Materias Inscritas por Alumno</h2>
      <div className="flex items-center gap-3">
        <label>Selecciona alumno:</label>
        <select
          value={alumnoId ?? ""}
          onChange={(e) => setAlumnoId(Number(e.target.value))}
        >
          {students.map((s) => (
            <option key={`alumno-${s.id}`} value={s.id}>
              {s.matricula} — {s.nombre} {s.apellido}
            </option>
          ))}
        </select>
      </div>

      <h3 className="mt-6 mb-2 font-medium">Materias inscritas</h3>
      <table className="table">
        <thead>
          <tr>
            <th>Nombre de la materia</th>
            <th>Semestre</th>
            <th>Periodo de inscripción</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={i}>
              <td>{r.materia}</td>
              <td>{r.semestre}</td>
              <td>{r.periodo}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <p className="text-sm text-gray-500 mt-4">
        <strong>Consulta relacionada:</strong> JOIN con tabla Inscripción y Materia
      </p>
    </div>
  );
}
