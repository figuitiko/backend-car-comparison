import {Table} from 'flowbite-react';

interface Props{
  [key: string]: string | number
}

const TableRow = (props:Props) => {
  
  const keys = Object.keys(props);
   
  return (
    <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
      {
        keys.map((key) => {
          if(key !== 'id'){
            return (
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white" key={key}>
                {props[key]}
              </Table.Cell>
            )
          }
        } )        
      }     
    </Table.Row>
  )
}

export default TableRow