import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="relative flex items-center justify-between w-full top-0 h-24 sm:h-28 sm:px-16 2xl:px-72 bg-[#002642] border border-[#ccff00] text-white">
      {/* Logo */}
      <img
        className="absolute flex justify-self-center top-0 w-24 sm:w-36 pt-1.5 pl-1.5 ml-2"
        src="/logo_navbar.png"
        alt="Logo Produtos Testados"
      />

      {/* Menu Principal e Dropdown */}
      <div className="absolute flex flex-row mt-0space-y-4 sm:space-y-0 gap-4 text-sm right-4 items-center bg-transparent text-white shadow-lg p-0">
        <Link to="/" className="hover:text-gray-300">
          Início
        </Link>
        <Link to="/categorias" className="hover:text-gray-300">
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
