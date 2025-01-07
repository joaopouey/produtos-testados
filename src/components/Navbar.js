import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="relative flex items-center w-full gap-4 h-24 md:h-28 bg-[#002642] border border-[#ccff00] text-white">
      {/* Logo */}
      <Link
        to="/"
        className="absolute flex w-36 sm:w-44 ml-6 sm:ml-8 lg:ml-32 xl:ml-44"
      >
        <img src="/logo_navbar.png" alt="Logo Produtos Testados" />
      </Link>
      {/* Menu Principal e Dropdown */}
      <div className="absolute flex flex-col sm:flex-row gap-2 sm:gap-4 text-sm right-6 md:right-8 lg:right-32 xl:right-44 items-end bg-transparent text-white shadow-lg p-0">
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
