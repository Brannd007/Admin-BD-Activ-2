import mysql from 'mysql2/promise';

const pool = mysql.createPool({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: 'Rodrigo@2026',
  database: 'universidad',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

export default pool;
