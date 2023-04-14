export type ApplicationError = {
  name: string;
  message: string;
};

export type Bodyuser = {
  name: string;
  birthday: string;
  email: string;
  password: string;
};

export type BodyLogin = {
  email: string;
  password: string
};

export type Product = {
  name: string,
  cakeDoughtId: number ,
  cakeFillingId: number,
  sizeId: number,
  price: number,
  description: string,
  image: string,
}
