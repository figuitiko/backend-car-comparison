import { useState, useRef } from 'react';
import {  getDataFromHook } from './genericHooks';



interface Props{
  brand: string;
  model: string
}



const useGrid = ({brand, model}: Props) => {
  
  const brandRef = useRef(brand)
  const modelRef = useRef(model)
  const [dataSearch, setDataSearch] = useState<{brand: string, model: string}>({brand: 'Acura', model: 'ILX'});
  const resultFromHook = getDataFromHook('useKavak', {brand:brandRef.current, model: modelRef.current});
  
  if(!resultFromHook) return null;


  const { data, isLoading, isError } = resultFromHook;
  
  const [currentPage, setCurrentPage] = useState(1);  

  const handleBrandChange = (e: React.ChangeEvent<HTMLSelectElement>) => {    
    brandRef.current = e.target.value 
   }
   const handleModelChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
     modelRef.current = e.target.value
   }
   const handleSubmit = () => {
     
     const arg = {brand : brandRef.current, model: modelRef.current}
     setDataSearch(arg)
     
   }
   const handleOnPageChange = (page: number) => {
     setCurrentPage(page)
   }

   return {
      dataSearch,
      handleBrandChange,
      handleModelChange,
      handleSubmit,
      handleOnPageChange,      
      isLoading,
      isError,
      data,
      currentPage

   }
  
};

export default useGrid;