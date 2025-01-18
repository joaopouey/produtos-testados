import React from 'react';
import { Link } from 'react-router-dom';
import ImageCarousel from '../components/Carousel';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Newsletter from '../components/Newsletter';
import categories from '../data/categories';

const Categories = () => {
  return (
    <div>
      <Navbar />
      <ImageCarousel />
      <div className='flex flex-col px-[2%] sm:px-[20%] pb-14'>
        <h1 className="text-md sm:text-2xl text-center my-6 font-normal font-['Montserrat'] underline tracking-tight">
          Categorias: encontre os produtos mais bem avaliados aqui
        </h1>

        <div className='bg-[#002642] rounded-lg p-6'>
          <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
            {categories.map((category) => (
              <div key={category.id} className='text-center text-white'>
                <Link to={`/produtos/${category.id}`}>
                  <img
                    src={category.image}
                    alt={category.name}
                    className='object-cover rounded-lg '
                  />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Categories;
