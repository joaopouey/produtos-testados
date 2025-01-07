import React, { useEffect, useState } from 'react';

const Hero = () => {
  const [backgroundImage, setBackgroundImage] = useState(
    '/fundo_inicial_mobile.png'
  );

  // Atualiza o background com base no tamanho da tela
  useEffect(() => {
    const updateBackground = () => {
      if (window.innerWidth >= 640) {
        setBackgroundImage('/fundo_inicial.png'); // Imagem para telas maiores
      } else {
        setBackgroundImage('/fundo_inicial_mobile.png'); // Imagem para telas menores
      }
    };

    updateBackground(); // Atualiza ao carregar o componente

    // Adiciona um listener para redimensionamento da janela
    window.addEventListener('resize', updateBackground);

    // Remove o listener ao desmontar o componente
    return () => {
      window.removeEventListener('resize', updateBackground);
    };
  }, []);

  return (
    <div
      className="flex flex-col bg-cover bg-center h-[640px]"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="pt-32 lg:pl-16">
        {/* Título */}
        <h1 className="text-[#111111] font-normal font-['Montserrat'] text-2xl pt-60 sm:pt-60 ml-10 w-72 sm:text-4xl sm:w-[550px] sm:ml-20 md:ml-32">
          Opiniões que você <span className="font-medium">pode confiar</span>,
          escolhas que fazem a diferença.
        </h1>

        {/* Subtítulo */}
        <h3 className="w-72 mt-2 text-[#333333] text-[16px] font-light font-['Roboto'] ml-10 pt-2 pb-4 sm:w-[600px] sm:ml-20 md:ml-32">
          Nossos especialistas testam para você tomar a melhor decisão. Produtos
          de qualidade, sempre à prova.
        </h3>

        {/* Botão Produtos */}
        <a href="https://www.produtostestados.com.br/categorias">
          <button
            className="w-[164px] h-[49px] bg-cover bg-center rounded-lg pt-4 ml-10 sm:ml-20 md:ml-32"
            style={{
              backgroundImage: "url('/botao_ver_produtos.png')",
            }}
          ></button>
        </a>
      </div>
      {/* Estrelas decorativas */}
      <div className="absolute w-[110px] h-[26px] pl-[2px] pr-[2px] pt-[4px] mt-52 ml-8 sm:ml-[65%] gap-[2px] bg-[#d9d9d9]/40 rounded-[40px] shadow border border-[#002642] border-0.25 backdrop-blur-[15.40px] justify-start items-center inline-flex">
        <img
          src="/star_filled.png"
          alt="Estrela preenchida"
          className="w-[20px] h-[20px]"
        />
        <img
          src="/star_filled.png"
          alt="Estrela preenchida"
          className="w-[20px] h-[20px]"
        />
        <img
          src="/star_filled.png"
          alt="Estrela preenchida"
          className="w-[20px] h-[20px]"
        />
        <img
          src="/star_filled.png"
          alt="Estrela preenchida"
          className="w-[20px] h-[20px]"
        />
        <img
          src="/star_outfilled.png"
          alt="Estrela não preenchida"
          className="w-[14px] h-[14px] mb-[6px]"
        />
      </div>

      <div className="absolute w-[110px] h-[26px] pl-[2px] pr-[2px] pt-[4px] mt-80 ml-52 sm:ml-[50%] gap-[2px] bg-[#d9d9d9]/40 rounded-[40px] shadow border border-[#002642] border-0.25 backdrop-blur-[15.40px] justify-start items-center inline-flex">
        <img
          src="/star_filled.png"
          alt="Estrela preenchida"
          className="w-[20px] h-[20px]"
        />
        <img
          src="/star_filled.png"
          alt="Estrela preenchida"
          className="w-[20px] h-[20px]"
        />
        <img
          src="/star_filled.png"
          alt="Estrela preenchida"
          className="w-[20px] h-[20px]"
        />
        <img
          src="/star_outfilled.png"
          alt="Estrela não preenchida"
          className="w-[14px] h-[14px] mb-[6px]"
        />
        <img
          src="/star_outfilled.png"
          alt="Estrela não preenchida"
          className="w-[14px] h-[14px] mb-[6px]"
        />
      </div>
    </div>
  );
};

export default Hero;
