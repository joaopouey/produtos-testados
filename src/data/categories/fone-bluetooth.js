const foneBluetooth = {
  id: 6,
  category: 'fone_bluetooth',
  name: 'FONES BLUETOOTH',
  image: '/categorias/fone-bluetooth.png',
  subtext:
    'Confira as dicas para escolher o melhor fone Bluetooth e veja os modelos mais bem avaliados da categoria no site Amazon.com',
  details: `
      <div class="font-[Montserrat] px-4 lg:w-[1024px] justify-self-center">
        <h2 class="text-xl lg:text-2xl font-medium my-8">Como escolher o melhor fone Bluetooth para sua rotina?</h2>
        <p class="text-sm lg:text-lg text-justify">Procurando por um fone Bluetooth que combine conforto e qualidade de som? Essa é uma excelente escolha para quem valoriza praticidade e liberdade de movimento. Mas com tantas opções no mercado, como escolher o modelo ideal?</p>
        <p class="text-sm lg:text-base font-medium mt-4">Aqui estão algumas dicas para te ajudar nessa decisão:</p>
  
        <h3 class="text-sm lg:text-xl font-medium mt-10">1. Qualidade de Som</h3>
        <p class="text-xs lg:text-base my-2">Verifique se o fone oferece uma boa resposta de frequência e tecnologias como drivers dinâmicos e codecs avançados (AAC, aptX, LDAC).</p>
  
        <h3 class="text-sm lg:text-xl font-medium mt-6">2. Cancelamento de Ruído</h3>
        <p class="text-xs lg:text-base my-2">Se você deseja imersão total, opte por modelos com cancelamento ativo de ruído (ANC), ideal para viagens ou ambientes barulhentos.</p>
  
        <h3 class="text-sm lg:text-xl font-medium mt-6">3. Conforto e Ajuste</h3>
        <p class="text-xs lg:text-base my-2">Escolha um design que se adapte ao seu estilo, como over-ear, on-ear ou in-ear, e verifique o conforto para longas horas de uso.</p>
  
        <h3 class="text-sm lg:text-xl font-medium mt-6">4. Autonomia da Bateria</h3>
        <p class="text-xs lg:text-base my-2">Modelos com pelo menos 20 horas de duração (ou mais, no caso de over-ear) são ideais para longas jornadas sem precisar recarregar.</p>
  
        <h3 class="text-sm lg:text-xl font-medium mt-6">5. Conectividade e Compatibilidade</h3>
        <p class="text-xs lg:text-base my-2">Certifique-se de que o fone é compatível com seus dispositivos e oferece Bluetooth 5.0 ou superior para maior estabilidade de conexão.</p>
  
        <h3 class="text-sm lg:text-xl font-medium mt-6">6. Recursos Adicionais</h3>
        <p class="text-xs lg:text-base my-2">Funções como controle por toque, integração com assistentes virtuais e resistência à água (IPX4 ou superior) podem ser diferenciais importantes.</p>
  
        <h3 class="text-sm lg:text-xl font-medium mt-6">7. Portabilidade</h3>
        <p class="text-xs lg:text-base my-2">Modelos compactos e com cases de carregamento são práticos para transporte e armazenamento.</p>
  
        <p class="text-md lg:text-xl lg font-semibold my-4">Com essas dicas, você pode escolher o fone Bluetooth ideal para aproveitar o melhor som com praticidade e estilo.</p>
      </div>
      `,
  products: [
    {
      rank: 'TOP 1',
      imageSrc: '/foto-produtos/fone-1.jpg',
      productName: 'Fone Bluetooth Sony WH-1000XM5',
      rating: '9,9',
      features:
        'Cancelamento ativo de ruído, até 30 horas de bateria, som de alta resolução com LDAC.',
      amazonLink: 'https://www.amazon.com',
    },
    {
      rank: 'TOP 2',
      imageSrc: '/foto-produtos/fone-2.jpg',
      productName: 'Fone Bluetooth Bose QuietComfort 45',
      rating: '9,8',
      features:
        'Cancelamento de ruído premium, modo ambiente, design ergonômico para conforto prolongado.',
      amazonLink: 'https://www.amazon.com',
    },
    {
      rank: 'TOP 3',
      imageSrc: '/foto-produtos/fone-3.jpg',
      productName: 'Fone Bluetooth Apple AirPods Pro (2ª Geração)',
      rating: '9,7',
      features:
        'Cancelamento ativo de ruído, equalização adaptativa, resistência à água e suor (IPX4).',
      amazonLink: 'https://www.amazon.com',
    },
  ],
};

export default foneBluetooth;
