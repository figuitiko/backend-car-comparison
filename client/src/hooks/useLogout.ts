import { useQueryClient } from '@tanstack/react-query';
import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { QUERY_KEY } from '../constants/queryKeys';


type IUseLogout = () => void

export function useLogout(): IUseLogout {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const onLogout = useCallback(() => {
    queryClient.setQueryData([QUERY_KEY.user], null);
    navigate('/');
  }, [navigate, queryClient])

  return onLogout

}