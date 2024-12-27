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
    <div className="grid sm:flex sm:flex-cols-2 items-start text-left mb-4">
      <div className="relative grid grid-cols-2 bg-[#002642] w-[350px] h-40 sm:w-[692px] sm:h-[285px] rounded-lg mt-4">
        <div className="flex flex-col justify-center sm:justify-start sm:mt-14 pl-7 text-center">
          <p className="text-[#CCFF00] text-2xl font-['Montserrat'] font-bold">
            {rank}
          </p>
          <p className="text-white text-md font-['Montserrat'] font-medium sm:pt-1">
            Avaliação. {rating}
          </p>
          <p className="text-white text-sm sm:text-lg sm:pt-4 font-['Montserrat'] font-normal mt-8">
            {productName}
          </p>
        </div>
        <div className="absolute h-40 sm:h-[285px] w-40 sm:w-[300px] right-0 rounded-r-lg bg-white flex justify-center items-center">
          <img src={imageSrc} alt={productName} className="h-32 sm:h-[230px]" />
        </div>
      </div>
      <div className="w-[350px] font-[Montserrat] grid pt-2 sm:pt-0 grid-cols-2 sm:grid-cols-1 sm:ml-4 sm:text-sm sm:mt-[16px]">
        <div>
          <p className="font-medium text-md sm:mb-2 sm:mt-6">
            Características especiais:
          </p>
          <p className="text-sm sm:text-xs">{features}</p>
        </div>
        <div className="flex flex-col items-center my-auto sm:mt-16">
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
