import { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { ConnectKitButton } from "connectkit";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleNav = () => setIsOpen(!isOpen);

  const navItems = [
    { id: 1, text: "Asset", path: "/asset" },
    { id: 2, text: "Market", path: "/market" },
    { id: 3, text: "Oracle", path: "/oracle" },
  ];

  return (
    <div className="bg-black text-white">
      <div className="flex justify-between items-center py-6 px-4  ">

        {/* Logo and mobile menu toggle */}
        <div className="flex gap-4 md:items-center ">
        <button onClick={toggleNav} className="ml-4 md:hidden">
            {isOpen ? <AiOutlineClose size={28} /> : <AiOutlineMenu size={28} />}
          </button>
          <div className="flex gap-2 items-center">
          <img src="/logo.svg" alt="Logo" className="mr-3 w-8 h-8" />
          <h1 className="text-lg md:text-2xl font-extrabold bg-clip-text text-transparent bg-[linear-gradient(to_right,theme(colors.indigo.400),theme(colors.indigo.100),theme(colors.sky.400),theme(colors.fuchsia.400),theme(colors.sky.400),theme(colors.indigo.100),theme(colors.indigo.400))] bg-[length:200%_auto] animate-gradient">V2</h1>
          <ul className={`hidden md:flex  items-center space-x-4`}>
          {navItems.map((item) => (
            <Link key={item.id} to={item.path}>
              <li className="px-4 py-2 rounded-xl hover:bg-[#00df9a] hover:text-black transition-colors duration-300 cursor-pointer">
                {item.text}
              </li>
            </Link>
          ))}
          
        </ul>
          </div>
        </div>

        {/* Desktop Navigation */}
        {/* <ul className={`hidden md:flex items-center space-x-4`}>
          {navItems.map((item) => (
            <Link key={item.id} to={item.path}>
              <li className="px-4 py-2 rounded-xl hover:bg-[#00df9a] hover:text-black transition-colors duration-300 cursor-pointer">
                {item.text}
              </li>
            </Link>
          ))} */}
          <span><ConnectKitButton /></span>
        {/* </ul> */}

        {/* Mobile Navigation */}
        {isOpen && (
          <ul className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-95 flex flex-col items-center justify-center">
            {navItems.map((item) => (
              <Link key={item.id} to={item.path} onClick={toggleNav}>
                <li className="text-xl py-2 hover:bg-[#00df9a] hover:text-black transition duration-300 rounded cursor-pointer my-2">
                  {item.text}
                </li>
              </Link>
            ))}
          </ul>
        )}
        <span className="md:hidden">
        
        </span>
        
      </div>
    </div>
  );
};

export default Navbar;
