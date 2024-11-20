import React from "react";

const Newsletter = () => {
  return (
    <section className="bg-[#002642] text-white py-10 px-4">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
        <div className="w-[443px] h-[57px] relative">
          <div className="w-[443px] h-[57px] left-0 top-0 absolute bg-[#d9d9d9] rounded-lg border-2 border-[#ccff00]" />
          <div className="left-[27px] top-[19px] absolute text-[#111111]/70 text-base font-light font-['Roboto']">seu.email.aqui@newsletter.com</div>
        </div>

          <button className="bg-gray-200 text-blue-900 p-2 rounded-full ml-2 hover:bg-gray-300 transition">
            ➔
          </button>
        <div className="text-center md:text-right md:w-1/3">
          <h3 className="text-lg font-semibold">Assine nossa <span className="text-lime-400">newsletter</span> e faça a escolha certa, sempre.</h3>
          <p className="text-gray-400 text-sm">Receba as últimas análises e recomendações exclusivas!</p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
