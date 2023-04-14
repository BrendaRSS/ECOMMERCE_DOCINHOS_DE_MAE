import joi from "joi";

export const productSchema = joi.object({
  name: joi.string().min(3).required(),
  cakeDoughtId: joi.number().required(),
  cakeFillingId: joi.number().required(),
  sizeId: joi.number().required(),
  price: joi.number().required(),
  description: joi.string().min(0),
  image: joi.string().min(1).required()
});