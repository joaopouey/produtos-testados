import React from "react";

const Newsletter = () => {
  return (
    <section className="bg-[#002642] text-white py-10 px-4 m-[30px] rounded-[30px]">
      <div className="container mx-auto flex flex-col md:flex-row items-center space-y-4 md:space-y-0">
        {/* Input e botão */}
        <div className="flex items-center w-[443px] h-[57px] bg-gray-200 border-2 border-[#ccff00] rounded-lg px-4 py-2">
          <input 
            type="email" 
            placeholder="seu.email.aqui@newsletter.com" 
            className="flex-grow bg-transparent outline-none text-gray-700 placeholder-gray-500 rounded-lg"
          />
          <button className="flex items-center justify-center rounded-full h-[24px] w-[24px]">
            <img src="botao_newsletter.png" alt="Enviar" className="h-6 w-6"/>
          </button>
        </div>

        {/* Texto da newsletter */}
        <div className="ml-[5%]">
          <span className="text-[#f2f2f2] text-2xl font-light font-['Montserrat'] tracking-tight">
            Assine nossa
          </span>{' '}
          <span className="text-[#f2f2f2] text-2xl font-medium font-['Montserrat'] tracking-tight">
            newsletter
          </span>{' '}
          <span className="text-[#f2f2f2] text-2xl font-light font-['Montserrat'] tracking-tight">
            e faça a escolha certa, sempre.
          </span>
          <p className="text-gray-400 text-sm">
            Receba as últimas análises e recomendações exclusivas!
          </p>
        </div>
      </div>
    </section>
  );
};



export default Newsletter;
