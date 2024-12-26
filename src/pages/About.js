import React from 'react';
import Navbar from '../components/Navbar';

const About = () => {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto text-center">
        <div className="relative h-28 bg-[#002642]">
          <h1 className="text-xl font-light text-[#f2f2f2] pt-6">
            Quem somos?
          </h1>
          <div className="absolute mt-4 left-1/2 transform -translate-x-1/2">
            <img
              src="logo-about-w-border.png"
              alt="Logo Produtos Testados"
              className="w-32 h-32 md:w-56 md:h-56"
            />
          </div>
        </div>
        <div className="mx-8 text-justify mb-8">
          <p className="text-md text-black max-w-2xl mx-auto pt-28">
            Somos uma página dedicada a oferecer recomendações de qualidade,
            identificando os melhores produtos em cada categoria com base na
            avaliação criteriosa dos próprios consumidores.
          </p>
          <p className="text-md text-black mt-4 max-w-2xl mx-auto">
            Nossa equipe analisa os itens mais bem avaliados, considerando
            também o volume de opiniões para garantir uma seleção confiável e
            relevante.
          </p>
          <p className="text-md text-black mt-4 max-w-2xl mx-auto">
            Assim, ajudamos nossos leitores a escolher com confiança e segurança
            as melhores opções de compra.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
