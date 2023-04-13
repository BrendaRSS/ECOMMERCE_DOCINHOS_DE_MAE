import conflictError from "../../errors/conflictError";
import notFoundError from "../../errors/notFoundError";
import unauthorizedError from "../../errors/unauthorizedError";
import { bodyLogin, Bodyuser } from "../../protocols";
import authRepository from "../../repository/authRepository";
import sessionRepository from "../../repository/sessionRepository";
import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

async function signUpUser(body: Bodyuser) {
  const emailExist = await authRepository.findUserByEmail(body.email)
  if(emailExist){
    throw conflictError();
  }
  const postSignUp = await authRepository.signUpUser(body);
  if(!postSignUp){
    throw notFoundError();
  }

  delete postSignUp.password;

  return postSignUp;
}

async function signIn(body: bodyLogin) {
  const userExist = await authRepository.findUserByEmail(body.email);
  if (!userExist) {
    throw unauthorizedError();
  }

  const passwordValidate = bcrypt.compareSync(body.password, userExist.password);
  if (!passwordValidate) {
    throw unauthorizedError();
  }

  const token = await createSession(userExist.id);

  delete userExist.password;

  return {
    user: userExist,
    token,
  };
}

async function createSession(userId: number) {
  const token = jwt.sign({ id: userId }, process.env.SECRET_JWT, { expiresIn: 86400 });

  await sessionRepository.createSession(token, userId);

  return token;
}

const authService = {
  signUpUser,
  signIn,
};

export default authService;