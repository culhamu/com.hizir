import Joi from "joi";

export const registerSchema = Joi.object({
  name: Joi.string().min(2).max(100).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).max(128).required()
});

export const loginSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required()
});

export const vehicleCreateSchema = Joi.object({
  brand: Joi.string().required(),
  model: Joi.string().required(),
  year: Joi.number().integer().min(1900).max(new Date().getFullYear() + 1).required(),
  plate: Joi.string().required(),
  vin: Joi.string().optional()
});

export const reportCreateSchema = Joi.object({
  vehicleId: Joi.string().required(),
  findings: Joi.string().allow("").optional(),
  score: Joi.number().min(0).max(100).optional(),
  attachments: Joi.array().items(
    Joi.object({ url: Joi.string().uri().required(), label: Joi.string().optional() })
  ).optional()
});
