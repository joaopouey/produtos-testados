import { default as React } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Newsletter from '../components/Newsletter';
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
      <div className="relative flex flex-col items-center min-h-screen bg-gray-100 ">
        <img
          src={`/capa-produtos/${category.category.toLowerCase()}.png`}
          alt={category.category}
          className="w-full h-40 object-cover"
        />
        <div className="absolute flex flex-col right-4 top-7 text-[#F2F2F2] font-[Montserrat]">
          <h1 className="font-medium text-xl">{category.name}</h1>
          <h2 className="text-xs w-60 pt-2">{category.subtext}</h2>
        </div>
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
      <div dangerouslySetInnerHTML={{ __html: category.details }} />
      <Newsletter />
    </div>
  );
};

export default ProductType;
