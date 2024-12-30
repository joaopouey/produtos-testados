import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between w-full top-0 h-24 sm:h-28 sm:px-16 2xl:px-72 bg-[#002642] border border-[#ccff00] text-white">
      {/* Logo */}
      <img
        className="flex w-36 pt-1.5 pl-1.5 ml-2 sm:w-44"
        src="/logo_navbar.png"
        alt="Logo Produtos Testados"
      />

      {/* Botão de hamburguer para telas pequenas */}
      <button
        className="block pr-1.5 sm:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-7 w-7"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16m-7 6h7"
          />
        </svg>
      </button>

      {/* Menu Principal e Dropdown */}
      <div
        className={`${
          isOpen ? 'flex' : 'hidden'
        } absolute sm:static sm:flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 items-start sm:items-center bg-white sm:bg-transparent text-black sm:text-white shadow-lg sm:shadow-none p-4 sm:p-0 rounded-lg sm:rounded-none`}
      >
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
