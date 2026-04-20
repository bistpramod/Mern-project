import z from "zod";

export interface IUsername {
  username: string;
}

export interface ICredentials extends IUsername {
  password: string;
}

export interface IResetPassword {
  password: string, 
  confirmPassword: string
}


export const LoginSchema = z.object({
  // username: z.email("Incorrect Email format").nonempty().nonoptional(),
  username: z.string().nonempty().nonoptional(),
  password: z.string().nonempty("Password is Required").nonoptional(),
});


export interface IUserDetail {
  id: number | string;
  firstName: string;
  lastName: string;
  maidenName: string;
  age: number;
  gender: string;
  email: string;
  phone: string;
  username: string;
  birthDate: string;
  image: string;
  address: {
    address: string;
    city: string,
    state: string,
    stateCode: string,
    postalCode: string,
    coordinates: {
      lat: number;
      lng: number;
    };
    country: string;
  };
  role: string;
}