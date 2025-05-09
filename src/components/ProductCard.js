import React from 'react';

const ProductCard = ({
  rank,
  imageSrc,
  productName,
  rating,
  features,
  features2,
  features3,
  amazonLink,
}) => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mb-6 mt-8 w-72 sm:w-[529px] lg:w-[1024px]'>
      {/* Parte azul superior do card */}
      <div className='bg-[#002642] h-52 sm:h-[218px] sm:w-[300px] lg:w-[392px] lg:h-[285px] rounded-t-2xl sm:rounded-r-none sm:rounded-l-2xl mt-4'>
        <div className='grid grid-cols-1 justify-items-center pt-8 lg:pt-16'>
          <p className="text-[#CCFF00] text-3xl text-center font-['Montserrat'] font-bold">
            {rank}
          </p>
          <p className="text-white text-md text-center font-['Montserrat'] font-medium">
            Avaliação. {rating}
          </p>
          <p className="text-white text-xl text-center font-['Montserrat'] font-normal pt-6 sm:w-72">
            {productName}
          </p>
        </div>
      </div>

      {/* Parte inferior/lateral branca com foto do produto */}
      <div className='h-[281px] sm:h-[218px] lg:h-[285px] sm:w-[229px] lg:w-[300px] sm:ml-9 lg:ml-[52px] rounded-b-2xl sm:rounded-l-none sm:rounded-r-2xl sm:left-0 sm:mt-4 bg-white flex justify-center items-center'>
        <img
          src={imageSrc}
          alt={productName}
          className='h-60 sm:h-40 lg:h-60'
        />
      </div>

      {/* Parte com Características e o botão de comprar */}
      <div className='w-72 sm:w-[529px] lg:w-96 font-[Montserrat] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 pt-5 lg:ml-4 lg:mt-6'>
        <div className='sm:w-[300px]'>
          <p className='font-bold text-sm pl-4'>
            Principais qualidades destacadas pelos clientes:
          </p>
          <p className='text-xs pt-3 pl-4'>{features}</p>
          <p className='text-xs pt-3 pl-4'>{features2}</p>
          <p className='text-xs pt-3 pl-4'>{features3}</p>
        </div>
        <div className='flex flex-col items-center my-auto pt-4 sm:pt-0 sm:pl-8 lg:pb-14'>
          <a href={amazonLink} target='_blank' rel='noopener noreferrer'>
            <button className='w-[148px] h-10 bg-[#002642] rounded-[20px] px-[23px] py-2.5 mt-4 shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] items-center inline-flex'>
              <div className="text-[#ccff00] text-base font-medium font-['Roboto'] underline">
                Compre agora
              </div>
            </button>
          </a>
          <p className='text-xs'>em Amazon.com</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
