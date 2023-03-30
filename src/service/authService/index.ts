import { conflictError } from "../../errors/conflictError";
import notFoundError from "../../errors/notFoundError";
import unauthorizedError from "../../errors/unauthorizedError";
import { bodyLogin, Bodyuser } from "../../protocols";
import authRepository from "../../repository/authRepository";
import bcrypt from "bcrypt";

async function signUpUser(body: Bodyuser) {
  const emailExist = await authRepository.findUserByEmail(body.email)
  if(emailExist){
    throw conflictError();
  }
  const postSignUp = await authRepository.signUpUser(body);
  if(!postSignUp){
    throw notFoundError();
  }

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

  return userExist;
}

const authService = {
  signUpUser,
  signIn,
};

export default authService;