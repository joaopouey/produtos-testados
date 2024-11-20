import React from "react";
import { useParams } from "react-router-dom";

const productTypesData = {
  "robos-aspiradores": {
    title: "Robôs Aspiradores",
    description: "Encontre os melhores robôs aspiradores de 2024, escolhidos com base nas avaliações de especialistas.",
    products: [
      {
        rank: "TOP 1",
        name: "Robô aspirador de pó ULTRA",
        description: "Robô aspirador de alta eficiência e baixa manutenção para uma limpeza automática em sua casa.",
        image: "robo-aspirador-ultra.jpg",
      },
      {
        rank: "TOP 2",
        name: "Robô aspirador de pó RoboRock Q7 Max",
        description: "Robô aspirador com mop integrado, ideal para limpeza úmida e seca.",
        image: "robo-aspirador-max.jpg",
      },
      {
        rank: "TOP 3",
        name: "Robô Aspirador de Pó Electrolux Ergo",
        description: "Robô aspirador compacto e silencioso, ideal para apartamentos.",
        image: "robo-aspirador-electrolux.jpg",
      },
    ],
  },
  // Outras categorias podem ser adicionadas aqui no mesmo formato
};

const ProductType = () => {
  const { typeId } = useParams();
  const productType = productTypesData[typeId];

  if (!productType) {
    return <p>Tipo de produto não encontrado</p>;
  }

  return (
    <div className="container mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold text-center mb-6">{productType.title}</h1>
      <p className="text-center text-gray-700 mb-8 max-w-2xl mx-auto">{productType.description}</p>

      <div className="bg-blue-100 rounded-lg p-8">
        {productType.products.map((product, index) => (
          <div key={index} className="flex flex-col md:flex-row items-center bg-white shadow-md rounded-lg mb-6 p-4 md:p-6">
            <div className="w-24 h-24 md:w-32 md:h-32 flex-shrink-0 mb-4 md:mb-0">
              <img src={product.image} alt={product.name} className="w-full h-full object-cover rounded-lg" />
            </div>
            <div className="md:ml-6 text-center md:text-left">
              <p className="text-xl font-semibold text-blue-900 mb-2">{product.rank}</p>
              <p className="text-lg font-bold mb-2">{product.name}</p>
              <p className="text-gray-700 mb-4">{product.description}</p>
              <button className="bg-blue-900 text-white font-bold py-2 px-6 rounded-full hover:bg-blue-800 transition duration-300">
                Ver detalhes
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductType;
