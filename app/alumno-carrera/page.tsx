'use client';
import { getStudentCareer } from '../../lib/mockData';

export default function AlumnoCarrera() {
  const rows = getStudentCareer();
  return (
    <div className="card">
      <h2 className="text-xl font-semibold mb-4">3. Consulta Alumno – Carrera</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Alumno</th>
            <th>Matrícula</th>
            <th>Carrera</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={i}>
              <td>{r.alumno}</td>
              <td>{r.matricula}</td>
              <td>{r.carrera}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <p className="text-sm text-gray-500 mt-4"><strong>Consulta relacionada:</strong> JOIN alumno–carrera (SELECT ... FROM alumno JOIN carrera ON ...)</p>
    </div>
  );
}
