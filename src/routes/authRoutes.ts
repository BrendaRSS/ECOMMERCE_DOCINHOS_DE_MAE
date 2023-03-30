import { Router } from "express";
import { signIn, signUp } from "../controllers/authControllers";
import { signUpValidation } from "../middlewares/signUpValidation";
import { signInValidation } from "../middlewares/signInValidation";

const authRoutes = Router();

authRoutes.post("/sign-up", signUpValidation, signUp);
authRoutes.post("/sign-in", signInValidation, signIn);

export default authRoutes;