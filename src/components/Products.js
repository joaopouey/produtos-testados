import { default as React } from 'react';
import { useParams } from 'react-router-dom';
import categories from '../data/categories';
import ProductCard from './ProductCard';

const Products = () => {
  // Captura o parâmetro "id" da URL
  const { typeId } = useParams();

  // Busca a categoria correspondente pelo id
  const category = categories.find((cat) => cat.id === parseInt(typeId, 10));

  // Verifica se a categoria existe
  if (!category) {
    return (
      <div>
        <div className='flex flex-col items-center justify-center min-h-screen bg-gray-100'>
          <h1 className='text-3xl font-bold'>Categoria não encontrada</h1>
          <p className='text-lg text-gray-700'>Por favor, tente novamente.</p>
        </div>
      </div>
    );
  }

  // Renderiza os produtos dessa categoria
  return (
    <div>
      <div className='relative flex flex-col items-center min-h-screen bg-gray-100 '>
        <img
          src={`/capa-produtos/${category.category.toLowerCase()}.png`}
          alt={category.category}
          className='object-cover h-full w-full'
        />

        {/*<div className='absolute flex flex-col right-4 top-7 md:top-20 xl:top-24 text-[#F2F2F2] font-[Montserrat]'>
          <h1 className='font-medium text-xl md:text-2xl xl:text-4xl'>
            {category.name}
          </h1>
          <h2 className='text-xs md:text-sm xl:text-xl w-60 md:w-96 xl:w-[500px] pt-2'>
            {category.subtext}
          </h2>
        </div>
        */}

        {/* Div Body com Product Cards */}
        <div className='relative sm:w-screen sm:justify-items-center'>
          {category.products.map((product, index) => (
            <ProductCard
              key={index}
              rank={product.rank}
              imageSrc={product.imageSrc}
              productName={product.productName}
              rating={product.rating}
              features={product.features}
              features2={product.features2}
              features3={product.features3}
              amazonLink={product.amazonLink}
            />
          ))}
        </div>
      </div>
      <div dangerouslySetInnerHTML={{ __html: category.details }} />
    </div>
  );
};

export default Products;
