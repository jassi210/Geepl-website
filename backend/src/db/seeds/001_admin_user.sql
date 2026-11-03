-- Seed default superadmin: admin@goodenough.energy / admin123
-- bcrypt hash of 'admin123' with 12 rounds
INSERT INTO admin_users (username, email, full_name, password_hash, role)
VALUES (
  'superadmin',
  'admin@goodenough.energy',
  'GoodEnough Energy Administrator',
  '$2b$12$LQv3c1yqBWVHxkd0LHAkCOYz6TiGniYE6Ht60AXygSxUxPWNNh8oi',
  'superadmin'
)
ON CONFLICT (email) DO NOTHING;

