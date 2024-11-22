import React from "react";
import { Link } from "react-router-dom";


const Navbar = () => {
  return (
    <header className="w-full h-[108px] left-0 top-0 absolute bg-[#002642] border border-[#ccff00] text-white p-4">
      <div className="container mx-auto flex items-center justify-between">
      <img class="w-[219.05px] h-[74px] left-[184.16px] top-[17px]" src="/logo_navbar.png" alt="Logo Produtos Testados" />
        <nav className="space-x-6">
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
    </header>
  );
};

export default Navbar;
