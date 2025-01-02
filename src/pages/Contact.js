import React from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const Contact = () => {
  return (
    <div>
      <Navbar />

      <div className="container mx-auto py-10 px-4 text-center">
        <div className="flex justify-center mb-6">
          <img
            src="/logo-about-w-border.png" // Substitua com o caminho real do logo, se necessário
            alt="Logo Produtos Testados"
            className="w-40 h-40 md:w-56 md:h-56"
          />
        </div>

        <h1 className="text-3xl font-bold mb-4">Contato</h1>
        <p className="text-gray-700 mb-8">
          Você tem alguma dúvida, comentário ou sugestão? <br />
          Nossa equipe terá o maior prazer em atender você!
        </p>

        <form className="max-w-md mx-auto">
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-left text-gray-700 font-medium"
            >
              Nome*
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full border border-gray-300 rounded p-2"
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="surname"
              className="block text-left text-gray-700 font-medium"
            >
              Sobrenome
            </label>
            <input
              type="text"
              id="surname"
              name="surname"
              className="w-full border border-gray-300 rounded p-2"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-left text-gray-700 font-medium"
            >
              E-mail*
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full border border-gray-300 rounded p-2"
              required
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="message"
              className="block text-left text-gray-700 font-medium"
            >
              Mensagem*
            </label>
            <textarea
              id="message"
              name="message"
              className="w-full border border-gray-300 rounded p-2 h-32"
              required
            />
          </div>

          <button
            type="submit"
            className="bg-blue-900 text-white font-bold py-2 px-6 rounded-full hover:bg-blue-800 transition duration-300"
          >
            Enviar
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
