import connection from '@/lib/mysqlConnection';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const [rows] = await connection.query('SELECT id, nombre as name FROM Carrera');
    return NextResponse.json(rows);
  } catch (error) {
    const err = error instanceof Error ? error : new Error(String(error));
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
