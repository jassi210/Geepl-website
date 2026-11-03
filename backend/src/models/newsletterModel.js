import pool from '../config/database.js';

export const NewsletterModel = {
  async subscribe(email) {
    const { rows } = await pool.query(
      `INSERT INTO newsletter_subscribers (email)
       VALUES ($1)
       ON CONFLICT (email) DO UPDATE SET is_active = TRUE
       RETURNING id, email, is_active, subscribed_at`,
      [email]
    );
    return rows[0];
  },
};

