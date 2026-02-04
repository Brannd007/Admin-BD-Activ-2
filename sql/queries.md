# Consultas SQL de referencia

A continuación se listan ejemplos de consultas relacionadas con cada sección del front-end (ajustar nombres de tablas y columnas según tu esquema real):

1) Selección de alumnos por carrera

```sql
SELECT nombre, apellido, matricula, fecha_nacimiento
FROM alumno
WHERE carrera_id = :carreraId;
```

2) Proyección de nombres y matrículas

```sql
SELECT nombre || ' ' || apellido AS nombre, matricula
FROM alumno;
```

3) JOIN alumno–carrera

```sql
SELECT a.nombre || ' ' || a.apellido AS alumno, a.matricula, c.nombre AS carrera
FROM alumno a
JOIN carrera c ON a.carrera_id = c.id;
```

4) Materias inscritas por alumno (JOIN con Inscripción y Materia)

```sql
SELECT m.nombre AS materia, m.semestre, i.periodo
FROM inscripcion i
JOIN materia m ON i.materia_id = m.id
WHERE i.alumno_id = :alumnoId;
```

5) Calificaciones por alumno (JOIN alumno–materia–calificación)

```sql
SELECT m.nombre AS materia, cal.calificacion
FROM calificacion cal
JOIN materia m ON cal.materia_id = m.id
WHERE cal.alumno_id = :alumnoId;
```

6) Promedio general del alumno (AVG)

```sql
SELECT a.id, a.nombre || ' ' || a.apellido AS alumno, AVG(cal.calificacion) AS promedio
FROM alumno a
LEFT JOIN calificacion cal ON cal.alumno_id = a.id
GROUP BY a.id, a.nombre, a.apellido;
```

7) Alumnos con promedio mayor a 8 (HAVING)

```sql
SELECT a.id, a.nombre || ' ' || a.apellido AS alumno, AVG(cal.calificacion) AS promedio
FROM alumno a
JOIN calificacion cal ON cal.alumno_id = a.id
GROUP BY a.id
HAVING AVG(cal.calificacion) > 8.0;
```

8) Vista Kardex (ejemplo de CREATE VIEW)

```sql
CREATE VIEW kardex AS
SELECT s.id AS alumno_id, s.nombre || ' ' || s.apellido AS alumno, c.nombre AS carrera, m.nombre AS materia, cal.calificacion
FROM alumno s
JOIN carrera c ON s.carrera_id = c.id
JOIN calificacion cal ON cal.alumno_id = s.id
JOIN materia m ON cal.materia_id = m.id;
```
