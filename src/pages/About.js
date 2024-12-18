import React from 'react';
import Navbar from '../components/Navbar';

const About = () => {
  return (
    <div>
      <Navbar />

      <div className="container mx-auto py-10 px-4 text-center">
        <h1 className="text-3xl font-bold mb-6">Quem somos?</h1>

        <div className="flex justify-center mb-6">
          <img
            src="logo.png" // Substitua com o caminho real do logo se necessário
            alt="Logo Produtos Testados"
            className="w-40 h-40 md:w-56 md:h-56"
          />
        </div>

        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          Somos uma página dedicada a oferecer recomendações de qualidade,
          identificando os melhores produtos em cada categoria com base na
          avaliação criteriosa dos próprios consumidores.
        </p>
        <p className="text-lg text-gray-700 mt-4 max-w-2xl mx-auto">
          Nossa equipe analisa os itens mais bem avaliados, considerando também
          o volume de opiniões para garantir uma seleção confiável e relevante.
        </p>
        <p className="text-lg text-gray-700 mt-4 max-w-2xl mx-auto">
          Assim, ajudamos nossos leitores a escolher com confiança e segurança
          as melhores opções de compra.
        </p>
      </div>
    </div>
  );
};

export default About;
