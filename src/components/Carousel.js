import React, { useEffect, useState } from 'react';

const ImageCarousel = () => {
  const slides = [
    {
      image: '/carousel-1.jpg',
      text: 'Confira os melhores aspirador robô de 2024.',
    },
    {
      image: '/carousel-2.jpg',
      text: 'Aspiradores versáteis escolhidos exclusivamente para você',
    },
    {
      image: '/carousel-3.jpg',
      text: 'Asssistente virtual que torna sua casa mais inteligente.',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Avança para o próximo slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Volta para o slide anterior
  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  // Altera os slides automaticamente
  useEffect(() => {
    const slideInterval = setInterval(nextSlide, 5000); // Altera a cada 3 segundos
    return () => clearInterval(slideInterval); // Limpa o intervalo
  }, []);

  return (
    <div className="relative w-full h-[430px] mx-auto overflow-hidden rounded-lg shadow-lg">
      {/* Imagem do slide atual */}
      <img
        src={slides[currentIndex].image}
        alt={`Slide ${currentIndex}`}
        className="w-full object-cover"
      />

      {/* Texto do slide */}
      <div className="absolute bottom-0 left-0 w-full text-white text-center p-4">
        <h1 className="text-[#f2f2f2] text-[32px] font-normal font-['Montserrat'] tracking-tight pl-2">
          {slides[currentIndex].text}
        </h1>
      </div>

      {/* Botão Anterior */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
      >
        ❮
      </button>

      {/* Botão Próximo */}
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
      >
        ❯
      </button>

      {/* Indicadores */}
      <div className="absolute bottom-4 flex justify-center w-full space-x-2">
        {slides.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-3 w-3 rounded-full cursor-pointer ${
              index === currentIndex ? 'bg-white' : 'bg-gray-400'
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;
