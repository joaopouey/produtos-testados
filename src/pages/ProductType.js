import React from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import ProductCard from '../components/ProductCard';
import productData from '../data/product_data'; // Importa os dados dos produtos

const ProductType = () => {
  // Captura o parâmetro "id" da URL
  const { typeId } = useParams();

  // Busca a categoria correspondente pelo id
  const category = productData.find((cat) => cat.id === parseInt(typeId, 10));

  // Verifica se a categoria existe
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

  // Renderiza os produtos dessa categoria
  return (
    <div>
      <Navbar />
      <div className="flex flex-col items-center min-h-screen bg-gray-100 ">
        <img
          src={`/capa-produtos/${category.category.toLowerCase()}.png`}
          alt={category.category}
          className="w-full h-136 object-cover"
        />
        <div>
          <h1>{category.category}</h1>
          {category.products.map((product, index) => (
            <ProductCard
              key={index}
              rank={product.rank}
              imageSrc={product.imageSrc}
              productName={product.productName}
              rating={product.rating}
              features={product.features}
              amazonLink={product.amazonLink}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductType;
