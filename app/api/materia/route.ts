import connection from '@/lib/mysqlConnection';

export async function GET() {
  try {
    const [rows] = await connection.execute('SELECT * FROM Materia');
    return new Response(
      (rows as any[]).map((row: any) => Object.values(row).join(',')).join('\n'),
      { headers: { 'Content-Type': 'text/plain; charset=utf-8' } }
    );
  } catch (error) {
    const err = error instanceof Error ? error : new Error(String(error));
    return new Response('Error: ' + err.message, { status: 500 });
  }
}
