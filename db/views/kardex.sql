-- SQL para crear la vista Kardex requerida
-- Esta vista debe existir en la base de datos y se consume desde el front-end (se simula aquí)

CREATE VIEW kardex AS
SELECT
  s.id AS alumno_id,
  s.nombre || ' ' || s.apellido AS alumno,
  c.name AS carrera,
  m.nombre AS materia,
  g.calificacion
FROM students s
JOIN careers c ON s.career_id = c.id
JOIN grades g ON g.student_id = s.id
JOIN subjects m ON g.subject_id = m.id;
