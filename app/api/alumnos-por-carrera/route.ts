import connection from '@/lib/mysqlConnection';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const careerId = searchParams.get('careerId');
  if (!careerId) return NextResponse.json([]);
  try {
    const [rows] = await connection.query(
      'SELECT id, nombre, apellido, matricula, DATE_FORMAT(fecha_nacimiento, "%Y-%m-%d") as fechaNacimiento FROM Alumnos WHERE carrera_id = ?',
      [careerId]
    );
    return NextResponse.json(rows);
  } catch (error) {
    const err = error instanceof Error ? error : new Error(String(error));
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
