export type Career = { id: string; name: string };
export type Student = { id: string; nombre: string; apellido: string; matricula: string; fechaNacimiento: string; careerId: string };
export type Subject = { id: string; nombre: string; semestre: number };
export type Enrollment = { id: string; studentId: string; subjectId: string; periodo: string };
export type Grade = { id: string; studentId: string; subjectId: string; calificacion: number };

const careers: Career[] = [
  { id: 'c1', name: 'Ingeniería en Sistemas' },
  { id: 'c2', name: 'Lic. en Administración' },
  { id: 'c3', name: 'Arquitectura' },
];

const students: Student[] = [
  { id: 's1', nombre: 'María', apellido: 'Gómez', matricula: 'A001', fechaNacimiento: '2002-05-12', careerId: 'c1' },
  { id: 's2', nombre: 'Juan', apellido: 'Pérez', matricula: 'A002', fechaNacimiento: '2001-11-22', careerId: 'c1' },
  { id: 's3', nombre: 'Lucía', apellido: 'Ramírez', matricula: 'B001', fechaNacimiento: '2003-03-08', careerId: 'c2' },
  { id: 's4', nombre: 'Carlos', apellido: 'Sánchez', matricula: 'C001', fechaNacimiento: '2000-07-30', careerId: 'c3' },
];

const subjects: Subject[] = [
  { id: 'm1', nombre: 'Matemáticas I', semestre: 1 },
  { id: 'm2', nombre: 'Programación I', semestre: 1 },
  { id: 'm3', nombre: 'Bases de Datos', semestre: 3 },
  { id: 'm4', nombre: 'Contabilidad', semestre: 2 },
];

const enrollments: Enrollment[] = [
  { id: 'e1', studentId: 's1', subjectId: 'm1', periodo: '2023-1' },
  { id: 'e2', studentId: 's1', subjectId: 'm2', periodo: '2023-1' },
  { id: 'e3', studentId: 's2', subjectId: 'm1', periodo: '2023-1' },
  { id: 'e4', studentId: 's3', subjectId: 'm4', periodo: '2023-1' },
  { id: 'e5', studentId: 's1', subjectId: 'm3', periodo: '2023-2' },
];

const grades: Grade[] = [
  { id: 'g1', studentId: 's1', subjectId: 'm1', calificacion: 9.0 },
  { id: 'g2', studentId: 's1', subjectId: 'm2', calificacion: 8.5 },
  { id: 'g3', studentId: 's1', subjectId: 'm3', calificacion: 7.5 },
  { id: 'g4', studentId: 's2', subjectId: 'm1', calificacion: 8.2 },
  { id: 'g5', studentId: 's3', subjectId: 'm4', calificacion: 9.1 },
];

export const db = {
  careers,
  students,
  subjects,
  enrollments,
  grades,
};

export function getCareers() { return careers; }
export function getStudentsByCareer(careerId: string) { return students.filter(s => s.careerId === careerId); }
export function projectNamesAndMatriculas() { return students.map(s => ({ nombre: `${s.nombre} ${s.apellido}`, matricula: s.matricula })); }
export function getStudentCareer() {
  return students.map(s => ({
    alumno: `${s.nombre} ${s.apellido}`,
    matricula: s.matricula,
    carrera: careers.find(c => c.id === s.careerId)?.name ?? '—',
  }));
}
export function getSubjectsByStudent(studentId: string) {
  const studentEnrolls = enrollments.filter(e => e.studentId === studentId);
  return studentEnrolls.map(e => ({
    materia: subjects.find(m => m.id === e.subjectId)?.nombre ?? '—',
    semestre: subjects.find(m => m.id === e.subjectId)?.semestre ?? 0,
    periodo: e.periodo,
  }));
}
export function getGradesByStudent(studentId: string) {
  return grades
    .filter(g => g.studentId === studentId)
    .map(g => ({ materia: subjects.find(m => m.id === g.subjectId)?.nombre ?? '—', calificacion: g.calificacion }));
}
export function getAveragePerStudent() {
  return students.map(s => {
    const gs = grades.filter(g => g.studentId === s.id).map(g => g.calificacion);
    const avg = gs.length ? Number((gs.reduce((a,b)=>a+b,0)/gs.length).toFixed(2)) : null;
    return { nombre: `${s.nombre} ${s.apellido}`, matricula: s.matricula, promedio: avg };
  });
}
export function getStudentsWithAverageAbove(threshold: number) {
  return getAveragePerStudent().filter(s => s.promedio !== null && s.promedio > threshold);
}
export function getKardexForStudent(studentId: string) {
  const student = students.find(s => s.id === studentId);
  if (!student) return null;
  const carrera = careers.find(c => c.id === student.careerId)?.name ?? '—';
  const materias = grades
    .filter(g => g.studentId === studentId)
    .map(g => ({ materia: subjects.find(su => su.id === g.subjectId)?.nombre ?? '—', calificacion: g.calificacion }));
  const promedio = materias.length ? Number((materias.reduce((a,b)=>a+b.calificacion,0)/materias.length).toFixed(2)) : null;
  return { alumno: `${student.nombre} ${student.apellido}`, matricula: student.matricula, carrera, materias, promedio };
}
