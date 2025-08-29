export const errorHandler = (err, req, res, next) => {
  console.error("Error:", err);
  res.status(500).json({
    message: err.message || "Server Error",
    stack: process.env.NODE_ENV === "development" ? err.stack : undefined
  });
};
