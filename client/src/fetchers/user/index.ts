import axios from "axios"
import { IUser } from "../../hooks/useLogin";


const baseUrl = import.meta.env.VITE_BASE_URL_API;
console.log('baseUrl', baseUrl)
export const signInFetcher= async ({email, password}: Pick<IUser, 'email'| 'password'>) => {
  

  try {
    const response = await axios.post(`${baseUrl}/api/login`,
    { email, password }, {
      headers: {
        'Content-Type': 'application/json'
      }
  })
  return  response.data;
  } catch (error) {
    console.log(error);
  }
}

export const getUser = async (user:IUser | null | undefined) => {

  try {
    if(!user) return {}
    console.log('user', user)
    const response = await axios.get(`${baseUrl}/api/user/${user.email}`, {
      headers: {
        'Content-Type': 'application/json',
        'x-access-token': user.token
      }
    })
    return response.data;
  } catch (error) {
    console.log(error);
  }
}