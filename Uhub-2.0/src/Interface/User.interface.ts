export interface IUserFormValue {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
}

export interface IUser {
  firstname: string;
  lastname: string;
  email: string;
  __v?: string;
  token: string;
}

export interface IUserFormLoginValue {
  email: string;
  password: string;
}

export interface IUserRegisterData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  acceptTerms: boolean;
}
