import {Spinner} from 'flowbite-react'

const Loader = () => {
  return (
    <div className="flex justify-center items-center w-screen h-screen z-10 fixed">
      <Spinner aria-label="Default status example" />
    </div>
  )
}

export default Loader