import {  
   useQuery,  
} from '@tanstack/react-query';
import { getUser } from '../fetchers/user'
import { useNavigate } from 'react-router-dom';
import {QUERY_KEY} from '../constants/queryKeys'
import * as userLocalstorage from './user.localstorage';
import { IUser } from './useLogin';


export function useUser(): IUser {
  const navigate = useNavigate();

  const initialUser: IUser| null | undefined = userLocalstorage.getUser();
  
 
  const { data } = useQuery([QUERY_KEY.user], async () => getUser(initialUser), {
    
    onError: () => {      
      userLocalstorage.removeUser();
      navigate('/');
    }
  });  

  const user = data?.data;

  return user as IUser;  
}