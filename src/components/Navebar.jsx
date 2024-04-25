import React, {useState} from "react";
import { NavLink } from "react-router-dom";
import { IoMenu } from "react-icons/io5";
import { IoCloseSharp } from "react-icons/io5";

const Navebar = () => {
  const [menuOpen,setMenuOpen] = useState(false)
  return (
    <nav className=" md:flex items-center justify-between  p-4  text-lg sticky top-0 bg-[#151414] opacity-80 z-50" 
    data-aos="fade-down"
    data-aos-duration="1000"
    >
      <div className="flex  items-center ">
      <div className="text-5xl  font-bold border-b-2 border-[#f6cd19] p-2 ">M.B</div>
      <div className=" md:hidden menu absolute flex top-5 right-5 items-center  flex-col justify-between w-9 h-8 "  >
       
        <div className=" menu text-5xl   " onClick={()=> setMenuOpen(!menuOpen)}>
        {menuOpen?(<IoCloseSharp />):( <IoMenu />)}

      </div>
      </div>
        
       
       
        
        
      </div>

      <ul className= {menuOpen ? " text-center  md:flex gap-2 lg:gap-5 mt-8 md:mt-0 space-y-8 md:space-y-0 ": "hidden md:flex md:gap-5 "  }onClick={()=> setMenuOpen(!menuOpen)} 
                  >
      
        <li>
          <NavLink
            to="/"
            className=" p-2 px-2 rounded hover:bg-[#F9CC01] hover:text-black"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/experience"
            className="p-2 px-2 rounded hover:bg-[#F9CC01] hover:text-black"
          >
            Experience
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/project"
            className="p-2 px-2 rounded hover:bg-[#F9CC01] hover:text-black"
          >
            Projects
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/skills"
            className="p-2 px-2 rounded hover:bg-[#F9CC01] hover:text-black"
          >
            Skills
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className="p-2 px-2 rounded hover:bg-[#F9CC01] hover:text-black"
          >
            Contact
          </NavLink>
        </li>
      </ul>
     
    </nav>
  );
};

export default Navebar;
