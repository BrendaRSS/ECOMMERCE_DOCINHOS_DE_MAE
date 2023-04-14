import { ApplicationError } from '../protocols';

export default function badRequestError(): ApplicationError {
  return {
    name: 'BadRequestError',
    message: 'Unable to process request.',
  };
}
