import { Router } from "express";
import { signIn, signUp } from "../controllers/authControllers";
import { signUpValidation } from "../middlewares/signUpValidation";

const authRoutes = Router();

authRoutes.post("/sign-up", signUpValidation, signUp);
authRoutes.post("/sign-in", signIn);

export default authRoutes;