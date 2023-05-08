import { useNavigate } from 'react-router-dom';
import { FiArrowLeft } from "react-icons/fi";

const BackBtn = () => {
  const navigate = useNavigate();
  return (
    <div className='flex'>
      <button className="rounded-full bg-white text-black  w-[36px] h-[36px] flex justify-center items-center " 
        onClick = {() => navigate(-1)} >
        <FiArrowLeft />
      </button>
    </div>
  )
}

export default BackBtn