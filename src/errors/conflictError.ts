import { ApplicationError } from "../protocols"; 

export default function conflictError(): ApplicationError {
  return {
    name: 'ConflictError',
    message: 'email exist',
  };
}
