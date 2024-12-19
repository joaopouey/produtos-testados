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
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <h1 className="text-3xl font-bold mb-4">{category.name}</h1>
        <img
          src={category.image}
          alt={category.name}
          className="w-64 h-64 object-cover rounded-lg mb-4"
        />
        <p className="text-lg text-gray-700">
          Aqui você encontrará os melhores produtos da categoria &quot;
          {category.name}&quot;.
        </p>
        <button
          onClick={() => window.history.back()}
          className="mt-6 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
        >
          Voltar
        </button>
      </div>
    </div>
  );
};

export default ProductType;
