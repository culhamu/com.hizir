const formatMeta = (meta) => (meta ? JSON.stringify(meta) : "");

export default {
  info: (msg, meta) => console.log(`INFO: ${msg}`, formatMeta(meta)),
  warn: (msg, meta) => console.warn(`WARN: ${msg}`, formatMeta(meta)),
  error: (msg, meta) => console.error(`ERROR: ${msg}`, formatMeta(meta))
};
