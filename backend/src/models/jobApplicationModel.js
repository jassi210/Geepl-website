import pool from '../config/database.js';

export const JobApplicationModel = {
  async create({ careerId, jobTitle, fullName, email, phone, portfolioUrl, resumeUrl, coverLetter }) {
    const query = `
      INSERT INTO job_applications
        (career_id, job_title, full_name, email, phone, portfolio_url, resume_url, cover_letter)
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
      RETURNING id, career_id, job_title, full_name, email, phone, status, created_at
    `;
    const values = [
      careerId, jobTitle, fullName, email, phone,
      portfolioUrl || null,
      resumeUrl || null,
      coverLetter || null,
    ];
    const { rows } = await pool.query(query, values);
    return rows[0];
  },

  async findAll() {
    const { rows } = await pool.query(
      `SELECT id, career_id, job_title, full_name, email, phone, portfolio_url, resume_url, status, created_at
       FROM job_applications ORDER BY created_at DESC`
    );
    return rows;
  },

  async findById(id) {
    const { rows } = await pool.query(
      `SELECT * FROM job_applications WHERE id = $1`,
      [id]
    );
    return rows[0] || null;
  },

  async updateStatus(id, status) {
    const { rows } = await pool.query(
      `UPDATE job_applications SET status = $1, updated_at = NOW()
       WHERE id = $2 RETURNING id, status`,
      [status, id]
    );
    return rows[0] || null;
  },
};

