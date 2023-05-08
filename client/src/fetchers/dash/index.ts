import axios from "axios";

const baseUrl = import.meta.env.VITE_BASE_URL_API;
export interface IFetchData {
  brand: string;
  model: string;
}

export const getKavakResults = async (model:string, brand:string) => {
  console.log('getKavakResults', model, brand);
  // const { brand, model } = arg;
  const url = `${baseUrl}/api/kavak?mark=${brand}&model=${model}`;
  const response = await axios.get(url);  
  const data = await response.data.data;
  return data;
}