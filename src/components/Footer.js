import React from 'react';

const Footer = () => {
  return (
    <div className="w-full h-[0px] left-0 top-0 opacity-75 border border-[#002642]/50">
      <div className="ml-4 mb-4">
        <div className="left-[126px] top-[15px] mt-2 align-left text-[#333333]/80 text-xs font-light font-['Roboto']">
          Copyright © 2024 produtostestados.com.br | Todos os direitos
          reservados.
        </div>
        <div className="w-flex left-[127px] mt-2 align-left text-black text-xs font-light font-['Roboto']">
          Como participantes do Programa de Associados da Amazon, ganhamos
          comissões por compras feitas pelos links em nosso site.
        </div>
        <div className="flex mt-2">
          <div className="left-[127px] top-[65px] align-left text-black text-xs font-light font-['Roboto'] underline">
            Política de privacidade
          </div>
          <div className="left-[261px] top-[65px] ml-1 text-center text-black text-xs font-light font-['Roboto']">
            |
          </div>
          <div className="left-[279px] top-[65px] ml-1 text-black text-xs font-light font-['Roboto'] underline">
            Programa de Associados Amazon
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
