INSERT INTO solutions (slug, title, summary, content, category)
VALUES
  ('bess-utility', 'Utility-Scale BESS', 'High-capacity battery energy storage systems engineered for grid stability and peak shaving.', 'GoodEnough Energy utility-scale BESS solutions deliver grid-level frequency regulation, ramp rate control, and energy arbitrage with advanced thermal management.', 'Grid Storage'),
  ('c-and-i-storage', 'Commercial & Industrial Storage', 'Behind-the-meter storage solutions lowering peak demand charges and guaranteeing uninterrupted power.', 'Customized turnkey C&I energy storage solutions that optimize operational cost, integrate rooftop solar, and guarantee backup reliability.', 'Commercial'),
  ('microgrid-solutions', 'Renewable Microgrid Integration', 'Resilient microgrids combining solar, wind, and storage for remote and mission-critical facilities.', 'Decentralized smart microgrid management architectures providing 24/7 autonomous green power with zero downtime.', 'Microgrids')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO projects (slug, title, client, location, capacity, description)
VALUES
  ('northern-grid-stabilizer', 'Northern Grid Stabilization Facility', 'State Power Distribution Corp', 'Jammu & Kashmir, India', '50 MWh', 'High-altitude utility scale energy storage installation delivering cold-weather resilient grid stabilization and black-start capabilities.')
ON CONFLICT (slug) DO NOTHING;

