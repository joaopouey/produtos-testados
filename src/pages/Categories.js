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
  {
    name: 'Cadeiras Gamer',
    image: '/categorias/cadeira-gamer.png',
  },
  { name: 'Cafeteiras Elétricas', image: 'cafeteira-eletrica.png' },
  {
    name: 'Carrinhos (com bebê conforto)',
    image: 'carrinho-de-bebe-conforto.png',
  },
  { name: 'Fones Bluetooth', image: 'fone-bluetooth.png' },
  {
    name: 'Fritadeiras Elétricas (Airfryer)',
    image: 'fritadeira-eletrica.png',
  },
  { name: 'Liquidificadores', image: 'liquidificador.png' },
  { name: 'Purificadores de Água', image: 'purificador-de-agua.png' },
  { name: 'Robôs Aspiradores', image: 'robo-aspirador.png' },
];

const Categories = () => {
  return (
    <div>
      <Navbar />
      <ImageCarousel />
      <div className="flex flex-col px-[2%] sm:px-[20%] pb-14">
        <h1 className="text-8 text-center my-6 font-normal font-['Montserrat'] underline tracking-tight">
          Categorias: encontre os produtos mais bem avaliados aqui
        </h1>

        <div className="bg-[#002642] rounded-lg p-6">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {categories.map((category, index) => (
              <div key={index} className="text-center text-white">
                <img
                  src={category.image}
                  alt={category.name}
                  className=" object-cover rounded-lg "
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
