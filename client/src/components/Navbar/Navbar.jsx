import { useSelector } from "react-redux";
import { useState } from "react";
import { NavbarMenu } from "../../../utils/data";
import { Bars3BottomRightIcon, XMarkIcon, UserCircleIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
import { motion } from "framer-motion"; 

function Navbar() {
  const [open, setOpen] = useState(false);

 
  const user = useSelector((state) => state.user.user);

  return (
    <div className="shadow-md w-full fixed top-0 left-0 z-50 bg-white">
      <nav className="flex justify-between items-center px-5 py-4 md:px-20 md:py-5 relative">
      
        <h2 className="font-bold text-2xl cursor-pointer flex items-center gap-1">
          Langa<span className="text-blue-500">Imóveis</span>
        </h2>

        <div
          onClick={() => setOpen(!open)}
          className="absolute right-5 top-4 cursor-pointer md:hidden w-7 h-7"
        >
          {open ? (
            <XMarkIcon className="w-full text-gray-600" />
          ) : (
            <Bars3BottomRightIcon className="w-full text-gray-600" />
          )}
        </div>

        <motion.ul
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: open ? 1 : 0, y: open ? 0 : -20 }} 
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className={`flex flex-col md:flex-row gap-5 md:gap-8 absolute md:static top-16 md:top-auto left-0 w-full md:w-auto bg-white md:bg-transparent z-40 p-5 md:p-0 md:items-center transition-all duration-300 ease-in-out ${
            open ? "block" : "hidden"
          }`}
        >
          {NavbarMenu.map((item) => (
            <motion.li
              key={item.id}
              className="font-semibold text-gray-800 hover:text-blue-500"
              whileHover={{ scale: 1.1 }}>
              <Link to={item.link}>{item.title}</Link>
            </motion.li>
          ))}
        </motion.ul>

        
        <div className="flex items-center gap-3 md:static absolute top-4 right-16 md:right-0">
          {user ? (
            <Link to={'/login'} className="flex items-center gap-2">
              <UserCircleIcon className="w-8 h-8 text-blue-500" />
              <span className="font-semibold text-gray-800 hidden md:block">{user.name}</span>
            </Link>
          ) : (
            <Link
              to="/login"
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
            >
              Login
            </Link>
          )}
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
