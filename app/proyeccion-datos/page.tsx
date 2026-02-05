

import connection from '@/lib/mysqlConnection';

export default async function ProyeccionDatos() {
  const [rows] = await connection.query('SELECT nombre, matricula FROM Alumnos');

  return (
    <div className="card">
      <h2 className="text-xl font-semibold mb-4">2. Proyección de Datos</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Matrícula</th>
          </tr>
        </thead>
        <tbody>
          {(rows as any[]).map((r, i) => (
            <tr key={i}>
              <td>{r.nombre}</td>
              <td>{r.matricula}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p className="text-sm text-gray-500 mt-4"><strong>Consulta relacionada:</strong> Proyección de nombres y matrículas (SELECT nombre, matricula FROM Alumnos)</p>
    </div>
  );
}
