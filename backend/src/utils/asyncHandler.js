// Small wrapper to avoid try/catch in controllers
export default (fn) => (req, res, next) => {
  Promise.resolve(fn(req, res, next)).catch(next);
};
