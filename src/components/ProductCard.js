import React from 'react';

const ProductCard = ({
  rank,
  imageSrc,
  productName,
  rating,
  features,
  amazonLink,
}) => {
  return (
    <div className="relative grid grid-cols-1 mb-8 w-72">
      {/* Parte azul superior do card */}
      <div className="bg-[#002642] h-52 rounded-t-2xl mt-4">
        <div className="grid justify-start pt-8 text-center">
          <p className="text-[#CCFF00] text-3xl font-['Montserrat'] font-bold">
            {rank}
          </p>
          <p className="text-white text-md font-['Montserrat'] font-medium">
            Avaliação. {rating}
          </p>
          <p className="text-white text-xl font-['Montserrat'] font-normal pt-4">
            {productName}
          </p>
        </div>
      </div>

      {/* Parte inferior branca com foto do produto */}
      <div className="h-[281px] w-full rounded-b-2xl bg-white flex justify-center items-center">
        <img src={imageSrc} alt={productName} className="h-60" />
      </div>

      <div className="w-72 font-[Montserrat] grid grid-cols-1 pt-5">
        <div>
          <p className="font-medium text-sm pl-4">Características especiais:</p>
          <p className="text-xs pt-3 pl-4">{features}</p>
        </div>
        <div className="flex flex-col items-center my-auto pt-4">
          <a href={amazonLink} target="_blank" rel="noopener noreferrer">
            <button className="w-[148px] h-10 bg-[#002642] rounded-[20px] px-[23px] py-2.5 mt-4 shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] items-center inline-flex">
              <div className="text-[#ccff00] text-base font-medium font-['Roboto'] underline">
                Compre agora
              </div>
            </button>
          </a>
          <p className="text-xs">em Amazon.com</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
