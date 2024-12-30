// src/data/productData.js
const productData = [
  // Robôs Aspiradores
  {
    id: 1,
    category: 'robo_aspirador',
    name: 'ROBÔ ASPIRADOR',
    image: '/categorias/robo-aspirador.png',
    subtext:
      'Confira as dicas para adquirir o melhor robô aspirador e ainda uma lista com os produtos mais bem avaliados da categoria no site Amazon.com',
    products: [
      {
        rank: 'TOP 1',
        imageSrc: '/foto-produtos/robo-1-xiaomi-mop2.jpg',
        productName: 'Robô aspirador de pó XIAOMI Mop2',
        rating: '9,9',
        features:
          'Limites virtuais, limpeza personalizada avançada, mapeamento e navegação a laser de precisão, evita obstáculos.',
        amazonLink: 'https://www.amazon.com',
      },
      {
        rank: 'TOP 2',
        imageSrc: '/foto-produtos/robo-1-xiaomi-mop2.jpg',
        productName: 'Robô aspirador de pó XIAOMI Mop3',
        rating: '9,8',
        features:
          'Limites virtuais, mapeamento inteligente, navegação otimizada.',
        amazonLink: 'https://www.amazon.com',
      },
      {
        rank: 'TOP 3',
        imageSrc: '/foto-produtos/robo-1-xiaomi-mop2.jpg',
        productName: 'Robô aspirador de pó XIAOMI Mop1',
        rating: '9,7',
        features:
          'Sistema de limpeza profunda, design compacto, navegação precisa.',
        amazonLink: 'https://www.amazon.com',
      },
    ],
  },

  // Fone Bluetooth
  {
    id: 2,
    category: 'fone_bluetooth',
    name: 'FONES BLUETOOTH',
    image: '/categorias/fone-bluetooth.png',
    subtext:
      'Confira as dicas para adquirir o melhor fone bluetooth e ainda uma lista com os produtos mais bem avaliados da categoria no site Amazon.com',
    products: [
      {
        rank: 'TOP 1',
        imageSrc: '/foto-produtos/fone-1-bluetooth.jpg',
        productName: 'Fone Bluetooth Modelo 1',
        rating: '9,5',
        features:
          'Som de alta qualidade, design confortável, bateria de longa duração.',
        amazonLink: 'https://www.amazon.com',
      },
      {
        rank: 'TOP 2',
        imageSrc: '/foto-produtos/fone-2-bluetooth.jpg',
        productName: 'Fone Bluetooth Modelo 2',
        rating: '9,3',
        features:
          'Cancelamento de ruído, microfone integrado, resistente à água.',
        amazonLink: 'https://www.amazon.com',
      },
      {
        rank: 'TOP 3',
        imageSrc: '/foto-produtos/fone-2-bluetooth.jpg',
        productName: 'Fone Bluetooth Modelo 2',
        rating: '9,3',
        features:
          'Cancelamento de ruído, microfone integrado, resistente à água.',
        amazonLink: 'https://www.amazon.com',
      },
    ],
  },
];

export default productData;
