import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full h-[108px] left-0 top-0 absolute bg-[#002642] border border-[#ccff00] text-white pt-4 pl-8 pr-8">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <img
          className="w-[219.05px] h-[74px] left-[184.16px] top-[17px]"
          src="/logo_navbar.png"
          alt="Logo Produtos Testados"
        />

        {/* Botão de hamburguer para telas pequenas */}
        <button
          className="block md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          // Alterna o estado do menu dropdown
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
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

        {/* Menu Principal (visível em telas médias ou maiores) */}
        <nav className="hidden md:flex space-x-6">
          <Link to="/home" className="hover:text-gray-300">
            Início
          </Link>
          <Link to="/categories" className="hover:text-gray-300">
            Categorias
          </Link>
          <Link to="/about" className="hover:text-gray-300">
            Quem somos?
          </Link>
          <Link to="/contact" className="hover:text-gray-300">
            Contato
          </Link>
        </nav>
      </div>

      {/* Dropdown Menu (visível apenas em telas pequenas e quando aberto) */}
      {isOpen && ( // Renderiza o menu dropdown apenas se isOpen for true
        <nav className="absolute right-1 flex flex-col items-start space-y-4 mt-4 w-48 md:hidden bg-white text-black shadow-lg p-4 rounded-lg">
          <Link to="/home" className="hover:text-gray-300">
            Início
          </Link>
          <Link to="/categories" className="hover:text-gray-300">
            Categorias
          </Link>
          <Link to="/about" className="hover:text-gray-300">
            Quem somos?
          </Link>
          <Link to="/contact" className="hover:text-gray-300">
            Contato
          </Link>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
