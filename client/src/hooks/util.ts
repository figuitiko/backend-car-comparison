import {  IUser, IUserLogin } from "./useLogin";
interface IValidator {
  [key: string]: string;
}

export const validators =(user: IUserLogin | IUser | IValidator) => {
  
  let isInValidEmail = false;
  let isInValidPassword = false;
  
  const { email, password } = user;
  isInValidPassword = (!!password && password.length < 6);
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  isInValidEmail = (!!email && !emailRegex.test(email));      
  
  
  
  return {    
    isInValidEmail,
    isInValidPassword,    
  }
}

export const userInitialState:IUser =  JSON.parse(localStorage.getItem('user') || '{}');

export const saveToLocalStorage = (key: string, value: string) => {
  window.localStorage.setItem(key, JSON.stringify(value));
};