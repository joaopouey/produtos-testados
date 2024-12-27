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
    <div className="flex flex-col items-center text-left mb-4">
      <div className="relative grid grid-cols-2 bg-[#002642] w-[350px] h-40 rounded-lg mt-4">
        <div className="flex flex-col justify-center pl-7 text-center">
          <p className="text-[#CCFF00] text-2xl font-['Montserrat'] font-bold">
            {rank}
          </p>
          <p className="text-white text-md font-['Montserrat'] font-medium">
            Avaliação. {rating}
          </p>
          <p className="text-white text-sm font-['Montserrat'] font-normal mt-4">
            {productName}
          </p>
        </div>
        <div className="absolute h-40 w-36 right-0 rounded-r-lg bg-white flex justify-center items-center">
          <img src={imageSrc} alt={productName} className="h-32 right-0" />
        </div>
      </div>
      <div className="w-[350px] font-[Montserrat] pt-2 grid grid-cols-2">
        <div>
          <p className="font-medium text-md">Características especiais:</p>
          <p className="text-sm">{features}</p>
        </div>
        <div className="flex flex-col items-center my-auto">
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
