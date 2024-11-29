import { useSelector } from "react-redux";
import { useState } from "react";
import { NavbarMenu } from "../../../utils/data";
import { Bars3BottomRightIcon, XMarkIcon, UserCircleIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

function Navbar() {
  const [open, setOpen] = useState(false);

  // Obtendo o nome do usuário logado
  const user = useSelector((state) => state.user.user);

  return (
    <div className="shadow-md w-full fixed top-0 left-0 z-40">
      <nav className="bg-white flex justify-between items-center md:px-20 md:py-5 px-3 py-4 relative">
     
        <h2 className="font-bold text-2xl cursor-pointer flex items-center gap-1">
          Langa<span className="text-blue-500">Imoveis</span>
        </h2>

       
        {user?.nome && (
          <div className="hidden md:flex items-center gap-2">
            <UserCircleIcon className="w-7 h-7 text-gray-500" />
            <span className="text-gray-800 font-medium">Bem-vindo, {user.nome}!</span>
          </div>
        )}

     
        <div
          onClick={() => setOpen(!open)}
          className="absolute right-8 top-6 cursor-pointer md:hidden w-7 h-7"
        >
          {open ? (
            <XMarkIcon className="w-full text-gray-600" />
          ) : (
            <Bars3BottomRightIcon className="w-full text-gray-600" />
          )}
        </div>

        
        <ul
          className={`md:flex md:gap-x-2 md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-1/2 md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? "top-12" : "top-[-490px] rounded-md "
          }`}
        >
          {NavbarMenu.map((item) => (
            <li
              className="md:ml-8 md:my-0 my-7 font-semibold text-gray-800 hover:text-blue-500"
              key={item.id}
            >
              <a href={item.link} className="flex items-center gap-2">
                {item.title}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
