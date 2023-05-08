import { Navigate } from 'react-router-dom';
import { useUser } from '../hooks/useUser';



interface Props{
  children: React.ReactNode
}

const ProtectedRoute = ({children}: Props) => {
  const user = useUser();    
  if(!user){
    console.log('ProtectedRoute go inside');
    return <Navigate to="/" />

  } 
  if(!Object.keys(user).length ) {
    console.log('ProtectedRoute go inside two');
    return <Navigate to="/" />
  }  
  
  return (
    <>
      {children}
    </>
  )
}

export default ProtectedRoute