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
    <div className="grid xl:flex xl:flex-cols-2 items-start text-left mb-4">
      <div className="relative grid grid-cols-2 bg-[#002642] w-[350px] h-40 xl:w-[692px] xl:h-[285px] rounded-lg mt-4">
        <div className="flex flex-col justify-center xl:justify-start xl:mt-14 pl-7 text-center">
          <p className="text-[#CCFF00] text-2xl font-['Montserrat'] font-bold">
            {rank}
          </p>
          <p className="text-white text-md font-['Montserrat'] font-medium xl:pt-1">
            Avaliação. {rating}
          </p>
          <p className="text-white xl:text-lg xl:pt-4 font-['Montserrat'] font-normal mt-8">
            {productName}
          </p>
        </div>
        <div className="absolute h-40 xl:h-[285px] w-40 xl:w-[300px] right-0 rounded-r-lg bg-white flex justify-center items-center">
          <img src={imageSrc} alt={productName} className="h-32 xl:h-[230px]" />
        </div>
      </div>
      <div className="w-[350px] font-[Montserrat] grid pt-2 xl:pt-0 grid-cols-2 xl:grid-cols-1 xl:ml-4 xl:text-xl xl:mt-[16px]">
        <div>
          <p className="font-medium text-sm xl:mb-2 xl:mt-6">
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
