'use client';
import { useState } from 'react';
import { getCareers, getStudentsByCareer } from '../../lib/mockData';

export default function GestionAlumnos() {
  const careers = getCareers();
  const [careerId, setCareerId] = useState(careers[0]?.id ?? '');
  const students = careerId ? getStudentsByCareer(careerId) : [];

  return (
    <div className="card">
      <h2 className="text-xl font-semibold mb-4">1. Gestión de Alumnos</h2>
      <div className="flex items-center gap-3">
        <label className="mr-2">Selecciona una carrera:</label>
        <select className="" value={careerId} onChange={e => setCareerId(e.target.value)}>
          {careers.map(c => <option key={c.id} value={c.id}>{c.name}</option>)}
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

      <p className="text-sm text-gray-500 mt-4"><strong>Consulta relacionada:</strong> Selección de alumnos por carrera (WHERE career_id = ...)</p>
    </div>
  );
}
