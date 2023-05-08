import SingleSelect from "./SingleSelect"
import { Button } from "flowbite-react"
import TableData from './TableData'
import Loader from '../../common/Loader'
import PaginationTable from './PaginationTable'
import useGrid from '../../../hooks/useGrid'
const allBrands =[
  'Acura', 'Audi'
]
const allModels = [
  'A3', 'A4', 'ILX'
]

const dataPerPage = 5

const SelectBoxes = () => {  
  

  const {handleBrandChange, 
    handleModelChange, 
    handleSubmit, 
    handleOnPageChange, 
    isLoading, 
    isError, 
    data, 
    currentPage }= useGrid({brand: 'Acura', model: 'ILX'})

  const indexOfLastData = currentPage * dataPerPage;

  const indexOfFirstData = indexOfLastData - dataPerPage;

  const currentData =  data?.slice(indexOfFirstData, indexOfLastData);

  return (
    <div className="flex flex-col gap-4 my-4">
      <div className="flex gap-4 justify-center items-center">
        <SingleSelect options={allBrands} handleSelectChange={handleBrandChange} />
        <SingleSelect options={allModels} handleSelectChange={handleModelChange} />

      </div>
      <Button
        className="self-start "
        color="success"
        pill={true}
        onClick={handleSubmit}
      >
        Success
      </Button>
      {data && (data?.length > 0) && <TableData data={currentData} />}
      {isLoading && <Loader />}
      {isError && <p>there was an error </p>}
      {!isLoading && !isError && data.length === 0 && <p>There is not Data</p>}
      {
        data?.length > 0 && <PaginationTable currentPage={currentPage} totalPages={Math.ceil(data.length / dataPerPage)} onPageChange={handleOnPageChange} />
      }
      
    </div>
    
  )
}

export default SelectBoxes