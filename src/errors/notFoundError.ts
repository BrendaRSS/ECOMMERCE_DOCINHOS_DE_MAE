import { ApplicationError } from "../protocols";

export default function notFoundError(): ApplicationError {
  return {
    name: 'NotFoundError',
    message: 'No result for this search!',
  };
}
