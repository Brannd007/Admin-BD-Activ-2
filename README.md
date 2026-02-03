This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

---

## Front demo: Portal Académico (secciones implementadas)

He añadido un conjunto de páginas demo bajo `app/` que implementan las secciones solicitadas (usando datos simulados en `lib/mockData.ts`):

- `app/gestion-alumnos` (Selección por carrera y tabla de alumnos)
- `app/proyeccion-datos` (Proyección de nombre y matrícula)
- `app/alumno-carrera` (JOIN alumno–carrera)
- `app/materias-inscritas` (Materias por alumno)
- `app/calificaciones` (Calificaciones por alumno)
- `app/promedio` (Promedio general por alumno)
- `app/promedio-mayor-8` (Alumnos con promedio > 8)
- `app/kardex` (Vista Kardex — debe consumir una vista SQL real)

También encontrás ejemplos de consultas SQL en `sql/queries.md` y una vista de ejemplo en `db/views/kardex.sql`.

Para probar el proyecto en desarrollo:

```bash
npm run dev
# luego abrir http://localhost:3000
```

Si quieres conectar esto a una base de datos real, reemplaza las funciones de `lib/mockData.ts` por llamadas a tu API/DB o crea rutas en `app/api`.

---

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
