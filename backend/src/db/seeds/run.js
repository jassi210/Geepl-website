import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import pool from '../../config/database.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function runSeeds() {
  const client = await pool.connect();
  try {
    await client.query('BEGIN');
    const files = fs.readdirSync(__dirname).filter((file) => file.endsWith('.sql')).sort();
    for (const file of files) {
      const sql = fs.readFileSync(path.join(__dirname, file), 'utf8');
      await client.query(sql);
    }
    await client.query('COMMIT');
  } catch (error) {
    await client.query('ROLLBACK');
    process.exitCode = 1;
    throw error;
  } finally {
    client.release();
    await pool.end();
  }
}

runSeeds().catch((error) => {
  process.stderr.write(`${error.stack || error.message}\n`);
  process.exit(1);
});

