import connection from '@/lib/mysqlConnection';
import { NextResponse } from 'next/server';

interface AlumnoInfo {
  nombre: string;
  apellido: string;
  matricula: string;
  carrera: string;
}

interface MateriaCalificacion {
  materia: string;
  calificacion: number;
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const alumnoId = searchParams.get('alumnoId');

  if (!alumnoId) {
    return NextResponse.json({ error: 'alumnoId requerido' }, { status: 400 });
  }

  try {
    // Datos del alumno
    const [alumnoRows] = await connection.query(
      `SELECT a.nombre, a.apellido, a.matricula, c.nombre AS carrera
       FROM Alumnos a
       JOIN Carrera c ON a.carrera_id = c.id
       WHERE a.id = ?`,
      [alumnoId]
    );

    if (!Array.isArray(alumnoRows) || alumnoRows.length === 0) {
      return NextResponse.json({ error: 'Alumno no encontrado' }, { status: 404 });
    }

    const alumno = alumnoRows[0] as AlumnoInfo;

    // Materias y calificaciones
    const [materiasRows] = await connection.query(
      `SELECT m.nombre AS materia, i.calificacion
       FROM Inscripcion i
       JOIN Materia m ON i.materia_id = m.id
       WHERE i.alumno_id = ?`,
      [alumnoId]
    );

    const materias = (Array.isArray(materiasRows)
      ? materiasRows
      : []) as MateriaCalificacion[];

    // Promedio
    let promedio: number | null = null;
    if (materias.length > 0) {
      const sum = materias.reduce((acc, m) => acc + Number(m.calificacion), 0);
      promedio = Number((sum / materias.length).toFixed(2));
    }

    return NextResponse.json({
      alumno: `${alumno.nombre} ${alumno.apellido}`,
      matricula: alumno.matricula,
      carrera: alumno.carrera,
      materias,
      promedio,
    });

  } catch (error) {
    const err = error instanceof Error ? error : new Error(String(error));
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
