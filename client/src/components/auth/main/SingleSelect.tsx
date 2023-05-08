import React from 'react'
import {Select, Label} from 'flowbite-react'
interface Props {
  options: string[],
  handleSelectChange: (e: React.ChangeEvent<HTMLSelectElement>) => void
}

const SingleSelect = ({options, handleSelectChange}:Props) => {
  return (
    <div className='flex-1'>
      <div className="mb-2 block">
        <Label
          htmlFor="countries"
          value="Select your country"
        />
      </div>
      <Select
        id="countries"
        required={true}
        onChange={handleSelectChange}
      >
        <option>
          select an option
        </option>
        {
          options.map((option, index) => (
            <option key={index}>
              {option}
            </option>
          ))
        }        
      </Select>
    </div>
  )
}

export default SingleSelect