import { FiMenu } from "react-icons/fi";
import { GrClose } from "react-icons/gr";
import { useState} from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [open, setOpen] = useState(false);
  const navitems = [
    {id:"01",name:"Home", link:"/"},
    {id:"02",name:"Services", link:"/service"},
    {id:"03",name:"Gallery", link:"/gallery"},
    {id:"04",name:"About Us", link:"/about"},
    {id:"05",name:"Contact US", link:"/contact"},
  ]
 
  return (
    /* Header */
    <header className='absolute w-full z-20 top-0 left-0 bg-pink-100'>
      {/* Container */}
      <div className=' flex relative items-center justify-between px-6 mx-auto p-4 '>
        {/* Left */}
        <div className='heading z-30'>
        Scelebration
        </div>
        <button className="md:hidden cursor-pointer z-10 text-2xl"  onClick={() => setOpen(!open)}>
          {open ? <GrClose /> : <FiMenu />}
        </button>

        {/* Center */}
        <nav className={`absolute  h-screen w-full bg-red-500 left-0 top-0 md:block md:static md:h-auto md:bg-transparent ${open ? "block" : "hidden"}`}>
          <ul className='flex items-center justify-center flex-col h-screen w-full  md:flex md:justify-center md:items-center md:flex-row md:w-auto md:h-auto  space-x-5'>
            {navitems.map((item) => (
              <Link to={item.link} key={item.id} className='navitems'>
              {item.name}
            </Link>
            ))}
           
          </ul>
        </nav>

        {/* Right */}
        <div className={` z-10 md:flex space-x-3 items-center ${open ? 'block absolute bottom-10 h-screen' : 'hidden'}`}>
          <ul className='flex space-x-2 items-center'>
            <Link to="/">
              <i className='text-gray-500 fa-brands fa-instagram text-lg   transition-all hover:text-red-900'></i>
            </Link>
            <Link to="/">
              <i className='text-gray-500 fa-brands fa-facebook text-lg   transition-all hover:text-red-900'></i>
            </Link>
            <Link to='/'>
              <i className='text-gray-500 fa-brands fa-twitter text-lg   transition-all hover:text-red-900 '></i>
            </Link>
            <Link to='/'>
              <i className='text-gray-500 fa-brands fa-pinterest text-lg  transition-all hover:text-red-900 '></i>
            </Link>
          </ul>
          {/* Mobile Menu Hamburger */}
          <div className='sm:hidden'>
            <span className='text-2xl'>|</span>
            <i className='fa-solid fa-bars text-2xl ml-4 hover:scale-110 transition-all hover:text-pink-900'></i>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
