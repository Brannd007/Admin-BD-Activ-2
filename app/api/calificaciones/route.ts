import connection from '@/lib/mysqlConnection';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const alumnoId = searchParams.get('alumnoId');
  if (!alumnoId) {
    return NextResponse.json([]);
  }
  try {
    const [rows] = await connection.query(`
      SELECT m.nombre AS materia, i.calificacion
      FROM Inscripcion i
      JOIN Materia m ON i.materia_id = m.id
      WHERE i.alumno_id = ?
    `, [alumnoId]);
    return NextResponse.json(rows);
  } catch (error) {
    const err = error instanceof Error ? error : new Error(String(error));
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
