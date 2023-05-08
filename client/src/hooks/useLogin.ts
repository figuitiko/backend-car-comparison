import {    
  useMutation,
  useQueryClient,   
} from '@tanstack/react-query';
import {  signInFetcher } from '../fetchers/user'
import {  useReducer } from 'react';
import { validators } from './util';
import { useNavigate } from 'react-router-dom';
import * as userLocalstorage from './user.localstorage';
import {QUERY_KEY} from '../constants/queryKeys'


export interface IUser{
  username: string;
  email: string;
  password: string;
  token: string;
}


export interface IUserLogin extends IUser {  
  isInValidEmail?: boolean;
  isInValidPassword?: boolean;
}
type TToken = string | null | undefined;
interface  IRsp {
  ok: boolean;
  data: {
    token: TToken;
    foundUser: IUser;
  };
}

export type FormState = IUserLogin;
const useLogin = () => {

  const navigate = useNavigate()
  const queryClient = useQueryClient()

  const [form, updateForm] = useReducer(({ ...state }, { ...newState }) => {
    let stateResult = { ...state, ...newState };
    const { isInValidEmail, isInValidPassword } = validators(stateResult);
     stateResult = { ...stateResult, isInValidEmail, isInValidPassword };
     return stateResult;
    
  }, { email: '', password: '', isInValidEmail: false, isInValidPassword: false })
  const userMutation  = useMutation( ({email, password}:Pick<IUser, 'email'| 'password'>) => signInFetcher({email, password}), {  
    
    onSuccess: (data: IRsp) => {
      
      const { token, foundUser } = data.data;
      const userToSave = {
        ...foundUser,
        token
      } as IUser;
      
      userLocalstorage.saveUser(userToSave);
      queryClient.setQueryData([QUERY_KEY.user], data);
      navigate('/dash');
    
    }
  })

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const {email, password} = form;
    userMutation.mutate({email, password});    
  }

  return {
    userMutation,
    form,
    updateForm,
    handleLogin
  }
}

export default useLogin