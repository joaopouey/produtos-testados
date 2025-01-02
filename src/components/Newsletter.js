import React from 'react';

const Newsletter = () => {
  return (
    <section className="flex bg-[#002642] text-white py-8 md:py-0  px-4 m-4 mt-8 rounded-[30px] flex-col md:flex-row md:h-28 md:justify-center">
      {/* grid 1 - Input e botão */}
      <div className="flex w-[100%] md:w-96 h-14 bg-gray-200 border-2 border-[#ccff00] rounded-lg px-4 py-2 md:mt-7 lg:mx-[7%]">
        <input
          type="email"
          placeholder="seu.email.aqui@newsletter.com"
          className="flex-grow bg-transparent outline-none text-gray-700 placeholder-gray-500 rounded-lg"
        />
        <button>
          <img src="/botao_newsletter.png" alt="Enviar" className="h-6 w-6" />
        </button>
      </div>

      {/* grid 2 - Texto da newsletter */}
      <div className="flex flex-col mt-4 w-[100%] md:w-96 lg:w-[600px] sm:mt-4 sm:ml-8 md:mt-2 lg:mt-6">
        <span className="text-[#f2f2f2] text-xl font-light font-['Montserrat'] tracking-tight">
          Assine nossa newsletter e faça a escolha certa sempre.
        </span>{' '}
        <p className="text-gray-400 text-xs mt-2">
          Receba as últimas análises e recomendações exclusivas!
        </p>
      </div>
    </section>
  );
};

export default Newsletter;
