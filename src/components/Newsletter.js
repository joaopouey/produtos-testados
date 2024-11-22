import React from "react";

const Newsletter = () => {
  return (
    <section className="bg-[#002642] text-white py-10 px-4 m-[30px] rounded-[30px]">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
      <div class="flex items-center w-[443px] h-[57px] bg-[#d9d9d9] border-2 border-[#ccff00] bg-gray-200 rounded-lg px-4 py-2 w-full max-w-md">
      <input 
        type="email" 
        placeholder="seu.email.aqui@newsletter.com" 
        class="flex-grow  bg-transparent outline-none text-gray-700 placeholder-gray-500 rounded-lg"
      />
      <button class="flex items-center justify-center rounded-full h-[24px] w-[24px]">
        <img src="botao_newsletter.png" alt="Enviar" class="h-6 w-6"/>
      </button>
      </div>
        <div className="text-center md:text-right md:w-1/3">
          <h3 className="text-lg font-semibold">Assine nossa <span className="text-lime-400">newsletter</span> e faça a escolha certa, sempre.</h3>
          <p className="text-gray-400 text-sm">Receba as últimas análises e recomendações exclusivas!</p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
