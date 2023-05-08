import {Pagination} from 'flowbite-react';
interface Props{
  currentPage: number,
  totalPages: number,
  onPageChange: (page: number) => void
}


const PaginationTable = ({currentPage, totalPages, onPageChange}: Props) => {
  return (
    <Pagination
    currentPage={currentPage}
    totalPages={totalPages}
    onPageChange={onPageChange}
  />
  )
}

export default PaginationTable