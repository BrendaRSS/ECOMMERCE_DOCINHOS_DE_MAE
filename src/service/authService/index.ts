import { conflictError } from "../../errors/conflictError";
import notFoundError from "../../errors/notFoundError";
import { Bodyuser } from "../../protocols";
import authRepository from "../../repository/authRepository";

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

const authService = {
  signUpUser,
};

export default authService;