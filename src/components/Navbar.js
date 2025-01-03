import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="relative flex items-center justify-between w-full top-0 h-24 sm:h-28 sm:px-16 bg-[#002642] border border-[#ccff00] text-white">
      {/* Logo */}
      <Link
        to="/"
        className="absolute flex justify-self-center w-28 sm:w-36 pt-1.5 pl-1.5 ml-2"
      >
        <img src="/logo_navbar.png" alt="Logo Produtos Testados" />
      </Link>
      {/* Menu Principal e Dropdown */}
      <div className="absolute flex flex-row mt-0 space-y-4 sm:space-y-0 gap-4 text-sm right-16 items-center bg-transparent text-white shadow-lg p-0">
        <Link to="/categorias" className="mt-4 sm:mt-0 hover:text-gray-300">
          Categorias
        </Link>
        <Link to="/sobre" className="hover:text-gray-300">
          Quem somos?
        </Link>
        <Link to="/contato" className="hover:text-gray-300">
          Contato
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
