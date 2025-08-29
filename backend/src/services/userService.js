import User from "../models/User.js";

export const createUser = async ({ name, email, password, role }) => {
  const exists = await User.findOne({ email });
  if (exists) {
    const err = new Error("Email already in use");
    err.status = 400;
    throw err;
  }
  const user = new User({ name, email, password, role });
  await user.save();
  return user;
};

export const findUserByEmail = (email) => User.findOne({ email }).select("+password");

export const findUserById = (id) => User.findById(id);
