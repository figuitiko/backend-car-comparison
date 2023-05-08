import { IUser } from "../hooks/useLogin";

export interface carsRaw {
  _id:     ID;
  brand:   string;
  model:   string;
  year:    string;
  price:   string;
  carName: string;
  __v:     number;
}

export interface ID {
  $oid: string;
}

export type brandModel = {
  brand: string;
  model: string;
}
export  type ReturnKavak = {
  isLoading: boolean;
  isError: boolean;
  data: carsRaw[];
}
export type argsHooks = brandModel | null;
interface IKavak {
  data: carsRaw[];
}

export type dataResult = IKavak | IUser


 export type CustomHookName = 'useKavak'| 'useGrid' | 'useCars' ;

export type CustomHookArgs<T extends CustomHookName> =
  T extends 'useKavak' ? [initialValue: brandModel] : 
  never;

export type CustomHookReturn<T extends CustomHookName> =
  T extends 'useKavak' ? ReturnKavak :  
  never;




  