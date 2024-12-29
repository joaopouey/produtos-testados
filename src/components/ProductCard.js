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
    <div className="md:flex md:flex-cols-2 items-start text-left mb-4">
      <div className="relative grid grid-cols-1 sm:grid-cols-2 bg-[#002642] w-[355px] sm:w-[350px] sm:h-40 md:w-[406px] h-[548px] md:h-[169px] xl:w-[692px] xl:h-[285px] rounded-2xl mt-4">
        <div className="flex flex-col justify-start sm:justify-center xl:justify-start xl:mt-14 pl-0 sm:pl-7 pt-8 sm:pt-0 text-center">
          <p className="text-[#CCFF00] text-4xl sm:text-2xl font-['Montserrat'] font-bold">
            {rank}
          </p>
          <p className="text-white text-md font-['Montserrat'] font-medium xl:pt-1">
            Avaliação. {rating}
          </p>
          <p className="text-white text-xl xl:text-lg xl:pt-4 font-['Montserrat'] font-normal pt-14 sm:pt-8">
            {productName}
          </p>
        </div>
        <div className="absolute h-[281px] sm:h-40 md:h-[169px] xl:h-[285px] w-[355px] sm:w-40 md:w-[162px] xl:w-[300px] bottom-0 sm:right-0 rounded-b-2xl sm:rounded-r-2xl bg-white flex justify-center items-center">
          <img
            src={imageSrc}
            alt={productName}
            className="h-60 sm:h-32 xl:h-56"
          />
        </div>
      </div>
      <div className="w-[350px] font-[Montserrat] grid grid-cols-1 sm:grid-cols-2 pt-2 md:grid-cols-1 xl:pt-0 ml-4 md:ml-2 xl:ml-4 xl:text-xl xl:mt-[16px]">
        <div>
          <p className="font-medium text-md md:mb-2 md:mt-4 xl:mt-6">
            Características especiais:
          </p>
          <p className="text-xs">{features}</p>
        </div>
        <div className="flex flex-col items-center my-auto xl:mt-16">
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
