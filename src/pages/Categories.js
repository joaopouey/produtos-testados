import React from 'react';
import ImageCarousel from '../components/Carousel';
import Navbar from '../components/Navbar';

const categories = [
  {
    name: 'Aspiradores Verticais (com fio)',
    image: '/categorias/aspirador-vertical-com-fio.png',
  },
  {
    name: 'Aspiradores Verticais (sem fio)',
    image: '/categorias/aspirador-vertical-sem-fio.png',
  },
  {
    name: 'Assistente Virtual (Alexa/Echo)',
    image: '/categorias/assistente-virtual.png',
  },
  { name: 'Cadeiras Gamer', image: '/categorias/cadeira-gamer.png' },
  { name: 'Cafeteiras Elétricas', image: 'cafeteira.jpg' },
  { name: 'Carrinhos (com bebê conforto)', image: 'carrinho-bebe.jpg' },
  { name: 'Fones Bluetooth', image: 'fones-bluetooth.jpg' },
  { name: 'Fritadeiras Elétricas (Airfryer)', image: 'fritadeira.jpg' },
  { name: 'Liquidificadores', image: 'liquidificador.jpg' },
  { name: 'Purificadores de Água', image: 'purificador.jpg' },
  { name: 'Robôs Aspiradores', image: 'robo-aspirador.jpg' },
];

const Categories = () => {
  return (
    <div>
      <Navbar />
      <ImageCarousel />
      <div className="container mx-auto py-8 px-4">
        <h1 className="text-8 text-center mb-6 font-normal font-['Montserrat'] underline tracking-tight">
          Categorias: encontre os produtos mais bem avaliados aqui
        </h1>

        <div className="bg-[#002642] rounded-lg p-6">
          <div className="grid grid-cols-2 gap-2">
            {categories.map((category, index) => (
              <div key={index} className="text-center text-white">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-52 object-cover rounded-lg "
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
