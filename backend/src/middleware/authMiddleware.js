import { verifyToken } from "../utils/token.js";
import User from "../models/User.js";

export const protect = async (req, res, next) => {
  try {
    const bearer = req.headers.authorization;
    if (!bearer || !bearer.startsWith("Bearer ")) {
      return res.status(401).json({ message: "Authorization token required" });
    }
    const token = bearer.split(" ")[1];
    const decoded = verifyToken(token);
    const user = await User.findById(decoded.id).select("+password");
    if (!user) return res.status(401).json({ message: "Invalid token (user not found)" });
    req.user = user;
    next();
  } catch (err) {
    return res.status(401).json({ message: "Token verification failed", error: err.message });
  }
};

export const authorizeRoles = (...roles) => (req, res, next) => {
  if (!req.user || !roles.includes(req.user.role)) {
    return res.status(403).json({ message: "Forbidden: insufficient permissions" });
  }
  next();
};
