import pool from '../config/database.js';

export const InquiryModel = {
  async create({ name, email, phone, subject, message }) {
    const query = `
      INSERT INTO inquiries (name, email, phone, subject, message)
      VALUES ($1, $2, $3, $4, $5)
      RETURNING id, name, email, phone, subject, message, status, created_at;
    `;
    const values = [name, email, phone || null, subject, message];
    const { rows } = await pool.query(query, values);
    return rows[0];
  },

  async findAll() {
    const query = `
      SELECT id, name, email, phone, subject, message, status, created_at
      FROM inquiries
      ORDER BY created_at DESC;
    `;
    const { rows } = await pool.query(query);
    return rows;
  },

  async findById(id) {
    const query = `
      SELECT id, name, email, phone, subject, message, status, created_at
      FROM inquiries
      WHERE id = $1;
    `;
    const { rows } = await pool.query(query, [id]);
    return rows[0] || null;
  },
};

