import React from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Newsletter from '../components/Newsletter';

const About = () => {
  return (
    <div>
      <Navbar />
      <div className='container text-center'>
        <div className='w-screen h-28 bg-[#002642]'>
          <h1 className='text-xl font-light text-[#f2f2f2] pt-6'>
            Quem somos?
          </h1>
        </div>
        <div className='absolute left-1/2 top-44 transform -translate-x-1/2'>
          <img
            src='/diversas/logo-about-w-border.png'
            alt='Logo Produtos Testados'
            className='w-32 h-32 md:w-56 md:h-56'
          />
        </div>
      </div>
      <div className='text-justify justify-self-center text-black mx-8 mb-8 md:pt-32 md:text-xl lg:text-2xl lg:w-[1024px]'>
        <p className='pt-28'>
          Somos uma página dedicada a oferecer recomendações de qualidade,
          identificando os melhores produtos em cada categoria com base na
          avaliação criteriosa dos próprios consumidores.
        </p>
        <p className='mt-4'>
          Nossa equipe analisa os itens mais bem avaliados, considerando também
          o volume de opiniões para garantir uma seleção confiável e relevante.
        </p>
        <p className='mt-4'>
          Assim, ajudamos nossos leitores a escolher com confiança e segurança
          as melhores opções de compra.
        </p>
      </div>
      <Newsletter />
      <Footer />
    </div>
  );
};

export default About;
