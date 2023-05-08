import { Link } from "react-router-dom"
import { FaCarSide, FaCar, FaBitcoin } from "react-icons/fa";

const NavBar = () => {
  return (
    <nav>
      <ul className="flex flex-col text-white gap-6 text-lg">
        <li className="flex items-center gap-4"> 
        <FaBitcoin  />         
          <Link to='/dash'>Brands</Link>
        </li>
        <li className="flex items-center gap-4"> 
        <FaCarSide  />         
          <Link to='/dash/kavak'>Kavak</Link>
        </li>
        <li className="flex items-center gap-4">
          <FaCar />
          <Link to='/dash/cosmo'>Cosmo</Link>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar