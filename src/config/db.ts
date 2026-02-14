import { Pool } from 'pg';

export const pool = new Pool({
  host: process.env.POSTGRES_HOST,
  user: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
  port: Number(process.env.POSTGRES_PORT),
});

export const checkDBConnection = async () => {
  await pool.query('SELECT 1');
};
