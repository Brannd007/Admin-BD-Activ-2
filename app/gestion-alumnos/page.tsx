'use client';

import { useEffect, useState } from 'react';

interface Career {
  id: number;
  name: string;
}

interface Student {
  id: number;
  nombre: string;
  apellido: string;
  matricula: string;
  fechaNacimiento: string;
}

export default function GestionAlumnos() {
  const [careers, setCareers] = useState<Career[]>([]);
  const [careerId, setCareerId] = useState<number | ''>('');
  const [students, setStudents] = useState<Student[]>([]);

  // Obtener carreras
  useEffect(() => {
    fetch('/api/carreras')
      .then(res => res.json())
      .then(data => {
        setCareers(data);
        if (data.length > 0) setCareerId(data[0].id);
      });
  }, []);

  // Obtener alumnos por carrera
  useEffect(() => {
    if (careerId !== '') {
      fetch(`/api/alumnos-por-carrera?careerId=${careerId}`)
        .then(res => res.json())
        .then(data => setStudents(data));
    }
  }, [careerId]);

  return (
    <div className="card">
      <h2 className="text-xl font-semibold mb-4">1. Gestión de Alumnos</h2>

      <div className="flex items-center gap-3">
        <label>Selecciona una carrera:</label>
        <select
          value={careerId}
          onChange={e => setCareerId(Number(e.target.value))}
        >
          {careers.map(c => (
            <option key={c.id} value={c.id}>
              {c.name}
            </option>
          ))}
        </select>
      </div>

      <h3 className="mt-6 mb-2 font-medium">Alumnos inscritos</h3>

      <table className="table mt-2">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Matrícula</th>
            <th>Fecha de nacimiento</th>
          </tr>
        </thead>
        <tbody>
          {students.map(s => (
            <tr key={s.id}>
              <td>{s.nombre}</td>
              <td>{s.apellido}</td>
              <td>{s.matricula}</td>
              <td>{s.fechaNacimiento}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
