'use client';
import { useState } from 'react';
import { db, getKardexForStudent } from '../../lib/mockData';

export default function Kardex() {
  const students = db.students;
  const [studentId, setStudentId] = useState(students[0]?.id ?? '');
  const kardex = studentId ? getKardexForStudent(studentId) : null;

  return (
    <div className="card">
      <h2 className="text-xl font-semibold mb-4">8. Vista Kardex del Alumno</h2>

      <div className="flex items-center gap-3">
        <label>Selecciona alumno:</label>
        <select value={studentId} onChange={e=>setStudentId(e.target.value)}>
          {students.map(s => <option key={s.id} value={s.id}>{s.matricula} — {s.nombre} {s.apellido}</option>)}
        </select>
      </div>

      {kardex ? (
        <div className="mt-4">
          <p><strong>Carrera:</strong> {kardex.carrera}</p>
          <p><strong>Promedio general:</strong> {kardex.promedio ?? '—'}</p>

          <h4 className="mt-4 mb-2">Materias cursadas</h4>
          <table className="table">
            <thead>
              <tr>
                <th>Materia</th>
                <th>Calificación</th>
              </tr>
            </thead>
            <tbody>
              {kardex.materias.map((m, i) => (
                <tr key={i}>
                  <td>{m.materia}</td>
                  <td>{m.calificacion}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <p className="text-sm text-gray-500 mt-4"><strong>Nota:</strong> Esta sección debería consumir una <em>vista SQL</em> precreada (p. ej. la vista <code>kardex</code> en la base de datos).</p>
        </div>
      ) : (
        <p className="text-sm text-gray-500 mt-4">Selecciona un alumno para ver el Kardex.</p>
      )}
    </div>
  );
}
