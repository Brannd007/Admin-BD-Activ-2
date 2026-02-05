import connection from '@/lib/mysqlConnection';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const [rows] = await connection.query(`
      SELECT CONCAT(nombre, ' ', apellido) AS nombre, matricula, 
        ROUND(AVG(i.calificacion), 2) AS promedio
      FROM Alumnos a
      LEFT JOIN Inscripcion i ON a.id = i.alumno_id
      GROUP BY a.id
    `);
    return NextResponse.json(rows);
  } catch (error) {
    const err = error instanceof Error ? error : new Error(String(error));
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
