import asyncHandler from "../utils/asyncHandler.js";
import * as userService from "../services/userService.js";
import { signToken } from "../utils/token.js";

export const register = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;
  const user = await userService.createUser({ name, email, password, role: "user" });
  const token = signToken({ id: user._id, role: user.role });
  res.status(201).json({ user: user.toPublicJSON(), token });
});

export const login = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const user = await userService.findUserByEmail(email);
  if (!user) return res.status(401).json({ message: "Invalid credentials" });
  const ok = await user.comparePassword(password);
  if (!ok) return res.status(401).json({ message: "Invalid credentials" });
  const token = signToken({ id: user._id, role: user.role });
  res.json({ user: user.toPublicJSON(), token });
});
