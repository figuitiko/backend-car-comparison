import React from 'react'
import {Table} from 'flowbite-react';
import TableRow from './TableRow';

interface objectProps {
[key: string]: string | number
}
interface Props{
  data: objectProps[]
}

const TableData = ({data}:Props) => {
  console.log({data})
  return (
  <Table striped={true}>
  <Table.Head>
    {
      Object.keys(data[0]).map((key) => {
        if(key !== 'id'){
          return (
            <Table.HeadCell key={key}>
              {key}
            </Table.HeadCell>
          )
        }

      }       
      )
    }
    
  </Table.Head>
  <Table.Body className="divide-y">
    {      
      data.map((item) => (
        <TableRow  {...item} key={item['id']} />
      ))
    }
  </Table.Body>
</Table>
  )
}

export default TableData