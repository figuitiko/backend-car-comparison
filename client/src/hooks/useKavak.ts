
import { useQuery } from "@tanstack/react-query";
import { QUERY_KEY } from "../constants/queryKeys";
import { IFetchData, getKavakResults } from "../fetchers/dash";
import { carsRaw } from "../constants/types";




const useKavak = (arg: IFetchData) => {  
  const { brand, model } = arg;
  const {isLoading, data, refetch, isError } = useQuery([QUERY_KEY.kavak, model, brand], ()=>getKavakResults(model, brand), {
    
    onError: () => {      
     console.log('error');
    }
  });
  
  
  const mappedData = data?.map((item:carsRaw) => {
    return {
      name: item.carName,      
      brand: item.brand,
      year: item.year,
      price: item.price,
      id: item['_id'],
    }
  })
  
  return {data: mappedData, isLoading, refetch, isError};
}

export	default	useKavak;