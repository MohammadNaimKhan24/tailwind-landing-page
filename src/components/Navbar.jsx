import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
const Navbar = () => {
  const [nav, setNav] = useState(true);
  const handleNav = () => {
    setNav(!nav);
  }

  return (
    <div className="text-white flex justify-between items-center max-w-[1240px] h-24 mx-auto px-4">
      <h1 className="text-[#00df0a] text-3xl font-bold w-full">REACT.</h1>
      <ul className="hidden md:flex">
        <li className="p-4">Home</li>
        <li className="p-4">Company</li>
        <li className="p-4">Resources</li>
        <li className="p-4">About</li>
        <li className="p-4">Contact</li>
      </ul>
      <div onClick={handleNav} className="md:hidden">
        {!nav ? <AiOutlineClose size={20} />: <AiOutlineMenu size={20}/>}
      </div>
      <div className={!nav ? "fixed top-0 left-0 w-[50%] h-full border-r border-r-gray-900 ease-in-out duration-500" : "hidden"}>
        <ul className="pt-24 uppercase">
        <li className="p-4 border-b border-gray-600">Home</li>
        <li className="p-4 border-b border-gray-600">Company</li>
        <li className="p-4 border-b border-gray-600">Resources</li>
        <li className="p-4 border-b border-gray-600">About</li>
        <li className="p-4 border-b border-gray-600">Contact</li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar;