export const logger = {
  info: (message, meta) => {
    process.stdout.write(`[INFO] ${new Date().toISOString()} - ${message} ${meta ? JSON.stringify(meta) : ''}\n`);
  },
  error: (message, meta) => {
    process.stderr.write(`[ERROR] ${new Date().toISOString()} - ${message} ${meta ? JSON.stringify(meta) : ''}\n`);
  },
};

