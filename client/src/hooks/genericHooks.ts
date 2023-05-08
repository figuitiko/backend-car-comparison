import {  CustomHookName, argsHooks, dataResult } from "../constants/types";
import useKavak from "./useKavak";


const hooks: CustomHookName[] = ['useKavak', 'useGrid', 'useCars'];

export const getDataFromHook =  ( hookName: string, args: argsHooks) : {data:dataResult, isLoading: boolean, isError: boolean}  => {
  const hook = hooks.find(hook => hook === hookName);
  if(hook){
    if(hook === hooks[0]){
      return useKavak(args as {brand: string, model: string})
    }
  }
 
  return useKavak(args as {brand: string, model: string})
}