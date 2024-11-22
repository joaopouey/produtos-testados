import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-600 py-6 px-4">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          Copyright © 2024 produtostestados.com.br | Todos os direitos
          reservados.
        </p>
        <p className="text-xs mt-2">
          Como participantes do Programa de Associados da Amazon, ganhamos
          comissões por compras feitas pelos links em nosso site.
        </p>
        <div className="flex justify-center space-x-4 mt-4 text-sm">
          <Link to="/politica-de-privacidade" className="hover:underline">
            Política de privacidade
          </Link>
          <span>|</span>
          <a href="#programa-de-associados" className="hover:underline">
            Programa de Associados Amazon
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
