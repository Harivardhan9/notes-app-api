import { pool } from '../config/db';

export const getAllNotes = async () => {
  const result = await pool.query('SELECT * FROM notes ORDER BY id DESC');
  return result.rows;
};

export const createNote = async (data: { title: string; content: string }) => {
  const result = await pool.query(
    'INSERT INTO notes (title, content) VALUES ($1, $2) RETURNING *',
    [data.title, data.content],
  );
  return result.rows[0];
};
