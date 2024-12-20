import React from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import categories_data from '../data/categories_data';

const ProductType = () => {
  // Captura o parametro "id" da URL
  const { typeId } = useParams();

  // Converte o ID capturado em um Int e busca a categoria correspondente
  const category = categories_data.find(
    (cat) => cat.id === parseInt(typeId, 10)
  );

  // Verifca se a categoria existe
  if (!category) {
    return (
      <div>
        <Navbar />
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
          <h1 className="text-3xl font-bold">Categoria não encontrada</h1>
          <p className="text-lg text-gray-700">Por favor, tente novamente.</p>
        </div>
      </div>
    );
  }

  // Renderiza os dados da categoria encontrada
  return (
    <div>
      <Navbar />
      <div className="flex flex-col items-center min-h-screen bg-gray-100">
        <img
          src="/capa-produtos/robo-aspirador.png"
          alt="Robô Aspirador"
          className="w-full h-136 object-cover "
        />
        <div className="relative grid grid-cols-2 bg-[#002642] w-[350px] h-40 rounded-lg mt-4">
          <div className="flex flex-col justify-center pl-7">
            <p className="text-[#CCFF00] text-2xl font-['Montserrat'] font-bold text-center">
              TOP 1
            </p>
            <p className="text-white text-md font-['Montserrat'] font-medium text-center">
              Avaliação. 9,9
            </p>
            <p className="text-white text-sm font-['Montserrat'] font-normal text-center mt-4">
              Robô aspirador de pó XIAOMI Mop2
            </p>
          </div>
          <div className="absolute h-40 w-36 right-0 rounded-r-lg bg-white flex justify-center items-center">
            <img
              src="/foto-produtos/robo-1-xiaomi-mop2.jpg"
              alt="Robô Aspirador"
              className="h-32 right-0"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductType;
