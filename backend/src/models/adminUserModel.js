import pool from '../config/database.js';

export const AdminUserModel = {
  async findByEmail(email) {
    const { rows } = await pool.query(
      `SELECT id, username, email, full_name, password_hash, role, is_active
       FROM admin_users WHERE email = $1 AND is_active = TRUE`,
      [email]
    );
    return rows[0] || null;
  },

  async findByResetToken(token) {
    const { rows } = await pool.query(
      `SELECT id, email, reset_token_expires_at
       FROM admin_users
       WHERE reset_token = $1 AND reset_token_expires_at > NOW()`,
      [token]
    );
    return rows[0] || null;
  },

  async setResetToken(email, token, expiresAt) {
    const { rowCount } = await pool.query(
      `UPDATE admin_users SET reset_token = $1, reset_token_expires_at = $2
       WHERE email = $3 AND is_active = TRUE`,
      [token, expiresAt, email]
    );
    return rowCount > 0;
  },

  async updatePassword(id, passwordHash) {
    const { rowCount } = await pool.query(
      `UPDATE admin_users
       SET password_hash = $1, reset_token = NULL, reset_token_expires_at = NULL, updated_at = NOW()
       WHERE id = $2`,
      [passwordHash, id]
    );
    return rowCount > 0;
  },
};

