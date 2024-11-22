import React from 'react';

const Hero = () => {
  return (
    // Imagem de fundo
    <section
      className="w-auto h-[615px] flex flex-col justify-center text-white bg-cover bg-center mt-[108px]"
      style={{
        backgroundImage: "url('/fundo_inicial.png')",
      }}
    >
      <div className="w-[528px] h-[207px] ml-[15%] flex-col  items-start gap-6 ">
        <h1 className="text-[#111111] text-[32px] font-normal font-['Montserrat']">
          Opiniões que você <span className="font-medium">pode confiar</span>,
          escolhas que fazem a diferença.
        </h1>
        <h3 className="w-[389px] mt-2 text-[#333333] text-[16px] font-light font-['Roboto']">
          Nossos especialistas testam para você tomar a melhor decisão. Produtos
          de qualidade, sempre à prova.
        </h3>
        <button
          className="w-[164px] h-[49px] bg-cover bg-center rounded-lg mt-4"
          style={{
            backgroundImage: "url('/botao_ver_produtos.png')",
          }}
        >
          <span className="sr-only">Clique Aqui</span>{' '}
          {/* Texto oculto para acessibilidade */}
        </button>
      </div>
    </section>
  );
};

export default Hero;
