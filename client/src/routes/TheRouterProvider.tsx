import {Route, Routes, useNavigate, useLocation} from 'react-router-dom';
import Home from '../screens/public/Home';
import DashBoard from '../screens/auth/DashBoard';
import ProtectedRoute from './ProtectedRoute';
import { useUser } from '../hooks/useUser';
import { useEffect } from 'react';
import Kavak from '../screens/auth/Kavak';
import AutoCosmo from '../screens/auth/AutoCosmo';
import Brand from '../screens/auth/Brand';

const TheRouterProvider = () => {
  const user = useUser();
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {    
    if (user) {
      if(location.pathname !== '/'){
        navigate(location.pathname);
      }else{
        navigate('/dash');
      }
    } else {
      navigate('/');
    }
  }, [user]);
  return (
    <Routes>
      <Route index element={<Home />} />      
      <Route path="/" element={<Home />} />      
      <Route path='dash' element={
        <ProtectedRoute>
          <DashBoard />
        </ProtectedRoute>
      } >
        <Route index element={<Brand />} />
        <Route path='kavak' element={<Kavak />} />
        <Route path='cosmo'  element={<AutoCosmo />} />
        <Route path='brand'  element={<Brand />} />
        
      </Route>
    </Routes>
  )
}

export default TheRouterProvider