import pool from '../config/database.js';

export const HealthController = {
  async check(req, res) {
    let databaseStatus = 'disconnected';
    try {
      const result = await pool.query('SELECT 1 AS healthy');
      if (result.rows?.[0]?.healthy === 1) {
        databaseStatus = 'connected';
      }
    } catch {
      databaseStatus = 'unavailable';
    }

    res.status(200).json({
      status: 'ok',
      service: 'goodenough-backend',
      timestamp: new Date().toISOString(),
      database: databaseStatus,
    });
  },
};

