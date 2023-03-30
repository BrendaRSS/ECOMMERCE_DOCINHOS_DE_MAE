import { ApplicationError } from '../protocols';

export default function unauthorizedError(): ApplicationError {
  return {
    name: 'UnauthorizedError',
    message: 'You must be signed in to continue',
  };
}
