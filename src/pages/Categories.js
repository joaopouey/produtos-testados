import React from 'react';
import Navbar from '../components/Navbar';

const categories = [
  {
    name: 'Aspiradores Verticais (com fio)',
    id: 'robos-aspiradores',
    image: 'aspirador-fio.jpg',
  },
  { name: 'Aspiradores Verticais (sem fio)', image: 'aspirador-sem-fio.jpg' },
  { name: 'Assistente Virtual (Alexa/Echo)', image: 'assistente-virtual.jpg' },
  { name: 'Cadeiras Gamer', image: 'cadeira-gamer.jpg' },
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
      <div className="container mx-auto py-10 px-4">
        <h1 className="text-3xl font-bold text-center mb-6">
          Categorias: encontre os produtos mais bem avaliados aqui
        </h1>

        <div className="bg-blue-900 rounded-lg p-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <div key={index} className="text-center text-white">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-40 object-cover rounded-lg mb-2"
                />
                <p>{category.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
